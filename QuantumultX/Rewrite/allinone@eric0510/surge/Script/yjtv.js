/*
瑜伽TV解锁VIP及课程
http://ygec.fit-time.com/ftec/getPayMember
*/


var obj = JSON.parse($response.body);

obj = {"status":1,"payMember":{"id":41275,"userId":6559461,"failureTime":4077440706000,"createTime":1584454994000,"payTime":1584454994000,"vip":1}}
$done({body: JSON.stringify(obj)});
