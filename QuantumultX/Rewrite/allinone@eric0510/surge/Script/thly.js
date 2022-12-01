let obj = JSON.parse($response.body);

obj = 
{
  "msg": "",
  "data": {
    "last_login": {
      "version": "1.9",
      "time": "2000-10-28 01:33:52",
      "mask": "29DC0129-6961-4272-9E85-EB8E654794EB",
      "ip": "1.25.219.80",
      "platform": "1"
    },
    "user": {
      "max_online": "1",
      "status": "0",
      "code": "86",
      "create_time": "2022-10-28 01:15:13",
      "apple_name": "",
      "src_phone": "13888888888",
      "unique_id": "1ac0e5adf26ed1bf51de52c2c27a4046",
      "expire_time": "2099-10-31 01:15:56",
      "caller_zero": "8613888888888",
      "point": "0",
      "balance": "0.00",
      "record_type": "2",
      "id": "264120",
      "src_code": "86",
      "caller": "8613888888888",
      "email": "",
      "token": "",
      "phone": "13888888888",
      "number_id": "0",
      "area": null,
      "avatar": "",
      "client_ip": "1.25.219.80",
      "is_expired": "0"
    },
    "ali_generating": "0"
  },
  "code": 200
}
$done({body: JSON.stringify(obj)});
