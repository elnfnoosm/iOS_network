# 旧文件清理报告

- 执行时间：2026-11-12 14:07:50 UTC
- 判定规则：属于历史旧目录，且 **超过 183 天（半年）没有更新**
- 本次删除：**580 个文件**，合计 9.11 MB
- 保留（未超期）：0 个
- 路径冲突跳过：0 个（仅在大小写不敏感的磁盘上可能出现，GitHub 服务器上为 0）

> **三大规则 list 与整个 `rule/` 目录没有、也永远不会进入本任务的处理范围。**
> 五个平台的 `Config/` 与各自命名的插件目录、各主 README、状态页全部保留。

## 一、被删内容去哪找替代

| 原目录 / 文件 | 本仓库内的替代 |
| --- | --- |
| `QuantumultX/Rewrite/（旧重写，522 个）` | QuantumultX/Plugin/（Script-Hub 重写 1 个 + limbopro 去广告 4 个 + deezertidal 重写 277 个全量） |
| `ShadowRocket/module/（旧模块，35 个）` | ShadowRocket/Module/（Script-Hub 模块 + limbopro 去广告 2 个 + GMOogway 分流 3 个） |
| `ShadowRocket/scripts/（旧脚本，21 个）` | Script-Hub / Sub-Store 转换模块；脚本本体请到仍活跃的上游仓库获取 |
| `Loon/rewrite/（旧重写，1 个）` | Loon/Plugin/（Script-Hub Loon 插件）与 Loon/Config/（精简配置模板） |
| `Stash/config-elnf.yaml（旧配置，1 个）` | Stash/Config/（配置解析片段）与 Stash/Rewrite/（Script-Hub 覆写） |

被删的旧内容里，约 91% 的远程引用在清理前仍能打开，
但文件本体已经 3 年以上没有维护。下面这些上游仓库目前仍然活跃，
需要某个具体脚本时可直接到原仓库获取（本仓库不再镜像第三方脚本）：

