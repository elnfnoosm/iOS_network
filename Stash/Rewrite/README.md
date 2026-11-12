# Stash 覆写

在 Stash 里这类文件叫「覆写」，扩展名一般是 .stoverride。
不同软件叫法不同：Loon 叫插件、Surge 和 ShadowRocket 叫模块、Stash 叫覆写、QuantumultX 叫重写。

**这个目录下的文件由每日同步任务自动更新为上游最新版。**
不要在这里手工改文件，改了下次会被覆盖；要改就改根目录的 `sources.json`。

## 已登记的同步来源

- `Script-Hub-Org/Script-Hub`（main）— Stash 覆写

## 更多参考（只放链接，不自动同步）

- [deezertidal/stash-override（覆写与规则）](https://github.com/deezertidal/stash-override)
- [MetaCubeX/meta-rules-dat（mihomo 规则数据）](https://github.com/MetaCubeX/meta-rules-dat)
- [sub-store-org/Sub-Store（订阅与格式转换）](https://github.com/sub-store-org/Sub-Store)
- [limbopro/Adblock4limbo（MIT，跨平台模板）](https://github.com/limbopro/Adblock4limbo)
- [Script-Hub-Org/Script-Hub（跨平台转换）](https://github.com/Script-Hub-Org/Script-Hub)
- [Loyalsoldier/v2ray-rules-dat（每日规则数据）](https://github.com/Loyalsoldier/v2ray-rules-dat)

## 格式转换

想在 Loon / Surge / Stash / QuantumultX / ShadowRocket 之间互相转换规则和模块，
用 [Script-Hub](https://github.com/Script-Hub-Org/Script-Hub) 或 [Sub-Store](https://github.com/sub-store-org/Sub-Store)。
