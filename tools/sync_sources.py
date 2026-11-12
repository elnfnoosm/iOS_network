import os
import sys
import json
import time
import datetime
import requests

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
CONFIG_PATH = os.path.join(ROOT, "sources.json")
STATUS_PATH = os.path.join(ROOT, "SOURCES_STATUS.md")
META_PATH = os.path.join(ROOT, ".sync_meta.json")

RAW = "https://raw.githubusercontent.com"
API = "https://api.github.com"
HEADERS = {"User-Agent": "iOS_network-source-sync"}
TOKEN = os.environ.get("GH_TOKEN") or os.environ.get("GITHUB_TOKEN")


def log(message):
    print(message, flush=True)


def api_headers():
    headers = dict(HEADERS)
    headers["Accept"] = "application/vnd.github+json"
    if TOKEN:
        headers["Authorization"] = "Bearer " + TOKEN
    return headers


def fetch_bytes(url):
    last_error = None
    for attempt in range(3):
        try:
            response = requests.get(url, headers=HEADERS, timeout=20)
            response.raise_for_status()
            data = response.content
            if len(data) < 20:
                raise ValueError("内容异常小（%d 字节）" % len(data))
            head = data[:400].decode("utf-8", errors="replace").lower()
            if "<html" in head or "<!doctype" in head:
                raise ValueError("返回的是网页而不是文件")
            return data
        except Exception as error:
            last_error = error
            time.sleep(1)
    raise RuntimeError("下载失败（重试 3 次）：%s -> %s" % (url, last_error))


def api_get(path):
    response = requests.get(API + path, headers=api_headers(), timeout=20)
    response.raise_for_status()
    return response.json()


_commit_cache = {}


def upstream_last_commit(repo, branch):
    key = repo + "@" + branch
    if key in _commit_cache:
        return _commit_cache[key]
    try:
        data = api_get("/repos/%s/commits?sha=%s&per_page=1" % (repo, branch))
        date_string = data[0]["commit"]["author"]["date"]
        moment = datetime.datetime.strptime(date_string, "%Y-%m-%dT%H:%M:%SZ")
        moment = moment.replace(tzinfo=datetime.timezone.utc)
        days = (datetime.datetime.now(datetime.timezone.utc) - moment).days
        result = (date_string, days)
    except Exception as error:
        log("WARN 查询上游提交时间失败 %s: %s" % (key, error))
        result = ("未知（查询失败）", -1)
    _commit_cache[key] = result
    return result


def list_dir_files(source):
    repo = source["repo"]
    branch = source["branch"]
    path = source.get("dir", "").strip("/")
    suffix = "/" + path if path else ""
    data = api_get("/repos/%s/contents%s?ref=%s" % (repo, suffix, branch))
    extensions = tuple(item.lower() for item in source.get("extensions", []))
    picked = []
    for item in data:
        if item.get("type") != "file":
            continue
        name = item["name"]
        if extensions and not name.lower().endswith(extensions):
            continue
        picked.append(path + "/" + name if path else name)
    picked.sort()
    return picked[:int(source.get("limit", 30))]


def write_file(rel_path, data, mode):
    target = os.path.join(ROOT, rel_path)
    os.makedirs(os.path.dirname(target), exist_ok=True)
    if mode == "once" and os.path.exists(target):
        return "kept"
    if os.path.exists(target):
        with open(target, "rb") as handle:
            if handle.read() == data:
                return "same"
    with open(target, "wb") as handle:
        handle.write(data)
    return "updated"


def reference_lines(cfg, platform):
    lines = []
    for item in cfg.get("references", {}).get(platform, []):
        lines.append("- [%s](%s)" % (item["name"], item["url"]))
    for item in cfg.get("references", {}).get("all", []):
        lines.append("- [%s](%s)" % (item["name"], item["url"]))
    return lines


