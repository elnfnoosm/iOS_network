/*
菠萝音乐解锁VIP畅听高品质，无法下载哦
http://app.rnbdj.com/m/user/info
*/


let obj = JSON.parse($response.body);

obj.USER.GROUPNAME = "超级VIP",
obj.USER.ENDTIME = "2099-12-15",
obj.USER.VIPLEVEL = 2,
obj.USER.VIP = 1,
obj.USER.VIPNAME = "超级VIP",
    
$done({body: JSON.stringify(obj)});
