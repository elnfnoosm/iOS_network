/*
noto笔记解锁Pro--Eric转载注明出处
surge
noto.js = type=http-response,pattern=https://api.revenuecat.com/v1/receipts,requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/Alex0510/Eric/master/surge/Script/noto.js,script-update-interval=0
hostname：api.revenuecat.com
*/

let obj = JSON.parse($response.body);
obj.subscriber.entitlements = {"pro":{"expires_date":"2029-05-26T05:05:04Z","product_identifier":"com.lkzhao.editor.pro.ios.yearly","purchase_date":"2020-05-19T05:05:04Z"}},
obj.subscriber.subscriptions = {"com.lkzhao.editor.pro.ios.yearly":{"billing_issues_detected_at":null,"expires_date":"2029-05-26T05:05:04Z","is_sandbox":false,"original_purchase_date":"2020-05-19T05:05:05Z","period_type":"trial","purchase_date":"2020-05-19T05:05:04Z","store":"app_store","unsubscribe_detected_at":null}}
$done({body: JSON.stringify(obj)});
