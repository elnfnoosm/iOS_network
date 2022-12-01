/*
PDF转换器解锁VIP自行测试
https://createpdf.acrobat.com/createpdf/api/users/me/subscriptions
*/


var obj = JSON.parse($response.body);

obj = {"subscriptions":[{"subscription_name":"PDFPack","subscription_level":"Plus","subscription_state":"ACTIVE","sub_ref":"F00D850C7BD4541A9CBA","biz_source":"","billing_term":null}]}
$done({body: JSON.stringify(obj)});
