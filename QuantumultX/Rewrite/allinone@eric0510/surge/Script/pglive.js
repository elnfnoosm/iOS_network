/*
苹果社区直播解锁付费房--Eric，转载请注明出处
免费分享，纯属娱乐，切勿盗卖
分享地址：https://t.me/iOS_Eric
下载地址：http://tg.4001112700.com/tgs?code=26J8AG
正则表达式：http:\/\/app\.hust365\.com\/api\/public\/\?service\=Live\.checkLive
hostname：app.hust365.com
*/

body = $response.body.replace(/\"type":"\d"/, '\"type": "0"')
$done({body});
