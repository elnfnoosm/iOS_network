/*
新知卫星地图解锁VIP
http://a.xinzhi.space/api/User/getUserByToken
*/

let obj = JSON.parse($response.body);

    obj.data.vip_type = "会员",
    obj.data.vip_expire = "2099-12-14 12:12:15",
    obj.data.is_vip = 1,
    obj.data.vip_day = 99999,

$done({body: JSON.stringify(obj)});

