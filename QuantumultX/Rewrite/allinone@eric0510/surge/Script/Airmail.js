/*
Airmail解锁Pro
机器码APP内自行查看，不加也可以，但是会匹配到其它的链接
https://api.revenuecat.com/v1/subscribers/机器码
*/

var obj = JSON.parse($response.body);

obj = {"request_date":"2020-03-24T02:31:10Z","request_date_ms":1585017070122,"subscriber":{"entitlements":{"Airmail Premium":{"expires_date":"2099-03-27T01:40:49Z","product_identifier":"Airmail_iOS_Monthly","purchase_date":"2020-03-24T01:40:49Z"}},"first_seen":"2020-03-24T01:38:23Z","last_seen":"2020-03-24T02:27:54Z","management_url":"itms-apps://apps.apple.com/account/subscriptions","non_subscriptions":{},"original_app_user_id":"ED6BCB31-3A76-4CD5-B814-E79AC872BEF7","original_application_version":"535","original_purchase_date":"2020-03-24T01:34:19Z","other_purchases":{},"subscriptions":{"Airmail_iOS_Monthly":{"billing_issues_detected_at":null,"expires_date":"2099-03-27T01:40:49Z","is_sandbox":false,"original_purchase_date":"2020-03-24T01:40:49Z","period_type":"trial","purchase_date":"2020-03-24T01:40:49Z","store":"app_store","unsubscribe_detected_at":null}}}}
$done({body: JSON.stringify(obj)});
