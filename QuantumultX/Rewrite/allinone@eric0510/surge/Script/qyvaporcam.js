/*
轻颜相机和蒸汽波相机
https://(commerce-api|pay).(faceu|wecut).(com|mobi)/(commerce|apple)/(iosAppVerifyReceipt.php|v1/subscription/user_info)
*/

const path1 = "/commerce/v1/subscription/user_info";
const path2 = "/apple/iosAppVerifyReceipt.php";

let obj = JSON.parse($response.body);

if ($request.url.indexOf(path1) != -1){
obj.data.end_time = 4258741258,
obj.data.flag = true,
obj.data.is_cancel_subscribe = true
}
if ($request.url.indexOf(path2) != -1){
obj.data = {"isValid":1,"expiresTs":4528741580}
}
$done({body: JSON.stringify(obj)});
