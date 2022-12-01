/*
圈子记账VIP
https:\/\/quanzi\.jizhangapp\.com\/(book|profile|vip\/inapp\/index).*
*/


const path1 = "/profile";
const path2 = "/vip/inapp/index";
const path3 = "/book/";

let obj = JSON.parse($response.body);

if ($request.url.indexOf(path1) != -1){
obj.data.vipStatus = 1,
obj.data.foreverVip = true,
obj.data.vipInfo.vipState = 1,
obj.data.vipInfo.state = 1,
obj.data.vipInfo.foreverVip = true,
obj.data.vipInfo.newVipState = 1
}      
if ($request.url.indexOf(path2) != -1){
obj.data.vipStatus = 1,
obj.data.foreverVip = true,
obj.data.vipInfo.vipState = 1,
obj.data.vipInfo.state = 1,
obj.data.vipInfo.foreverVip = true,
obj.data.vipInfo.newVipState = 1
}  
if ($request.url.indexOf(path3) != -1){
 obj.data["exportable"] = true,
 obj.data["vipState"] = true
}

$done({body:JSON.stringify(obj)});
 
