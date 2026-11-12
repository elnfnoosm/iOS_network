# QuantumultX 配置与插件

面向使用者的说明。本文件由每日同步任务自动生成，
下面的配置与插件清单按仓库里的实际文件刷新，不会过期。

- 最后更新：2026-11-12（UTC）
- 配置目录：`Config/`；插件目录：`Plugin/`
- 在 QuantumultX 里，这类文件叫「重写」

## 一、配置使用说明

### 本仓库提供的配置文件

| 文件 | 导入 / 订阅链接 | 在 GitHub 查看 |
| --- | --- | --- |
| `QX_Config.conf` | [订阅 / 下载](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Config/QX_Config.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Config/QX_Config.conf) |

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

在 QuantumultX 里这类文件叫「重写」，扩展名一般是 `.conf`，
存放目录是 `Plugin/`，当前共 **44 个**。

| 中文名称 / 说明 | 文件 | 安装链接 | 在 GitHub 查看 |
| --- | --- | --- | --- |
| 1blocker 重写（第三方，按原文件名标注） | `1blocker.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/1blocker.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/1blocker.conf) |
| 7dong 重写（第三方，按原文件名标注） | `7dong.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/7dong.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/7dong.conf) |
| AdBlock 重写（第三方，按原文件名标注） | `AdBlock.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/AdBlock.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/AdBlock.conf) |
| 综合去广告重写（limbopro） | `Adblock4limbo.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/Adblock4limbo.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/Adblock4limbo.conf) |
| B-Search 重写（第三方，按原文件名标注） | `B-Search.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/B-Search.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/B-Search.conf) |
| BaiduCloud 重写（第三方，按原文件名标注） | `BaiduCloud.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/BaiduCloud.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/BaiduCloud.conf) |
| BedtimeFan 重写（第三方，按原文件名标注） | `BedtimeFan.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/BedtimeFan.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/BedtimeFan.conf) |
| Bodian 重写（第三方，按原文件名标注） | `Bodian.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/Bodian.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/Bodian.conf) |
| CamScanner 重写（第三方，按原文件名标注） | `CamScanner.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/CamScanner.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/CamScanner.conf) |
| DisableUpdate 重写（第三方，按原文件名标注） | `DisableUpdate.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/DisableUpdate.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/DisableUpdate.conf) |
| Emby 重写（第三方，按原文件名标注） | `Emby.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/Emby.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/Emby.conf) |
| KuwoVip 重写（第三方，按原文件名标注） | `KuwoVip.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/KuwoVip.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/KuwoVip.conf) |
| NoMoCam 重写（第三方，按原文件名标注） | `NoMoCam.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/NoMoCam.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/NoMoCam.conf) |
| NodeLinkCheck 重写（第三方，按原文件名标注） | `NodeLinkCheck.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/NodeLinkCheck.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/NodeLinkCheck.conf) |
| Price 重写（第三方，按原文件名标注） | `Price.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/Price.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/Price.conf) |
| Ratings 重写（第三方，按原文件名标注） | `Ratings.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/Ratings.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/Ratings.conf) |
| SpotifyPremium 重写（第三方，按原文件名标注） | `SpotifyPremium.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/SpotifyPremium.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/SpotifyPremium.conf) |
| Tidal-HiFi 重写（第三方，按原文件名标注） | `Tidal-HiFi.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/Tidal-HiFi.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/Tidal-HiFi.conf) |
| WPS 重写（第三方，按原文件名标注） | `WPS.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/WPS.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/WPS.conf) |
| YouTube 去广告重写 | `YouTubeAds.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/YouTubeAds.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/YouTubeAds.conf) |
| 知乎去广告重写 | `Zhihu.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/Zhihu.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/Zhihu.conf) |
| absqgs 重写（第三方，按原文件名标注） | `absqgs.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/absqgs.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/absqgs.conf) |
| accu 重写（第三方，按原文件名标注） | `accu.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/accu.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/accu.conf) |
| adguard 重写（第三方，按原文件名标注） | `adguard.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/adguard.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/adguard.conf) |
| agenda 重写（第三方，按原文件名标注） | `agenda.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/agenda.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/agenda.conf) |
| ai 重写（第三方，按原文件名标注） | `ai.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/ai.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/ai.conf) |
| alarmy 重写（第三方，按原文件名标注） | `alarmy.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/alarmy.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/alarmy.conf) |
| aliyun 重写（第三方，按原文件名标注） | `aliyun.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/aliyun.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/aliyun.conf) |
| aloha 重写（第三方，按原文件名标注） | `aloha.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/aloha.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/aloha.conf) |
| amj 重写（第三方，按原文件名标注） | `amj.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/amj.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/amj.conf) |
| apowersoft 重写（第三方，按原文件名标注） | `apowersoft.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/apowersoft.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/apowersoft.conf) |
| appraven 重写（第三方，按原文件名标注） | `appraven.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/appraven.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/appraven.conf) |
| aptv 重写（第三方，按原文件名标注） | `aptv.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/aptv.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/aptv.conf) |
| aqc 重写（第三方，按原文件名标注） | `aqc.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/aqc.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/aqc.conf) |
| arbc 重写（第三方，按原文件名标注） | `arbc.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/arbc.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/arbc.conf) |
| arpdfbj 重写（第三方，按原文件名标注） | `arpdfbj.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/arpdfbj.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/arpdfbj.conf) |
| artp 重写（第三方，按原文件名标注） | `artp.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/artp.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/artp.conf) |
| audiomack 重写（第三方，按原文件名标注） | `audiomack.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/audiomack.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/audiomack.conf) |
| b612 重写（第三方，按原文件名标注） | `b612.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/b612.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/b612.conf) |
| baimiao 重写（第三方，按原文件名标注） | `baimiao.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/baimiao.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/baimiao.conf) |
| bazaart 重写（第三方，按原文件名标注） | `bazaart.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/bazaart.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/bazaart.conf) |
| bdsp 重写（第三方，按原文件名标注） | `bdsp.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/bdsp.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/bdsp.conf) |
| bdwk 重写（第三方，按原文件名标注） | `bdwk.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/bdwk.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/bdwk.conf) |
| Script-Hub 跨平台转换重写 | `script-hub.qx.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/script-hub.qx.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/script-hub.qx.conf) |

