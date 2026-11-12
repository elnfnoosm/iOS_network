import os
import sys
import json
import time
import shutil
import tempfile
import datetime
import requests

REPO_ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
RULE_DIR = os.path.join(REPO_ROOT, "rule")
META_FILE = os.path.join(RULE_DIR, ".run_meta.json")

RULE_URL = "https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Loon/"
UPSTREAM_API = "https://api.github.com/repos/blackmatrix7/ios_rule_script/commits?per_page=1"

REJECT_RULES = {
    "Advertising": RULE_URL + "Advertising/Advertising.list",
    "Advertising_Domain": RULE_URL + "Advertising/Advertising_Domain.list",
    "Privacy": RULE_URL + "Privacy/Privacy.list",
    "Privacy_Domain": RULE_URL + "Privacy/Privacy_Domain.list"
}
PROXY_RULES = {
    "GlobalMedia": RULE_URL + "GlobalMedia/GlobalMedia.list",
    "GlobalMedia_Domain": RULE_URL + "GlobalMedia/GlobalMedia_Domain.list",
    "Global": RULE_URL + "Global/Global.list",
    "Global_Domain": RULE_URL + "Global/Global_Domain.list",
    "Proxy": RULE_URL + "Proxy/Proxy.list",
    "Proxy_Domain": RULE_URL + "Proxy/Proxy_Domain.list"
}
DIRECT_RULES = {
    "ChinaMax": RULE_URL + "ChinaMax/ChinaMax.list",
    "ChinaMax_Domain": RULE_URL + "ChinaMax/ChinaMax_Domain.list"
}

GROUPS = [
    ("Reject-rule", REJECT_RULES),
    ("Proxy-rule", PROXY_RULES),
    ("China-rule", DIRECT_RULES),
]

HEADER = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/52.0.2743.116 Safari/537.36'}


def fail(message):
    print("ERROR: " + message, flush=True)
    sys.exit(1)


def download(url):
    last_error = None
    for attempt in range(3):
        try:
            response = requests.get(url, headers=HEADER, timeout=20)
            response.raise_for_status()
            data = response.content
            if len(data) < 50:
                fail("下载到的内容异常小，疑似空文件: " + url)
            text = data.decode("utf-8", errors="replace")
            if "<html" in text[:500].lower():
                fail("下载到的是网页而不是规则文件: " + url)
            lines = [line for line in text.splitlines() if line.strip()]
            if not lines:
                fail("下载到的文件没有任何有效行: " + url)
            return data, len(lines)
        except SystemExit:
            raise
        except Exception as error:
            last_error = error
            print("  第 %d/3 次失败: %s" % (attempt + 1, error), flush=True)
            time.sleep(2)
    fail("下载失败（已重试 3 次）: %s -> %s" % (url, last_error))


def upstream_info():
    try:
        response = requests.get(UPSTREAM_API, headers=HEADER, timeout=20)
        response.raise_for_status()
        commits = response.json()
        date_string = commits[0]["commit"]["author"]["date"]
        last_time = datetime.datetime.strptime(date_string, "%Y-%m-%dT%H:%M:%SZ")
        last_time = last_time.replace(tzinfo=datetime.timezone.utc)
        now = datetime.datetime.now(datetime.timezone.utc)
        return date_string, (now - last_time).days
    except Exception as error:
        print("WARN: 无法查询上游最后更新时间: %s" % error, flush=True)
        return "未知（查询失败）", -1


def main():
    os.chdir(RULE_DIR)
    temp_dir = tempfile.mkdtemp(prefix="ios_rule_download_")
    line_counts = {}
    try:
        for dirname, rules in GROUPS:
            os.makedirs(os.path.join(temp_dir, dirname), exist_ok=True)
            for key, url in rules.items():
                print("下载 %s/%s.list ..." % (dirname, key), flush=True)
                data, line_count = download(url)
                with open(os.path.join(temp_dir, dirname, key + ".list"), "wb") as f:
                    f.write(data)
                line_counts["%s/%s.list" % (dirname, key)] = line_count

        for dirname, _ in GROUPS:
            target = os.path.join(RULE_DIR, dirname)
            if os.path.exists(target):
                shutil.rmtree(target)
            shutil.move(os.path.join(temp_dir, dirname), target)
        print("12 个规则文件全部下载并校验通过", flush=True)
    finally:
        shutil.rmtree(temp_dir, ignore_errors=True)

    last_commit, stale_days = upstream_info()
    meta = {
        "checked_at": datetime.datetime.now(datetime.timezone.utc).strftime("%Y-%m-%d %H:%M:%S UTC"),
        "upstream_repo": "blackmatrix7/ios_rule_script (master)",
        "upstream_last_commit": last_commit,
        "stale_days": stale_days,
        "downloaded": line_counts
    }
    with open(META_FILE, "w", encoding="utf-8") as f:
        json.dump(meta, f, ensure_ascii=False, indent=2)
    print("上游最后更新: %s（停更 %s 天）" % (last_commit, stale_days), flush=True)


if __name__ == '__main__':
    main()
