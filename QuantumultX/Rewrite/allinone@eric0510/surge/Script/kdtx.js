/*
卡点特效视频制作VIP
https://api.kadiantexiao.com/api/v1/users/infos
*/

let obj = JSON.parse($response.body);

obj.data.isVip = 1,
obj.data.type = 1,
obj.data.expirationTime = "2099-12-14到期"

$done({body: JSON.stringify(obj)});
