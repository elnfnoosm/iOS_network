/*
通话录音解锁vip--Alex0510(Mr.Eric)
下载链接：https://itunes.apple.com/cn/app/id1502359606?mt=8&from=singlemessage&isappinstalled=0
http://micro-tool-api.foundao.com/orderPayCenterService/user/userInfo
hostname=micro-tool-api.foundao.com
*/
let obj = JSON.parse($response.body);
obj.data.isVip = 1,
obj.data.vipExpireTime = "2970-01-01 00:00:00"
$done({body: JSON.stringify(obj)});