def config_readme(cfg, platform, meta):
    links = cfg["rule_links"]
    lines = [
        "# %s 配置" % platform,
        "",
        "这个目录放 %s 的配置文件（%s）。" % (platform, meta["config_ext"]),
        "",
        "**同步任务只在文件不存在时补一份模板，不会覆盖你自己改过的配置。**",
        "想恢复成上游模板，把这里的配置文件删掉，下次自动任务会重新补一份。",
        "",
        "## 三大基础规则（每日更新，本任务不会改动）",
        "",
        "- 国内直连：%s" % links["China"],
        "- 国际加速：%s" % links["Proxy"],
        "- 广告拦截：%s" % links["Reject"],
        "",
        "这三条链接由仓库原有的 `rule/` 目录提供，很多人正在使用，",
        "配置与插件的同步任务永远不会写 `rule/`。",
        "",
        "## 用法",
        "",
        "1. 导入本目录里的配置模板（如果有的话）。",
        "2. 填入你自己的节点 / 订阅信息，不要直接使用别人的节点。",
        "3. 在分流规则里引用上面三条链接。",
        "",
        "## 更多参考",
        "",
    ]
    lines += reference_lines(cfg, platform)
    lines.append("")
    return ("\n".join(lines)).encode("utf-8")


def plugins_readme(cfg, platform, meta, sources):
    lines = [
        "# %s %s" % (platform, meta["plugin_name"]),
        "",
        "在 %s 里这类文件叫「%s」，扩展名一般是 %s。" % (platform, meta["plugin_name"], meta["plugin_ext"]),
        "不同软件叫法不同：Loon 叫插件、Surge 和 ShadowRocket 叫模块、Stash 叫覆写、QuantumultX 叫重写。",
        "",
        "**这个目录下的文件由每日同步任务自动更新为上游最新版。**",
        "不要在这里手工改文件，改了下次会被覆盖；要改就改根目录的 `sources.json`。",
        "",
        "## 已登记的同步来源",
        "",
    ]
    for source in sources:
        if source["platform"] == platform and source["kind"] == "plugins":
            lines.append("- `%s`（%s）— %s" % (source["repo"], source["branch"], source.get("note", "")))
    lines += [
        "",
        "## 更多参考（只放链接，不自动同步）",
        "",
    ]
    lines += reference_lines(cfg, platform)
    lines += [
        "",
        "## 格式转换",
        "",
        "想在 Loon / Surge / Stash / QuantumultX / ShadowRocket 之间互相转换规则和模块，",
        "用 [Script-Hub](https://github.com/Script-Hub-Org/Script-Hub) 或 [Sub-Store](https://github.com/sub-store-org/Sub-Store)。",
        "",
    ]
    return ("\n".join(lines)).encode("utf-8")


def count_files(rel_dir):
    path = os.path.join(ROOT, rel_dir)
    if not os.path.isdir(path):
        return 0
    return len([name for name in os.listdir(path) if os.path.isfile(os.path.join(path, name))])


def build_status(cfg, results, failures, checked_at):
    platforms = cfg["platforms"]
    ok = len([item for item in results if item["ok"]])
    lines = [
        "# 配置与插件来源状态",
        "",
        "- 本次检查：%s" % checked_at,
        "- 登记来源：%d 个，成功 %d 个，失败 %d 个" % (len(results) + len(failures), ok, len(failures)),
        "- 同步范围：五个平台主目录下的配置目录与各自命名的插件目录",
        "- **不包含** `rule/` 与三大规则 list，这些永远不动",
        "",
        "> 这个文件每天都会更新。只要它在变，就说明同步任务还在正常跑。",
        "",
        "## 各平台内容",
        "",
        "| 平台 | 配置目录 | 文件数 | 插件叫法 | 插件目录 | 文件数 |",
        "| --- | --- | ---: | --- | --- | ---: |",
    ]
    for platform, meta in platforms.items():
        lines.append("| %s | `%s/` | %d | %s | `%s/` | %d |" % (
            platform,
            meta["config"], count_files(os.path.join(platform, meta["config"])),
            meta["plugin_name"],
            meta["plugins"], count_files(os.path.join(platform, meta["plugins"])),
        ))
    lines += [
        "",
        "## 来源明细",
        "",
        "| 来源 | 平台 | 类别 | 文件 | 上游最后提交 | 停更天数 | 结果 |",
        "| --- | --- | --- | ---: | --- | ---: | --- |",
    ]
    for item in results + failures:
        days = item["days"]
        day_text = "未知" if days < 0 else str(days)
        lines.append("| `%s` | %s | %s | %d | %s | %s | %s |" % (
            item["id"], item["platform"], item["kind"], item["files"],
            item["last"], day_text,
            "正常" if item["ok"] else "**失败**：%s" % item["error"][:60],
        ))
    stale = [item for item in results if item["days"] >= 7]
    if stale:
        lines += ["", "## 停更提醒", ""]
        for item in stale:
            lines.append("- `%s` 已停更 **%d 天**（%s）" % (item["id"], item["days"], item["repo"]))
    if failures:
        lines += ["", "## 失败项（需要关注）", ""]
        for item in failures:
            lines.append("- `%s`：%s" % (item["id"], item["error"]))
    lines += [
        "",
        "---",
        "",
        "老脚本的失效体检结果见 `DEAD_LINKS.md`，该报告只标记、不删除任何文件。",
        "",
    ]
    return "\n".join(lines)


