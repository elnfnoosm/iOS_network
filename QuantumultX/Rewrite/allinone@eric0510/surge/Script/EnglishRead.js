/*
英语读书解锁vip--Alex0510(Mr.Eric)
http://duoting.tatatimes.com/tataeraapi/api.s\?h=QueryVipUser
*/

var obj = JSON.parse($response.body);
obj = {"isVip":true,"code":200,"expireDays":99999}
$done({body: JSON.stringify(obj)});
