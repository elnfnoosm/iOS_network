/*
今日热榜tf版白嫖永久VIP，下载tf版后直接购买即可，不会扣费  
tf链接https://testflight.apple.com/join/51y2x3uo
http://api.tophub.today/account/sync

*/

let obj = JSON.parse($response.body);

obj.data = {
    "vip_expired": "4258965428",
    "is_vip_now": true,
    "is_vip": "1"
  }
$done({body: JSON.stringify(obj)});