def main():
    with open(CONFIG_PATH, "r", encoding="utf-8") as handle:
        cfg = json.load(handle)

    platforms = cfg["platforms"]
    sources = cfg["sources"]
    checked_at = datetime.datetime.now(datetime.timezone.utc).strftime("%Y-%m-%d %H:%M:%S UTC")

    for platform, meta in platforms.items():
        for kind in ("config", "plugins"):
            rel_dir = os.path.join(platform, meta[kind])
            os.makedirs(os.path.join(ROOT, rel_dir), exist_ok=True)
            if kind == "config":
                data = config_readme(cfg, platform, meta)
            else:
                data = plugins_readme(cfg, platform, meta, sources)
            write_file(os.path.join(rel_dir, "README.md"), data, "sync")
    log("已确保五个平台的配置与插件目录及说明文件就绪")

    results = []
    failures = []
    hard_failure = False

    for source in sources:
        if not source.get("enabled", True):
            continue
        sid = source["id"]
        try:
            if source.get("dir") is not None and "files" not in source:
                files = list_dir_files(source)
            else:
                files = source.get("files", [])
            if not files:
                raise RuntimeError("没有找到可同步的文件")

            counts = {"updated": 0, "same": 0, "kept": 0}
            for rel in files:
                url = "%s/%s/%s/%s" % (RAW, source["repo"], source["branch"], rel.lstrip("/"))
                data = fetch_bytes(url)
                sub = platforms[source["platform"]][source["kind"]]
                target = os.path.join(source["platform"], sub, os.path.basename(rel))
                counts[write_file(target, data, source.get("mode", "sync"))] += 1

            last, days = upstream_last_commit(source["repo"], source["branch"])
            results.append({
                "id": sid, "platform": source["platform"], "kind": source["kind"],
                "repo": source["repo"], "files": len(files), "last": last,
                "days": days, "ok": True, "error": "", "counts": counts,
            })
            log("OK   %-22s %2d 文件（新 %d / 相同 %d / 保留 %d）上游 %s" % (
                sid, len(files), counts["updated"], counts["same"], counts["kept"], last))
        except Exception as error:
            message = str(error)
            log("ERROR %-22s %s" % (sid, message))
            failures.append({
                "id": sid, "platform": source["platform"], "kind": source["kind"],
                "repo": source["repo"], "files": 0, "last": "未知", "days": -1,
                "ok": False, "error": message,
            })
            if source.get("required", False):
                hard_failure = True

    status_text = build_status(cfg, results, failures, checked_at)
    write_file("SOURCES_STATUS.md", status_text.encode("utf-8"), "sync")

    max_stale = max([item["days"] for item in results] + [0])
    meta = {
        "checked_at": checked_at,
        "max_stale": max_stale,
        "failures": len(failures),
        "total": len(results) + len(failures),
    }
    with open(META_PATH, "w", encoding="utf-8") as handle:
        json.dump(meta, handle, ensure_ascii=False, indent=2)

    summary_path = os.environ.get("GITHUB_STEP_SUMMARY")
    if summary_path:
        with open(summary_path, "a", encoding="utf-8") as handle:
            handle.write(status_text + "\n")

    if failures:
        print("::warning title=部分来源同步失败::%d 个来源失败，详见 SOURCES_STATUS.md" % len(failures))
    if hard_failure:
        log("ERROR 有必需来源同步失败，本次任务判定为失败")
        sys.exit(1)
    log("同步完成，状态报告已写入 SOURCES_STATUS.md")


if __name__ == "__main__":
    main()
