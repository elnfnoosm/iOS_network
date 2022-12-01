/*
彩云小译解锁VIP
https://api.interpreter.caiyunai.com/v1/user/
*/

let obj = JSON.parse($response.body);
obj.user.biz["is_xy_vip"] = true,
obj.user.biz["xy_vip_expire"] = 4078109706
$done({body: JSON.stringify(obj)});
