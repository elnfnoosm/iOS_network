/*
口袋故事解锁vip限制
https://47.102.23.164/(api.php/|inner4/ilisten/user/vip:get)
hostname = 47.102.23.164
*/

const path1 = "/api.php/";
const path2 = "/inner4/ilisten/user/vip:get";

let obj = JSON.parse($response.body);

if ($request.url.indexOf(path1) != -1){
obj.vip = 1
}
if ($request.url.indexOf(path2) != -1){
obj.data.is_subscribe = 1,
obj.data.is_vip = 1
}
$done({body: JSON.stringify(obj)});
