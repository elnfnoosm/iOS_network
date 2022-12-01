/*
美颜相机解锁素材下载
https://api.meiyan.com/iap/verify.json
*/


var obj = JSON.parse($response.body);

obj = {"meta":{"app_validate_result":0, "bundleName":"pay","code":0,"msg":"success", "enabled":true,"paid":true,"user":null,"id":56990,"subscription":1,"request_uri":"\/iap\/verify","error":""},"response":{"status":1}}
$done({body: JSON.stringify(obj)});
