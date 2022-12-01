/*
变声器解锁--Mr.Eric
下载https://apps.apple.com/us/app/%E5%8F%98%E9%9F%B3%E5%99%A8-%E5%8F%98%E5%A3%B0%E5%99%A8%E7%94%B7%E5%8F%98%E5%A5%B3/id1508258268
https://ytxbdzxviwlx.leanapp.cn/tools/use
hostname=txbdzxviwlx.leanapp.cn
*/


let obj = JSON.parse($response.body);
obj.data = {"priData":"real","lastOrderStatus":"VoiceChanger.AutoSubscriptionVIP.Year","isVip":1,"vipExpireTime":"2099-05-04 00:00:00"}
$done({body: JSON.stringify(obj)});
