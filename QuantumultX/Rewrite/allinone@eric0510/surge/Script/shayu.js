/*
鲨鱼记账VIP
https://api.shayujizhang.com/account/detail/info/
*/




let obj = JSON.parse($response.body);

obj.data.vip = {"isvip": 1,"days": 999}
   
$done({body: JSON.stringify(obj)});
