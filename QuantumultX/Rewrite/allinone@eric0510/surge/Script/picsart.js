/*
美易Pro解锁
https://api.meiease.cn/users/show/me.json
*/


let obj = JSON.parse($response.body);
obj.subscription.granted = "true";
$done({body: JSON.stringify(obj)});
