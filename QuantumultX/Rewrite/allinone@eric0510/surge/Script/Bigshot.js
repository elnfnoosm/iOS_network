/*
Bigshot解锁VIP
https://api.vnision.com/v1/users/home

*/

let obj = JSON.parse($response.body);
obj.user.member = 8888888,
obj.user.is_member = 1
$done({body: JSON.stringify(obj)});
