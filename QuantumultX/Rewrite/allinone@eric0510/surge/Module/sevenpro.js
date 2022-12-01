
#!name=seven解锁Pro-Eric首发
#!desc=Mr.Eric转载注明出处，APP需要先试用会员，请删除APP重新安装恢复内购即可

[rewrite_local]
https:\/\/api\.sevenworkouts\.com\/api\/v1\/buyers\/ url reject
https:\/\/api\.sevenworkouts\.com\/api\/v1\/account\/subscription-purchases url reject
[MITM]
hostname = %APPEND% api.sevenworkouts.com
[Script]
sevenPro = type=http-response,pattern= https://api.sevenworkouts.com/api/v(\d)/(verify-purchases|account/verify-purchases),requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/Alex0510/Eric/master/surge/Script/seven.js
