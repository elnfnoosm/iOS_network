
/*
mimo
https://api.getmimo.com/v1/subscriptions
*/

var obj = JSON.parse($response.body);

obj = {
  "isActive": true,
  "source": "ios",
  "status": "active",
  "trialEndAt": "2029-04-17T10:04:16+00:00",
  "subscriptions": [
    {
      "isActive": true,
      "source": "ios",
      "status": "active",
      "trialEndAt": "2029-04-17T10:04:16+00:00",
      "interval": "yearly",
      "intervalCount": 1,
      "activeUntil": "2029-04-17T10:04:16+00:00",
      "createdAt": "2020-04-10T10:04:16+00:00",
      "clientSecret": "",
      "canceledAt": "2020-04-10T11:33:26.5370818+00:00"
    }
  ],
  "interval": "yearly",
  "intervalCount": 1,
  "activeUntil": "2029-04-17T10:04:16+00:00",
  "createdAt": "2020-04-10T10:04:16+00:00",
  "clientSecret": "",
  "canceledAt": "2020-04-10T11:33:26.5370818+00:00"
}
$done({body: JSON.stringify(obj)});
