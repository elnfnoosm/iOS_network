/*
chicCam相机
https://chic.mtlab.meitu.com/parse/functions/validateReceipt
hostname：chic.mtlab.meitu.com
*/



var obj = JSON.parse($response.body);

obj = {
  "result": {
    "error": {
      "message": null,
      "code": 0
    },
    "result": {
      "status": 0,
      "environment": "Production",
      "receipt": {
        "receipt_type": "Production",
        "app_item_id": 1462999056,
        "receipt_creation_date": "2019-10-17 04:03:34 Etc/GMT",
        "bundle_id": "com.meitu.chic",
        "original_purchase_date": "2019-10-15 22:55:23 Etc/GMT",
        "in_app": [{
          "quantity": "1",
          "purchase_date_ms": "1571284508000",
          "expires_date": "2029-03-02 03:55:08 Etc/GMT",
          "expires_date_pst": "2029-03-02 20:55:08 America/Los_Angeles",
          "is_in_intro_offer_period": "true",
          "transaction_id": "340000388909428",
          "is_trial_period": "true",
          "original_transaction_id": "340000388909428",
          "purchase_date": "2019-10-17 03:55:08 Etc/GMT",
          "product_id": "com.meitu.chic.20001",
          "original_purchase_date_pst": "2019-10-16 20:55:10 America/Los_Angeles",
          "original_purchase_date_ms": "1571284510000",
          "web_order_line_item_id": "340000132636960",
          "expires_date_ms": "1867138901000",
          "purchase_date_pst": "2019-10-16 20:55:08 America/Los_Angeles",
          "original_purchase_date": "2019-10-17 03:55:10 Etc/GMT"
        }],
        "adam_id": 1462999056,
        "receipt_creation_date_pst": "2019-10-16 21:03:34 America/Los_Angeles",
        "request_date": "2019-10-17 07:58:27 Etc/GMT",
        "request_date_pst": "2019-10-17 00:58:27 America/Los_Angeles",
        "version_external_identifier": 832801103,
        "request_date_ms": "1571299107360",
        "original_purchase_date_pst": "2019-10-15 15:55:23 America/Los_Angeles",
        "application_version": "1.0.20.0",
        "original_purchase_date_ms": "1571180123000",
        "receipt_creation_date_ms": "1571285014000",
        "original_application_version": "1.0.20.0",
        "download_id": 74036346389334
      },
      "pending_renewal_info": [{
        "product_id": "com.meitu.chic.20001",
        "original_transaction_id": "340000388909428",
        "auto_renew_product_id": "com.meitu.chic.20001",
        "auto_renew_status": "0"
      }],
      "latest_receipt_info": [{
        "quantity": "1",
        "purchase_date_ms": "1571284508000",
        "expires_date": "2029-03-02 03:55:08 Etc/GMT",
        "expires_date_pst": "2029-03-02 20:55:08 America/Los_Angeles",
        "is_in_intro_offer_period": "true",
        "transaction_id": "340000388909428",
        "is_trial_period": "true",
        "original_transaction_id": "340000388909428",
        "purchase_date": "2019-10-17 03:55:08 Etc/GMT",
        "product_id": "com.meitu.chic.20001",
        "original_purchase_date_pst": "2019-10-16 20:55:10 America/Los_Angeles",
        "subscription_group_identifier": "20546339",
        "original_purchase_date_ms": "1571284510000",
        "web_order_line_item_id": "340000132636960",
        "expires_date_ms": "1867138901000",
        "purchase_date_pst": "2019-10-16 20:55:08 America/Los_Angeles",
        "original_purchase_date": "2019-10-17 03:55:10 Etc/GMT"
      }],
      "latest_receipt": "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"
    }
  }
}
$done({body: JSON.stringify(obj)});
