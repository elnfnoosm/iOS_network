/*
酷我音乐高品质下载需要搭配VIP脚本使用
https?:\/\/musicpay\.kuwo.cn\/music\.pay\?uid=\d+
MITM = vip1.kuwo.cn
*/

let url = $request.url.replace(/uid=\d+/g, "uid=1");
$done({url});
