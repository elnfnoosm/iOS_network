/*
中医通解锁付费课程--Eric转载注明出处
https://www.gsstargroup.com/riddles/ios/myhome_new.php
hostname：www.gsstargroup.com
*/

body = $response.body.replace(/\"isfree":"0"/g, '\"isfree":"1"')
$done({body});
