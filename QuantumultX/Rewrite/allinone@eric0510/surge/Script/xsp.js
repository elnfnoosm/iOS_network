/*
小视频神器解锁VIP
https://api.spshenqi.com/xsp.php/Member/me_v1
*/


let obj = JSON.parse($response.body);

obj.data.vipEndDate = "2099-02-10 00:00:00",
obj.data.isVip = "1"
  
$done({body: JSON.stringify(obj)});
