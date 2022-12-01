/*
quizlet解锁
正则https://api.quizlet.com/3.4/users/
hostname：api.quizlet.com
*/


body = $response.body.replace(/\"_isEligibleForFreeTrial\":true/, "\"_isEligibleForFreeTrial\":false").replace(/\"type\":0/, "\"type\":1")
$done({body});
