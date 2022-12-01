/*
lightroom解锁订阅
https://photos.adobe.io/v2/accounts/
*/


body = $response.body.replace(/while.{7}\n/, "");
let obj = JSON.parse(body);
obj.email = "666888@88.com",
obj.full_name = "我是Mr.Eric",
obj.first_name = "我是",
obj.last_name = "Mr.Eric",
obj.entitlement.status = "subscriber";
obj.current_subs = {
      "product_id": "lightroom",
      "store": "adobe",
      "purchase_date": "2020-03-27T16:32:10.254954Z",
      "sao": {
        "inpkg_CCES": "0",
        "inpkg_CCLE": "0",
        "inpkg_CCSN": "0",
        "inpkg_CCSV": "0",
        "inpkg_LCCC": "0",
        "inpkg_LPES": "0",
        "inpkg_LRBRL": "0",
        "inpkg_LRM0GB": "0",
        "inpkg_LRM40GB": "0",
        "inpkg_LRMAC": "0",
        "inpkg_LRMC": "1",
        "inpkg_LRMP": "0",
        "inpkg_LRPUF": "0",
        "inpkg_LRTB": "0",
        "inpkg_LRWIN": "0",
        "inpkg_PHLT": "0",
        "inpkg_PHLT2": "0",
        "inpkg_PLES": "0",
        "storage_quota": "0"
      }
    };
body = JSON.stringify(obj); 
$done({body});
