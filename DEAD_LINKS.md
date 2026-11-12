# 老文件失效体检报告

- 检查时间：2026-11-12 10:03:51 UTC
- 扫描老文件：584 个（五个平台主目录，排除各自新设的配置与插件目录）
- 发现远程引用：721 个，实际探测 150 个
- 确认失效：40 个，无法确认：11 个

> **本报告只标记，不删除、不修改任何文件。**
> `rule/` 与三大规则 list 不在扫描范围内，永远不动。
> 探测在 GitHub 服务器上执行，比本地网络判断可靠。

## 一、确认失效的远程引用（第一批清理候选）

| 文件 | 远程地址 | 状态 |
| --- | --- | --- |
| `QuantumultX/Rewrite/allinone@eric0510/surge/Module/js.sgmodule` | http://api2.rinhome.com//api/vUser/getUserInfo,requires-body=1,max-size=0,script-path=https://raw.githubuserco | 404 |
| `QuantumultX/Rewrite/allinone@eric0510/surge/Module/agenda.sgmodule` | https://accounts.agenda.com/users/.*/license,requires-body=1,max-size=0,script-path=https://raw.githubusercont | 401 |
| `QuantumultX/Rewrite/allinone@eric0510/surge/Module/revenucar.sgmodule` | https://accounts.agenda.com/users/.*/license,requires-body=1,max-size=0,script-path=https://raw.githubusercont | 401 |
| `QuantumultX/Rewrite/allinone@eric0510/surge/Module/js.sgmodule` | https://api.getmimo.com/v1/subscriptions,requires-body=1,max-size=0,script-path=https://raw.githubusercontent. | 404 |
| `QuantumultX/Rewrite/allinone@eric0510/surge/Module/js.sgmodule` | https://api.interpreter.caiyunai.com/v1/user/,requires-body=1,max-size=0,script-path=https://raw.githubusercon | 404 |
| `QuantumultX/Rewrite/allinone@eric0510/surge/Script/photosync.js` | https://api.revenuecat.com/v1/,requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/Alex05 | 404 |
| `QuantumultX/Rewrite/allinone@eric0510/surge/Module/js.sgmodule` | https://api.revenuecat.com/v1/receipts,requires-body=1,max-size=0,script-path=https://raw.githubusercontent.co | 404 |
| `QuantumultX/Rewrite/allinone@eric0510/surge/Script/noto.js` | https://api.revenuecat.com/v1/receipts,requires-body=1,max-size=0,script-path=https://raw.githubusercontent.co | 404 |
| `QuantumultX/Rewrite/allinone@eric0510/surge/Module/js.sgmodule` | https://api.revenuecat.com/v1/receipts,requires-body=1,max-size=0,script-path=https://raw.githubusercontent.co | 404 |
| `ShadowRocket/module/bilibili.module` | https://app.bilibili.com/x/v2/search/square,requires-body=1,max-size=3145728,script-path=https://github.com/dd | 404 |
| `ShadowRocket/module/bili.module` | https://app.bilibili.com/x/v2/search/square,script-path=https://raw.githubusercontent.com/chengkongyiban/shado | 404 |
| `QuantumultX/Rewrite/allinone@eric0510/surge/Module/js.sgmodule` | https://chic.mtlab.meitu.com/parse/functions/validateReceipt,requires-body=1,max-size=0,script-path=https://ra | 503 |
| `QuantumultX/Rewrite/allinone@eric0510/surge/Module/revenucar.sgmodule` | https://firebaseremoteconfig.googleapis.com/v1/projects/filebox-ac299/.*,requires-body=1,max-size=0,script-pat | 404 |
| `QuantumultX/Rewrite/allinone@eric0510/surge/Module/jd.module` | https://gitee.com/zero205/JD_tencent_scf/raw/main/jd_kxcdz.js | 403 |
| `QuantumultX/Rewrite/allinone@eric0510/surge/Module/jdhd.module` | https://gitee.com/zero205/JD_tencent_scf/raw/main/jd_kxcdz.js | 403 |
| `Loon/rewrite/startup2.0.plugin` | https://github.com/blackmatrix7/ios_rule_script/raw/master/script/smzdm/smzdm_remove_ads.qxrewrite | 404 |
| `Loon/rewrite/startup2.0.plugin` | https://github.com/blackmatrix7/ios_rule_script/raw/master/script/zhihu/zhihu_plus.qxrewrite | 404 |
| `ShadowRocket/module/txt_read.module` | https://github.com/chengkongyiban/shadowrocket/raw/main/scripts/txt_read.js,script-update-interval=0 | 404 |
| `ShadowRocket/scripts/caixin.js` | https://github.com/ddgksf2013/Cuttlefish/raw/master/Crack/caixin.js | 404 |
| `ShadowRocket/scripts/stay.js` | https://github.com/ddgksf2013/Cuttlefish/raw/master/Script/stay.js | 404 |
| `Loon/rewrite/startup2.0.plugin` | https://github.com/ddgksf2013/Rewrite/raw/master/AdBlock/Amap.conf | 404 |
| `Loon/rewrite/startup2.0.plugin` | https://github.com/ddgksf2013/Rewrite/raw/master/AdBlock/Bilibili.conf | 404 |
| `Loon/rewrite/startup2.0.plugin` | https://github.com/ddgksf2013/Rewrite/raw/master/AdBlock/KeepStyle.conf | 404 |
| `Loon/rewrite/startup2.0.plugin` | https://github.com/ddgksf2013/Rewrite/raw/master/AdBlock/Weibo.conf | 404 |
| `Loon/rewrite/startup2.0.plugin` | https://github.com/ddgksf2013/Rewrite/raw/master/AdBlock/XiaoHongShu.conf | 404 |
| `ShadowRocket/module/bilibili.module` | https://github.com/ddgksf2013/Scripts/raw/master/bilibili_cc.js,script-update-interval=0 | 404 |
| `Loon/rewrite/startup2.0.plugin` | https://github.com/ddgksf2013/Scripts/raw/master/bilibili_json.js | 404 |
| `ShadowRocket/module/bilibili.module` | https://github.com/ddgksf2013/Scripts/raw/master/bilibili_json.js,script-update-interval=0 | 404 |
| `ShadowRocket/module/bilibili.module` | https://github.com/ddgksf2013/Scripts/raw/master/bilibili_proto.js,script-update-interval=0 | 404 |
| `QuantumultX/Rewrite/allinone@eric0510/surge/Module/js.sgmodule` | https://license.pdfexpert.com/api/1.0/documents/subscription/refresh,requires-body=1,max-size=0,script-path=ht | 404 |
| `QuantumultX/Rewrite/allinone@eric0510/surge/Module/Script.sgmodule` | https://mobile-api.adguard.com/api/1.0/ios_validate_receipt,requires-body=1,max-size=0,script-path=https://raw | 400 |
| `QuantumultX/Rewrite/allinone@eric0510/surge/Module/js.sgmodule` | https://mobile-api.adguard.com/api/1.0/ios_validate_receipt,requires-body=1,max-size=0,script-path=https://raw | 400 |
| `QuantumultX/Rewrite/allinone@eric0510/surge/Module/revenucar.sgmodule` | https://mobile-api.adguard.com/api/2.0/ios_validate_receipt/.*,requires-body=1,max-size=0,script-path=https:// | 400 |
| `QuantumultX/Rewrite/allinone@eric0510/surge/Module/Script.sgmodule` | https://mp.weixin.qq.com/mp/getappmsgad,timeout=30,script-path=https://raw.githubusercontent.com/NobyDa/Script | 404 |
| `QuantumultX/Rewrite/allinone@eric0510/surge/Script/wnRead.js` | https://p.du.163.com/gain/readtime/info.json | 401 |
| `QuantumultX/Rewrite/allinone@eric0510/surge/Script/wnRead.js` | https://p.du.163.com/readtime/info.json | 401 |
| `ShadowRocket/module/enhanced_github.module` | https://raw.githubusercontent.com/1/2/master/3.txt | 404 |
| `ShadowRocket/module/enhanced_github.module` | https://raw.githubusercontent.com/1/2/master/3.txtenhanced-github | 404 |
| `QuantumultX/Rewrite/Symbolab.js` | https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/Symbolab.js | 404 |
| `QuantumultX/Rewrite/allinone@eric0510/surge/Module/bytq.sgmodule` | https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/bytq.js,script-update-interval=0 | 404 |

