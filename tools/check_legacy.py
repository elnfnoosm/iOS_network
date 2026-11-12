import os
import re
import json
import hashlib
import datetime
from collections import defaultdict
from concurrent.futures import ThreadPoolExecutor
import requests

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
REPORT_PATH = os.path.join(ROOT, "DEAD_LINKS.md")
MAX_URLS = 150

URL_PATTERN = re.compile(r"https?://[^\s\)\]\"'<>]+")
RESOURCE_PATTERN = re.compile(r"\.(js|conf|list|plugin|sgmodule|module|stoverride|txt|json)(\?|$)", re.I)
REMOTE_HOSTS = ("raw.githubusercontent.com", "gist.githubusercontent.com", "gitlab.com", "/raw/")
HEADERS = {"User-Agent": "iOS_network-legacy-check"}


def platform_dirs():
    with open(os.path.join(ROOT, "sources.json"), "r", encoding="utf-8") as handle:
        cfg = json.load(handle)
    return {name: {meta["config"], meta["plugins"]} for name, meta in cfg["platforms"].items()}


def legacy_files():
    found = []
    for platform, excluded in platform_dirs().items():
        base = os.path.join(ROOT, platform)
        if not os.path.isdir(base):
            continue
        for dirpath, dirnames, filenames in os.walk(base):
            if os.path.relpath(dirpath, base) == ".":
                dirnames[:] = [name for name in dirnames if name not in excluded]
            for name in filenames:
                if name.startswith("."):
                    continue
                # 平台主 README 由同步任务自动生成，不属于历史旧文件
                if name.lower() == "readme.md" and os.path.relpath(dirpath, base) == ".":
                    continue
                found.append(os.path.join(dirpath, name))
    return sorted(found)


def is_remote_resource(url):
    lowered = url.lower()
    if any(host in lowered for host in REMOTE_HOSTS):
        return True
    return RESOURCE_PATTERN.search(lowered) is not None


def extract_urls(path):
    try:
        with open(path, "r", encoding="utf-8", errors="replace") as handle:
            text = handle.read()
    except Exception:
        return []
    urls = set()
    for raw in URL_PATTERN.findall(text):
        url = raw.replace("\\", "").rstrip(".,;:)")
        if len(url) < 12 or not is_remote_resource(url):
            continue
        urls.add(url)
    return sorted(urls)


def check_url(url):
    try:
        response = requests.get(url, headers=HEADERS, timeout=10, stream=True)
        code = response.status_code
        response.close()
        return url, code
    except Exception as error:
        return url, "无法确认（%s）" % str(error)[:40]


def duplicate_groups(paths):
    by_hash = defaultdict(list)
    for path in paths:
        try:
            with open(path, "rb") as handle:
                digest = hashlib.sha256(handle.read()).hexdigest()
            by_hash[digest].append(os.path.relpath(path, ROOT).replace("\\", "/"))
        except Exception:
            continue
    return sorted([group for group in by_hash.values() if len(group) > 1], key=lambda item: -len(item))


