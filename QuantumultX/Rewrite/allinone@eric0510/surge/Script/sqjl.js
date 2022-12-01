/*
刷圈精灵VIP
https://app.jietushuiyin.com/refreshuinfo
*/


let obj = JSON.parse($response.body);
obj.data.userinfo.vip = "1",
obj.data.userinfo.expiretime = "4589083966"
obj.data.userinfo.vip_et = "2115-06-04 17:32:46"

$done({body: JSON.stringify(obj)});
