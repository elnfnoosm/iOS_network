/*
海豚记账本VIP
https://book.haitunwallet.com/app/(vip/status|account/members)
hostname：book.haitunwallet.com
*/



const path1 = "/vip/status";
const path2 = "/account/members";

let obj = JSON.parse($response.body);

if ($request.url.indexOf(path1) != -1){
    obj.data.status = 1,
    obj.data.endTime = "2029-02-12",
    obj.data.level = 1
 }   
if ($request.url.indexOf(path2) != -1){    
    
    obj.data.owner.vipLevel = 1,
    obj.data.owner.vipStatus = 1
 }
$done({body: JSON.stringify(obj)});
