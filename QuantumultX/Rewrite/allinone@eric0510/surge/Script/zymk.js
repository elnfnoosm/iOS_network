/*
知音漫客更新解锁VIP全部限制及VIP付费限制
https://get(user|comic)info-globalapi.zymk.cn/app_api/v5/get(user|comic)info/
hostname=*.zymk.cn
*/

const path1 = "/app_api/v5/getuserinfo/";
const path2 = "/app_api/v5/getcomicinfo/";

let obj = JSON.parse($response.body);

if ($request.url.indexOf(path1) != -1){
obj.data.Uviptime = 4603438021000,
obj.data.Ulevel = 5,
obj.data.isvip = 1
}
if ($request.url.indexOf(path2) != -1){
body = $response.body.replace(/"price":\d+/g, "\"price\":0").replace(/"download_price":\d+/g, "\"download_price\":0")
$done({body});
}
$done({body: JSON.stringify(obj)});
