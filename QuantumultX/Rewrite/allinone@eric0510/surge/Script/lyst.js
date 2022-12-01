/*
Langyisi listening 
https://(learnywhere|sapi.beingfine).cn/(api/qt/buy/vip/purchase|v1/UserLaunchAppReport)
*/

const path1 = "/v1/UserLaunchAppReport";
const path2 = "/api/qt/buy/vip/purchase";

let obj = JSON.parse($response.body);

if ($request.url.indexOf(path1) != -1){
obj.data_body.privileges = {"lrc_unlimited_online_playback":{"expire_date":"4444444444000","granted":1},"wordroot":{"expire_date":"4444444444000","user_type":1,"granted":1},"collins":{"expire_date":"4444444444000","granted":1,"collins_user_type":1},"lrc_unlimited_download":{"expire_date":"4444444444000","granted":1}}
obj.data_body.user_status.subscription_count = 1
}
if ($request.url.indexOf(path2) != -1){
obj.data_body.account.vip_type = 1,
obj.data_body.account.expiry = "2110-11-03"
}
$done({body: JSON.stringify(obj)});
