/*
水印精灵VIP
http://removewatermark.4fqp.com/auth/index
*/


var obj = JSON.parse($response.body);

obj = {
 {
  "msg": "success",
  "data": {
    "nick_name": "sy_1640788023",
    "phone": "17684726444",
    "status": 1,
    "id": 882767,
    "is_vip": 1,
    "end_time": "2099-12-15 12:15:12",
    "channel": "other"
  },
  "code": 200
}
}
$done({body: JSON.stringify(obj)});
