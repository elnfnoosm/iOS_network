# 配置与插件来源状态

- 本次检查：2026-11-12 13:20:28 UTC
- 登记来源：13 个，成功 13 个，失败 0 个
- 同步范围：五个平台主目录下的配置目录与各自命名的插件目录
- **不包含** `rule/` 与三大规则 list，这些永远不动

> 这个文件每天都会更新。只要它在变，就说明同步任务还在正常跑。

## 各平台内容

| 平台 | 配置目录 | 文件数 | 插件叫法 | 插件目录 | 文件数 |
| --- | --- | ---: | --- | --- | ---: |
| Loon | `Config/` | 2 | 插件 | `Plugin/` | 2 |
| Surge | `Config/` | 1 | 模块 | `Module/` | 6 |
| Stash | `Config/` | 2 | 覆写 | `Rewrite/` | 2 |
| QuantumultX | `Config/` | 2 | 重写 | `Plugin/` | 45 |
| ShadowRocket | `Config/` | 1 | 模块 | `Module/` | 7 |

## 来源明细

| 来源 | 平台 | 类别 | 文件 | 上游最后提交 | 停更天数 | 结果 |
| --- | --- | --- | ---: | --- | ---: | --- |
| `loon_config_pure` | Loon | config | 1 | 2026-11-12T12:24:49Z | 0 | 正常 |
| `qx_config_template` | QuantumultX | config | 1 | 2026-11-08T00:22:39Z | 4 | 正常 |
| `stash_config_parser` | Stash | config | 1 | 2026-11-12T12:24:49Z | 0 | 正常 |
| `hub_loon` | Loon | plugins | 1 | 2026-11-09T13:54:39Z | 2 | 正常 |
| `hub_surge` | Surge | plugins | 1 | 2026-11-09T13:54:39Z | 2 | 正常 |
| `hub_stash` | Stash | plugins | 1 | 2026-11-09T13:54:39Z | 2 | 正常 |
| `hub_qx` | QuantumultX | plugins | 1 | 2026-11-09T13:54:39Z | 2 | 正常 |
| `hub_sr` | ShadowRocket | plugins | 1 | 2026-11-09T13:54:39Z | 2 | 正常 |
| `limbo_surge` | Surge | plugins | 4 | 2026-11-03T02:03:51Z | 9 | 正常 |
| `limbo_sr` | ShadowRocket | plugins | 2 | 2026-11-03T02:03:51Z | 9 | 正常 |
| `limbo_qx` | QuantumultX | plugins | 3 | 2026-11-03T02:03:51Z | 9 | 正常 |
| `gmoogway_sr` | ShadowRocket | plugins | 3 | 2026-11-12T03:17:02Z | 0 | 正常 |
| `dee_qx_rewrite` | QuantumultX | plugins | 40 | 2026-11-12T12:24:49Z | 0 | 正常 |

## 停更提醒

- `limbo_surge` 已停更 **9 天**（limbopro/Adblock4limbo）
- `limbo_sr` 已停更 **9 天**（limbopro/Adblock4limbo）
- `limbo_qx` 已停更 **9 天**（limbopro/Adblock4limbo）

---

老脚本的失效体检结果见 `DEAD_LINKS.md`，该报告只标记、不删除任何文件。
