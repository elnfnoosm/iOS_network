/*
adguard pro
https://mobile-api.adguard.com/api/1.0/ios_validate_receipt
*/

var obj = JSON.parse($response.body);
obj = {"products":[{"product_id":"com.adguard.lifetimePurchase","premium_status":"ACTIVE"}]}
$done({body: JSON.stringify(obj)});
