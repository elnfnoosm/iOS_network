/*
vue
https:\/\/api\.vuevideo\.net\/api\/v1\/users\/.+\/profile
*/

body = $response.body.replace(/\"isPremium\":false/, "\"isPremium\":true")
$done({body});
