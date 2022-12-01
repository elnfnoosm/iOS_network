/*
三款PDF APP解锁Pro
PDF Expret点睛和PDF Viewer及(Adbole Acrobat reader未测试）

https://(api|license|createpdf).(revenuecat|pdfexpert|acrobat).com/(v1|api/1.0/pdfexpert6|createpdf/api/users/me)/subscri(bers/|(ption(s|/refresh)))
hostname：license.pdfexpert.com, api.revenuecat.com,createpdf.acrobat.com
*/

const path1 = "/v1/subscribers/";
const path2 = "/api/1.0/pdfexpert6/subscription/refresh";
const path3 = "/createpdf/api/users/me/subscriptions";

let obj = JSON.parse($response.body);

if ($request.url.indexOf(path1) != -1){
obj = {
  "request_date_ms": 1585128264049,
  "request_date": "2020-03-25T09:24:24Z",
  "subscriber": {
    "non_subscriptions": {
    },
    "first_seen": "2020-03-25T09:23:51Z",
    "original_application_version": "110449",
    "other_purchases": {
    },
    "management_url": "itms-apps://apps.apple.com/account/subscriptions",
    "subscriptions": {
      "com.pspdfkit.viewer.sub.pro.yearly": {
        "is_sandbox": false,
        "period_type": "trial",
        "billing_issues_detected_at": null,
        "unsubscribe_detected_at": null,
        "expires_date": "2029-04-01T09:18:17Z",
        "original_purchase_date": "2020-03-25T09:18:17Z",
        "purchase_date": "2020-03-25T09:18:17Z",
        "store": "app_store"
      }
    },
    "entitlements": {
      "sub.pro": {
        "expires_date": "2029-04-01T09:18:17Z",
        "product_identifier": "com.pspdfkit.viewer.sub.pro.yearly",
        "purchase_date": "2020-03-25T09:18:17Z"
      }
    },
    "original_purchase_date": "2020-02-06T12:46:55Z",
    "original_app_user_id": "7DC86D3D-E1E8-4D4D-86E4-932977CCA8D6",
    "last_seen": "2020-03-25T09:23:52Z"
  }
}
}
if ($request.url.indexOf(path2) != -1){
obj = {
  "isEligibleForIntroPeriod": false,
  "originalTransactionId": "730000355073823",
  "subscriptionExpirationDate": "02:33 19/08/2029",
  "subscriptionState": "active",
  "subscriptionReceiptId": "1559207582000",
  "isPDFExpert6User": true,
  "subscriptionAutoRenewStatus": "autoRenewOff",
  "isInGracePeriod": false
}
}
if ($request.url.indexOf(path3) != -1){
obj = {
  "subscriptions": [{
    "subscription_name": "PDFPack",
    "subscription_level": "Plus",
    "subscription_state": "ACTIVE",
    "sub_ref": "F00D850C7BD4541A9CBA",
    "biz_source": "",
    "billing_term": null
  }]
}
}
$done({body: JSON.stringify(obj)});
