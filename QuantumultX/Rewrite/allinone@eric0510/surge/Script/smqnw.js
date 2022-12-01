/*
扫描全能王解锁Pro
https://api-cs.intsig.net/purchase/cs/query_property
*/

let obj = JSON.parse($response.body);

obj.data = {
    "psnl_vip_property": {
      "initial_tm": "1525486358",
      "ys_first_pay": 0,
      "renew_method": "appstore",
      "grade": 1,
      "expiry": "4078109706",
      "last_payment_method": "appstore",
      "ms_first_pay": 0,
      "pending": 0,
      "nxt_renew_tm": "1584508962",
      "auto_renewal": true,
      "level_info": {}
    },
}
$done({body: JSON.stringify(obj)});
