/*
稿定视频(原小柿饼)解锁VIP
https://api.xsbapp.com/users/
*/

let obj = JSON.parse($response.body);
obj.type = 2,
obj.grade = 1,
obj.expired_at = 4078109706
$done({body: JSON.stringify(obj)});