## 二、无法确认（超时或网络问题，先不要删）

- `QuantumultX/Rewrite/allinone@eric0510/surge/Module/Script.sgmodule` → http://sub.info,script-path=https://raw.githubusercontent.com/TributePaulWalker/Profiles/main/JavaSc（无法确认（HTTPConnectionPool(host='sub.info,script））
- `QuantumultX/Rewrite/allinone@eric0510/surge/Module/js.sgmodule` → http://ws.60he.com/user.htm,requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com（无法确认（HTTPConnectionPool(host='ws.60he.com', p））
- `QuantumultX/Rewrite/allinone@eric0510/surge/Script/picsart.js` → https://api.meiease.cn/users/show/me.json（无法确认（HTTPSConnectionPool(host='api.meiease.cn））
- `QuantumultX/Rewrite/allinone@eric0510/surge/Module/js.sgmodule` → https://api.vnision.com/v1/users/home,requires-body=1,max-size=0,script-path=https://raw.githubuserc（无法确认（HTTPSConnectionPool(host='api.vnision.co））
- `QuantumultX/Rewrite/allinone@eric0510/surge/Module/js.sgmodule` → https://api.xsbapp.com/users/,requires-body=1,max-size=0,script-path=https://raw.githubusercontent.c（无法确认（HTTPSConnectionPool(host='api.xsbapp.com））
- `QuantumultX/Rewrite/allinone@eric0510/surge/Module/Script.sgmodule` → https://api1.dobenge.cn/api/user/getuserinfo,requires-body=1,max-size=0,script-path=https://raw.gith（无法确认（HTTPSConnectionPool(host='api1.dobenge.c））
- `QuantumultX/Rewrite/allinone@eric0510/surge/Module/js.sgmodule` → https://api1.dobenge.cn/api/user/getuserinfo,requires-body=1,max-size=0,script-path=https://raw.gith（无法确认（HTTPSConnectionPool(host='api1.dobenge.c））
- `QuantumultX/Rewrite/allinone@eric0510/surge/Module/Script.sgmodule` → https://app.xunjiepdf.com/api/v4/memprofile,requires-body=1,max-size=0,script-path=https://raw.githu（无法确认（HTTPSConnectionPool(host='app.xunjiepdf.））
- `QuantumultX/Rewrite/allinone@eric0510/surge/Module/js.sgmodule` → https://app.xunjiepdf.com/api/v4/memprofile,requires-body=1,max-size=0,script-path=https://raw.githu（无法确认（HTTPSConnectionPool(host='app.xunjiepdf.））
- `QuantumultX/Rewrite/allinone@eric0510/surge/Module/revenucar.sgmodule` → https://app.xunjiepdf.com/api/v4/memprofile,requires-body=1,max-size=0,script-path=https://raw.githu（无法确认（HTTPSConnectionPool(host='app.xunjiepdf.））
- `QuantumultX/Rewrite/cuttlefish-oneinall.js` → https://ocd0522.tk/ddgksf2013/Cuttlefish/raw/branch/master/Crack/revenuecat.js（无法确认（HTTPSConnectionPool(host='ocd0522.tk', p））

## 三、内容完全重复的文件组（零风险清理候选）

同一组里的文件内容一模一样，删掉多余的副本不会影响功能。

**第 1 组（2 个）**
- `QuantumultX/Rewrite/allinone@eric0510/surge/Module/jd.module`
- `QuantumultX/Rewrite/allinone@eric0510/surge/Module/jdhd.module`

**第 2 组（2 个）**
- `QuantumultX/Rewrite/allinone@maro162926/AllinOne/README.md`
- `QuantumultX/Rewrite/allinone@maro162926/README.md`


## 四、清理规则

1. 先看第三节的重复文件组，这是最安全的第一批。
2. 再看第一节的失效引用，确认对应脚本确实没人用了再处理。
3. 第二节的「无法确认」一律先留着，等下次体检结果稳定再说。
4. 每批最多处理 10 个文件，处理前先列出完整路径清单并逐条确认。
