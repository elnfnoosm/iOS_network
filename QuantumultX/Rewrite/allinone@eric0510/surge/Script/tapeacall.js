/**
 
[Script] 
tapeacall = type=http-response,pattern=^https://api.tapeacall.com/v3/receipt,requires-body=1,max-size=0,script-path= https://raw.githubusercontent.com/Alex0510/Eric/master/surge/Script/tapeacall.js,script-update-interval=0 
 
[MITM] 
hostname = %APPEND% api.tapeacall.com

**/



let obj = JSON.parse($response.body);

obj = {
  "trial_skus": [
  ],
  "transcriptions": {
    "is_active": false,
    "expiry": false
  },
  "account_standing": "good_standing",
  "recordings": {
    "is_active": true,
    "expiry": "2029-01-01T00:00:00Z"
  }

$done({body: JSON.stringify(obj)});
