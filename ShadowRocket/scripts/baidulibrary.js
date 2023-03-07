/*
[rewrite_local]

# ～ 百度文库☆解锁VIP文档阅读权限（2022-10-17）@ddgksf2013
^https:\/\/appwk\.baidu\.com\/naapi\/user\/getinfo url script-response-body https://raw.githubusercontent.com/chengkongyiban/shadowrocket/main/scripts/baidulibrary.js

[mitm]

hostname=appwk.baidu.com

***********************************/

let ddgksf2013 = JSON.parse($response.body);
ddgksf2013.data.vip.base_vip_info={"uid":12345678,"type":2,"start_time":1622222200,"end_time":4622222200,"is_vip":1,"remain_day":999,"pro_total":5,"normal_total":5};
$done({ body: JSON.stringify(ddgksf2013) });
