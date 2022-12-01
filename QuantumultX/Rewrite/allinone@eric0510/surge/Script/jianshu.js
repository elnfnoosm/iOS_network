/*
简书去重定向
https:\/\/.*.jianshu.com\/(go\?to=|go-wild\?ac=2&url=)(.*)
*/

const path1 = "/go\?to=";
const path2 = "/go-wild\?ac=2&url=";

if ($request.url.indexOf(path1) != -1){
let srcUrl = $request.url;

let urlRegex = /^https?:\/\/links\.jianshu\.com\/go\?to=(.*)$/;
let encodeUrl = srcUrl.match(urlRegex)[1];
let dstUrl = decodeURIComponent(encodeUrl);

$done({
  response: {
    status: 302,
    headers: {
      Location: dstUrl,
    },
  },
});
}
if ($request.url.indexOf(path2) != -1){
let srcUrl = $request.url;

let urlRegex = /^https?:\/\/www\.jianshu\.com\/go-wild\?ac=2&url=(.*)$/;
let encodeUrl = srcUrl.match(urlRegex)[1];
let dstUrl = decodeURIComponent(encodeUrl);

$done({
  response: {
    status: 302,
    headers: {
      Location: dstUrl,
    },
  },
});
}
