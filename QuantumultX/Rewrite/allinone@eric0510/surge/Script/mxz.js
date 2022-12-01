/*
密小助解锁VIP，恋爱话语
https://apic.yzhiyin.com/index.php/v4/new/vip/memberVip
*/

let obj = JSON.parse($response.body);

obj.data = {
    "is_sign": 0,
    "bind_num": 3,
    "end_time": 4077190060,
    "create_time": 1581871195,
    "update_time": 1581871195,
    "remark": "",
    "free_search": 0
}
$done({body: JSON.stringify(obj)});
