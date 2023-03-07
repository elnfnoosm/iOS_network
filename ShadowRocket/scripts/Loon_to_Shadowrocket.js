/****************************
原脚本作者@小白脸 脚本修改@chengkongyiban
感谢@xream 的指导
说明
   t&zd; = {  , }  花括号中的逗号

***************************/

const modStore = "https://loon-gallery.vercel.app/";

let req = $request.url;

!(async () => {
  let body = await http(req);
//判断是否断网
if(body == null){$notification.post("模块商店：未获取到body","请检查网络及节点是否畅通","认为是bug?点击通知反馈","https://t.me/zhangpeifu")
 $done({ response: { status: 404 ,body:{} } });
}else{//以下开始重写及脚本转换

if (body.match(/\/\*+\n[\s\S]*\n\*+\/\n/)){
body = body.replace(/[\s\S]*(\/\*+\n[\s\S]*\n\*+\/\n)[\s\S]*/,"$1").match(/[^\r\n]+/g);
}else{
    body = body.match(/[^\r\n]+/g);};
	
let Rule = [];
let urlRewrite = [];
let plugin = [];
let MapLocal = [];
let uHalf = [];
let lHalf = [];	
let mods = [];

body.forEach((x, y, z) => {
	x = x.replace(/^ *(#|;|\/\/)/,"#").replace(" _ reject"," - reject").replace(/(\{[0-9]+)\,([0-9]*\})/gi,'$1t&zd;$2').replace(/\[URL\x20Rewrite\]/i,"[Rewrite]");
	
	if (x.match(/^[^#].+(\x20-)?\x20+reject-?/)){
			
				z[y - 1]?.match(/^#/) && urlRewrite.push(z[y - 1]);
						urlRewrite.push(x.replace(/(^#)?(.+?)(\x20+-)?\x20+(reject(-.+)?)/,`$1$2 - $4`));
		
	}else if (x.match(/^(DOM|U|IP|GEO)[^,]+,[^,]+,.+/)){
				z[y - 1]?.match(/^#/) && Rule.push(z[y - 1]);
				
		Rule.push(x);
		
	}else if (x.match(/^(DOM|USER|URL|IP|GEO)[^,]+,[^,]+$/)){
	x.replace(/^(DOM|USER|URL|IP|GEO)[^,]+,[^,]+$/,"");
	}else if (x.match(/\x20+(302|307)\x20+/)){
						
				z[y - 1]?.match(/^#/) && urlRewrite.push(z[y - 1]);
				
		urlRewrite.push(x.replace(/(.+)\x20+(302|307)\x20+(.+)/,"$1 $3 $2"));
	}else{
		plugin.push(x)
	};	
		
}); //循环结束

plugin = (plugin[0] || '') && `${plugin.join("\n\n")}`;

Rule = (Rule[0] || '') && `${Rule.join("\n")}`;

urlRewrite = (urlRewrite[0] || '') && `${urlRewrite.join("\n\n")}`;

if (urlRewrite !== "" && plugin.match("[Rewrite]")){
	uHalf = plugin.split(/\[Rewrite\]/i)[0];
	lHalf = plugin.split(/\[Rewrite\]/i)[1];
	mods = `${uHalf}\n\n[Rewrite]\n\n${urlRewrite}\n\n${lHalf}`;
}else{if (urlRewrite != ""){
		mods = `${plugin}${urlRewrite}`
	}else{
		mods = `${plugin}`;
	}
	};
		
if (Rule !== "" && mods.match("[Rule]")){
	uHalf = mods.split(/\[Rule\]/i)[0];
	lHalf = mods.split(/\[Rule\]/i)[1];
	mods = `${uHalf}\n\n[Rule]\n\n${Rule}\n\n${lHalf}`;
}else{if (Rule != ""){
		mods = `${mods}${Rule}`
	}else{
		mods = `${mods}`;
	}
	};

body = `${mods}`
		.replace(/t&zd;/g,',')
		.replace(/\[Rewrite\]/gi,'\n[URL Rewrite]\n')
		.replace(/\[MITM\]/gi,'\n[MITM]\n')
		.replace(/\[Script\]/gi,'\n[Script]\n')
		.replace(/\[Rule\]/gi,'\n[Rule]\n')
		.replace(/\[General\]/gi,'\n[General]\n')
		.replace(/hostname\x20*=\x20*(.*)/gi,"hostname = %APPEND% $1")
		.replace(/skip-proxy\x20*=\x20*(.*)/gi,"skip-proxy = %APPEND% $1")
		.replace(/bypass-tun\x20*=\x20*(.*)/gi,"tun-excluded-routes = %APPEND% $1")
		.replace(/real-ip\x20*=\x20*(.*)/gi,"always-real-ip = %APPEND% $1")
		.replace(/(#.+\n)\n+/g,'$1')
		.replace(/\n{2,}/g,'\n\n')
		.replace(/hostname\x20=\x20%APPEND%\x20\n\n安装失败\n\n1、请检查模块商店是否安装\n\n2、请检查是否开启HTTPS解密\n\n小火箭开启HTTPS解密教程https:\/\/t\.me\/h5683577\/3\n\nSurge开启HTTPS解密\(MITM\)教程https:\/\/t\.me\/h5683577\/135/,"hostname = %APPEND% \n\n模块商店已成功安装!!!")


			if (body.match("验证结果↓↓↓") != null && body.match("请检查模块商店是否安装") == null)  {
			 $notification.post("已成功安装模块商店","点击通知跳转模块商店","https://loon-gallery.vercel.app/",modStore)
		}else{};				
	

 $done({ response: { status: 200 ,body:body ,headers: {'Content-Type': 'text/plain; charset=utf-8'} } });
}//判断是否断网的反括号

})()
.catch((e) => {
		$notification.post(`${e}`,'','');
		$done()
	})


function http(req) {
  return new Promise((resolve, reject) =>
    $httpClient.get(req, (err, resp,data) => {
  resolve(data)
  })
)
}