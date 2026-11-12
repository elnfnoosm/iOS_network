"""一次性旧文件清理任务。

在 GitHub Actions 里运行：重新核对每个旧文件的 git 最后修改时间，
只删除「属于旧目录」且「超过 STALE_DAYS 天没更新」的文件，并生成完整报告。

安全边界（写死在代码里，不依赖外部参数）：
  - 可删路径只有 ALLOWED 里列出的几个旧目录 / 旧文件
  - rule/、.github/、tools/、五个平台的 Config 与插件目录、各主 README 一律不进入
  - 删除前生成 LEGACY_CLEANUP_REPORT.md，含完整路径清单与恢复方法
"""

import os
import re
import sys
import json
import subprocess
import datetime
from collections import Counter, defaultdict

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
CONFIG_PATH = os.path.join(ROOT, "sources.json")
REPORT_PATH = os.path.join(ROOT, "LEGACY_CLEANUP_REPORT.md")
DEAD_LINKS_PATH = os.path.join(ROOT, "DEAD_LINKS.md")

STALE_DAYS = 183  # 半年

# 只允许删除这些历史路径；大小写敏感，正好避开 Stash/Rewrite 与 ShadowRocket/Module 等新目录
ALLOWED = (
    "QuantumultX/Rewrite/",
    "ShadowRocket/module/",
    "ShadowRocket/scripts/",
    "Loon/rewrite/",
    "Stash/config-elnf.yaml",
)

FORBIDDEN_PREFIXES = ("rule/", ".github/", "tools/")

# 被删内容 -> 新体系里的替代
REPLACEMENTS = [
    ("QuantumultX/Rewrite/（旧重写，522 个）",
     "QuantumultX/Plugin/（Script-Hub 重写 1 个 + limbopro 去广告 4 个 + deezertidal 重写 277 个全量）"),
    ("ShadowRocket/module/（旧模块，35 个）",
     "ShadowRocket/Module/（Script-Hub 模块 + limbopro 去广告 2 个 + GMOogway 分流 3 个）"),
    ("ShadowRocket/scripts/（旧脚本，21 个）",
     "Script-Hub / Sub-Store 转换模块；脚本本体请到仍活跃的上游仓库获取"),
    ("Loon/rewrite/（旧重写，1 个）",
     "Loon/Plugin/（Script-Hub Loon 插件）与 Loon/Config/（精简配置模板）"),
    ("Stash/config-elnf.yaml（旧配置，1 个）",
     "Stash/Config/（配置解析片段）与 Stash/Rewrite/（Script-Hub 覆写）"),
]

ACTIVE_UPSTREAMS = [
    ("89996462/Quantumult-X", "https://github.com/89996462/Quantumult-X", "旧 QX 重写引用的 ycdz 脚本源，仍可访问"),
    ("Alex0510/Eric", "https://github.com/Alex0510/Eric", "allinone@eric0510 合集引用的脚本源，仍可访问"),
    ("NobyDa/Script", "https://github.com/NobyDa/Script", "BoxJs / ShadowRocket 脚本，仍在维护"),
    ("app2smile/rules", "https://github.com/app2smile/rules", "QX 模块与规则，仍在维护"),
    ("Script-Hub-Org/Script-Hub", "https://github.com/Script-Hub-Org/Script-Hub", "五种平台原生格式转换模块"),
    ("sub-store-org/Sub-Store", "https://github.com/sub-store-org/Sub-Store", "订阅转换与格式转换"),
]


def log(message):
    print(message, flush=True)


def protected_dirs():
    """从 sources.json 读出五个平台的新目录，任何情况下都不删。"""
    with open(CONFIG_PATH, "r", encoding="utf-8") as handle:
        cfg = json.load(handle)
    protected = {"rule", ".github", "tools"}
    for platform, meta in cfg["platforms"].items():
        protected.add(platform + "/" + meta["config"])
        protected.add(platform + "/" + meta["plugins"])
    return cfg, protected


def git_last_commits():
    """返回 {仓库相对路径: 最后一次修改时间(datetime)}，需要 checkout fetch-depth: 0。"""
    try:
        out = subprocess.check_output(
            ["git", "-C", ROOT, "log", "--no-renames",
             "--format=@@@%aI", "--name-only"],
            text=True, errors="replace",
        )
    except Exception as error:
        log("ERROR 无法读取 git 历史：%s" % error)
        sys.exit(1)
    result = {}
    current = None
    for line in out.splitlines():
        if line.startswith("@@@"):
            current = line[3:].strip()
        elif line.strip() and current:
            path = line.strip()
            if path not in result:
                try:
                    result[path] = datetime.datetime.fromisoformat(
                        current.replace("Z", "+00:00"))
                except ValueError:
                    pass
    return result


def in_allowed(rel):
    return any(rel == p.rstrip("/") or rel.startswith(p) for p in ALLOWED)


