let obj = JSON.parse($response.body);

obj.subscription = {"tier":"Pro","subscriptionActive":true,"expirationDate":4086377500000,"subscriptionType":"yearly","rawSubscriptionType": "AppStore","productId":"com.lukilabs.lukiapp.pro.sub.yearly"},
$done({body: JSON.stringify(obj)});
