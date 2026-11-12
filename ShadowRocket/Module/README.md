# ShadowRocket 模块

在 ShadowRocket 里这类文件叫「模块」，扩展名一般是 .module。
不同软件叫法不同：Loon 叫插件、Surge 和 ShadowRocket 叫模块、Stash 叫覆写、QuantumultX 叫重写。

**这个目录下的文件由每日同步任务自动更新为上游最新版。**
不要在这里手工改文件，改了下次会被覆盖；要改就改根目录的 `sources.json`。

## 已登记的同步来源

- `Script-Hub-Org/Script-Hub`（main）— ShadowRocket 模块
- `limbopro/Adblock4limbo`（main）— MIT 去广告模块
- `GMOogway/shadowrocket-rules`（master）— GPL-3.0 分流模块

## 更多参考（只放链接，不自动同步）

- [GMOogway/shadowrocket-rules（模块与规则）](https://github.com/GMOogway/shadowrocket-rules)
- [zhouzhouprogram/Shadowrocket-ADBlock-Rules（去广告）](https://github.com/zhouzhouprogram/Shadowrocket-ADBlock-Rules)
- [limbopro/Adblock4limbo（MIT，跨平台模板）](https://github.com/limbopro/Adblock4limbo)
- [Script-Hub-Org/Script-Hub（跨平台转换）](https://github.com/Script-Hub-Org/Script-Hub)
- [Loyalsoldier/v2ray-rules-dat（每日规则数据）](https://github.com/Loyalsoldier/v2ray-rules-dat)

## 格式转换

想在 Loon / Surge / Stash / QuantumultX / ShadowRocket 之间互相转换规则和模块，
用 [Script-Hub](https://github.com/Script-Hub-Org/Script-Hub) 或 [Sub-Store](https://github.com/sub-store-org/Sub-Store)。
