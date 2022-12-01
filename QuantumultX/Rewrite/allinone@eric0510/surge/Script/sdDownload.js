/*
闪电下载地址http://bbs.flashdown365.com/download.html
http://app.flashdown365.com/ios/login
hostname=app.flashdown365.com
*/

let obj = JSON.parse($response.body);
obj.body.isvip = true
$done({body: JSON.stringify(obj)})
