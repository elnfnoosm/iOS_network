/*
这是两个卡点视频APP解锁VIP
app1:
https://apps.apple.com/cn/app/%E5%8D%A1%E7%82%B9%E8%A7%86%E9%A2%91-%E8%87%AA%E5%8A%A8%E9%9F%B3%E4%B9%90%E5%8D%A1%E7%82%B9%E7%A5%9E%E5%99%A8/id1467514108
app2:
https://apps.apple.com/cn/app/%E5%8D%A1%E7%82%B9%E8%A7%86%E9%A2%91-%E6%96%87%E5%AD%97%E8%A7%86%E9%A2%91%E5%89%AA%E8%BE%91%E5%88%B6%E4%BD%9C/id1460811687
正则:
htt(ps|p)://(t|k)a(v|dian).(easyfeng|nineton).(net|cn)/api/(v1(|.user))/(info|folk/me)
hostname:tav.easyfeng.net,kadian.nineton.cn
*/


const path1 = "/v1/folk/me";
const path2 = "/v1.user/info";

let obj = JSON.parse($response.body);

if ($request.url.indexOf(path1) != -1){
obj.data.serviceEnd = 20992114140526,
obj.data.status = "NORMAL"
  }
if ($request.url.indexOf(path2) != -1){
obj.result.vip_type = 1,
obj.result.vip_end_time = 3983234797,
obj.result.permanent_vip = 1,
obj.result.is_vip = 1,
obj.result.vip_grade = 1
  }
  
$done({body:JSON.stringify(obj)});
