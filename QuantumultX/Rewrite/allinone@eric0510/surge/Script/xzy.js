/*
小章鱼Pro
https://shimo.im/octopus-api/users/subscribe
*/

var obj = JSON.parse($response.body);

obj = {
  "user_id": "_274fa975d90df281f240da68cbd7885c",
  "expired_at": 4587738598000
}
$done({body: JSON.stringify(obj)});
