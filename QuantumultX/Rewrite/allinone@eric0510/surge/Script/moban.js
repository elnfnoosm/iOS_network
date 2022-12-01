/*
魔板视频，通话录音，扫描王，秒拍证件照，文字识别五大APP同时解锁VIP
http://micro-tool-api.foundao.com/orderPayCenterService/user/userInfo
*/


let obj = JSON.parse($response.body);

obj.data.vipExpireTime = "2029-03-29 22:18:59",
obj.data.isVip = 1

$done({body: JSON.stringify(obj)});
