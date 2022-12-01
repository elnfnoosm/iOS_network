/*
由于小小影视通道很多，启用时会选择通道，有时会导致规则失效，请自行抓包把链接reject
测试时有.*.leleapps.com自行添加规则reject

surge
https:\/\/.*.xiaoxiao(img|apps|appxs).com\/(vod\/reqplay\/|ucp/index|getGlobalData) requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/Alex0510/surge/master/Script/xxys.js

hostname=*.xiaoxiaoimg.com, *.xiaoxiaoapps.com, *.xiaoxiaoappxs.com



*/


const path1 = "/ucp/index";
const path2 = "/vod/reqplay/";
const ad = 'getGlobalData';
let obj = JSON.parse($response.body);

if ($request.url.indexOf(path1) != -1){
	obj.data.uinfo["play_daily_remainders"] = "999";
       obj.data.user["gicon"] = "V5";
       obj.data.user["gid"] = "5";
	obj.data.user["isvip"] = "1";
}
if ($request.url.indexOf(path2) != -1){
	obj.retcode = "0";
	obj.data.lastplayindex = "1";
	if(obj.data.hasOwnProperty("httpurl_preview")){
		var playurl = obj.data["httpurl_preview"];
		obj.data["httpurl"] = playurl;
	};
}

if ($request.url.indexOf(ad) != -1) {
delete obj.data.adrows
delete obj.data.adgroups
}

$done({body: JSON.stringify(obj)});