def build_report(checked_at, files, dead, unknown, checked_count, url_count, duplicates):
    lines = [
        "# 老文件失效体检报告",
        "",
        "- 检查时间：%s" % checked_at,
        "- 扫描老文件：%d 个（五个平台主目录，排除各自新设的配置与插件目录）" % len(files),
        "- 发现远程引用：%d 个，实际探测 %d 个" % (url_count, checked_count),
        "- 确认失效：%d 个，无法确认：%d 个" % (len(dead), len(unknown)),
        "",
        "> **本报告只标记，不删除、不修改任何文件。**",
        "> `rule/` 与三大规则 list 不在扫描范围内，永远不动。",
        "> 探测在 GitHub 服务器上执行，比本地网络判断可靠。",
        "",
        "## 一、确认失效的远程引用（第一批清理候选）",
        "",
    ]
    if dead:
        lines += ["| 文件 | 远程地址 | 状态 |", "| --- | --- | --- |"]
        for path, url, code in dead[:80]:
            lines.append("| `%s` | %s | %s |" % (path, url[:110], code))
    else:
        lines.append("本次没有发现确认失效的远程引用。")
    lines += ["", "## 二、无法确认（超时或网络问题，先不要删）", ""]
    if unknown:
        for path, url, note in unknown[:30]:
            lines.append("- `%s` → %s（%s）" % (path, url[:100], note))
    else:
        lines.append("无。")
    lines += [
        "",
        "## 三、内容完全重复的文件组（零风险清理候选）",
        "",
        "同一组里的文件内容一模一样，删掉多余的副本不会影响功能。",
        "",
    ]
    if duplicates:
        for index, group in enumerate(duplicates[:30], start=1):
            lines.append("**第 %d 组（%d 个）**" % (index, len(group)))
            for path in group:
                lines.append("- `%s`" % path)
            lines.append("")
    else:
        lines.append("本次没有发现内容完全重复的文件。")
    lines += [
        "",
        "## 四、清理规则",
        "",
        "1. 先看第三节的重复文件组，这是最安全的第一批。",
        "2. 再看第一节的失效引用，确认对应脚本确实没人用了再处理。",
        "3. 第二节的「无法确认」一律先留着，等下次体检结果稳定再说。",
        "4. 每批最多处理 10 个文件，处理前先列出完整路径清单并逐条确认。",
        "",
    ]
    return "\n".join(lines)


def main():
    checked_at = datetime.datetime.now(datetime.timezone.utc).strftime("%Y-%m-%d %H:%M:%S UTC")
    files = legacy_files()
    if not files:
        note = (
            "# 老文件失效体检报告\n\n"
            "- 检查时间：%s\n\n" % checked_at +
            "历史旧文件已按「超过半年未更新」规则全量清理完毕，本次没有需要扫描的旧文件。\n\n"
            "删除清单、替代来源与恢复方法见 "
            "[LEGACY_CLEANUP_REPORT.md](https://github.com/elnfnoosm/iOS_network/blob/main/LEGACY_CLEANUP_REPORT.md)。\n\n"
            "`rule/` 与三大规则 list 未参与清理，保持原样。\n"
        )
        with open(REPORT_PATH, "w", encoding="utf-8") as handle:
            handle.write(note)
        print("旧文件已清理完毕，无需体检", flush=True)
        return
    url_to_files = defaultdict(list)
    for path in files:
        rel = os.path.relpath(path, ROOT).replace("\\", "/")
        for url in extract_urls(path):
            url_to_files[url].append(rel)

    all_urls = sorted(url_to_files.keys())
    picked = all_urls[:MAX_URLS]
    print("扫描 %d 个老文件，发现 %d 个远程引用，探测前 %d 个" % (len(files), len(all_urls), len(picked)), flush=True)

    dead = []
    unknown = []
    with ThreadPoolExecutor(max_workers=12) as pool:
        for url, result in pool.map(check_url, picked):
            for rel in url_to_files[url]:
                if isinstance(result, int) and result >= 400:
                    dead.append((rel, url, result))
                elif not isinstance(result, int):
                    unknown.append((rel, url, result))

    duplicates = duplicate_groups(files)
    report = build_report(checked_at, files, dead, unknown, len(picked), len(all_urls), duplicates)
    with open(REPORT_PATH, "w", encoding="utf-8") as handle:
        handle.write(report)

    summary_path = os.environ.get("GITHUB_STEP_SUMMARY")
    if summary_path:
        with open(summary_path, "a", encoding="utf-8") as handle:
            handle.write("\n" + report + "\n")

    print("体检完成：失效 %d，无法确认 %d，重复文件组 %d" % (len(dead), len(unknown), len(duplicates)), flush=True)
    print("报告已写入 DEAD_LINKS.md（只标记，未删除任何文件）", flush=True)


if __name__ == "__main__":
    main()
