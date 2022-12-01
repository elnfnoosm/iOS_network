/*
加密电话
https://m.4009991000.com/(userCharge|feeQuery).action

*/

const path1 = "/userCharge.action";
const path2 = "/feeQuery.action";

let obj = JSON.parse($response.body);

if ($request.url.indexOf(path1) != -1){
     obj.data.isUserCharged = "1"
 }


if ($request.url.indexOf(path2) != -1){
     obj.data.leftMoney = "770"
 }
 
 $done({body: JSON.stringify(obj)});
