import os
import sys
import json
import datetime

REPO_ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
RULE_DIR = os.path.join(REPO_ROOT, "rule")
META_FILE = os.path.join(RULE_DIR, ".run_meta.json")
STATUS_FILE = os.path.join(REPO_ROOT, "STATUS.md")

file_paths = ["China-rule", "Proxy-rule", "Reject-rule"]


def fail(message):
    print("ERROR: " + message, flush=True)
    sys.exit(1)


def merge_and_deduplicate_files(path):
    summary_name = os.path.basename(path) + ".list"
    output_file_path = os.path.join(path, summary_name)
    data_set = set()
    source_files = []

    for file_name in sorted(os.listdir(path)):
        if file_name == summary_name or file_name.startswith("."):
            continue
        file_path = os.path.join(path, file_name)
        if not os.path.isfile(file_path):
            continue
        source_files.append(file_name)
        with open(file_path, "r", encoding="utf8") as in_f:
            for raw_line in in_f:
                line = raw_line.strip()
                if line and not line.startswith("#"):
                    data_set.add(line)

    if not source_files:
        fail("%s 里没有可用的规则文件，拒绝生成空的汇总文件" % path)

    with open(output_file_path, "w", encoding="utf8") as out_f:
        for line in sorted(data_set):
            out_f.write(line + "\n")
    return output_file_path, len(data_set), len(source_files)


def read_meta():
    if os.path.exists(META_FILE):
        with open(META_FILE, "r", encoding="utf-8") as f:
            return json.load(f)
    return {}


def build_status(meta, results):
    checked_at = meta.get("checked_at") or datetime.datetime.now(datetime.timezone.utc).strftime("%Y-%m-%d %H:%M:%S UTC")
    stale_days = meta.get("stale_days", -1)
    if stale_days is None or stale_days < 0:
        note = "上游更新时间查询失败，请留意"
    elif stale_days >= 7:
        note = "上游已 **%s 天** 没有新提交，规则内容暂时不会再变化（你的自动任务仍在正常运行）" % stale_days
    else:
        note = "上游更新正常"

    lines = [
        "# 规则运行状态",
        "",
        "- 本次检查：%s" % checked_at,
        "- 规则源：%s" % meta.get("upstream_repo", "blackmatrix7/ios_rule_script (master)"),
        "- 上游最后提交：%s" % meta.get("upstream_last_commit", "未知"),
        "- 状态：%s" % note,
        "",
        "> 这个文件每天由自动任务更新。只要它在变，就说明自动任务还在正常跑。",
        "> 规则文件本身有没有变化，取决于上游有没有发布新规则。",
        "",
        "## 本次下载",
        "",
        "| 文件 | 行数 |",
        "| --- | ---: |",
    ]
    for name, count in sorted(meta.get("downloaded", {}).items()):
        lines.append("| %s | %s |" % (name, count))

    lines += [
        "",
        "## 生成的汇总文件",
        "",
        "| 文件 | 规则条数 | 来源文件数 |",
        "| --- | ---: | ---: |",
    ]
    for dirname, count, source_count in results:
        lines.append("| rule/%s/%s.list | %s | %s |" % (dirname, dirname, count, source_count))

    lines += [
        "",
        "---",
        "",
        "上游长时间停更时，自动任务会在本仓库提一个 issue 提醒。",
        "",
    ]
    return "\n".join(lines)


def main():
    os.chdir(RULE_DIR)
    results = []
    for path in file_paths:
        if not os.path.isdir(path):
            fail("缺少目录 %s，请检查上一步是否下载成功" % path)
        output_file_path, count, source_count = merge_and_deduplicate_files(path)
        results.append((os.path.basename(path), count, source_count))
        print("生成 %s：%s 条规则，来自 %s 个文件" % (output_file_path, count, source_count), flush=True)

    status_text = build_status(read_meta(), results)
    with open(STATUS_FILE, "w", encoding="utf-8") as f:
        f.write(status_text)

    summary_path = os.environ.get("GITHUB_STEP_SUMMARY")
    if summary_path:
        with open(summary_path, "a", encoding="utf-8") as f:
            f.write(status_text + "\n")

    print("状态报告已写入 STATUS.md", flush=True)
    print(status_text, flush=True)


if __name__ == '__main__':
    main()
