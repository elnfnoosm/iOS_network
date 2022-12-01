/*
奇妙日程APP
http://fwq.qmlist.net/xzbbserver/userController/loginXzbb
*/


let obj = JSON.parse($response.body);

obj = {
  "resultcode": 200,
  "resultMessage": null,
  "body": [
    {
      "id": 888888,
      "usrEmail": "888888@qq.com",
      "indivSignature": "我是你爸爸",
      "clientType": "iOS",
      "registerDate": "2020/03/12",
      "usrBirthday": "2020/03/12",
      "accountState": true,
      "usrPhoto": null,
      "syncFlag": "I",
      "usrPhone": null,
      "usrPwd": "888888",
      "usrKey": 258150,
      "usrName": null,
      "latestVersion": 0,
      "usrLevel": "0",
      "vipEndDate": "2099/03/13",
      "lastLoginTime": "2020/03/12 11:18:37"
    }
  ]
}
$done({body: JSON.stringify(obj)});
