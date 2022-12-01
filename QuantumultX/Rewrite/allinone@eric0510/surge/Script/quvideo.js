/*
趣视频制作VIP
https://cm.szsszykj.com/interface/GetVip.php
*/


let obj = JSON.parse($response.body);

obj.Content.end_time = "2099-03-14 19:37:09",
obj.Content.type = 2
$done({body: JSON.stringify(obj)});
