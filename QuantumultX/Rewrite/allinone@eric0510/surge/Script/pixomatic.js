/*
pixomatic解锁Pro
https://api.pixomatic.us/authorize
*/



let obj = JSON.parse($response.body);

obj.profile["tariff"] = "premium",
obj.profile["plan"] = "yearly",
obj.profile["type"] = "red"
 
$done({body:JSON.stringify(obj)});
