/*
documents
https://license.pdfexpert.com/api/2.0/documents/subscription/refresh
hostname：license.pdfexpert.com
*/



var obj = JSON.parse($response.body);

obj ={
  "originalTransactionId": 20001113828089,
  "inAppStates": [
    {
      "originalTransactionId": 20001113828089,
      "productId": "com.readdle.ReaddleDocsIPad.subscription.month10_allusers",
      "subscriptionState": "trial",
      "productName": "subscription",
      "subscriptionExpirationDate": "08:52 27\/09\/2099",
      "isEligibleForIntroPeriod": false,
      "subscriptionAutoRenewStatus": "autoRenewOff",
      "type": "subscription",
      "isInGracePeriod": false,
      "isInBillingRetryPeriod": false,
      "entitlements": [
      ]
    },
    {
      "originalTransactionId": "0000",
      "entitlements": [
      ],
      "type": "custom purchase",
      "productId": "documents6-user"
    }
  ],
  "chargingPlatform": "iOS AppStore",
  "receiptStatus": "ok",
  "bundleId": "com.readdle.ReaddleDocsIPad",
  "receiptId": 1495937666000,
  "statisticsInfo": {
    "events": [
    ]
  }
}
$done({body: JSON.stringify(obj)});
