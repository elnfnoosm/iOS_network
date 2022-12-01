/*
陆琪讲故事
*/

let obj = JSON.parse($response.body);

obj.data={
    "login_num": 1,
    "nickname": "我是你爸爸",
    "is_vip": 1,
    "vip_endtime": 4081672705,
  }

$done({body: JSON.stringify(obj)});
