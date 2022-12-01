/*
Daily English 
https://dict.eudic.net
*/
body = $response.body.replace(/\"finished\":false/g, "\"finished\":true").replace(/\"finish_star\":0/g, "\"finish_star\":1")
$done({body});
