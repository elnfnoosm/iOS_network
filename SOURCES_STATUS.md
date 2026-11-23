# 配置与插件来源状态

- 本次检查：2026-11-23 01:54:00 UTC
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
| QuantumultX | `Config/` | 2 | 重写 | `Plugin/` | 283 |
| ShadowRocket | `Config/` | 1 | 模块 | `Module/` | 7 |

## 来源明细

| 来源 | 平台 | 类别 | 文件 | 上游最后提交 | 停更天数 | 结果 |
| --- | --- | --- | ---: | --- | ---: | --- |
| `loon_config_pure` | Loon | config | 1 | 2026-11-23T00:23:49Z | 0 | 正常 |
| `qx_config_template` | QuantumultX | config | 1 | 2026-11-21T11:28:18Z | 1 | 正常 |
| `stash_config_parser` | Stash | config | 1 | 2026-11-23T00:23:47Z | 0 | 正常 |
| `hub_loon` | Loon | plugins | 1 | 2026-11-20T16:13:31Z | 2 | 正常 |
| `hub_surge` | Surge | plugins | 1 | 2026-11-20T16:13:31Z | 2 | 正常 |
| `hub_stash` | Stash | plugins | 1 | 2026-11-20T16:13:31Z | 2 | 正常 |
| `hub_qx` | QuantumultX | plugins | 1 | 2026-11-20T16:13:31Z | 2 | 正常 |
| `hub_sr` | ShadowRocket | plugins | 1 | 2026-11-20T16:13:31Z | 2 | 正常 |
| `limbo_surge` | Surge | plugins | 4 | 2026-11-14T02:29:20Z | 8 | 正常 |
| `limbo_sr` | ShadowRocket | plugins | 2 | 2026-11-14T02:29:20Z | 8 | 正常 |
| `limbo_qx` | QuantumultX | plugins | 4 | 2026-11-14T02:29:20Z | 8 | 正常 |
| `gmoogway_sr` | ShadowRocket | plugins | 3 | 2026-11-22T02:33:03Z | 0 | 正常 |
| `dee_qx_rewrite` | QuantumultX | plugins | 277 | 2026-11-23T00:23:48Z | 0 | 正常 |

## 停更提醒

- `limbo_surge` 已停更 **8 天**（limbopro/Adblock4limbo）
- `limbo_sr` 已停更 **8 天**（limbopro/Adblock4limbo）
- `limbo_qx` 已停更 **8 天**（limbopro/Adblock4limbo）

---

历史旧文件已全量清理，删除清单与替代来源见 `LEGACY_CLEANUP_REPORT.md`；`DEAD_LINKS.md` 保留为历史记录占位。
