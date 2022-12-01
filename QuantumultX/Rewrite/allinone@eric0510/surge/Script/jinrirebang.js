let obj = JSON.parse($response.body);

obj = {
  "error": false,
  "data": {
    "vip_expired": "2566584780",
    "is_vip_now": true,
    "is_vip": "1"
  },
  "status": 200
}
$done({body: JSON.stringify(obj)});
