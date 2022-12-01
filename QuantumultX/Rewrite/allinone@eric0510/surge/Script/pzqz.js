/*
拍照取字
http://.*.maoqilai.com/get_user_info
*/


let obj = JSON.parse($response.body);

obj.paid_service_list = [{"service_id": 22,"start_time": 1587109531,"end_time": 4618645531,"service_name": "连续包年VIP会员"}]
obj.is_forever = true

$done({body: JSON.stringify(obj)});
