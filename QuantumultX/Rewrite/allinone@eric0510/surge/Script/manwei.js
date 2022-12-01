/*
漫威无限解锁订阅--Eric(转载请注明出处)
免费分享，纯属娱乐，切勿盗卖
分享地址：https://t.me/iOS_Eric
https://.*.com/marvel/services
hostname=new.marvelunlimitedresources.com,services.mu.163.com
*/

body = $response.body.replace(/subscription_grace_time=\d+/, "subscription_grace_time=2022121400000").replace(/subscription_expire_time=\d+/, "subscription_expire_time=2022121400000").replace(/subscription_type=\w+/, "subscription_type=1")
$done({body});
