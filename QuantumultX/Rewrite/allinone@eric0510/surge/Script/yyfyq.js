/*
语音翻译器
https://app.xunjiepdf.com/api/v4/memprofile
*/

let obj = JSON.parse($response.body);

obj.userinfo.vip = [{"id":11351014,"auth_type":1,"auth_value":4258741258}]
$done({body: JSON.stringify(obj)});
