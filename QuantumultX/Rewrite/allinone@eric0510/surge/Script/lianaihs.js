/*
恋爱话术vip--Eric转载注明出处
http:\/\/app\.lianaihuashu\.com\.cn\/\/Api\/Usercenter\/getUserinfo
hostname：app.lianaihuashu.com.cn
*/

let obj = JSON.parse($response.body);
obj.data.is_vip = 1,
obj.data.vip_end = "9970-01-01"
$done({body: JSON.stringify(obj)});
