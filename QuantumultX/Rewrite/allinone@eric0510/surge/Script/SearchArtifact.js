

let obj = JSON.parse($response.body);

obj.data.vipType = 1024,
obj.data.username = "Mr.Eric首发",
obj.data.avatarUrl = "http://cdn-stsq-ios.soutushenqi.com/avatar_1661878453",



$done({body: JSON.stringify(obj)});
