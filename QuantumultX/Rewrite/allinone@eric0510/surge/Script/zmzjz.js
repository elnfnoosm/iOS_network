/*
最美证件照
https://idphoto-api.camera360.com/settings
hostname=idphoto-api.camera360.com
*/


let obj = JSON.parse($response.body);
obj.iap.is_iap = true,
obj.iap.expired_at = 4444444444
$done({body: JSON.stringify(obj)});
