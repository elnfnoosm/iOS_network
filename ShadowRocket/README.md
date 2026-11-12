# ShadowRocket 配置与插件

面向使用者的说明。本文件由每日同步任务自动生成，
下面的配置与插件清单按仓库里的实际文件刷新，不会过期。

- 最后更新：2026-11-12（UTC）
- 配置目录：`Config/`；插件目录：`Module/`
- 在 ShadowRocket 里，这类文件叫「模块」

## 一、配置使用说明

### 本仓库提供的配置文件

该平台目前没有现成的配置模板。配置里通常要填自己的节点，
不宜直接照搬别人的配置，请按下面的步骤自建。

### 三大基础规则（每日自动更新，五个平台通用）

| 用途 | 订阅链接 |
| --- | --- |
| 国内直连 | https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/rule/China-rule/China-rule.list |
| 国际加速 | https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/rule/Proxy-rule/Proxy-rule.list |
| 广告拦截 | https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/rule/Reject-rule/Reject-rule.list |

这三条由本仓库 `rule/` 目录提供，被很多人引用。
配置与插件的同步任务永远不会改动它们。

### 使用步骤

1. 复制上表的「导入 / 订阅链接」，在 App 里导入配置模板（如果有）。
2. 填入你自己的节点或订阅信息 —— 本仓库不提供任何节点。
3. 在配置的分流规则里引用上面三条规则链接。
4. `Config/` 里的模板只在首次生成，之后不会覆盖你自己改过的配置。

## 二、插件清单

在 ShadowRocket 里这类文件叫「模块」，扩展名一般是 `.module`，
存放目录是 `Module/`，当前共 **6 个**。

| 中文名称 / 说明 | 文件 | 安装链接 | 在 GitHub 查看 |
| --- | --- | --- | --- |
| 综合去广告模块（limbopro） | `Adblock4limbo.module` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/ShadowRocket/Module/Adblock4limbo.module) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/ShadowRocket/Module/Adblock4limbo.module) |
| YouTube 去广告模块 | `YouTubeAds.module` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/ShadowRocket/Module/YouTubeAds.module) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/ShadowRocket/Module/YouTubeAds.module) |
| Script-Hub 跨平台转换模块 | `script-hub.rocket.module` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/ShadowRocket/Module/script-hub.rocket.module) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/ShadowRocket/Module/script-hub.rocket.module) |
| 国内直连规则模块（GMOogway） | `sr_direct_list.module` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/ShadowRocket/Module/sr_direct_list.module) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/ShadowRocket/Module/sr_direct_list.module) |
| 国际加速规则模块（GMOogway） | `sr_proxy_list.module` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/ShadowRocket/Module/sr_proxy_list.module) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/ShadowRocket/Module/sr_proxy_list.module) |
| 广告拦截规则模块（GMOogway） | `sr_reject_list.module` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/ShadowRocket/Module/sr_reject_list.module) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/ShadowRocket/Module/sr_reject_list.module) |

中文名称按已登记来源标注；第三方重写的名称取自原文件名，未做功能翻译，以免误导。

**安装方法**：复制「安装链接」，在 App 里通过导入远程插件 / 模块 / 覆写使用；
也可以先在浏览器打开链接确认内容。该目录每次同步会更新为上游最新版，
请不要在这里手工放自己的文件（会被覆盖）。

## 三、其他说明

### 目录结构

- `Config/`：配置模板与三大规则说明，首次生成后不覆盖
- `Module/`：插件 / 模块 / 覆写，每天自动同步上游最新版
- 旧文件（2022–2023 年的历史内容）已于 2026-11-12 全量清理，清单与恢复方法见 [`LEGACY_CLEANUP_REPORT.md`](https://github.com/elnfnoosm/iOS_network/blob/main/LEGACY_CLEANUP_REPORT.md)

### 更新机制

- 每天北京时间约 05:30 自动同步一次
- 来源登记在仓库根目录的 [`sources.json`](https://github.com/elnfnoosm/iOS_network/blob/main/sources.json)，增减来源只改这一处
- 运行状态见 [`SOURCES_STATUS.md`](https://github.com/elnfnoosm/iOS_network/blob/main/SOURCES_STATUS.md)，老文件体检见 [`DEAD_LINKS.md`](https://github.com/elnfnoosm/iOS_network/blob/main/DEAD_LINKS.md)

### 来源与参考（保留原作者与许可声明）

- [GMOogway/shadowrocket-rules（模块与规则）](https://github.com/GMOogway/shadowrocket-rules)
- [zhouzhouprogram/Shadowrocket-ADBlock-Rules（去广告）](https://github.com/zhouzhouprogram/Shadowrocket-ADBlock-Rules)
- [limbopro/Adblock4limbo（MIT，跨平台模板）](https://github.com/limbopro/Adblock4limbo)
- [Script-Hub-Org/Script-Hub（跨平台转换）](https://github.com/Script-Hub-Org/Script-Hub)
- [Loyalsoldier/v2ray-rules-dat（每日规则数据）](https://github.com/Loyalsoldier/v2ray-rules-dat)

第三方内容请遵守各仓库的许可声明（MIT / GPL / CC-BY-SA 等，以各仓库 LICENSE 为准）。

### 跨平台格式转换

不同软件的规则和插件格式不同，可用 Script-Hub 或 Sub-Store 转换。
Script-Hub 提供的现成模块：

- Surge / Egern / LanceX：[script-hub.surge.sgmodule](https://raw.githubusercontent.com/Script-Hub-Org/Script-Hub/main/modules/script-hub.surge.sgmodule)
- ShadowRocket：[script-hub.rocket.module](https://raw.githubusercontent.com/Script-Hub-Org/Script-Hub/main/modules/script-hub.rocket.module)
- Stash：[script-hub.stash.stoverride](https://raw.githubusercontent.com/Script-Hub-Org/Script-Hub/main/modules/script-hub.stash.stoverride)
- Loon：[script-hub.loon.plugin](https://raw.githubusercontent.com/Script-Hub-Org/Script-Hub/main/modules/script-hub.loon.plugin)
- QuantumultX：[script-hub.qx.conf](https://raw.githubusercontent.com/Script-Hub-Org/Script-Hub/main/modules/script-hub.qx.conf)

### 常见问题

- **链接打不开**：确认复制的是 `raw.githubusercontent.com` 开头的链接；规则链接由 GitHub 提供，部分地区可能需要代理。
- **插件失效**：插件多为第三方脚本，App 版本更新后可能失效，等上游更新或自行停用即可。
- **想加 / 减插件**：改根目录 `sources.json` 的 `sources` 列表，保存后下次同步生效。
- **旧文件去哪了**：2022–2023 年的旧脚本已按「超过半年未更新」全量清理，旧订阅链接不再有效；想找回可从提交历史恢复，完整清单与替代来源见 `LEGACY_CLEANUP_REPORT.md`。

### 免责声明

本仓库内容整理自公开来源，仅供学习研究，使用前请自行测试。
本仓库不提供任何节点或订阅服务，也不保证第三方规则与插件长期有效；
因使用这些内容造成的问题，本仓库不承担责任。
