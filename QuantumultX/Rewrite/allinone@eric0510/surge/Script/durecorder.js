/*
du recorder小熊
http://donate-api.recorder.duapps.com/pay/checkAppleSubscribeReceipt
*/

let obj = JSON.parse($response.body);
obj = {"code":200,"result":[{"expiresDateMs":4591193561000,"productId":"recorder_1_year"}],"serverTime":1590588962026}
$done({body: JSON.stringify(obj)});