def tracked_paths():
    """用 git 索引拿到完整路径清单。

    索引严格区分大小写，比直接遍历磁盘更可靠：Windows / macOS 上
    ShadowRocket/module（旧）与 ShadowRocket/Module（新）会被磁盘合并，
    但索引里仍是两条独立路径。
    """
    out = subprocess.check_output(
        ["git", "-C", ROOT, "ls-files", "-z"], text=True, errors="replace")
    return [p for p in out.split("\0") if p]


def protected_normcase(protected, paths):
    """保护文件的物理路径集合（大小写归一），防止大小写不敏感的磁盘误删。"""
    result = set()
    for rel in paths:
        parts = rel.split("/")
        top = parts[0]
        second = "/".join(parts[:2])
        guarded = (
            top in ("rule", ".github", "tools")
            or second in protected
            or len(parts) == 1
            or (len(parts) == 2 and parts[1].lower() == "readme.md")
        )
        if guarded:
            result.add(os.path.normcase(os.path.abspath(os.path.join(ROOT, *parts))))
    return result


def candidates(protected, paths):
    """只收集允许路径下的真实文件，并做保护断言。"""
    found = []
    for rel in paths:
        if not in_allowed(rel):
            continue
        top = rel.split("/")[0]
        second = "/".join(rel.split("/")[:2])
        assert top not in ("rule", ".github", "tools"), "保护目录被误纳入：" + rel
        assert not rel.startswith("rule/"), "rule/ 永不删除：" + rel
        assert second not in protected, "新目录被误纳入：" + rel
        assert not (rel.count("/") == 1 and rel.endswith("README.md")), rel
        if not os.path.isfile(os.path.join(ROOT, *rel.split("/"))):
            continue
        found.append(rel)
    return sorted(found)


def build_report(cfg, checked_at, removed, kept, conflicts, sizes, last_map):
    total_bytes = sum(sizes.get(p, 0) for p in removed)
    by_dir = Counter()
    for rel in removed:
        parts = rel.split("/")
        by_dir["/".join(parts[:2]) if len(parts) > 2 else "(根级文件)"] += 1

    lines = [
        "# 旧文件清理报告",
        "",
        "- 执行时间：%s" % checked_at,
        "- 判定规则：属于历史旧目录，且 **超过 %d 天（半年）没有更新**" % STALE_DAYS,
        "- 本次删除：**%d 个文件**，合计 %.2f MB" % (len(removed), total_bytes / 1024 / 1024),
        "- 保留（未超期）：%d 个" % len(kept),
        "- 路径冲突跳过：%d 个（仅在大小写不敏感的磁盘上可能出现，GitHub 服务器上为 0）" % len(conflicts),
        "",
        "> **三大规则 list 与整个 `rule/` 目录没有、也永远不会进入本任务的处理范围。**",
        "> 五个平台的 `Config/` 与各自命名的插件目录、各主 README、状态页全部保留。",
        "",
        "## 一、被删内容去哪找替代",
        "",
        "| 原目录 / 文件 | 本仓库内的替代 |",
        "| --- | --- |",
    ]
    for old, new in REPLACEMENTS:
        lines.append("| `%s` | %s |" % (old, new))
    lines += [
        "",
        "被删的旧内容里，约 91% 的远程引用在清理前仍能打开，",
        "但文件本体已经 3 年以上没有维护。下面这些上游仓库目前仍然活跃，",
        "需要某个具体脚本时可直接到原仓库获取（本仓库不再镜像第三方脚本）：",
        "",
    ]
    for name, url, note in ACTIVE_UPSTREAMS:
        lines.append("- [%s](%s) — %s" % (name, url, note))
    lines += [
        "",
        "日常使用请直接看五个平台主文件夹里的 `README.md`，",
        "里面的配置链接和插件清单每天自动更新。",
        "",
        "## 二、怎么恢复（删除不是永久的）",
        "",
        "GitHub 的提交历史会完整保留这些文件，随时可以找回：",
        "",
        "1. 打开仓库 → 点 **Commits**（提交历史）→ 找到本次清理**之前**的那条提交。",
        "2. 点右侧 **Browse files**，就能看到删除前的完整目录，逐个下载即可。",
        "3. 会用命令行的，在克隆下来的仓库里执行：",
        "   `git checkout <清理前的提交号> -- QuantumultX/Rewrite`",
        "   （把路径换成想恢复的目录即可）。",
        "",
        "**注意**：删除后，指向这些旧文件的订阅链接会立即失效。",
        "如果你或别人还在用旧链接，请改成五个平台主 README 里的新链接。",
        "",
        "## 三、删除统计",
        "",
        "| 目录 | 删除文件数 |",
        "| --- | ---: |",
    ]
    for name, count in by_dir.most_common():
        lines.append("| `%s` | %d |" % (name, count))
    lines += [
        "",
        "## 四、完整删除清单（%d 个）" % len(removed),
        "",
        "每行格式：`路径` — 最后修改日期 — 大小。",
        "",
    ]
    grouped = defaultdict(list)
    for rel in removed:
        parts = rel.split("/")
        grouped["/".join(parts[:2]) if len(parts) > 2 else "(根级文件)"].append(rel)
    for name in sorted(grouped):
        lines += ["### %s（%d 个）" % (name, len(grouped[name])), ""]
        for rel in sorted(grouped[name]):
            moment = last_map.get(rel)
            date_text = moment.strftime("%Y-%m-%d") if moment else "未知"
            lines.append("- `%s` — %s — %d B" % (rel, date_text, sizes.get(rel, 0)))
        lines.append("")
    if kept or conflicts:
        lines += ["## 五、未删除的文件", ""]
        for rel in kept:
            lines.append("- `%s`（未超过半年）" % rel)
        for rel in conflicts:
            lines.append("- `%s`（与保护文件路径重合，为避免误删而跳过）" % rel)
        lines.append("")
    lines += [
        "",
        "---",
        "",
        "本报告由 `tools/cleanup_legacy.py` 生成，属于一次性任务；",
        "之后每天运行的是 `Source_Sync`（同步配置与插件），不会再删除文件。",
        "",
    ]
    return "\n".join(lines)


