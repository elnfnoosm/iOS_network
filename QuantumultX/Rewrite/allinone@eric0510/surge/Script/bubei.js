/*
不背单词解锁装备
https://sapi.beingfine.cn/v3/report/launch/
*/

let obj = JSON.parse($response.body);

obj["data_body"]= "{\"user_info\":{\"password\":\"7663a928f36888c91ea4f5aa31b0ff9d\",\"Email\":\"\",\"is_new_user\":1,\"nickname\":\"30602963\",\"avatar_image\":\"/AvatarImage/wechat/253310946.jpg\",\"id\":30602963},\"bindings\":{\"sns_bindings\":{\"huawei\":0,\"xiaomi\":0,\"oppo\":0,\"wechat\":1,\"sina\":0,\"qzone\":0},\"primary_binding\":\"wechat\"},\"privileges\":{\"wordroot\":{\"expire_date\":4586691111000,\"user_type\":3,\"granted\":1},\"collins\":{\"expire_date\":4586691121000,\"granted\":1,\"collins_user_type\":3}},\"user_status\":{\"total_coin\":10,\"task_status\":{\"finish_study\":0,\"share_to_sns\":0,\"finish_spell\":0,\"finish_review\":0},\"sign_in_continuous_days\":1,\"logged_off\":0,\"login_prompt\":\"你上次使用 微信 登录过\"},\"actions\":{\"card_action\":{\"enable\":0},\"web_page\":{\"enable\":0,\"url\":\"\"},\"float_button_action\":{\"enable\":0},\"bind_phone_action\":0},\"base_info\":{\"coin_reward\":{\"finish_study\":20,\"share_to_sns\":5,\"finish_spell\":20,\"signin\":10,\"finish_review\":10},\"config\":{\"upload_user_action\":0}},\"dashboard_calendar\":[{\"study\":0,\"timestamp\":1586016060000,\"sign_in\":1}],\"dashboard_sign_in\":{\"continuous_days\":1,\"total_days\":1}}"
$done({body: JSON.stringify(obj)});
