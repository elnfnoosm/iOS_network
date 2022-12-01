/*
多姿分享是一款考试讲解app解锁vip--Alex0510(Mr.Eric)
正则http://kaoshi.duoziedu.com/mobile/index.php
hostname=kaoshi.duoziedu.com
*/
const path1 = "/mobile/index.php\?act=member_index&op=get_member_info";
const path2 = "/mobile/index.php\?act=index&op=goods_video_play";

let obj = JSON.parse($response.body);
if ($request.url.indexOf(path1) != -1){
obj.datas.member_data.member_level = 9,
obj.datas.member_data.vip_surplus_count = "2099-12-14 14:15:16"
}
if ($request.url.indexOf(path2) != -1){
obj.code = 200
}
$done({body: JSON.stringify(obj)});