def main():
    cfg, protected = protected_dirs()
    checked_at = datetime.datetime.now(datetime.timezone.utc).strftime(
        "%Y-%m-%d %H:%M:%S UTC")
    now = datetime.datetime.now(datetime.timezone.utc)

    # 硬断言：允许列表里绝不能出现被保护的顶层目录
    for prefix in ALLOWED:
        assert not prefix.startswith(FORBIDDEN_PREFIXES), prefix

    last_map = git_last_commits()
    paths = tracked_paths()
    prot_norm = protected_normcase(protected, paths)
    targets = candidates(protected, paths)
    log("允许路径下找到 %d 个候选文件，git 历史覆盖 %d 个路径" % (len(targets), len(last_map)))

    removed, kept, conflicts, sizes = [], [], [], {}
    for rel in targets:
        full = os.path.join(ROOT, *rel.split("/"))
        if not os.path.isfile(full):
            continue
        if os.path.normcase(os.path.abspath(full)) in prot_norm:
            conflicts.append(rel)
            log("SKIP 与保护文件物理路径重合（大小写不敏感磁盘）：%s" % rel)
            continue
        try:
            sizes[rel] = os.path.getsize(full)
        except OSError:
            sizes[rel] = 0
        moment = last_map.get(rel)
        if moment is None:
            # 查不到时间就不删，避免误判
            kept.append(rel)
            log("SKIP 无提交时间记录：%s" % rel)
            continue
        age = (now - moment).days
        if age <= STALE_DAYS:
            kept.append(rel)
            log("KEEP 近半年内有更新（%d 天）：%s" % (age, rel))
            continue
        os.remove(full)
        removed.append(rel)

    log("删除 %d 个文件，保留 %d 个，路径冲突跳过 %d 个" % (
        len(removed), len(kept), len(conflicts)))

    # 清掉留下的空目录（Git 本来也不跟踪空目录，只是让工作区干净）
    for prefix in ALLOWED:
        path = os.path.join(ROOT, *prefix.rstrip("/").split("/"))
        if os.path.isdir(path) and not os.listdir(path):
            os.rmdir(path)

    report = build_report(cfg, checked_at, removed, kept, conflicts, sizes, last_map)
    with open(REPORT_PATH, "w", encoding="utf-8") as handle:
        handle.write(report)

    # 体检报告同步改成「已清理」提示，避免旧内容误导使用者
    with open(DEAD_LINKS_PATH, "w", encoding="utf-8") as handle:
        handle.write(
            "# 老文件失效体检报告\n\n"
            "- 更新时间：%s\n\n" % checked_at +
            "旧文件已按「超过半年未更新」规则全量清理完毕，本次清理删除 %d 个文件。\n\n" % len(removed) +
            "删除清单、替代来源与恢复方法见 [LEGACY_CLEANUP_REPORT.md]"
            "(https://github.com/elnfnoosm/iOS_network/blob/main/LEGACY_CLEANUP_REPORT.md)。\n\n"
            "`rule/` 与三大规则 list 未参与清理，保持原样。\n"
        )

    summary_path = os.environ.get("GITHUB_STEP_SUMMARY")
    if summary_path:
        with open(summary_path, "a", encoding="utf-8") as handle:
            handle.write(report[:3000] + "\n")

    log("报告已写入 LEGACY_CLEANUP_REPORT.md")


if __name__ == "__main__":
    main()