- [89996462/Quantumult-X](https://github.com/89996462/Quantumult-X) — 旧 QX 重写引用的 ycdz 脚本源，仍可访问
- [Alex0510/Eric](https://github.com/Alex0510/Eric) — allinone@eric0510 合集引用的脚本源，仍可访问
- [NobyDa/Script](https://github.com/NobyDa/Script) — BoxJs / ShadowRocket 脚本，仍在维护
- [app2smile/rules](https://github.com/app2smile/rules) — QX 模块与规则，仍在维护
- [Script-Hub-Org/Script-Hub](https://github.com/Script-Hub-Org/Script-Hub) — 五种平台原生格式转换模块
- [sub-store-org/Sub-Store](https://github.com/sub-store-org/Sub-Store) — 订阅转换与格式转换

日常使用请直接看五个平台主文件夹里的 `README.md`，
里面的配置链接和插件清单每天自动更新。

## 二、怎么恢复（删除不是永久的）

GitHub 的提交历史会完整保留这些文件，随时可以找回：

1. 打开仓库 → 点 **Commits**（提交历史）→ 找到本次清理**之前**的那条提交。
2. 点右侧 **Browse files**，就能看到删除前的完整目录，逐个下载即可。
3. 会用命令行的，在克隆下来的仓库里执行：
   `git checkout <清理前的提交号> -- QuantumultX/Rewrite`
   （把路径换成想恢复的目录即可）。

**注意**：删除后，指向这些旧文件的订阅链接会立即失效。
如果你或别人还在用旧链接，请改成五个平台主 README 里的新链接。

## 三、删除统计

| 目录 | 删除文件数 |
| --- | ---: |
| `QuantumultX/Rewrite` | 522 |
| `ShadowRocket/module` | 35 |
| `ShadowRocket/scripts` | 21 |
| `Loon/rewrite` | 1 |
| `(根级文件)` | 1 |

## 四、完整删除清单（580 个）

每行格式：`路径` — 最后修改日期 — 大小。

### (根级文件)（1 个）

- `Stash/config-elnf.yaml` — 2023-04-25 — 4847 B

### Loon/rewrite（1 个）

- `Loon/rewrite/startup2.0.plugin` — 2023-03-04 — 15914 B

### QuantumultX/Rewrite（522 个）

- `QuantumultX/Rewrite/360xj.js` — 2022-11-30 — 7567 B
- `QuantumultX/Rewrite/AAnybox.js` — 2022-12-01 — 2045 B
- `QuantumultX/Rewrite/APTV.js` — 2022-12-01 — 6509 B
- `QuantumultX/Rewrite/AVOD.js` — 2022-12-01 — 10211 B
- `QuantumultX/Rewrite/Agenda.js` — 2022-12-01 — 3981 B
- `QuantumultX/Rewrite/AnkiNote.js` — 2022-12-01 — 9953 B
- `QuantumultX/Rewrite/Annual.js` — 2022-12-01 — 10798 B
- `QuantumultX/Rewrite/Apollo.js` — 2022-12-01 — 5910 B
- `QuantumultX/Rewrite/Busuu.js` — 2022-12-01 — 7406 B
- `QuantumultX/Rewrite/CARROTWeather.js` — 2022-12-01 — 20471 B
- `QuantumultX/Rewrite/CDAkskt.js` — 2022-12-01 — 27276 B
- `QuantumultX/Rewrite/Chic.js` — 2022-12-01 — 4047 B
- `QuantumultX/Rewrite/Collart.js` — 2022-12-01 — 8425 B
- `QuantumultX/Rewrite/ColorWidgets.js` — 2022-12-01 — 9407 B
- `QuantumultX/Rewrite/ColorfulWidget.js` — 2022-12-01 — 21432 B
- `QuantumultX/Rewrite/Craft.js` — 2022-12-01 — 4411 B
- `QuantumultX/Rewrite/Drafts.js` — 2022-12-01 — 3866 B
- `QuantumultX/Rewrite/EFEKT.js` — 2022-12-01 — 11565 B
- `QuantumultX/Rewrite/Emote.js` — 2022-12-01 — 10041 B
- `QuantumultX/Rewrite/Endel.js` — 2022-12-01 — 3041 B
- `QuantumultX/Rewrite/FitnessView.js` — 2022-12-01 — 9901 B
- `QuantumultX/Rewrite/Focos.js` — 2022-12-01 — 14407 B
- `QuantumultX/Rewrite/Grow.js` — 2022-12-01 — 4869 B
- `QuantumultX/Rewrite/HX.js` — 2022-12-01 — 3647 B
- `QuantumultX/Rewrite/Happy.js` — 2022-12-01 — 4902 B
- `QuantumultX/Rewrite/JX.js` — 2022-12-01 — 813 B
- `QuantumultX/Rewrite/KLBZ.js` — 2022-12-01 — 10868 B
- `QuantumultX/Rewrite/Lifeviewer.js` — 2022-12-01 — 1961 B
- `QuantumultX/Rewrite/Lingokids.js` — 2022-12-01 — 11427 B
- `QuantumultX/Rewrite/MIX.js` — 2022-12-01 — 20119 B
- `QuantumultX/Rewrite/Memrise.js` — 2022-12-01 — 7386 B
- `QuantumultX/Rewrite/MolyCam.js` — 2022-12-01 — 41035 B
- `QuantumultX/Rewrite/MoneyThings.js` — 2022-12-01 — 4979 B
- `QuantumultX/Rewrite/Motivation.js` — 2022-12-01 — 10325 B
- `QuantumultX/Rewrite/Nicegrampro.js` — 2022-12-01 — 737 B
- `QuantumultX/Rewrite/NotBoring.js` — 2022-12-01 — 3871 B
- `QuantumultX/Rewrite/Notability.js` — 2022-12-01 — 5477 B
- `QuantumultX/Rewrite/Now.js` — 2022-12-01 — 7589 B
- `QuantumultX/Rewrite/PDFExpert.js` — 2022-12-01 — 19868 B
- `QuantumultX/Rewrite/PDFViewer.js` — 2022-12-01 — 11574 B
- `QuantumultX/Rewrite/Pandora.js` — 2022-12-01 — 4448 B
- `QuantumultX/Rewrite/Photoshop.js` — 2022-12-01 — 3631 B
- `QuantumultX/Rewrite/Picsart.js` — 2022-12-01 — 4938 B
- `QuantumultX/Rewrite/Picsew.js` — 2022-12-01 — 5693 B
- `QuantumultX/Rewrite/Pillow.js` — 2022-12-01 — 5013 B
- `QuantumultX/Rewrite/Pixelance.js` — 2022-12-01 — 8434 B
- `QuantumultX/Rewrite/Pixelmator.js` — 2022-12-01 — 4124 B
- `QuantumultX/Rewrite/Planny.js` — 2022-12-01 — 5038 B
- `QuantumultX/Rewrite/Proknockout.js` — 2022-12-01 — 10696 B
- `QuantumultX/Rewrite/Quike.js` — 2022-12-01 — 7841 B
- `QuantumultX/Rewrite/README.md` — 2022-12-01 — 71 B
- `QuantumultX/Rewrite/Relens.js` — 2022-12-01 — 10432 B
- `QuantumultX/Rewrite/Retake.js` — 2022-12-01 — 10206 B
- `QuantumultX/Rewrite/Scanner.js` — 2022-12-01 — 4611 B
- `QuantumultX/Rewrite/Seven.conf` — 2022-12-01 — 880 B
- `QuantumultX/Rewrite/Seven.js` — 2022-12-01 — 3754 B
- `QuantumultX/Rewrite/Sorted.js` — 2022-12-01 — 4746 B
- `QuantumultX/Rewrite/SparkMailProCrack.js` — 2022-12-01 — 3029 B
- `QuantumultX/Rewrite/Symbolab.js` — 2022-12-01 — 3598 B
- `QuantumultX/Rewrite/Tangerine.js` — 2022-12-01 — 1456 B
- `QuantumultX/Rewrite/Todo.js` — 2022-12-01 — 3520 B
- `QuantumultX/Rewrite/Usage.js` — 2022-12-01 — 11729 B
- `QuantumultX/Rewrite/VCUS.js` — 2022-12-01 — 5272 B
- `QuantumultX/Rewrite/Varlens.js` — 2022-12-01 — 4174 B
- `QuantumultX/Rewrite/Vista.js` — 2022-12-01 — 4806 B
- `QuantumultX/Rewrite/VivaCutProCrack.js` — 2022-12-01 — 2486 B
- `QuantumultX/Rewrite/Watchoutc.js` — 2022-12-01 — 4845 B
- `QuantumultX/Rewrite/WidgetArt.js` — 2022-12-01 — 4928 B
- `QuantumultX/Rewrite/Wink.js` — 2022-12-01 — 7926 B
- `QuantumultX/Rewrite/XXG.js` — 2022-12-01 — 3400 B
- `QuantumultX/Rewrite/abushuiqiangushi.js` — 2022-12-01 — 4114 B
- `QuantumultX/Rewrite/aihlx.js` — 2022-12-01 — 3604 B
- `QuantumultX/Rewrite/allinone@chxm1023/Collections.conf` — 2023-04-10 — 20284 B
- `QuantumultX/Rewrite/allinone@chxm1023/chxm1023.js` — 2022-12-01 — 4655 B
- `QuantumultX/Rewrite/allinone@eric0510/README.md` — 2022-12-01 — 822 B
- `QuantumultX/Rewrite/allinone@eric0510/surge/Ad-Reject.txt` — 2022-12-01 — 792 B
- `QuantumultX/Rewrite/allinone@eric0510/surge/MITM.TXT` — 2022-12-01 — 6255 B
- `QuantumultX/Rewrite/allinone@eric0510/surge/Module/Script.sgmodule` — 2022-12-01 — 4911 B
- `QuantumultX/Rewrite/allinone@eric0510/surge/Module/SearchArtifact.sgmodule` — 2022-12-01 — 403 B
- `QuantumultX/Rewrite/allinone@eric0510/surge/Module/Signin.sgmodule` — 2022-12-01 — 863 B
- `QuantumultX/Rewrite/allinone@eric0510/surge/Module/agenda.sgmodule` — 2022-12-01 — 325 B
- `QuantumultX/Rewrite/allinone@eric0510/surge/Module/bytq.sgmodule` — 2022-12-01 — 649 B
- `QuantumultX/Rewrite/allinone@eric0510/surge/Module/calculatorAir.sgmodule` — 2022-12-01 — 403 B
- `QuantumultX/Rewrite/allinone@eric0510/surge/Module/get-cookie.sgmodule` — 2022-12-01 — 1295 B
- `QuantumultX/Rewrite/allinone@eric0510/surge/Module/itranslatePro.sgmodule` — 2022-12-01 — 385 B
- `QuantumultX/Rewrite/allinone@eric0510/surge/Module/jd.module` — 2022-12-01 — 11388 B
- `QuantumultX/Rewrite/allinone@eric0510/surge/Module/jdhd.module` — 2022-12-01 — 11388 B
- `QuantumultX/Rewrite/allinone@eric0510/surge/Module/jinrirebang.sgmodule` — 2022-12-01 — 337 B
- `QuantumultX/Rewrite/allinone@eric0510/surge/Module/js.sgmodule` — 2022-12-01 — 9350 B
- `QuantumultX/Rewrite/allinone@eric0510/surge/Module/mbdt.sgmodule` — 2022-12-01 — 653 B
- `QuantumultX/Rewrite/allinone@eric0510/surge/Module/mdsz.sgmodule` — 2022-12-01 — 666 B
- `QuantumultX/Rewrite/allinone@eric0510/surge/Module/mitm.sgmodule` — 2022-12-01 — 7932 B
- `QuantumultX/Rewrite/allinone@eric0510/surge/Module/nicegram.sgmodule` — 2022-12-01 — 356 B
- `QuantumultX/Rewrite/allinone@eric0510/surge/Module/qianji.sgmodule` — 2022-12-01 — 319 B
- `QuantumultX/Rewrite/allinone@eric0510/surge/Module/revenucar.sgmodule` — 2022-12-01 — 8687 B
- `QuantumultX/Rewrite/allinone@eric0510/surge/Module/satellitemap.sgmodule` — 2022-12-01 — 517 B
- `QuantumultX/Rewrite/allinone@eric0510/surge/Module/seven.sgmodule` — 2022-12-01 — 609 B
- `QuantumultX/Rewrite/allinone@eric0510/surge/Module/sevenpro.js` — 2022-12-01 — 604 B
- `QuantumultX/Rewrite/allinone@eric0510/surge/Module/url rewrite.sgmodule` — 2022-12-01 — 4112 B
- `QuantumultX/Rewrite/allinone@eric0510/surge/Module/xxys.sgmodule` — 2022-12-01 — 618 B
- `QuantumultX/Rewrite/allinone@eric0510/surge/Module/zmzjz.sgmodule` — 2022-12-01 — 432 B
- `QuantumultX/Rewrite/allinone@eric0510/surge/Script/Agenda.js` — 2022-12-01 — 346 B
- `QuantumultX/Rewrite/allinone@eric0510/surge/Script/Airmail.js` — 2022-12-01 — 1106 B
- `QuantumultX/Rewrite/allinone@eric0510/surge/Script/Auto Translate Pages.js` — 2022-12-01 — 1477 B
- `QuantumultX/Rewrite/allinone@eric0510/surge/Script/Bigshot.js` — 2022-12-01 — 187 B
- `QuantumultX/Rewrite/allinone@eric0510/surge/Script/Drafts.js` — 2022-12-01 — 2185 B
- `QuantumultX/Rewrite/allinone@eric0510/surge/Script/English.js` — 2022-12-01 — 184 B
- `QuantumultX/Rewrite/allinone@eric0510/surge/Script/EnglishRead.js` — 2022-12-01 — 235 B
- `QuantumultX/Rewrite/allinone@eric0510/surge/Script/KA.js` — 2022-12-01 — 212 B
- `QuantumultX/Rewrite/allinone@eric0510/surge/Script/Pandawallpaper.js` — 2022-12-01 — 1777 B
- `QuantumultX/Rewrite/allinone@eric0510/surge/Script/SearchArtifact.js` — 2022-12-01 — 220 B
- `QuantumultX/Rewrite/allinone@eric0510/surge/Script/Taio.js` — 2022-12-01 — 1325 B
- `QuantumultX/Rewrite/allinone@eric0510/surge/Script/adguard.js` — 2022-12-01 — 246 B
- `QuantumultX/Rewrite/allinone@eric0510/surge/Script/aiya.js` — 2022-12-01 — 423 B
- `QuantumultX/Rewrite/allinone@eric0510/surge/Script/alarmy.js` — 2022-12-01 — 2282 B
- `QuantumultX/Rewrite/allinone@eric0510/surge/Script/apphud.js` — 2022-12-01 — 11209 B
- `QuantumultX/Rewrite/allinone@eric0510/surge/Script/blueboy.js` — 2022-12-01 — 280 B
- `QuantumultX/Rewrite/allinone@eric0510/surge/Script/boluoMusic.js` — 2022-12-01 — 316 B
- `QuantumultX/Rewrite/allinone@eric0510/surge/Script/bsq.js` — 2022-12-01 — 449 B
- `QuantumultX/Rewrite/allinone@eric0510/surge/Script/bubei.js` — 2022-12-01 — 1372 B
- `QuantumultX/Rewrite/allinone@eric0510/surge/Script/bytq.js` — 2022-12-01 — 1425 B
- `QuantumultX/Rewrite/allinone@eric0510/surge/Script/caiyun.js` — 2022-12-01 — 318 B
- `QuantumultX/Rewrite/allinone@eric0510/surge/Script/calculatorari.js` — 2022-12-01 — 37586 B
- `QuantumultX/Rewrite/allinone@eric0510/surge/Script/callrecorder.js` — 2022-12-01 — 9863 B
- `QuantumultX/Rewrite/allinone@eric0510/surge/Script/calm.js` — 2022-12-01 — 7997 B
- `QuantumultX/Rewrite/allinone@eric0510/surge/Script/caml.js` — 2022-12-01 — 3449 B
- `QuantumultX/Rewrite/allinone@eric0510/surge/Script/chiccam.js` — 2022-12-01 — 10277 B
- `QuantumultX/Rewrite/allinone@eric0510/surge/Script/cocorus.js` — 2022-12-01 — 1076 B
- `QuantumultX/Rewrite/allinone@eric0510/surge/Script/cpudasher.js` — 2022-12-01 — 12636 B
- `QuantumultX/Rewrite/allinone@eric0510/surge/Script/craft.js` — 2022-12-01 — 279 B
- `QuantumultX/Rewrite/allinone@eric0510/surge/Script/cs.js` — 2022-12-01 — 13254 B
- `QuantumultX/Rewrite/allinone@eric0510/surge/Script/cubox.js` — 2022-12-01 — 125 B
- `QuantumultX/Rewrite/allinone@eric0510/surge/Script/cyxy.js` — 2022-12-01 — 226 B
- `QuantumultX/Rewrite/allinone@eric0510/surge/Script/dayone.js` — 2022-12-01 — 8131 B
- `QuantumultX/Rewrite/allinone@eric0510/surge/Script/ddCamera.js` — 2022-12-01 — 5205 B
- `QuantumultX/Rewrite/allinone@eric0510/surge/Script/diyidan.js` — 2022-12-01 — 753 B
- `QuantumultX/Rewrite/allinone@eric0510/surge/Script/documents.js` — 2022-12-01 — 1110 B
- `QuantumultX/Rewrite/allinone@eric0510/surge/Script/douyin.js` — 2022-12-01 — 18297 B
- `QuantumultX/Rewrite/allinone@eric0510/surge/Script/drops.js` — 2022-12-01 — 7347 B
- `QuantumultX/Rewrite/allinone@eric0510/surge/Script/duet.js` — 2022-12-01 — 2039 B
- `QuantumultX/Rewrite/allinone@eric0510/surge/Script/duozifx.js` — 2022-12-01 — 566 B
- `QuantumultX/Rewrite/allinone@eric0510/surge/Script/durecorder.js` — 2022-12-01 — 287 B
- `QuantumultX/Rewrite/allinone@eric0510/surge/Script/effie.js` — 2022-12-01 — 1835 B
- `QuantumultX/Rewrite/allinone@eric0510/surge/Script/endel.js` — 2022-12-01 — 2357 B
- `QuantumultX/Rewrite/allinone@eric0510/surge/Script/faceapp.js` — 2022-12-01 — 329 B
- `QuantumultX/Rewrite/allinone@eric0510/surge/Script/fileball.js` — 2022-12-01 — 5361 B
- `QuantumultX/Rewrite/allinone@eric0510/surge/Script/flightradar24.js` — 2022-12-01 — 16213 B
- `QuantumultX/Rewrite/allinone@eric0510/surge/Script/flomo.js` — 2022-12-01 — 2726 B
- `QuantumultX/Rewrite/allinone@eric0510/surge/Script/flow.js` — 2022-12-01 — 2114 B
- `QuantumultX/Rewrite/allinone@eric0510/surge/Script/footprint.js` — 2022-12-01 — 1970 B
- `QuantumultX/Rewrite/allinone@eric0510/surge/Script/fssleep.js` — 2022-12-01 — 566 B
- `QuantumultX/Rewrite/allinone@eric0510/surge/Script/gdVideo.js` — 2022-12-01 — 204 B
- `QuantumultX/Rewrite/allinone@eric0510/surge/Script/gear.js` — 2022-12-01 — 13003 B
- `QuantumultX/Rewrite/allinone@eric0510/surge/Script/gszh.js` — 2022-12-01 — 1589 B
- `QuantumultX/Rewrite/allinone@eric0510/surge/Script/habits.js` — 2022-12-01 — 3151 B
- `QuantumultX/Rewrite/allinone@eric0510/surge/Script/hjvideo.js` — 2022-12-01 — 341 B
- `QuantumultX/Rewrite/allinone@eric0510/surge/Script/htwallet.js` — 2022-12-01 — 512 B
- `QuantumultX/Rewrite/allinone@eric0510/surge/Script/iOS-debugging-tool.js` — 2022-12-01 — 1207 B
- `QuantumultX/Rewrite/allinone@eric0510/surge/Script/iPhoneHousekeeper.js` — 2022-12-01 — 591 B
- `QuantumultX/Rewrite/allinone@eric0510/surge/Script/iPhoneRecording.js` — 2022-12-01 — 395 B
- `QuantumultX/Rewrite/allinone@eric0510/surge/Script/imgplay.js` — 2022-12-01 — 12581 B
- `QuantumultX/Rewrite/allinone@eric0510/surge/Script/infuse.js` — 2022-12-01 — 30837 B
- `QuantumultX/Rewrite/allinone@eric0510/surge/Script/infusePro.js` — 2022-12-01 — 37223 B
- `QuantumultX/Rewrite/allinone@eric0510/surge/Script/instapaper.js` — 2022-12-01 — 179 B
- `QuantumultX/Rewrite/allinone@eric0510/surge/Script/itranslate.js` — 2022-12-01 — 14047 B
- `QuantumultX/Rewrite/allinone@eric0510/surge/Script/jd618.js` — 2022-12-01 — 31375 B
- `QuantumultX/Rewrite/allinone@eric0510/surge/Script/jianshu.js` — 2022-12-01 — 790 B
- `QuantumultX/Rewrite/allinone@eric0510/surge/Script/jinrirebang.js` — 2022-12-01 — 211 B
- `QuantumultX/Rewrite/allinone@eric0510/surge/Script/jmdh.js` — 2022-12-01 — 378 B
- `QuantumultX/Rewrite/allinone@eric0510/surge/Script/jpvideo.js` — 2022-12-01 — 289 B
- `QuantumultX/Rewrite/allinone@eric0510/surge/Script/juzi.js` — 2022-12-01 — 474 B
- `QuantumultX/Rewrite/allinone@eric0510/surge/Script/jxydt.js` — 2022-12-01 — 370 B
- `QuantumultX/Rewrite/allinone@eric0510/surge/Script/kaka.js` — 2022-12-01 — 145 B
- `QuantumultX/Rewrite/allinone@eric0510/surge/Script/kdStory.js` — 2022-12-01 — 413 B
- `QuantumultX/Rewrite/allinone@eric0510/surge/Script/kdsp.js` — 2022-12-01 — 934 B
- `QuantumultX/Rewrite/allinone@eric0510/surge/Script/kdtx.js` — 2022-12-01 — 243 B
- `QuantumultX/Rewrite/allinone@eric0510/surge/Script/kode.js` — 2022-12-01 — 36838 B
- `QuantumultX/Rewrite/allinone@eric0510/surge/Script/kuwo.js` — 2022-12-01 — 797 B
- `QuantumultX/Rewrite/allinone@eric0510/surge/Script/kuwoDownload.js` — 2022-12-01 — 199 B
- `QuantumultX/Rewrite/allinone@eric0510/surge/Script/kuwomusic.js` — 2022-12-01 — 21811 B
- `QuantumultX/Rewrite/allinone@eric0510/surge/Script/lexiu.js` — 2022-12-01 — 632 B
- `QuantumultX/Rewrite/allinone@eric0510/surge/Script/lianaihs.js` — 2022-12-01 — 277 B
- `QuantumultX/Rewrite/allinone@eric0510/surge/Script/lightroom.js` — 2022-12-01 — 1031 B
- `QuantumultX/Rewrite/allinone@eric0510/surge/Script/luqi.js` — 2022-12-01 — 217 B
- `QuantumultX/Rewrite/allinone@eric0510/surge/Script/lyst.js` — 2022-12-01 — 807 B
- `QuantumultX/Rewrite/allinone@eric0510/surge/Script/manwei.js` — 2022-12-01 — 489 B
- `QuantumultX/Rewrite/allinone@eric0510/surge/Script/mbdt.js` — 2022-12-01 — 5029 B
- `QuantumultX/Rewrite/allinone@eric0510/surge/Script/mdsz.js` — 2022-12-01 — 5010 B
- `QuantumultX/Rewrite/allinone@eric0510/surge/Script/mimo.js` — 2022-12-01 — 849 B
- `QuantumultX/Rewrite/allinone@eric0510/surge/Script/mixslxy.js` — 2022-12-01 — 2589 B
- `QuantumultX/Rewrite/allinone@eric0510/surge/Script/mkl.js` — 2022-12-01 — 357 B
- `QuantumultX/Rewrite/allinone@eric0510/surge/Script/moban.js` — 2022-12-01 — 318 B
- `QuantumultX/Rewrite/allinone@eric0510/surge/Script/mxz.js` — 2022-12-01 — 353 B
- `QuantumultX/Rewrite/allinone@eric0510/surge/Script/myCamera.js` — 2022-12-01 — 4617 B
- `QuantumultX/Rewrite/allinone@eric0510/surge/Script/myxj.js` — 2022-12-01 — 372 B
- `QuantumultX/Rewrite/allinone@eric0510/surge/Script/nicegram.js` — 2022-12-01 — 1520 B
- `QuantumultX/Rewrite/allinone@eric0510/surge/Script/notability.js` — 2022-12-01 — 2954 B
- `QuantumultX/Rewrite/allinone@eric0510/surge/Script/noted.js` — 2022-12-01 — 9627 B
- `QuantumultX/Rewrite/allinone@eric0510/surge/Script/noto.js` — 2022-12-01 — 872 B
- `QuantumultX/Rewrite/allinone@eric0510/surge/Script/now.js` — 2022-12-01 — 345 B
- `QuantumultX/Rewrite/allinone@eric0510/surge/Script/nybz.js` — 2022-12-01 — 1739 B
- `QuantumultX/Rewrite/allinone@eric0510/surge/Script/pdf.js` — 2022-12-01 — 2360 B
- `QuantumultX/Rewrite/allinone@eric0510/surge/Script/pdfzhq.js` — 2022-12-01 — 369 B
- `QuantumultX/Rewrite/allinone@eric0510/surge/Script/peak.js` — 2022-12-01 — 854 B
- `QuantumultX/Rewrite/allinone@eric0510/surge/Script/pglive.js` — 2022-12-01 — 397 B
- `QuantumultX/Rewrite/allinone@eric0510/surge/Script/photosync.js` — 2022-12-01 — 883 B
- `QuantumultX/Rewrite/allinone@eric0510/surge/Script/piacata.js` — 2022-12-01 — 4837 B
- `QuantumultX/Rewrite/allinone@eric0510/surge/Script/picsart.js` — 2022-12-01 — 175 B
- `QuantumultX/Rewrite/allinone@eric0510/surge/Script/picsewpanda.js` — 2022-12-01 — 13899 B
- `QuantumultX/Rewrite/allinone@eric0510/surge/Script/pillow.js` — 2022-12-01 — 979 B
- `QuantumultX/Rewrite/allinone@eric0510/surge/Script/pixomatic.js` — 2022-12-01 — 234 B
- `QuantumultX/Rewrite/allinone@eric0510/surge/Script/projects.js` — 2022-12-01 — 3410 B
- `QuantumultX/Rewrite/allinone@eric0510/surge/Script/python.js` — 2022-12-01 — 135 B
- `QuantumultX/Rewrite/allinone@eric0510/surge/Script/pzqz.js` — 2022-12-01 — 289 B
- `QuantumultX/Rewrite/allinone@eric0510/surge/Script/qianji.js` — 2022-12-01 — 1661 B
- `QuantumultX/Rewrite/allinone@eric0510/surge/Script/qire.js` — 2022-12-01 — 34774 B
- `QuantumultX/Rewrite/allinone@eric0510/surge/Script/qmrc.js` — 2022-12-01 — 737 B
- `QuantumultX/Rewrite/allinone@eric0510/surge/Script/qtEnglish.js` — 2022-12-01 — 780 B
- `QuantumultX/Rewrite/allinone@eric0510/surge/Script/quizlet.js` — 2022-12-01 — 244 B
- `QuantumultX/Rewrite/allinone@eric0510/surge/Script/quvideo.js` — 2022-12-01 — 214 B
- `QuantumultX/Rewrite/allinone@eric0510/surge/Script/qxt.js` — 2022-12-01 — 231 B
- `QuantumultX/Rewrite/allinone@eric0510/surge/Script/qyvaporcam.js` — 2022-12-01 — 558 B
- `QuantumultX/Rewrite/allinone@eric0510/surge/Script/qzjz.js` — 2022-12-01 — 811 B
- `QuantumultX/Rewrite/allinone@eric0510/surge/Script/revenuecat.js` — 2022-12-01 — 172601 B
- `QuantumultX/Rewrite/allinone@eric0510/surge/Script/rrtv.js` — 2022-12-01 — 1619 B
- `QuantumultX/Rewrite/allinone@eric0510/surge/Script/satellitemap.js` — 2022-12-01 — 296 B
- `QuantumultX/Rewrite/allinone@eric0510/surge/Script/sdDownload.js` — 2022-12-01 — 230 B
- `QuantumultX/Rewrite/allinone@eric0510/surge/Script/sdq.js` — 2022-12-01 — 222 B
- `QuantumultX/Rewrite/allinone@eric0510/surge/Script/seven.js` — 2022-12-01 — 3065 B
- `QuantumultX/Rewrite/allinone@eric0510/surge/Script/shayu.js` — 2022-12-01 — 195 B
- `QuantumultX/Rewrite/allinone@eric0510/surge/Script/shimo.js` — 2022-12-01 — 435 B
- `QuantumultX/Rewrite/allinone@eric0510/surge/Script/sleepcycle.js` — 2022-12-01 — 8938 B
- `QuantumultX/Rewrite/allinone@eric0510/surge/Script/smqnw.js` — 2022-12-01 — 523 B
- `QuantumultX/Rewrite/allinone@eric0510/surge/Script/speakit.js` — 2022-12-01 — 732 B
- `QuantumultX/Rewrite/allinone@eric0510/surge/Script/sqjl.js` — 2022-12-01 — 263 B
- `QuantumultX/Rewrite/allinone@eric0510/surge/Script/ssWeather.js` — 2022-12-01 — 765 B
- `QuantumultX/Rewrite/allinone@eric0510/surge/Script/syjl.js` — 2022-12-01 — 384 B
- `QuantumultX/Rewrite/allinone@eric0510/surge/Script/tapeacall.js` — 2022-12-01 — 595 B
- `QuantumultX/Rewrite/allinone@eric0510/surge/Script/test.js` — 2022-12-01 — 220176 B
- `QuantumultX/Rewrite/allinone@eric0510/surge/Script/test2.js` — 2022-12-01 — 1638968 B
- `QuantumultX/Rewrite/allinone@eric0510/surge/Script/thly.js` — 2022-12-01 — 1013 B
- `QuantumultX/Rewrite/allinone@eric0510/surge/Script/todaytop.js` — 2022-12-01 — 348 B
- `QuantumultX/Rewrite/allinone@eric0510/surge/Script/u5.js` — 2022-12-01 — 1170 B
- `QuantumultX/Rewrite/allinone@eric0510/surge/Script/ulysses.js` — 2022-12-01 — 37088 B
- `QuantumultX/Rewrite/allinone@eric0510/surge/Script/unfold.js` — 2022-12-01 — 9897 B
- `QuantumultX/Rewrite/allinone@eric0510/surge/Script/uswps.js` — 2022-12-01 — 211 B
- `QuantumultX/Rewrite/allinone@eric0510/surge/Script/verifyReceipt.js` — 2022-12-01 — 1870794 B
- `QuantumultX/Rewrite/allinone@eric0510/surge/Script/videoleap.js` — 2022-12-01 — 19077 B
- `QuantumultX/Rewrite/allinone@eric0510/surge/Script/videophoto.js` — 2022-12-01 — 13061 B
- `QuantumultX/Rewrite/allinone@eric0510/surge/Script/videotrim.js` — 2022-12-01 — 14140 B
- `QuantumultX/Rewrite/allinone@eric0510/surge/Script/vivacut.js` — 2022-12-01 — 2650 B
- `QuantumultX/Rewrite/allinone@eric0510/surge/Script/vsco.js` — 2022-12-01 — 548 B
- `QuantumultX/Rewrite/allinone@eric0510/surge/Script/vue.js` — 2022-12-01 — 159 B
- `QuantumultX/Rewrite/allinone@eric0510/surge/Script/washpost.js` — 2022-12-01 — 900 B
- `QuantumultX/Rewrite/allinone@eric0510/surge/Script/wdqd.js` — 2022-12-01 — 252 B
- `QuantumultX/Rewrite/allinone@eric0510/surge/Script/weatherminder.js` — 2022-12-01 — 9560 B
- `QuantumultX/Rewrite/allinone@eric0510/surge/Script/wnRead.js` — 2022-12-01 — 255 B
- `QuantumultX/Rewrite/allinone@eric0510/surge/Script/wolongad.js` — 2022-12-01 — 221 B
- `QuantumultX/Rewrite/allinone@eric0510/surge/Script/wps.js` — 2022-12-01 — 1437 B
- `QuantumultX/Rewrite/allinone@eric0510/surge/Script/wscam.js` — 2022-12-01 — 398 B
- `QuantumultX/Rewrite/allinone@eric0510/surge/Script/xsp.js` — 2022-12-01 — 223 B
- `QuantumultX/Rewrite/allinone@eric0510/surge/Script/xunjie.js` — 2022-12-01 — 412 B
- `QuantumultX/Rewrite/allinone@eric0510/surge/Script/xxys.js` — 2022-12-01 — 1126 B
- `QuantumultX/Rewrite/allinone@eric0510/surge/Script/xxysad.js` — 2022-12-01 — 184 B
- `QuantumultX/Rewrite/allinone@eric0510/surge/Script/xzj.js` — 2022-12-01 — 37628 B
- `QuantumultX/Rewrite/allinone@eric0510/surge/Script/xzy.js` — 2022-12-01 — 230 B
- `QuantumultX/Rewrite/allinone@eric0510/surge/Script/yanetflix.js` — 2022-12-01 — 399 B
- `QuantumultX/Rewrite/allinone@eric0510/surge/Script/ydybj.js` — 2022-12-01 — 478 B
- `QuantumultX/Rewrite/allinone@eric0510/surge/Script/yjtv.js` — 2022-12-01 — 301 B
- `QuantumultX/Rewrite/allinone@eric0510/surge/Script/youdao.js` — 2022-12-01 — 2499 B
- `QuantumultX/Rewrite/allinone@eric0510/surge/Script/yyfyq.js` — 2022-12-01 — 217 B
- `QuantumultX/Rewrite/allinone@eric0510/surge/Script/yzkt.js` — 2022-12-01 — 1477 B
- `QuantumultX/Rewrite/allinone@eric0510/surge/Script/yzw.js` — 2022-12-01 — 255 B
- `QuantumultX/Rewrite/allinone@eric0510/surge/Script/zgtytv.js` — 2022-12-01 — 190 B
- `QuantumultX/Rewrite/allinone@eric0510/surge/Script/zmzjz.js` — 2022-12-01 — 231 B
- `QuantumultX/Rewrite/allinone@eric0510/surge/Script/zymk.js` — 2022-12-01 — 615 B
- `QuantumultX/Rewrite/allinone@eric0510/surge/Script/zyt.js` — 2022-12-01 — 225 B
- `QuantumultX/Rewrite/allinone@eric0510/surge/block.list` — 2022-12-01 — 2593972 B
- `QuantumultX/Rewrite/allinone@eric0510/surge/notability.js` — 2022-12-01 — 2954 B
- `QuantumultX/Rewrite/allinone@eric0510/surge/rewrite.list` — 2022-12-01 — 29158 B
- `QuantumultX/Rewrite/allinone@maro162926/AllinOne/AllinOne.conf` — 2022-12-01 — 14146 B
- `QuantumultX/Rewrite/allinone@maro162926/AllinOne/README.md` — 2022-12-01 — 115 B
- `QuantumultX/Rewrite/allinone@maro162926/Block100.conf` — 2022-12-01 — 206 B
- `QuantumultX/Rewrite/allinone@maro162926/Emby.conf` — 2022-12-01 — 299 B
- `QuantumultX/Rewrite/allinone@maro162926/JD_qinglong.md` — 2022-12-01 — 1676 B
- `QuantumultX/Rewrite/allinone@maro162926/Manga.conf` — 2022-12-01 — 479 B
- `QuantumultX/Rewrite/allinone@maro162926/NetEase Host.md` — 2022-12-01 — 2301 B
- `QuantumultX/Rewrite/allinone@maro162926/README.md` — 2022-12-01 — 115 B
- `QuantumultX/Rewrite/allinone@maro162926/Wnyd.conf` — 2022-12-01 — 176 B
- `QuantumultX/Rewrite/allinone@maro162926/accuWeather.conf` — 2022-12-01 — 295 B
- `QuantumultX/Rewrite/allinone@maro162926/adobe.conf` — 2022-12-01 — 650 B
- `QuantumultX/Rewrite/allinone@maro162926/alarmy.conf` — 2022-12-01 — 252 B
- `QuantumultX/Rewrite/allinone@maro162926/aloha.conf` — 2022-12-01 — 230 B
- `QuantumultX/Rewrite/allinone@maro162926/audiomack.conf` — 2022-12-01 — 251 B
- `QuantumultX/Rewrite/allinone@maro162926/bazaart.conf` — 2022-12-01 — 233 B
- `QuantumultX/Rewrite/allinone@maro162926/bdyun.conf` — 2022-12-01 — 255 B
- `QuantumultX/Rewrite/allinone@maro162926/bedtimeFan.conf` — 2022-12-01 — 303 B
- `QuantumultX/Rewrite/allinone@maro162926/bilibili.conf` — 2022-12-01 — 3098 B
- `QuantumultX/Rewrite/allinone@maro162926/cleanVpn.conf` — 2022-12-01 — 414 B
- `QuantumultX/Rewrite/allinone@maro162926/colorwidget.conf` — 2022-12-01 — 244 B
- `QuantumultX/Rewrite/allinone@maro162926/curiositystream.conf` — 2022-12-01 — 243 B
- `QuantumultX/Rewrite/allinone@maro162926/dailyYoga.conf` — 2022-12-01 — 312 B
- `QuantumultX/Rewrite/allinone@maro162926/dailyZX.conf` — 2022-12-01 — 225 B
- `QuantumultX/Rewrite/allinone@maro162926/darkroom.conf` — 2022-12-01 — 244 B
- `QuantumultX/Rewrite/allinone@maro162926/daylio.conf` — 2022-12-01 — 235 B
- `QuantumultX/Rewrite/allinone@maro162926/emmo.conf` — 2022-12-01 — 219 B
- `QuantumultX/Rewrite/allinone@maro162926/fabulous.conf` — 2022-12-01 — 235 B
- `QuantumultX/Rewrite/allinone@maro162926/femometer.conf` — 2022-12-01 — 247 B
- `QuantumultX/Rewrite/allinone@maro162926/filmr.conf` — 2022-12-01 — 372 B
- `QuantumultX/Rewrite/allinone@maro162926/fingertime.conf` — 2022-12-01 — 235 B
- `QuantumultX/Rewrite/allinone@maro162926/funimate.conf` — 2022-12-01 — 197 B
- `QuantumultX/Rewrite/allinone@maro162926/funimation.conf` — 2022-12-01 — 228 B
- `QuantumultX/Rewrite/allinone@maro162926/iAm.conf` — 2022-12-01 — 235 B
- `QuantumultX/Rewrite/allinone@maro162926/iLovePDF.conf` — 2022-12-01 — 243 B
- `QuantumultX/Rewrite/allinone@maro162926/iMuseum.conf` — 2022-12-01 — 234 B
- `QuantumultX/Rewrite/allinone@maro162926/judu.conf` — 2022-12-01 — 212 B
- `QuantumultX/Rewrite/allinone@maro162926/kika.conf` — 2022-12-01 — 248 B
- `QuantumultX/Rewrite/allinone@maro162926/lakecolor.conf` — 2022-12-01 — 297 B
- `QuantumultX/Rewrite/allinone@maro162926/liveWallpaperMaker.conf` — 2022-12-01 — 250 B
- `QuantumultX/Rewrite/allinone@maro162926/mcafee.conf` — 2022-12-01 — 272 B
- `QuantumultX/Rewrite/allinone@maro162926/mcafeeVpn.conf` — 2022-12-01 — 237 B
- `QuantumultX/Rewrite/allinone@maro162926/mdmanga.conf` — 2022-12-01 — 238 B
- `QuantumultX/Rewrite/allinone@maro162926/mobileFax.conf` — 2022-12-01 — 230 B
- `QuantumultX/Rewrite/allinone@maro162926/mojo.conf` — 2022-12-01 — 233 B
- `QuantumultX/Rewrite/allinone@maro162926/motivation.conf` — 2022-12-01 — 247 B
- `QuantumultX/Rewrite/allinone@maro162926/musixmatch.conf` — 2022-12-01 — 234 B
- `QuantumultX/Rewrite/allinone@maro162926/myFitnessPal.conf` — 2022-12-01 — 268 B
- `QuantumultX/Rewrite/allinone@maro162926/myPlate.conf` — 2022-12-01 — 268 B
- `QuantumultX/Rewrite/allinone@maro162926/naiyou.conf` — 2022-12-01 — 225 B
- `QuantumultX/Rewrite/allinone@maro162926/nebula.conf` — 2022-12-01 — 348 B
- `QuantumultX/Rewrite/allinone@maro162926/nf_rating.conf` — 2022-12-01 — 685 B
- `QuantumultX/Rewrite/allinone@maro162926/notBoringWeather.conf` — 2022-12-01 — 261 B
- `QuantumultX/Rewrite/allinone@maro162926/notability.conf` — 2022-12-01 — 186 B
- `QuantumultX/Rewrite/allinone@maro162926/noto.conf` — 2022-12-01 — 185 B
- `QuantumultX/Rewrite/allinone@maro162926/nowPonder.conf` — 2022-12-01 — 225 B
- `QuantumultX/Rewrite/allinone@maro162926/pdfViewer.conf` — 2022-12-01 — 231 B
- `QuantumultX/Rewrite/allinone@maro162926/periodHelper.conf` — 2022-12-01 — 297 B
- `QuantumultX/Rewrite/allinone@maro162926/periodLife.conf` — 2022-12-01 — 245 B
- `QuantumultX/Rewrite/allinone@maro162926/photoScanner.conf` — 2022-12-01 — 319 B
- `QuantumultX/Rewrite/allinone@maro162926/photoroom.conf` — 2022-12-01 — 247 B
- `QuantumultX/Rewrite/allinone@maro162926/picCollage.conf` — 2022-12-01 — 231 B
- `QuantumultX/Rewrite/allinone@maro162926/picsart.conf` — 2022-12-01 — 243 B
- `QuantumultX/Rewrite/allinone@maro162926/pixelcut.conf` — 2022-12-01 — 245 B
- `QuantumultX/Rewrite/allinone@maro162926/pixiv.conf` — 2022-12-01 — 173 B
- `QuantumultX/Rewrite/allinone@maro162926/proKnockOut.conf` — 2022-12-01 — 239 B
- `QuantumultX/Rewrite/allinone@maro162926/quizlet.conf` — 2022-12-01 — 195 B
- `QuantumultX/Rewrite/allinone@maro162926/samanga.conf` — 2022-12-01 — 493 B
- `QuantumultX/Rewrite/allinone@maro162926/scannerPro.conf` — 2022-12-01 — 249 B
- `QuantumultX/Rewrite/allinone@maro162926/shadowlink.conf` — 2022-12-01 — 241 B
- `QuantumultX/Rewrite/allinone@maro162926/smallpdf.conf` — 2022-12-01 — 225 B
- `QuantumultX/Rewrite/allinone@maro162926/soundcloud.conf` — 2022-12-01 — 254 B
- `QuantumultX/Rewrite/allinone@maro162926/spotify.conf` — 2022-12-01 — 440 B
- `QuantumultX/Rewrite/allinone@maro162926/tangerine.conf` — 2022-12-01 — 246 B
- `QuantumultX/Rewrite/allinone@maro162926/tenPercent.conf` — 2022-12-01 — 245 B
- `QuantumultX/Rewrite/allinone@maro162926/timebook.conf` — 2022-12-01 — 231 B
- `QuantumultX/Rewrite/allinone@maro162926/tor.conf` — 2022-12-01 — 235 B
- `QuantumultX/Rewrite/allinone@maro162926/unfold.conf` — 2022-12-01 — 309 B
- `QuantumultX/Rewrite/allinone@maro162926/voiceChanger.conf` — 2022-12-01 — 234 B
- `QuantumultX/Rewrite/allinone@maro162926/voloco.conf` — 2022-12-01 — 223 B
- `QuantumultX/Rewrite/allinone@maro162926/vpnUnlimited.conf` — 2022-12-01 — 243 B
- `QuantumultX/Rewrite/allinone@maro162926/waterReminder.conf` — 2022-12-01 — 245 B
- `QuantumultX/Rewrite/allinone@maro162926/wechatLink.conf` — 2022-12-01 — 210 B
- `QuantumultX/Rewrite/allinone@maro162926/widgetSmith.conf` — 2022-12-01 — 267 B
- `QuantumultX/Rewrite/allinone@maro162926/widgethub.conf` — 2022-12-01 — 263 B
- `QuantumultX/Rewrite/allinone@maro162926/workoutForWomen.conf` — 2022-12-01 — 314 B
- `QuantumultX/Rewrite/allinone@maro162926/wps.conf` — 2022-12-01 — 162 B
- `QuantumultX/Rewrite/allinone@maro162926/xunlei.conf` — 2022-12-01 — 248 B
- `QuantumultX/Rewrite/allinone@maro162926/yfjl.conf` — 2022-12-01 — 304 B
- `QuantumultX/Rewrite/allinone@maro162926/yiYing.conf` — 2022-12-01 — 319 B
- `QuantumultX/Rewrite/allinone@maro162926/ytxj.conf` — 2022-12-01 — 255 B
- `QuantumultX/Rewrite/allinone@maro162926/zinnia.conf` — 2022-12-01 — 239 B
- `QuantumultX/Rewrite/arpdf.js` — 2022-12-01 — 4834 B
- `QuantumultX/Rewrite/arqt.js` — 2022-12-01 — 1165 B
- `QuantumultX/Rewrite/artp.js` — 2022-12-01 — 4789 B
- `QuantumultX/Rewrite/baimiao.js` — 2022-12-01 — 4051 B
- `QuantumultX/Rewrite/bdwk.js` — 2022-12-01 — 4072 B
- `QuantumultX/Rewrite/bgjj.js` — 2022-12-01 — 10317 B
- `QuantumultX/Rewrite/bj.js` — 2022-12-01 — 2140 B
- `QuantumultX/Rewrite/blocker.js` — 2022-12-01 — 5387 B
- `QuantumultX/Rewrite/bmhb.js` — 2022-12-01 — 3568 B
- `QuantumultX/Rewrite/boshangxiaomai.js` — 2022-12-01 — 7533 B
- `QuantumultX/Rewrite/budingsuoping.js` — 2022-12-01 — 4461 B
- `QuantumultX/Rewrite/bytq.js` — 2022-12-01 — 4907 B
- `QuantumultX/Rewrite/cdzs.js` — 2022-12-01 — 1182 B
- `QuantumultX/Rewrite/ceo.js` — 2022-12-01 — 3954 B
- `QuantumultX/Rewrite/cpdq.js` — 2022-12-01 — 8155 B
- `QuantumultX/Rewrite/cubox.js` — 2022-12-01 — 1106 B
- `QuantumultX/Rewrite/cuttlefish-oneinall.js` — 2022-12-01 — 34640 B
- `QuantumultX/Rewrite/darkroom.js` — 2022-12-01 — 12734 B
- `QuantumultX/Rewrite/dayone.js` — 2022-12-01 — 4119 B
- `QuantumultX/Rewrite/ddqd.js` — 2022-12-01 — 1168 B
- `QuantumultX/Rewrite/ddsyxj.conf` — 2022-12-01 — 724 B
- `QuantumultX/Rewrite/documents.js` — 2022-12-01 — 36846 B
- `QuantumultX/Rewrite/dsj.js` — 2022-12-01 — 3880 B
- `QuantumultX/Rewrite/duitang.js` — 2022-12-01 — 10333 B
- `QuantumultX/Rewrite/dzqjzz.js` — 2022-12-01 — 7388 B
- `QuantumultX/Rewrite/egdd.js` — 2022-12-01 — 7405 B
- `QuantumultX/Rewrite/ego.js` — 2022-12-01 — 4802 B
- `QuantumultX/Rewrite/fabulous.js` — 2022-12-01 — 21407 B
- `QuantumultX/Rewrite/fileball.js` — 2022-12-01 — 4614 B
- `QuantumultX/Rewrite/fin.js` — 2022-12-01 — 4939 B
- `QuantumultX/Rewrite/fkxxx.js` — 2022-12-01 — 3491 B
- `QuantumultX/Rewrite/flomo.js` — 2022-12-01 — 7710 B
- `QuantumultX/Rewrite/fyjh.js` — 2022-12-01 — 4176 B
- `QuantumultX/Rewrite/gear.js` — 2022-12-01 — 3960 B
- `QuantumultX/Rewrite/gql.js` — 2022-12-01 — 831 B
- `QuantumultX/Rewrite/gzrz.js` — 2022-12-01 — 3617 B
- `QuantumultX/Rewrite/hbetgs.js` — 2022-12-01 — 3756 B
- `QuantumultX/Rewrite/hlzz.js` — 2022-12-01 — 12254 B
- `QuantumultX/Rewrite/hsfs.js` — 2022-12-01 — 6572 B
- `QuantumultX/Rewrite/https.js` — 2022-12-01 — 21337 B
- `QuantumultX/Rewrite/hy.js` — 2022-12-01 — 2193 B
- `QuantumultX/Rewrite/hyrz.js` — 2022-12-01 — 4513 B
- `QuantumultX/Rewrite/hyxc.js` — 2022-12-01 — 10672 B
- `QuantumultX/Rewrite/hyzm.js` — 2022-12-01 — 4096 B
- `QuantumultX/Rewrite/hzk.js` — 2022-12-01 — 3698 B
- `QuantumultX/Rewrite/iScreen.js` — 2022-12-01 — 3586 B
- `QuantumultX/Rewrite/iTranslate.js` — 2022-12-01 — 3371 B
- `QuantumultX/Rewrite/jjyc.js` — 2022-12-01 — 7904 B
- `QuantumultX/Rewrite/jkyd.js` — 2022-12-01 — 3507 B
- `QuantumultX/Rewrite/jssmy.js` — 2022-12-01 — 10786 B
- `QuantumultX/Rewrite/jxydt.js` — 2022-12-01 — 4112 B
- `QuantumultX/Rewrite/keep.js` — 2022-12-01 — 4564 B
- `QuantumultX/Rewrite/kp.js` — 2022-12-01 — 808 B
- `QuantumultX/Rewrite/kprj.js` — 2022-12-01 — 10199 B
- `QuantumultX/Rewrite/ksyzkt.js` — 2022-12-01 — 838 B
- `QuantumultX/Rewrite/kwyy.js` — 2022-12-01 — 22197 B
- `QuantumultX/Rewrite/lcon.js` — 2022-12-01 — 3594 B
- `QuantumultX/Rewrite/lgzj.js` — 2022-12-01 — 3761 B
- `QuantumultX/Rewrite/lightroom.js` — 2022-12-01 — 9543 B
- `QuantumultX/Rewrite/ljtq.js` — 2022-12-01 — 8024 B
- `QuantumultX/Rewrite/llsyd.js` — 2022-12-01 — 1599 B
- `QuantumultX/Rewrite/lovePdf.js` — 2022-12-01 — 10241 B
- `QuantumultX/Rewrite/ltXzj.js` — 2022-12-01 — 3727 B
- `QuantumultX/Rewrite/lths.js` — 2022-12-01 — 3672 B
- `QuantumultX/Rewrite/ly.js` — 2022-12-01 — 2081 B
- `QuantumultX/Rewrite/mbdt.js` — 2022-12-01 — 5576 B
- `QuantumultX/Rewrite/mdsz.js` — 2022-12-01 — 5074 B
- `QuantumultX/Rewrite/memoryhelper.js` — 2022-12-01 — 3670 B
- `QuantumultX/Rewrite/mgtv.js` — 2022-12-01 — 5005 B
- `QuantumultX/Rewrite/mklwt.js` — 2022-12-01 — 8260 B
- `QuantumultX/Rewrite/mksp.js` — 2022-12-01 — 21417 B
- `QuantumultX/Rewrite/mtxx.js` — 2022-12-01 — 2231 B
- `QuantumultX/Rewrite/mubu.js` — 2022-12-01 — 9036 B
- `QuantumultX/Rewrite/myxj.js` — 2022-12-01 — 2396 B
- `QuantumultX/Rewrite/mzbdgs.js` — 2022-12-01 — 3485 B
- `QuantumultX/Rewrite/mzjz.js` — 2022-12-01 — 3667 B
- `QuantumultX/Rewrite/noteb.js` — 2022-12-01 — 34697 B
- `QuantumultX/Rewrite/noto.js` — 2022-12-01 — 11767 B
- `QuantumultX/Rewrite/old.js` — 2022-12-01 — 31552 B
- `QuantumultX/Rewrite/own/pdfexpert.js` — 2022-12-19 — 19970 B
- `QuantumultX/Rewrite/pandavip.js` — 2022-12-01 — 7544 B
- `QuantumultX/Rewrite/percento.js` — 2022-12-01 — 5092 B
- `QuantumultX/Rewrite/photoGrid.js` — 2022-12-01 — 10689 B
- `QuantumultX/Rewrite/pro.js` — 2022-12-01 — 21547 B
- `QuantumultX/Rewrite/ptj.js` — 2022-12-01 — 21999 B
- `QuantumultX/Rewrite/ptyxj.js` — 2022-12-01 — 5023 B
- `QuantumultX/Rewrite/qj.js` — 2022-12-01 — 8090 B
- `QuantumultX/Rewrite/qmzj.js` — 2022-12-01 — 12001 B
- `QuantumultX/Rewrite/qnewm.js` — 2022-12-01 — 8347 B
- `QuantumultX/Rewrite/qnhb.js` — 2022-12-01 — 1050 B
- `QuantumultX/Rewrite/qwtodo.js` — 2022-12-01 — 4264 B
- `QuantumultX/Rewrite/qyxj.js` — 2022-12-01 — 7959 B
- `QuantumultX/Rewrite/qzzvip.js` — 2022-12-01 — 8078 B
- `QuantumultX/Rewrite/rq.js` — 2022-12-01 — 3699 B
- `QuantumultX/Rewrite/sc.js` — 2022-12-01 — 10204 B
- `QuantumultX/Rewrite/sgqmx.js` — 2022-12-01 — 3511 B
- `QuantumultX/Rewrite/sjyjgj.js` — 2022-12-01 — 12191 B
- `QuantumultX/Rewrite/slsp.js` — 2022-12-01 — 3299 B
- `QuantumultX/Rewrite/smbq.js` — 2022-12-01 — 8115 B
- `QuantumultX/Rewrite/smqnw.js` — 2022-12-01 — 4054 B
- `QuantumultX/Rewrite/smxcgj.js` — 2022-12-01 — 21583 B
- `QuantumultX/Rewrite/sndd.js` — 2022-12-01 — 7350 B
- `QuantumultX/Rewrite/stsq.js` — 2022-12-01 — 1844 B
- `QuantumultX/Rewrite/szlr.js` — 2022-12-01 — 3835 B
- `QuantumultX/Rewrite/ttd.js` — 2022-12-01 — 6391 B
- `QuantumultX/Rewrite/ttjz.js` — 2022-12-01 — 4834 B
- `QuantumultX/Rewrite/txwxds.js` — 2022-12-01 — 9464 B
- `QuantumultX/Rewrite/ubestkid.js` — 2022-12-01 — 3572 B
- `QuantumultX/Rewrite/umu168.js` — 2022-12-01 — 3565 B
- `QuantumultX/Rewrite/upp.js` — 2022-12-01 — 9534 B
- `QuantumultX/Rewrite/vision.js` — 2022-12-01 — 11531 B
- `QuantumultX/Rewrite/vivacut.js` — 2022-12-01 — 5057 B
- `QuantumultX/Rewrite/vsco.js` — 2022-12-01 — 1995 B
- `QuantumultX/Rewrite/wechat.js` — 2022-12-01 — 724 B
- `QuantumultX/Rewrite/wfzy.js` — 2022-12-01 — 1649 B
- `QuantumultX/Rewrite/whqsy.js` — 2022-12-01 — 10269 B
- `QuantumultX/Rewrite/widgetSmith.js` — 2022-12-01 — 9952 B
- `QuantumultX/Rewrite/widgets.js` — 2022-12-01 — 3550 B
- `QuantumultX/Rewrite/wjglq.js` — 2022-12-01 — 11809 B
- `QuantumultX/Rewrite/wnbsq.js` — 2022-12-01 — 3754 B
- `QuantumultX/Rewrite/wps.js` — 2022-12-01 — 1535 B
- `QuantumultX/Rewrite/wscsds.js` — 2022-12-01 — 8426 B
- `QuantumultX/Rewrite/wsgj.js` — 2022-12-01 — 8127 B
- `QuantumultX/Rewrite/wyy.list` — 2022-12-01 — 1181 B
- `QuantumultX/Rewrite/wyydcd.js` — 2022-12-01 — 3796 B
- `QuantumultX/Rewrite/xcz.js` — 2022-12-01 — 3863 B
- `QuantumultX/Rewrite/xiangrikui.js` — 2022-12-01 — 7821 B
- `QuantumultX/Rewrite/xiaoyin.js` — 2022-12-01 — 9012 B
- `QuantumultX/Rewrite/xmind.js` — 2022-12-01 — 2139 B
- `QuantumultX/Rewrite/xt.js` — 2022-12-01 — 3763 B
- `QuantumultX/Rewrite/xunlei.js` — 2022-12-01 — 7359 B
- `QuantumultX/Rewrite/xyjsq.js` — 2022-12-01 — 5652 B
- `QuantumultX/Rewrite/xzj.js` — 2022-12-01 — 21806 B
- `QuantumultX/Rewrite/xzjhz.js` — 2022-12-01 — 3450 B
- `QuantumultX/Rewrite/ydsmy.js` — 2022-12-01 — 3997 B
- `QuantumultX/Rewrite/yjhl.js` — 2022-12-01 — 3632 B
- `QuantumultX/Rewrite/yk.js` — 2022-12-01 — 4856 B
- `QuantumultX/Rewrite/ymjz.js` — 2022-12-01 — 3504 B
- `QuantumultX/Rewrite/ypjj.js` — 2022-12-01 — 21465 B
- `QuantumultX/Rewrite/ypjjtq.js` — 2022-12-01 — 9145 B
- `QuantumultX/Rewrite/ysyk.js` — 2022-12-01 — 3791 B
- `QuantumultX/Rewrite/ytxj.js` — 2022-12-01 — 5084 B
- `QuantumultX/Rewrite/yywnds.js` — 2022-12-01 — 7051 B
- `QuantumultX/Rewrite/yzscq.js` — 2022-12-01 — 10683 B
- `QuantumultX/Rewrite/zhsck.js` — 2022-12-01 — 850 B
- `QuantumultX/Rewrite/zjbj.js` — 2022-12-01 — 7142 B
- `QuantumultX/Rewrite/zjsg.js` — 2022-12-01 — 3711 B
- `QuantumultX/Rewrite/zmzjz.js` — 2022-12-01 — 4232 B
- `QuantumultX/Rewrite/zt.js` — 2022-12-01 — 5034 B
- `QuantumultX/Rewrite/ztc.js` — 2022-12-01 — 1185 B
- `QuantumultX/Rewrite/zymk.js` — 2022-12-01 — 6331 B

### ShadowRocket/module（35 个）

- `ShadowRocket/module/AIOSearch.module` — 2023-03-07 — 3675 B
- `ShadowRocket/module/AIOSearchbd.module` — 2023-03-07 — 3864 B
- `ShadowRocket/module/AdBlock.module` — 2023-03-07 — 8916 B
- `ShadowRocket/module/Auto_Join_TF.module` — 2023-03-07 — 1034 B
- `ShadowRocket/module/BankcommAd.module` — 2023-03-07 — 466 B
- `ShadowRocket/module/BiliBiliCheckin.module` — 2023-03-07 — 883 B
- `ShadowRocket/module/LoonGalleryforShadowrocket.module` — 2023-03-07 — 2177 B
- `ShadowRocket/module/NeteaseMusicAd.module` — 2023-03-07 — 506 B
- `ShadowRocket/module/QX_to_Shadowrocket.module` — 2023-03-07 — 1459 B
- `ShadowRocket/module/Remote_Cookie.module` — 2023-03-07 — 2413 B
- `ShadowRocket/module/Tencentvideo.module` — 2023-03-07 — 664 B
- `ShadowRocket/module/TestFlight.module` — 2023-03-07 — 440 B
- `ShadowRocket/module/TextEditorUnlock.module` — 2023-03-07 — 416 B
- `ShadowRocket/module/TikTokUnlockJP.module` — 2023-03-07 — 605 B
- `ShadowRocket/module/UnblockURLinWeChat.module` — 2023-03-07 — 827 B
- `ShadowRocket/module/YTADBlocker.module` — 2023-03-07 — 1188 B
- `ShadowRocket/module/allinone@chxm1023/Collections.sgmodule` — 2023-04-10 — 21615 B
- `ShadowRocket/module/baiducloud.module` — 2023-03-07 — 357 B
- `ShadowRocket/module/bili.module` — 2023-03-07 — 7102 B
- `ShadowRocket/module/biliCC.module` — 2023-03-07 — 409 B
- `ShadowRocket/module/bilibili.module` — 2023-03-07 — 6857 B
- `ShadowRocket/module/bilibiliSkin.module` — 2023-03-07 — 468 B
- `ShadowRocket/module/caixin.module` — 2023-03-07 — 408 B
- `ShadowRocket/module/enhanced_github.module` — 2023-03-07 — 903 B
- `ShadowRocket/module/kuwo.module` — 2023-03-07 — 536 B
- `ShadowRocket/module/qtmusic.module` — 2023-03-07 — 548 B
- `ShadowRocket/module/script-converter.module` — 2023-03-07 — 672 B
- `ShadowRocket/module/stayRemoveAd.module` — 2023-03-07 — 390 B
- `ShadowRocket/module/task.module` — 2023-03-07 — 904 B
- `ShadowRocket/module/test3.module` — 2023-03-07 — 950 B
- `ShadowRocket/module/txt_read.module` — 2023-03-07 — 500 B
- `ShadowRocket/module/weibolite.module` — 2023-03-07 — 2201 B
- `ShadowRocket/module/xmlyCheckin.module` — 2023-03-07 — 757 B
- `ShadowRocket/module/xuexi.module` — 2023-03-07 — 468 B
- `ShadowRocket/module/zjBlockAds.module` — 2023-03-07 — 93137 B

### ShadowRocket/scripts（21 个）

- `ShadowRocket/scripts/Auto_Join_TF.js` — 2023-03-07 — 2648 B
- `ShadowRocket/scripts/Dualsub.js` — 2023-03-07 — 29976 B
- `ShadowRocket/scripts/HifiniSign.js` — 2023-03-07 — 24042 B
- `ShadowRocket/scripts/Loon_to_Shadowrocket.js` — 2023-03-07 — 4029 B
- `ShadowRocket/scripts/QX_to_Shadowrocket.js` — 2023-03-07 — 8777 B
- `ShadowRocket/scripts/Surge_to_Shadowrocket.js` — 2023-03-07 — 3729 B
- `ShadowRocket/scripts/TF_keys.js` — 2023-03-07 — 1067 B
- `ShadowRocket/scripts/Tx.js` — 2023-03-07 — 127 B
- `ShadowRocket/scripts/UnblockURLinWeChat.js` — 2023-03-07 — 86311 B
- `ShadowRocket/scripts/YouTube-proto.js` — 2023-03-07 — 103286 B
- `ShadowRocket/scripts/baidulibrary.js` — 2023-03-07 — 592 B
- `ShadowRocket/scripts/bdcloud.js` — 2023-03-07 — 1805 B
- `ShadowRocket/scripts/bilibiliSign.js` — 2023-03-07 — 38360 B
- `ShadowRocket/scripts/bilibili_cc.js` — 2023-03-07 — 31339 B
- `ShadowRocket/scripts/bilibili_json.js` — 2023-03-07 — 5423 B
- `ShadowRocket/scripts/caixin.js` — 2023-03-07 — 1332 B
- `ShadowRocket/scripts/pornhub.js` — 2023-03-07 — 262 B
- `ShadowRocket/scripts/qtmusic.js` — 2023-03-07 — 646 B
- `ShadowRocket/scripts/stay.js` — 2023-03-07 — 923 B
- `ShadowRocket/scripts/txt_read.js` — 2023-03-07 — 928 B
- `ShadowRocket/scripts/weibo_json.js` — 2023-03-07 — 3818 B


---

本报告由 `tools/cleanup_legacy.py` 生成，属于一次性任务；
之后每天运行的是 `Source_Sync`（同步配置与插件），不会再删除文件。
