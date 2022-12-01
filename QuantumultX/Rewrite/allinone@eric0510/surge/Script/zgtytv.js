/*
中国体育tv观看VIP视频

http://rest.zhibo.tv/room/get-room-info-v430

*/


let obj = JSON.parse($response.body);
obj.data.anchor["userHas"] = 1
$done({body: JSON.stringify(obj)});
