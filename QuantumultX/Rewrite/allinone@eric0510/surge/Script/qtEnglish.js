/*
轻听英语VIP
https://sapi.beingfine.cn/v1/UserLaunchAppReport
*/


let obj = JSON.parse($response.body);

obj.data_body.privileges = {
      "lrc_unlimited_online_playback": {
        "expire_date": 4077153336000,
        "granted": 1
      },
      "wordroot": {
        "expire_date": 4077153336000,
        "user_type": 1,
        "granted": 1
      },
      "collins": {
        "expire_date": 4077153336000,
        "granted": 1,
        "collins_user_type": 1
      },
      "lrc_unlimited_download": {
        "expire_date": 4077153336000,
        "granted": 1
      },
    "user_status": {
      "dl_quota": 999,
      "subscription_count": 1,
      "user_has_preferences": 1,
      "subscription_has_updates": 1
       },
}
    
$done({body: JSON.stringify(obj)});
