/*
豌豆清单VIP
https://www.40sishi.com/list/user/profile
*/

let obj = JSON.parse($response.body);

obj.data.vipState.state = 1,
 obj.data.vipState.forever = true,
obj.data.vipState.expireTime = "4077229842000"
 $done({body: JSON.stringify(obj)});
