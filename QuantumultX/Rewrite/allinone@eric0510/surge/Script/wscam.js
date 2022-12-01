/*
微商水印相机VIP视频无法下载，其它正常
https://user.edujia.com//user/ws/vip/(main/query|query)/info.do
*/

let obj = JSON.parse($response.body);

obj.data.object["isVip"] = 1,

obj.data.object["hjPayResult"] = 1,

obj.data.object["buyType"] = 1,

obj.data.object["hjPayStatus"] = 1,

obj.data.object["expireTime"] = "2029-12-15"
      
      
$done({body: JSON.stringify(obj)});
