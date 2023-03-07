/****************************************

项目功能：趣听音乐馆 屏蔽弹窗-自动激活App
使用声明：仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️
转载来自：墨鱼@ddgksf2013
*****************************************

            
[rewrite_local]

^https?:\/\/api\.bspapp\.com\/client$ url script-response-body https://raw.githubusercontent.com/chengkongyiban/shadowrocket/main/scripts/qtmusic.js

[mitm]

hostname = api.bspapp.com

****************************************/


var body = $response.body.replace(/needVerify":true/g, 'needVerify":false').replace(/code":\d+/g, 'code":0');
$done({ body });