var obj = JSON.parse($response.body);

obj = {
  "pub_code": 0,
  "pub_timestamp": 1587544373,
  "pub_desc": "",
  "login_url": "",
  "pub_rephash": "C552F5F9320809CFE21D6F67B27733DA"
}
$done({body: JSON.stringify(obj)});
