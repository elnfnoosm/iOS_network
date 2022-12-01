/***
脚本功能：鸭奈飞去广告-Eric

[rewrite_local]
^http://pipi.4kya.com//xgapp.php/v3/advert url script-response-body https://raw.githubusercontent.com/Alex0510/Eric/master/surge/Script/yanetflix.js 
[mitm] 
hostname = %APPEND% pipi.4kya.com
***/


let obj = JSON.parse($response.body);

obj = {
  "msg": "广告列表",
  "data": [
  ],
  "code": 1
}
$done({body: JSON.stringify(obj)});
