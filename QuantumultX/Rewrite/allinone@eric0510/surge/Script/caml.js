/*
caml解锁免费听
https://api.calm.com/(me|device|ios/receipt)
*/


const path1 = "/me";
const path2 = "/device";
const path3 = "/ios/receipt";

let key = {"is_refunded": false,
  "in_free_trial_window": true,
  "subscription_plan": "com.calm.yearly.trial.one_week.usd_50",
  "began": "2019-04-22T12:12:54.000Z",
  "is_lifetime": true,
  "valid": true,
  "is_renewable": true,
  "is_in_billing_retry_period": false,
  "will_renew": true,
  "expires": "2099-04-29T12:12:54.000Z",
  "user_id": "KgagpU1URv",
  "type": "ios",
  "is_canceled": false,
  "free_trial_began": "2019-04-22T12:12:54.000Z",
  "coupon_used": false,
  "has_ever_done_free_trial": true,
  "is_free": false,
  "ios_details": {
    "product_id": "com.calm.yearly.trial.one_week.usd_50",
    "began": "2019-04-22T12:12:54.000Z",
    "is_free_trial": true,
    "id": "540000370675471",
    "is_canceled": false,
    "is_renewable": true,
    "free_trial_ended": "2099-04-29T12:12:54.000Z",
    "free_trial_began": "2019-04-22T12:12:54.000Z",
    "will_renew": true,
    "original_transaction_id": "540000370675471",
    "expires": "2099-04-29T12:12:54.000Z"
  },
  "free_trial_ended": "2099-04-29T12:12:54.000Z"
}
let obj = JSON.parse($response.body);

if ($request.url.indexOf(path1) != -1){
obj["subscription"] = key;
}
if ($request.url.indexOf(path2) != -1){
obj["subscription"] = {
  "in_free_trial_window": true,
  "subscription_plan": "com.calm.yearly.trial.one_week.usd_50",
  "began": "2019-04-22T12:12:54.000Z",
  "is_lifetime": true,
  "valid": true,
  "is_renewable": true,
  "is_in_billing_retry_period": false,
  "will_renew": true,
  "expires": "2099-04-29T12:12:54.000Z",
  "user_id": "KgagpU1URv",
  "type": "ios",
  "is_canceled": false,
  "free_trial_began": "2019-04-22T12:12:54.000Z",
  "coupon_used": false,
  "has_ever_done_free_trial": true,
  "is_free": false,
  "ios_details": {
    "product_id": "com.calm.yearly.trial.one_week.usd_50",
    "began": "2019-04-22T12:12:54.000Z",
    "is_free_trial": true,
    "id": "540000370675471",
    "is_canceled": false,
    "is_renewable": true,
    "free_trial_ended": "2099-04-29T12:12:54.000Z",
    "free_trial_began": "2019-04-22T12:12:54.000Z",
    "will_renew": true,
    "original_transaction_id": "540000370675471",
    "expires": "2099-04-29T12:12:54.000Z"
  },
  "free_trial_ended": "2099-04-29T12:12:54.000Z"
}
}
if ($request.url.indexOf(path3) != -1){
obj =  {
  "in_free_trial_window": true,
  "subscription_plan": "com.calm.yearly.trial.one_week.usd_50",
  "began": "2019-04-22T12:12:54.000Z",
  "is_lifetime": true,
  "valid": true,
  "is_renewable": true,
  "is_in_billing_retry_period": false,
  "will_renew": true,
  "expires": "2099-04-29T12:12:54.000Z",
  "user_id": "KgagpU1URv",
  "type": "ios",
  "is_canceled": false,
  "free_trial_began": "2019-04-22T12:12:54.000Z",
  "coupon_used": false,
  "has_ever_done_free_trial": true,
  "is_free": false,
  "ios_details": {
    "product_id": "com.calm.yearly.trial.one_week.usd_50",
    "began": "2019-04-22T12:12:54.000Z",
    "is_free_trial": true,
    "id": "540000370675471",
    "is_canceled": false,
    "is_renewable": true,
    "free_trial_ended": "2099-04-29T12:12:54.000Z",
    "free_trial_began": "2019-04-22T12:12:54.000Z",
    "will_renew": true,
    "original_transaction_id": "540000370675471",
    "expires": "2099-04-29T12:12:54.000Z"
  },
  "free_trial_ended": "2099-04-29T12:12:54.000Z"
}
}
$done({body:JSON.stringify(obj)});
