/*
Python
http://ws.60he.com/user.htm
*/

let obj = JSON.parse($response.body);
obj.data.vip = 999
$done({body: JSON.stringify(obj)});
