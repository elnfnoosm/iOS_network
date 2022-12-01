/*
now冥想vip
https://nowapi.navoinfo.cn/my_vip
*/



let obj = JSON.parse($response.body);

 obj.result.user_info["end_at"] = "2099-03-20 19:28:11",
 obj.result.user_info["vip_over_days"] = 9999,
 obj.result.user_info["vip_over_time"] = "2099-03-20 19:28:11",
 obj.result.user_info["vip_forever"] = "true"

$done({body:JSON.stringify(obj)});
