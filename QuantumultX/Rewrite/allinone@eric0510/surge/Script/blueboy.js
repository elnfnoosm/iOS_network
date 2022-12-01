let obj = JSON.parse($response.body);


	obj.vip_expire_time = "2021-12-12";
	obj.is_vip = "1";
       obj.is_vip = 1;
	if(obj.hasOwnProperty("play_rtmp")){
		var playurl = obj["play_rtmp"];
		obj["play_url"] = playurl;
	};
delete obj.error


$done({body: JSON.stringify(obj)});

