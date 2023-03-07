/****************************
原脚本作者@小白脸 脚本修改@chengkongyiban
感谢@xream 的指导
说明
   t&zd; = {  , }  花括号中的逗号

***************************/
let req = $request.url.replace(/sg$/,'');

!(async () => {
  let body = await http(req);
//判断是否断网
if(body == null){$notification.post("Surge转换：未获取到body","请检查网络及节点是否畅通","认为是bug?点击通知反馈","https://t.me/zhangpeifu")
 $done({ response: { status: 404 ,body:{} } });
}else{//以下开始重写及脚本转换

if (body.match(/\/\*+\n[\s\S]*\n\*+\/\n/)){
body = body.replace(/[\s\S]*(\/\*+\n[\s\S]*\n\*+\/\n)[\s\S]*/,"$1").match(/[^\r\n]+/g);
}else{
    body = body.match(/[^\r\n]+/g);};
	
let uHalf = [];
let lHalf = [];	
let mods = [];
let others = [];
let URLRewrite = [];
let script = [];

body.forEach((x, y, z) => {
	x = x.replace(/^ *(#|;|\/\/)/g,'#');
	
	//判断注释
	
	if (x.match(/^[^#]/)){
	var noteK = "";
	}else{
	var noteK = "#";
	};
	
	if (x.match(/\x20data=/)){

//Mock转reject/request

				let ptn = x.replace(/\x20{2,}/g," ").split(" data=")[0].replace(/^#|"/g,"");
					let file = x.split(' data="')[1].split('"')[0];
					let fileName = file.substring(file.lastIndexOf('/') + 1);
					let scname = fileName.split(".")[0];
					
				if (fileName.match(/(img|dict|array|200|blank|tinygif)\.[^.]+$/i)){
                
                let mock2Reject
                
                if (fileName.match(/dict\.[^.]+$/i)){
                    mock2Reject = "-dict";
                    
                }else if (fileName.match(/array\.[^.]+$/i)){
                    mock2Reject = "-array";
                    
                }else if (fileName.match(/(200|blank)\.[^.]+$/i)){
                    mock2Reject = "-200";
                    
                }else if (fileName.match(/(img|tinygif)\.[^.]+$/i)){
                    mock2Reject = "-200";
                };
				
				z[y - 1]?.match(/^#/) && URLRewrite.push(z[y - 1]);
                
				URLRewrite.push(
						`${noteK}${ptn} - reject${mock2Reject}`)
				}else{
				z[y - 1]?.match(/^#/) && script.push(z[y - 1]);
		
		script.push(
			`${noteK}${scname} = type=http-request,pattern=${ptn},script-path=https://raw.githubusercontent.com/xream/scripts/main/surge/modules/echo-response/index.js,argument=type=text/json&url=${file}`)
				}
				
			}else{
				others.push(x);
				}
	
}); //循环结束

script = (script[0] || '') && `${script.join("\n")}`;

URLRewrite = (URLRewrite[0] || '') && `${URLRewrite.join("\n")}`;

others = (others[0] || '') && `${others.join("\n\n")}`;
		
if (URLRewrite !== "" && others.match("[URL Rewrite]")){
	uHalf = others.split(/\[URL Rewrite\]/i)[0];
	lHalf = others.split(/\[URL Rewrite\]/i)[1];
	mods = `${uHalf}\n\n[URL Rewrite]\n\n${URLRewrite}\n\n${lHalf}`;
}else{if (URLRewrite != ""){
		mods = `${others}${URLRewrite}`
		
	}else{
		mods = `${others}`;
	}
	};
		
if (script !== "" && mods.match("[Script]")){
	uHalf = mods.split(/\[Script\]/i)[0];
	lHalf = mods.split(/\[Script\]/i)[1];
	mods = `${uHalf}\n\n[Script]\n\n${script}\n\n${lHalf}`;
}else{if (script != ""){
		mods = `${mods}${script}`
		
	}else{
		mods = `${mods}`;
	}
	};


body = `${mods}`
		.replace(/t&zd;/g,',')
		.replace(/\[Map\x20?Local\]/gi,'')
		.replace(/undefined$/,'')
		.replace(/(#.+\n)\n+(?!\[)/g,'$1')
		.replace(/\n{2,}/g,'\n\n')

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