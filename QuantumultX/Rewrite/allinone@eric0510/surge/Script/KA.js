/*
酷安去好物推荐-Eric
https:\/\/api\.coolapk\.com\/v6\/feed\/detail.*
hostname=api.coolapk.com
*/

let obj = JSON.parse($response.body);

delete obj.data.include_goods
$done({body: JSON.stringify(obj)});
