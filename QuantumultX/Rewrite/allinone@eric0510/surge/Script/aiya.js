/*
哎呀直播解锁收费房间，你懂的，开车软件
下载链接https://feq.xyz/1mdy9.html
https://api.hlo.xyz/api/public/\?service=Live.checkLive
*/


var obj = JSON.parse($response.body);

obj = {
  "ret": 200,
  "data": {
    "msg": "",
    "info": [
      {
        "type": "0",
        "type_val": "",
        "type_msg": ""
      }
    ],
    "code": 0
  },
  "msg": ""
}
$done({body: JSON.stringify(obj)});
