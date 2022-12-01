let obj = JSON.parse($response.body);

  obj.level = 5,
  obj.exp = 0,
  obj.vip.memberid = 20,
  obj.vip.expire_time = 1739785014,
  obj.vip.has_ad = 0,
  obj.total_buy = 1

$done({body: JSON.stringify(obj)});
