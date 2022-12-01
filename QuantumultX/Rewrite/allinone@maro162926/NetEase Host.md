## 网易云节点

### 一、安装nodejs

1、安装nodejs

```
# 获取nodejs源
curl -sL https://rpm.nodesource.com/setup_14.x | sudo -E bash -
```

2、安装

```
yum -y install nodejs 
```

3、查看是否安装成功

```
node -v
```

### 二、安装Supervisor

```
yum -y install epel-release
yum -y install supervisor
```

### 三、git UnlockNetEaseMusic

1、安装git

```
yum install git
```

**2、先执行第3步，如果成功git，此步无需执行**

删除三个环境变量

```
export -n ftp_proxy 
export -n http_proxy
export -n https_proxy 
```

3、git 拉取文件

```
# 拉取
git clone https://github.com/nondanee/UnblockNeteaseMusic.git
# 进入文件夹
cd UnblockNeteaseMusic
```

3、仍然失败使用以下指令

```
# 拉取
git clone https://gh.fakev.cn/nondanee/UnblockNeteaseMusic.git
# 进入文件夹
cd UnblockNeteaseMusic
```

### 四、配置SuperVisor

1、创建并编写ini配置文件

```
vim /etc/supervisord.d/netease.ini
```

2、配置文件内容

**directory路径为拉取文件UnblockNeteaseMusic的根文件夹路径**

**8848为端口、可配置为自己使用的端口，需要在服务器的防火墙或安全组中添加规则放行此端口**

```
[supervisord]
nodaemon=false

[program:netease]
user=root
directory=/opt/UnblockNeteaseMusic
command=/usr/bin/node app.js -e https://music.163.com -p 8848
autostart=true
autorestart=true
```

3、Supervisor启动并设置开机自启

```
systemctl start supervisord
systemctl enable supervisord
```

4、查看Supervisor运行状态，**active即为正常运行**

```
systemctl status supervisord
```

### 五、ios配置

#### Quantumultx

1、safari下载、安装证书并信任

```
https://merlinblog.xyz/usr/uploads/2020/03/1899883711.crt
```

2、配置

```
[policy]
static=网易云音乐, direct, proxy, 网易云音乐解锁 img-url=https://raw.githubusercontent.com/zc-nju-med/hellcell/master/QuantumultX/ICON/INetease_Music_Unlock.PNG

[filter_remote]
https://raw.githubusercontent.com/demo2099/QTXScripts/master/filter/NeteaseMusic.list, tag=网易云音乐, force-policy=网易云音乐, enabled=true

[server_local]
http=ip:port,fast-open=false,udp-relay=false,tag=网易云音乐解锁
```

#### Surge、Loon、ShadowRocket、Stash配置类似，根据语法修改
