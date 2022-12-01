/*
乐秀
https:\/\/(owa|cn-ios-buy)\.(videoshowiosglobalserver|enjoy-mobi)\.(com|com\:8095)/zone/1.0.1/iosPayClient/payVerify.htm
*/

var obj = JSON.parse($response.body);

obj = {
  "transaction_id": "160000701160158",
  "msg": "验证成功",
  "current_date": "2020-03-14 04:09:16",
  "isRepeatBind": "0",
  "isBlacklist": "0",
  "original_transaction_id": "160000701160158",
  "expires_date": "2020-03-17 04:01:42 Etc/GMT",
  "product_id": "vip_privilege_monthly_3",
  "is_trial_period": "true",
  "purchase_date": "2020-03-14 04:01:42 Etc/GMT",
  "cancellation_date": "",
  "status": "0"
}
$done({body: JSON.stringify(obj)});
