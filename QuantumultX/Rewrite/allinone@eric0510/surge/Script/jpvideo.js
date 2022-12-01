/*
荐片播放器vip--Eric
下载地址永久官网: https://jianpian.com/
邀请码：GIAZJ4
http:\/\/api2\.rinhome\.com\/\/api\/vUser\/getUserInfo
hostname：api2.rinhome.com
*/


let obj = JSON.parse($response.body);
obj.user.vip_end = "2099/05/23"
$done({body: JSON.stringify(obj)});
