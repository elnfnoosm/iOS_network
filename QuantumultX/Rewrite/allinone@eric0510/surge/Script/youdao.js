
  const senku=init()
  const url = "https://note.youdao.com/yws/api/daupromotion?method=sync";
  const body = "";
  const headers = {
    "Host": "note.youdao.com",
    "Content-Type": "application/x-www-form-urlencoded",
    "Accept": "*/*",
    "Connection": "keep-alive",
    "Cookie": "YNOTE_CSTK=shIjhQ7D; YNOTE_FORCE=true; YNOTE_LOGIN=1||1589006134107; YNOTE_SESS=v2|XwktDJJDByzY0MQ4nMkG0lmhHqLkfJS0euPMkf0MUA0JFnfwFkfJB0ll0HOmhfgK0pFnMUWnfTz0YfRfPy0HpZ0gykMPB6Lp40; JSESSIONID=aaa3CVT7_bSwu-M4d2Zhx",
    "User-Agent": "you dao yun bi ji/6.9.20 (iPhone; iOS 13.3; Scale/3.00)",
    "Accept-Language": "zh-Hans-CN;q=1",
    "Accept-Encoding": "gzip, deflate, br",
    "Content-Length": "0"
};
  const request = {
      url: url,
      headers: headers,
      body: body
  };
  
  senku.post(request, function(error, response, data) {
      try {
      	senku.log(data)
          const res=JSON.parse(data)
          //这里是以后要写的代码,大概几行就写完了
          senku.done();
          
      } catch(e) {
          senku.log(e)
          senku.done();
      }
  });
  
  function init() {
    isSurge = () => {
        return undefined === this.$httpClient ? false : true
    }
    isQuanX = () => {
        return undefined === this.$task ? false : true
    }
    getdata = (key) => {
        if (isSurge()) return $persistentStore.read(key)
        if (isQuanX()) return $prefs.valueForKey(key)
    }
    setdata = (key, val) => {
        if (isSurge()) return $persistentStore.write(key, val)
        if (isQuanX()) return $prefs.setValueForKey(key, val)
    }
    msg = (title, subtitle, body) => {
        if (isSurge()) $notification.post(title, subtitle, body)
        if (isQuanX()) $notify(title, subtitle, body)
    }
    log = (message) => console.log(message)
    get = (url, cb) => {
        if (isSurge()) {
            $httpClient.get(url, cb)
        }
        if (isQuanX()) {
            url.method = 'GET'
            $task.fetch(url).then((resp) => cb(null, resp, resp.body))
        }
    }
    post = (url, cb) => {
        if (isSurge()) {
            $httpClient.post(url, cb)
        }
        if (isQuanX()) {
            url.method = 'POST'
            $task.fetch(url).then((resp) => cb(null, resp, resp.body))
        }
    }
    done = (value = {}) => {
        $done(value)
    }
    return {
        isSurge,
        isQuanX,
        msg,
        log,
        getdata,
        setdata,
        get,
        post,
        done
    }
}
  
