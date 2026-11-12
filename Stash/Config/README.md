# Stash 配置

这个目录放 Stash 的配置文件（.yaml）。

**同步任务只在文件不存在时补一份模板，不会覆盖你自己改过的配置。**
想恢复成上游模板，把这里的配置文件删掉，下次自动任务会重新补一份。

## 三大基础规则（每日更新，本任务不会改动）

- 国内直连：https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/rule/China-rule/China-rule.list
- 国际加速：https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/rule/Proxy-rule/Proxy-rule.list
- 广告拦截：https://raw.githubusercontent.com/elnfnoosm/iOS_network/main/rule/Reject-rule/Reject-rule.list

这三条链接由仓库原有的 `rule/` 目录提供，很多人正在使用，
配置与插件的同步任务永远不会写 `rule/`。

## 用法

1. 导入本目录里的配置模板（如果有的话）。
2. 填入你自己的节点 / 订阅信息，不要直接使用别人的节点。
3. 在分流规则里引用上面三条链接。

## 更多参考

- [deezertidal/stash-override（覆写与规则）](https://github.com/deezertidal/stash-override)
- [MetaCubeX/meta-rules-dat（mihomo 规则数据）](https://github.com/MetaCubeX/meta-rules-dat)
- [sub-store-org/Sub-Store（订阅与格式转换）](https://github.com/sub-store-org/Sub-Store)
- [limbopro/Adblock4limbo（MIT，跨平台模板）](https://github.com/limbopro/Adblock4limbo)
- [Script-Hub-Org/Script-Hub（跨平台转换）](https://github.com/Script-Hub-Org/Script-Hub)
- [Loyalsoldier/v2ray-rules-dat（每日规则数据）](https://github.com/Loyalsoldier/v2ray-rules-dat)
