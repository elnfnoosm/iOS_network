
let obj = JSON.parse($response.body);

obj = {
  "error": 0,
  "universalPurchaseAvailable": true,
  "informUserOfPendingBonus": false,
  "licenseStatus": 1,
  "isSubscribed": true,
  "unlockExpiry": 63114076800,
  "isSubscribedMobile": true,
  "licenseStatusMobile": 1,
  "unlockExpiryMobile": 63114076800
}
$done({body: JSON.stringify(obj)});
