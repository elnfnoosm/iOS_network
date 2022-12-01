/*
咔咔弹幕解锁VIP限制
http://api.bibishenqi.com/api/
*/


body = $response.body.replace(/\"is_fee\":1/g, "\"is_fee\":0")
$done({body});
