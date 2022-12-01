/*
语音转文字助手VIP
https://app.xunjiepdf.com/api/v4/memprofile
*/

let obj = JSON.parse($response.body);

obj.userinfo.vip = [{
      "id": 8886666,
      "auth_type": 2,
      "auth_value": 4076992529
    }]

$done({body: JSON.stringify(obj)});
