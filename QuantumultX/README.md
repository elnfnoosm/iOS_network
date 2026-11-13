# QuantumultX 配置与插件

面向使用者的说明。本文件由每日同步任务自动生成，
下面的配置与插件清单按仓库里的实际文件刷新，不会过期。

- 最后更新：2026-11-13（UTC）
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
存放目录是 `Plugin/`，当前共 **282 个**。

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
| bili 重写（第三方，按原文件名标注） | `bili.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/bili.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/bili.conf) |
| biliad 重写（第三方，按原文件名标注） | `biliad.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/biliad.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/biliad.conf) |
| boom 重写（第三方，按原文件名标注） | `boom.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/boom.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/boom.conf) |
| bsxm 重写（第三方，按原文件名标注） | `bsxm.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/bsxm.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/bsxm.conf) |
| caixin 重写（第三方，按原文件名标注） | `caixin.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/caixin.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/caixin.conf) |
| caiyun 重写（第三方，按原文件名标注） | `caiyun.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/caiyun.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/caiyun.conf) |
| calculator 重写（第三方，按原文件名标注） | `calculator.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/calculator.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/calculator.conf) |
| calm 重写（第三方，按原文件名标注） | `calm.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/calm.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/calm.conf) |
| cdzs 重写（第三方，按原文件名标注） | `cdzs.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/cdzs.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/cdzs.conf) |
| ceo 重写（第三方，按原文件名标注） | `ceo.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/ceo.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/ceo.conf) |
| chic 重写（第三方，按原文件名标注） | `chic.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/chic.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/chic.conf) |
| clarity 重写（第三方，按原文件名标注） | `clarity.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/clarity.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/clarity.conf) |
| collart 重写（第三方，按原文件名标注） | `collart.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/collart.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/collart.conf) |
| colorweather 重写（第三方，按原文件名标注） | `colorweather.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/colorweather.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/colorweather.conf) |
| colorwidgets 重写（第三方，按原文件名标注） | `colorwidgets.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/colorwidgets.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/colorwidgets.conf) |
| 内容农场拦截重写（limbopro） | `contentFarm.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/contentFarm.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/contentFarm.conf) |
| cp 重写（第三方，按原文件名标注） | `cp.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/cp.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/cp.conf) |
| craft 重写（第三方，按原文件名标注） | `craft.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/craft.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/craft.conf) |
| cubox 重写（第三方，按原文件名标注） | `cubox.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/cubox.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/cubox.conf) |
| cxs 重写（第三方，按原文件名标注） | `cxs.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/cxs.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/cxs.conf) |
| daily-yoga 重写（第三方，按原文件名标注） | `daily-yoga.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/daily-yoga.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/daily-yoga.conf) |
| dalanjing 重写（第三方，按原文件名标注） | `dalanjing.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/dalanjing.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/dalanjing.conf) |
| darkroom 重写（第三方，按原文件名标注） | `darkroom.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/darkroom.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/darkroom.conf) |
| dayone 重写（第三方，按原文件名标注） | `dayone.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/dayone.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/dayone.conf) |
| ddsyxj 重写（第三方，按原文件名标注） | `ddsyxj.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/ddsyxj.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/ddsyxj.conf) |
| doc 重写（第三方，按原文件名标注） | `doc.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/doc.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/doc.conf) |
| documents 重写（第三方，按原文件名标注） | `documents.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/documents.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/documents.conf) |
| drafts 重写（第三方，按原文件名标注） | `drafts.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/drafts.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/drafts.conf) |
| dsbj 重写（第三方，按原文件名标注） | `dsbj.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/dsbj.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/dsbj.conf) |
| dsj 重写（第三方，按原文件名标注） | `dsj.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/dsj.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/dsj.conf) |
| duitang 重写（第三方，按原文件名标注） | `duitang.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/duitang.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/duitang.conf) |
| dyd 重写（第三方，按原文件名标注） | `dyd.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/dyd.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/dyd.conf) |
| dzqj 重写（第三方，按原文件名标注） | `dzqj.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/dzqj.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/dzqj.conf) |
| efekt 重写（第三方，按原文件名标注） | `efekt.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/efekt.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/efekt.conf) |
| egdd 重写（第三方，按原文件名标注） | `egdd.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/egdd.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/egdd.conf) |
| ego 重写（第三方，按原文件名标注） | `ego.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/ego.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/ego.conf) |
| ellabook 重写（第三方，按原文件名标注） | `ellabook.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/ellabook.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/ellabook.conf) |
| emmo 重写（第三方，按原文件名标注） | `emmo.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/emmo.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/emmo.conf) |
| emote 重写（第三方，按原文件名标注） | `emote.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/emote.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/emote.conf) |
| endel 重写（第三方，按原文件名标注） | `endel.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/endel.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/endel.conf) |
| fabulous 重写（第三方，按原文件名标注） | `fabulous.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/fabulous.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/fabulous.conf) |
| faintv 重写（第三方，按原文件名标注） | `faintv.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/faintv.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/faintv.conf) |
| fanqienovel 重写（第三方，按原文件名标注） | `fanqienovel.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/fanqienovel.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/fanqienovel.conf) |
| fantastical 重写（第三方，按原文件名标注） | `fantastical.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/fantastical.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/fantastical.conf) |
| fileball 重写（第三方，按原文件名标注） | `fileball.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/fileball.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/fileball.conf) |
| fimo 重写（第三方，按原文件名标注） | `fimo.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/fimo.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/fimo.conf) |
| flomo 重写（第三方，按原文件名标注） | `flomo.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/flomo.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/flomo.conf) |
| fnv 重写（第三方，按原文件名标注） | `fnv.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/fnv.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/fnv.conf) |
| fomz 重写（第三方，按原文件名标注） | `fomz.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/fomz.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/fomz.conf) |
| ft 重写（第三方，按原文件名标注） | `ft.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/ft.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/ft.conf) |
| fyjh 重写（第三方，按原文件名标注） | `fyjh.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/fyjh.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/fyjh.conf) |
| gddt 重写（第三方，按原文件名标注） | `gddt.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/gddt.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/gddt.conf) |
| giftr 重写（第三方，按原文件名标注） | `giftr.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/giftr.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/giftr.conf) |
| gql 重写（第三方，按原文件名标注） | `gql.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/gql.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/gql.conf) |
| grammarly 重写（第三方，按原文件名标注） | `grammarly.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/grammarly.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/grammarly.conf) |
| grow 重写（第三方，按原文件名标注） | `grow.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/grow.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/grow.conf) |
| gscdq 重写（第三方，按原文件名标注） | `gscdq.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/gscdq.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/gscdq.conf) |
| gzrj 重写（第三方，按原文件名标注） | `gzrj.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/gzrj.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/gzrj.conf) |
| hbetgs 重写（第三方，按原文件名标注） | `hbetgs.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/hbetgs.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/hbetgs.conf) |
| hbgc 重写（第三方，按原文件名标注） | `hbgc.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/hbgc.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/hbgc.conf) |
| hbxw 重写（第三方，按原文件名标注） | `hbxw.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/hbxw.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/hbxw.conf) |
| hsfs 重写（第三方，按原文件名标注） | `hsfs.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/hsfs.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/hsfs.conf) |
| htjzb 重写（第三方，按原文件名标注） | `htjzb.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/htjzb.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/htjzb.conf) |
| https 重写（第三方，按原文件名标注） | `https.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/https.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/https.conf) |
| hx 重写（第三方，按原文件名标注） | `hx.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/hx.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/hx.conf) |
| hyperweb 重写（第三方，按原文件名标注） | `hyperweb.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/hyperweb.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/hyperweb.conf) |
| hyxc 重写（第三方，按原文件名标注） | `hyxc.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/hyxc.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/hyxc.conf) |
| hyxj 重写（第三方，按原文件名标注） | `hyxj.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/hyxj.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/hyxj.conf) |
| hyzm 重写（第三方，按原文件名标注） | `hyzm.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/hyzm.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/hyzm.conf) |
| hzk 重写（第三方，按原文件名标注） | `hzk.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/hzk.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/hzk.conf) |
| iRingo_TestFlight 重写（第三方，按原文件名标注） | `iRingo_TestFlight.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/iRingo_TestFlight.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/iRingo_TestFlight.conf) |
| iam 重写（第三方，按原文件名标注） | `iam.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/iam.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/iam.conf) |
| iconkiller 重写（第三方，按原文件名标注） | `iconkiller.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/iconkiller.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/iconkiller.conf) |
| ilovepdf 重写（第三方，按原文件名标注） | `ilovepdf.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/ilovepdf.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/ilovepdf.conf) |
| imuseum 重写（第三方，按原文件名标注） | `imuseum.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/imuseum.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/imuseum.conf) |
| invideo 重写（第三方，按原文件名标注） | `invideo.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/invideo.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/invideo.conf) |
| iscreen 重写（第三方，按原文件名标注） | `iscreen.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/iscreen.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/iscreen.conf) |
| jianxun 重写（第三方，按原文件名标注） | `jianxun.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/jianxun.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/jianxun.conf) |
| jibjab 重写（第三方，按原文件名标注） | `jibjab.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/jibjab.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/jibjab.conf) |
| jjyc 重写（第三方，按原文件名标注） | `jjyc.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/jjyc.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/jjyc.conf) |
| jkyd 重写（第三方，按原文件名标注） | `jkyd.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/jkyd.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/jkyd.conf) |
| jsgx 重写（第三方，按原文件名标注） | `jsgx.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/jsgx.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/jsgx.conf) |
| jssmy 重写（第三方，按原文件名标注） | `jssmy.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/jssmy.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/jssmy.conf) |
| judou 重写（第三方，按原文件名标注） | `judou.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/judou.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/judou.conf) |
| keep 重写（第三方，按原文件名标注） | `keep.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/keep.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/keep.conf) |
| kepai 重写（第三方，按原文件名标注） | `kepai.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/kepai.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/kepai.conf) |
| kika 重写（第三方，按原文件名标注） | `kika.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/kika.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/kika.conf) |
| klx 重写（第三方，按原文件名标注） | `klx.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/klx.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/klx.conf) |
| kprj 重写（第三方，按原文件名标注） | `kprj.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/kprj.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/kprj.conf) |
| kuwo-unlock 重写（第三方，按原文件名标注） | `kuwo-unlock.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/kuwo-unlock.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/kuwo-unlock.conf) |
| ky 重写（第三方，按原文件名标注） | `ky.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/ky.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/ky.conf) |
| lgzj 重写（第三方，按原文件名标注） | `lgzj.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/lgzj.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/lgzj.conf) |
| lifeviewer 重写（第三方，按原文件名标注） | `lifeviewer.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/lifeviewer.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/lifeviewer.conf) |
| lightroom 重写（第三方，按原文件名标注） | `lightroom.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/lightroom.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/lightroom.conf) |
| lingokids 重写（第三方，按原文件名标注） | `lingokids.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/lingokids.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/lingokids.conf) |
| ljtq 重写（第三方，按原文件名标注） | `ljtq.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/ljtq.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/ljtq.conf) |
| lls 重写（第三方，按原文件名标注） | `lls.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/lls.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/lls.conf) |
| lsdyw 重写（第三方，按原文件名标注） | `lsdyw.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/lsdyw.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/lsdyw.conf) |
| ly 重写（第三方，按原文件名标注） | `ly.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/ly.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/ly.conf) |
| mbdt 重写（第三方，按原文件名标注） | `mbdt.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/mbdt.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/mbdt.conf) |
| mdmanhua 重写（第三方，按原文件名标注） | `mdmanhua.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/mdmanhua.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/mdmanhua.conf) |
| mdsz 重写（第三方，按原文件名标注） | `mdsz.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/mdsz.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/mdsz.conf) |
| meipian 重写（第三方，按原文件名标注） | `meipian.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/meipian.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/meipian.conf) |
| meistertask 重写（第三方，按原文件名标注） | `meistertask.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/meistertask.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/meistertask.conf) |
| meituxx 重写（第三方，按原文件名标注） | `meituxx.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/meituxx.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/meituxx.conf) |
| memrise 重写（第三方，按原文件名标注） | `memrise.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/memrise.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/memrise.conf) |
| mht 重写（第三方，按原文件名标注） | `mht.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/mht.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/mht.conf) |
| mix 重写（第三方，按原文件名标注） | `mix.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/mix.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/mix.conf) |
| mklwt 重写（第三方，按原文件名标注） | `mklwt.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/mklwt.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/mklwt.conf) |
| mksp 重写（第三方，按原文件名标注） | `mksp.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/mksp.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/mksp.conf) |
| mojo 重写（第三方，按原文件名标注） | `mojo.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/mojo.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/mojo.conf) |
| molycam 重写（第三方，按原文件名标注） | `molycam.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/molycam.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/molycam.conf) |
| mondly 重写（第三方，按原文件名标注） | `mondly.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/mondly.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/mondly.conf) |
| moneythings 重写（第三方，按原文件名标注） | `moneythings.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/moneythings.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/moneythings.conf) |
| motivation 重写（第三方，按原文件名标注） | `motivation.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/motivation.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/motivation.conf) |
| mtywj 重写（第三方，按原文件名标注） | `mtywj.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/mtywj.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/mtywj.conf) |
| multisearch 重写（第三方，按原文件名标注） | `multisearch.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/multisearch.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/multisearch.conf) |
| musixmatch 重写（第三方，按原文件名标注） | `musixmatch.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/musixmatch.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/musixmatch.conf) |
| myfitnesspal 重写（第三方，按原文件名标注） | `myfitnesspal.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/myfitnesspal.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/myfitnesspal.conf) |
| myplate 重写（第三方，按原文件名标注） | `myplate.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/myplate.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/myplate.conf) |
| nfc 重写（第三方，按原文件名标注） | `nfc.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/nfc.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/nfc.conf) |
| nicegram 重写（第三方，按原文件名标注） | `nicegram.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/nicegram.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/nicegram.conf) |
| notability 重写（第三方，按原文件名标注） | `notability.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/notability.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/notability.conf) |
| notboring 重写（第三方，按原文件名标注） | `notboring.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/notboring.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/notboring.conf) |
| now 重写（第三方，按原文件名标注） | `now.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/now.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/now.conf) |
| nt 重写（第三方，按原文件名标注） | `nt.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/nt.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/nt.conf) |
| nybz 重写（第三方，按原文件名标注） | `nybz.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/nybz.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/nybz.conf) |
| oldroll 重写（第三方，按原文件名标注） | `oldroll.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/oldroll.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/oldroll.conf) |
| panda 重写（第三方，按原文件名标注） | `panda.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/panda.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/panda.conf) |
| pandora 重写（第三方，按原文件名标注） | `pandora.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/pandora.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/pandora.conf) |
| pdfviewer 重写（第三方，按原文件名标注） | `pdfviewer.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/pdfviewer.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/pdfviewer.conf) |
| peak 重写（第三方，按原文件名标注） | `peak.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/peak.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/peak.conf) |
| peiyin 重写（第三方，按原文件名标注） | `peiyin.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/peiyin.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/peiyin.conf) |
| peiyinxiu 重写（第三方，按原文件名标注） | `peiyinxiu.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/peiyinxiu.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/peiyinxiu.conf) |
| percento 重写（第三方，按原文件名标注） | `percento.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/percento.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/percento.conf) |
| photomath 重写（第三方，按原文件名标注） | `photomath.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/photomath.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/photomath.conf) |
| photoshop 重写（第三方，按原文件名标注） | `photoshop.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/photoshop.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/photoshop.conf) |
| piccollage 重写（第三方，按原文件名标注） | `piccollage.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/piccollage.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/piccollage.conf) |
| picsart 重写（第三方，按原文件名标注） | `picsart.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/picsart.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/picsart.conf) |
| pillow 重写（第三方，按原文件名标注） | `pillow.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/pillow.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/pillow.conf) |
| pixelance 重写（第三方，按原文件名标注） | `pixelance.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/pixelance.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/pixelance.conf) |
| pixelcut 重写（第三方，按原文件名标注） | `pixelcut.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/pixelcut.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/pixelcut.conf) |
| pixiv 重写（第三方，按原文件名标注） | `pixiv.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/pixiv.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/pixiv.conf) |
| planny 重写（第三方，按原文件名标注） | `planny.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/planny.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/planny.conf) |
| pocketlists 重写（第三方，按原文件名标注） | `pocketlists.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/pocketlists.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/pocketlists.conf) |
| polarr 重写（第三方，按原文件名标注） | `polarr.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/polarr.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/polarr.conf) |
| ppx 重写（第三方，按原文件名标注） | `ppx.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/ppx.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/ppx.conf) |
| prettyup 重写（第三方，按原文件名标注） | `prettyup.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/prettyup.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/prettyup.conf) |
| proknockout 重写（第三方，按原文件名标注） | `proknockout.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/proknockout.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/proknockout.conf) |
| ptj 重写（第三方，按原文件名标注） | `ptj.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/ptj.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/ptj.conf) |
| qifu 重写（第三方，按原文件名标注） | `qifu.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/qifu.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/qifu.conf) |
| qj 重写（第三方，按原文件名标注） | `qj.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/qj.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/qj.conf) |
| qmxs 重写（第三方，按原文件名标注） | `qmxs.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/qmxs.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/qmxs.conf) |
| qnhb 重写（第三方，按原文件名标注） | `qnhb.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/qnhb.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/qnhb.conf) |
| relens 重写（第三方，按原文件名标注） | `relens.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/relens.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/relens.conf) |
| retake 重写（第三方，按原文件名标注） | `retake.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/retake.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/retake.conf) |
| rmrb 重写（第三方，按原文件名标注） | `rmrb.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/rmrb.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/rmrb.conf) |
| rq 重写（第三方，按原文件名标注） | `rq.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/rq.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/rq.conf) |
| rrsp 重写（第三方，按原文件名标注） | `rrsp.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/rrsp.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/rrsp.conf) |
| rzxj 重写（第三方，按原文件名标注） | `rzxj.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/rzxj.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/rzxj.conf) |
| sc 重写（第三方，按原文件名标注） | `sc.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/sc.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/sc.conf) |
| Script-Hub 跨平台转换重写 | `script-hub.qx.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/script-hub.qx.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/script-hub.qx.conf) |
| seven 重写（第三方，按原文件名标注） | `seven.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/seven.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/seven.conf) |
| sgsz 重写（第三方，按原文件名标注） | `sgsz.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/sgsz.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/sgsz.conf) |
| shadowlinkvpn 重写（第三方，按原文件名标注） | `shadowlinkvpn.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/shadowlinkvpn.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/shadowlinkvpn.conf) |
| sjsmy 重写（第三方，按原文件名标注） | `sjsmy.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/sjsmy.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/sjsmy.conf) |
| smallpdf 重写（第三方，按原文件名标注） | `smallpdf.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/smallpdf.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/smallpdf.conf) |
| smbq 重写（第三方，按原文件名标注） | `smbq.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/smbq.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/smbq.conf) |
| smwd 重写（第三方，按原文件名标注） | `smwd.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/smwd.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/smwd.conf) |
| smxcgj 重写（第三方，按原文件名标注） | `smxcgj.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/smxcgj.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/smxcgj.conf) |
| sndd 重写（第三方，按原文件名标注） | `sndd.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/sndd.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/sndd.conf) |
| sorted 重写（第三方，按原文件名标注） | `sorted.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/sorted.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/sorted.conf) |
| soundcloud 重写（第三方，按原文件名标注） | `soundcloud.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/soundcloud.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/soundcloud.conf) |
| ssa 重写（第三方，按原文件名标注） | `ssa.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/ssa.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/ssa.conf) |
| startingad 重写（第三方，按原文件名标注） | `startingad.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/startingad.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/startingad.conf) |
| stsq 重写（第三方，按原文件名标注） | `stsq.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/stsq.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/stsq.conf) |
| styleart 重写（第三方，按原文件名标注） | `styleart.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/styleart.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/styleart.conf) |
| symbolab 重写（第三方，按原文件名标注） | `symbolab.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/symbolab.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/symbolab.conf) |
| tangerine 重写（第三方，按原文件名标注） | `tangerine.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/tangerine.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/tangerine.conf) |
| tenpercent 重写（第三方，按原文件名标注） | `tenpercent.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/tenpercent.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/tenpercent.conf) |
| thunder 重写（第三方，按原文件名标注） | `thunder.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/thunder.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/thunder.conf) |
| todo 重写（第三方，按原文件名标注） | `todo.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/todo.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/todo.conf) |
| tokcam 重写（第三方，按原文件名标注） | `tokcam.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/tokcam.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/tokcam.conf) |
| tpp 重写（第三方，按原文件名标注） | `tpp.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/tpp.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/tpp.conf) |
| ttd 重写（第三方，按原文件名标注） | `ttd.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/ttd.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/ttd.conf) |
| tutu 重写（第三方，按原文件名标注） | `tutu.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/tutu.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/tutu.conf) |
| usage 重写（第三方，按原文件名标注） | `usage.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/usage.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/usage.conf) |
| varlens 重写（第三方，按原文件名标注） | `varlens.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/varlens.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/varlens.conf) |
| vcus 重写（第三方，按原文件名标注） | `vcus.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/vcus.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/vcus.conf) |
| vista 重写（第三方，按原文件名标注） | `vista.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/vista.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/vista.conf) |
| vivacut 重写（第三方，按原文件名标注） | `vivacut.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/vivacut.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/vivacut.conf) |
| vsco 重写（第三方，按原文件名标注） | `vsco.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/vsco.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/vsco.conf) |
| wallcraft 重写（第三方，按原文件名标注） | `wallcraft.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/wallcraft.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/wallcraft.conf) |
| watchout 重写（第三方，按原文件名标注） | `watchout.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/watchout.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/watchout.conf) |
| wdfq 重写（第三方，按原文件名标注） | `wdfq.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/wdfq.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/wdfq.conf) |
| wdqd 重写（第三方，按原文件名标注） | `wdqd.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/wdqd.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/wdqd.conf) |
| wechatad 重写（第三方，按原文件名标注） | `wechatad.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/wechatad.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/wechatad.conf) |
| wechatread 重写（第三方，按原文件名标注） | `wechatread.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/wechatread.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/wechatread.conf) |
| weiboad 重写（第三方，按原文件名标注） | `weiboad.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/weiboad.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/weiboad.conf) |
| wfw 重写（第三方，按原文件名标注） | `wfw.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/wfw.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/wfw.conf) |
| whqsy 重写（第三方，按原文件名标注） | `whqsy.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/whqsy.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/whqsy.conf) |
| widgetsmith 重写（第三方，按原文件名标注） | `widgetsmith.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/widgetsmith.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/widgetsmith.conf) |
| wnbsq 重写（第三方，按原文件名标注） | `wnbsq.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/wnbsq.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/wnbsq.conf) |
| wnds 重写（第三方，按原文件名标注） | `wnds.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/wnds.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/wnds.conf) |
| wscsds 重写（第三方，按原文件名标注） | `wscsds.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/wscsds.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/wscsds.conf) |
| wsgj 重写（第三方，按原文件名标注） | `wsgj.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/wsgj.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/wsgj.conf) |
| wxds 重写（第三方，按原文件名标注） | `wxds.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/wxds.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/wxds.conf) |
| wxts 重写（第三方，按原文件名标注） | `wxts.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/wxts.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/wxts.conf) |
| xcz 重写（第三方，按原文件名标注） | `xcz.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/xcz.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/xcz.conf) |
| xiaoying 重写（第三方，按原文件名标注） | `xiaoying.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/xiaoying.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/xiaoying.conf) |
| xjsp 重写（第三方，按原文件名标注） | `xjsp.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/xjsp.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/xjsp.conf) |
| xmind 重写（第三方，按原文件名标注） | `xmind.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/xmind.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/xmind.conf) |
| xmlyad 重写（第三方，按原文件名标注） | `xmlyad.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/xmlyad.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/xmlyad.conf) |
| xrk 重写（第三方，按原文件名标注） | `xrk.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/xrk.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/xrk.conf) |
| xxg 重写（第三方，按原文件名标注） | `xxg.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/xxg.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/xxg.conf) |
| xxyq 重写（第三方，按原文件名标注） | `xxyq.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/xxyq.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/xxyq.conf) |
| xyts 重写（第三方，按原文件名标注） | `xyts.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/xyts.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/xyts.conf) |
| xzj 重写（第三方，按原文件名标注） | `xzj.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/xzj.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/xzj.conf) |
| xzjhz 重写（第三方，按原文件名标注） | `xzjhz.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/xzjhz.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/xzjhz.conf) |
| yczjz 重写（第三方，按原文件名标注） | `yczjz.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/yczjz.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/yczjz.conf) |
| ydcd 重写（第三方，按原文件名标注） | `ydcd.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/ydcd.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/ydcd.conf) |
| ydybj 重写（第三方，按原文件名标注） | `ydybj.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/ydybj.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/ydybj.conf) |
| yitian 重写（第三方，按原文件名标注） | `yitian.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/yitian.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/yitian.conf) |
| yiyan 重写（第三方，按原文件名标注） | `yiyan.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/yiyan.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/yiyan.conf) |
| yjhl 重写（第三方，按原文件名标注） | `yjhl.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/yjhl.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/yjhl.conf) |
| ymjz 重写（第三方，按原文件名标注） | `ymjz.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/ymjz.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/ymjz.conf) |
| youtube 重写（第三方，按原文件名标注） | `youtube.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/youtube.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/youtube.conf) |
| ypjj 重写（第三方，按原文件名标注） | `ypjj.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/ypjj.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/ypjj.conf) |
| ysyk 重写（第三方，按原文件名标注） | `ysyk.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/ysyk.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/ysyk.conf) |
| yunting 重写（第三方，按原文件名标注） | `yunting.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/yunting.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/yunting.conf) |
| ywqpy 重写（第三方，按原文件名标注） | `ywqpy.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/ywqpy.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/ywqpy.conf) |
| zebra 重写（第三方，按原文件名标注） | `zebra.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/zebra.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/zebra.conf) |
| zhitiao 重写（第三方，按原文件名标注） | `zhitiao.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/zhitiao.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/zhitiao.conf) |
| zhsck 重写（第三方，按原文件名标注） | `zhsck.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/zhsck.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/zhsck.conf) |
| zjbj 重写（第三方，按原文件名标注） | `zjbj.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/zjbj.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/zjbj.conf) |
| zjsg 重写（第三方，按原文件名标注） | `zjsg.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/zjsg.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/zjsg.conf) |
| zt 重写（第三方，按原文件名标注） | `zt.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/zt.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/zt.conf) |
| ztc 重写（第三方，按原文件名标注） | `ztc.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/ztc.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/ztc.conf) |
| zymk 重写（第三方，按原文件名标注） | `zymk.conf` | [安装 / 订阅](https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/QuantumultX/Plugin/zymk.conf) | [查看](https://github.com/elnfnoosm/iOS_network/blob/main/QuantumultX/Plugin/zymk.conf) |

中文名称按已登记来源标注；第三方重写的名称取自原文件名，未做功能翻译，以免误导。

**安装方法**：复制「安装链接」，在 App 里通过导入远程插件 / 模块 / 覆写使用；
也可以先在浏览器打开链接确认内容。该目录每次同步会更新为上游最新版，
请不要在这里手工放自己的文件（会被覆盖）。

## 三、其他说明

### 目录结构

- `Config/`：配置模板与三大规则说明，首次生成后不覆盖
- `Plugin/`：插件 / 模块 / 覆写，每天自动同步上游最新版
- 旧文件（2022–2023 年的历史内容）已于 2026-11-12 全量清理，清单与恢复方法见 [`LEGACY_CLEANUP_REPORT.md`](https://github.com/elnfnoosm/iOS_network/blob/main/LEGACY_CLEANUP_REPORT.md)

### 更新机制

- 每天北京时间约 05:30 自动同步一次
- 来源登记在仓库根目录的 [`sources.json`](https://github.com/elnfnoosm/iOS_network/blob/main/sources.json)，增减来源只改这一处
- 运行状态见 [`SOURCES_STATUS.md`](https://github.com/elnfnoosm/iOS_network/blob/main/SOURCES_STATUS.md)，老文件体检见 [`DEAD_LINKS.md`](https://github.com/elnfnoosm/iOS_network/blob/main/DEAD_LINKS.md)

### 来源与参考（保留原作者与许可声明）

- [deezertidal/QuantumultX-Rewrite（277 个重写，已全量同步）](https://github.com/deezertidal/QuantumultX-Rewrite)
- [curtinp118/QuantumultX（MIT 配置模板）](https://github.com/curtinp118/QuantumultX)
- [ACL4SSR/ACL4SSR（分流规则）](https://github.com/ACL4SSR/ACL4SSR)
- [89996462/Quantumult-X（旧重写引用的脚本源，仍活跃）](https://github.com/89996462/Quantumult-X)
- [app2smile/rules（模块与规则，仍活跃）](https://github.com/app2smile/rules)
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
