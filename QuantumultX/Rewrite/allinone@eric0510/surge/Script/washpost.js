/*
wash post邮票
https://login.washingtonpost.com/identity/oauth/v1/profile
*/

let obj = JSON.parse($response.body);

  obj = {
  "gracePeriod": 345600000,
  "deviceStore": "apple",
  "profile_pic_url": "",
  "title": "Premium Digital",
  "expirationDate": "2099-04-12T00:47:28",
  "source": "DEVICE",
  "currentRateID": 504,
  "loginId": "",
  "displayName": "",
  "loginProvider": "",
  "shortTitle": "Premium Digital",
  "isActive": true,
  "subscriptionID": "24200653",
  "subAcctMgmt": "28,PREMIUM,504,DEVICE,SUBSCRIBER,f,DEVICE,AETYPE=CD",
  "subdata": "OK",
  "sourceType": "FREE",
  "subSource": "App Store",
  "email": "",
  "secureLoginID": "",
  "iddata": "OK",
  "firstName": "",
  "institutional": false,
  "subDuration": "0.00/9999 days",
  "product": "PREMIUM",
  "subStatus": "A",
  "subAttributes": {
    "AETYPE": "CD"
  },
  "lastName": ""
}

$done({body:JSON.stringify(obj)});
