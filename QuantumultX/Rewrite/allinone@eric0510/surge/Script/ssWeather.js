/*
实时天气解锁Pro
https://subs.platforms.team/apple/verifyTransaction
*/

var obj = JSON.parse($response.body);

obj = {
  "error": 0,
  "data": {
    "is_offer_eligible": true,
    "may_expire": false,
    "hash": "e147cea47fe12ef2b5f785fg91d10i6e",
    "consumable_inapp": [],
    "is_valid": true,
    "in_app": {
      "com.apalonapps.wlf.7d_3dt_sub00004": {
        "expired": false,
        "may_expire": true,
        "cancelled": false,
        "is_valid": true,
        "is_trial": true,
        "is_intro": false,
        "transaction_id": "720000412199999",
        "purchase_date_ms": "1577882954000",
        "expires_date_ms": "4070953795000",
        "remaining_time_ms": "222259196000"
      }
    }
  }
}
$done({body: JSON.stringify(obj)});
