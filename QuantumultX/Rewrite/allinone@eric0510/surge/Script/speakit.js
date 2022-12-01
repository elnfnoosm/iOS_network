/*
讲话和翻译Pro

https://receipt-validator.herewetest.com/apple/verifyTransaction
*/


var obj = JSON.parse($response.body);

obj = {
 "error": 0,
 "data": {
  "is_valid": true,
  "may_expire": false,
  "is_offer_eligible": true,
  "in_app": {
   "com.appicfun.translatorfree.01m_03dt_china_lim50302": {
    "is_valid": true,
    "cancelled": false,
    "may_expire": true,
    "is_trial": true,
    "is_intro": false,
    "transaction_id": "160000714859422",
    "purchase_date_ms": "1586509872000",
    "expired": false,
    "expires_date_ms": "4586769072000",
    "remaining_time_ms": "4586769072000"
   }
  },
  "consumable_inapp": [],
  "hash": "bd8361c84be97cd76a64e697b2b006ec"
 }
}
$done({body: JSON.stringify(obj)});
