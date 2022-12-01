let obj = JSON.parse($response.body);

obj = {
  "request_date_ms": 1660324774251,
  "request_date": "2022-08-12T17:19:34Z",
  "subscriber": {
    "non_subscriptions": {
    },
    "first_seen": "2022-08-12T16:17:04Z",
    "original_application_version": "1052",
    "other_purchases": {
    },
    "management_url": "https:\/\/apps.apple.com\/account\/subscriptions",
    "subscriptions": {
      "taio_1499_1y_2w0_std_v2": {
        "is_sandbox": false,
        "ownership_type": "PURCHASED",
        "billing_issues_detected_at": null,
        "period_type": "trial",
        "expires_date": "2029-08-26T16:28:27Z",
        "grace_period_expires_date": null,
        "unsubscribe_detected_at": null,
        "original_purchase_date": "2022-08-12T16:28:27Z",
        "purchase_date": "2022-08-12T16:28:27Z",
        "store": "app_store"
      }
    },
    "entitlements": {
      "full-version": {
        "grace_period_expires_date": null,
        "purchase_date": "2022-08-12T16:28:27Z",
        "product_identifier": "taio_1499_1y_2w0_std_v2",
        "expires_date": "2029-08-26T16:28:27Z"
      }
    },
    "original_purchase_date": "2022-08-12T16:16:50Z",
    "original_app_user_id": "$RCAnonymousID:3eb1216e78ca4771948cfd0a8569858",
    "last_seen": "2022-08-12T16:17:04Z"
  }
}
$done({body: JSON.stringify(obj)});
