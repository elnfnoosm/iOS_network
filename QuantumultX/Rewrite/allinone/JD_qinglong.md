## 腾讯云CVM Centos7.6搭建青龙面板

### 一、安装Docker、docker-compose

### 二、配置

#### 2.1、创建目录

```
mkdir qinglong
```

并执行以下指令，可以访问github更顺利

```
export -n ftp_proxy 
export -n http_proxy
export -n https_proxy 
```

#### 2.2、两种方式配置docker-compose.yml

2.2.1、wget

```
wget https://raw.githubusercontent.com/whyour/qinglong/master/docker/docker-compose.yml
```

2.2.2、直接创建docker-compose.yml

```
version: '2'
services:
  web:
    image: whyour/qinglong:latest
    volumes:
      - ./data:/ql/data
    ports:
      - "0.0.0.0:5700:5700"
    restart: unless-stopped
```

#### 2.3、常用指令

```
# 启动
docker-compose up -d
# 终止
docker-compose down
# 查看容器状态
docker-compose ps
# 查看日志
docker-compose logs 容器名称
```

#### 2.4、服务器防火墙添加规则允许使用5700端口

### 三、面板使用

访问http://ip:5700

#### 3.1、创建定时任务拉取仓库、手动填入信息

```
# 名称
自选
# 命令
ql repo https://github.com/KingRan/KR.git "jd_|jx_|jdCookie" "activity|backUp" "^jd[^_]|USER|utils|function|sign|sendNotify|ql|JDJR"
# 定时规则
32 * * * *
```

#### 3.2、执行此任务并查看日志信息

拉取失败查看报错信息

#### 3.3、环境变量

f12 -> 应用 -> cookies

```
# 名称
JD_COOKIE
# 值
pt_key=xxx; pt_pin=xxx;
```

### 四、钉钉消息推送

查看官方文档创建群组，新建机器人

https://developers.dingtalk.com/document/app/custom-robot-access

安全设置处选择ip，填入服务器ip

将token填入配置文件钉钉配置处，82行

执行脚本并查看日志是否推送