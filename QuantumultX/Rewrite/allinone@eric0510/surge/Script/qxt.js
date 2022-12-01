/*
https://miniapp.elecredit.com/ucenter_info/
hostname=miniapp.elecredit.com
*/


let obj = JSON.parse($response.body);

obj.data["expiretime"] = "2029-12-15 01:47:23",
obj.data["utype"] = "1"

$done({body: JSON.stringify(obj)});