中文名称按已登记来源标注；第三方重写的名称取自原文件名，未做功能翻译，以免误导。

**安装方法**：复制「安装链接」，在 App 里通过导入远程插件 / 模块 / 覆写使用；
也可以先在浏览器打开链接确认内容。该目录每次同步会更新为上游最新版，
请不要在这里手工放自己的文件（会被覆盖）。

## 三、其他说明

### 目录结构

- `Config/`：配置模板与三大规则说明，首次生成后不覆盖
- `Plugin/`：插件 / 模块 / 覆写，每天自动同步上游最新版
- 平台目录下的其它旧文件：历史存档，正在按体检报告逐步清理

### 更新机制

- 每天北京时间约 05:30 自动同步一次
- 来源登记在仓库根目录的 [`sources.json`](https://github.com/elnfnoosm/iOS_network/blob/main/sources.json)，增减来源只改这一处
- 运行状态见 [`SOURCES_STATUS.md`](https://github.com/elnfnoosm/iOS_network/blob/main/SOURCES_STATUS.md)，老文件体检见 [`DEAD_LINKS.md`](https://github.com/elnfnoosm/iOS_network/blob/main/DEAD_LINKS.md)

### 来源与参考（保留原作者与许可声明）

- [deezertidal/QuantumultX-Rewrite（277 个重写）](https://github.com/deezertidal/QuantumultX-Rewrite)
- [curtinp118/QuantumultX（MIT 配置模板）](https://github.com/curtinp118/QuantumultX)
- [ACL4SSR/ACL4SSR（分流规则）](https://github.com/ACL4SSR/ACL4SSR)
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
- **旧文件还有用吗**：老内容仍保留在原路径，已有订阅链接继续有效；清理按体检报告分批进行。

### 免责声明

本仓库内容整理自公开来源，仅供学习研究，使用前请自行测试。
本仓库不提供任何节点或订阅服务，也不保证第三方规则与插件长期有效；
因使用这些内容造成的问题，本仓库不承担责任。
