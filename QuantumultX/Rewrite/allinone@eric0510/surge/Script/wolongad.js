/*
卧龙影视及火锅影视去广告
http://(w001.tgmmvip.com|api.wolong.tv|.*)/(wolong/ad/(splash|banner)|app/php/api/ad/)
*/

let obj = JSON.parse($response.body);
delete obj.data
$done({body: JSON.stringify(obj)});
