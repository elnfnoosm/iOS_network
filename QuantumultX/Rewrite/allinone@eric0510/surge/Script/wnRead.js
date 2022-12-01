/*
网易蜗牛读书解锁VIP
https://p.du.163.com/gain/readtime/info.json

[URL Rewrite]
https://p.du.163.com/readtime/info.json - reject

*/


let obj = JSON.parse($response.body);

obj.tradeEndTime = 4585037627000

$done({body: JSON.stringify(obj)});
