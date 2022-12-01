// ==UserScript==
// @name              JD叠蛋糕助手
// @version           1.0.1
// @icon              https://m.jd.com/favicon.ico
// @description       JD 618叠蛋糕活动，自动完成叠蛋糕活动，瓜分10亿
// @license           MIT
// @updateURL         https://www.baiduyun.wiki/jd.user.js
// @downloadURL       https://www.baiduyun.wiki/jd.user.js
// @require           https://cdn.jsdelivr.net/npm/jquery@3.2.1/dist/jquery.min.js
// @require           https://cdn.jsdelivr.net/npm/sweetalert2@9
// @require           https://cdn.jsdelivr.net/npm/toastr@2.1.4/build/toastr.min.js
// @match             *://m.jd.com/*
// @connect           api.m.jd.com
// @noframes
// @run-at            document-end
// @grant             GM_addStyle
// @grant             GM_xmlhttpRequest
// ==/UserScript==

;(function () {
    'use strict'

    var MAX_CYCLES = 3
    var currentCycle = 0

    // 主程序
    var main = (executeNextCycle) => {
      var secretp = ""
      var taskList = [];

      // 恢复被覆盖的 alert 函数
      (() => {
        var frame = document.createElement("iframe")
        frame.style.display = "none"
        document.body.appendChild(frame)
        window.alert = frame.contentWindow.alert
      })()

      // 请求函数
      var request = (functionId, body = {}) => {
        return new Promise((resolve, reject) => {
          GM_xmlhttpRequest({
            method: "POST",
            url: 'https://api.m.jd.com/client.action',
            headers: {
              "User-Agent": 'jdapp;android;9.0.0;10;network/wifi;model/Mi 10 Pro;apprpd/MyJD_Main;Mozilla/5.0 (Linux; Android 10; Mi 10 Pro Build/QKQ1.191117.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/66.0.3359.126 MQQBrowser/6.2 TBS/045140 Mobile Safari/537.36',
              "Content-Type": "application/x-www-form-urlencoded"
            },
            data: `functionId=${functionId}&body=${JSON.stringify(body)}&client=wh5&clientVersion=1.0.0`,
            responseType: 'json',
            onload: function (res) {
              resolve(res.response)
            },
          })
        })
      }

      // 模拟任务完成请求
      var collector = (task, actionType) => {
        console.log(actionType ? "@领取任务：" : "@执行任务：", task.taskName)
        toastr.info(actionType ? "@领取任务：" + task.taskName : "@执行任务：" + task.taskName)

        request("cakebaker_ckCollectScore", {
          taskId: task.taskId,
          itemId: task.itemId,
          actionType: actionType ? 1 : undefined,
          safeStr: JSON.stringify({secretp}),
        })
          //.then((res) => res.json())
          .then((res) => {
            console.log("调用结果：", res.data)
            if (res.data.success) {
              toastr.success("调用结果：" + res.data.bizMsg)
            } else {
              toastr.error("调用结果：" + res.data.bizMsg)
            }


            // 如果是执行任务，即任务已经完成，则进行下一个任务
            if (!actionType) {
              start()
            }
          })
      }

      // 甄选优品任务处理
      var superiorTask = (() => {
        // 是否有请求正在执行
        var isBusy = false

        return (rawTaskCollection) => {
          var getFeedDetail = (copiedTaskCollection) => {
            request("cakebaker_getFeedDetail", {
              taskIds: copiedTaskCollection["productInfoVos"]
                .map((item) => item.itemId)
                .toString(),
            })
              //.then((res) => res.json())
              .then((res) => {
                var result = res.data.result

                // 确认任务集合所在键名
                var taskCollectionContentKeyName = Object.keys(result).find(
                  (keyName) =>
                    /Vos?$/.test(keyName) && !["taskVos"].includes(keyName)
                )

                result[taskCollectionContentKeyName].forEach((taskCollection) => {
                  Array(taskCollection.maxTimes - taskCollection.times)
                    .fill(true)
                    .forEach((_, index) => {
                      taskList.unshift({
                        taskName: taskCollection.taskName,
                        taskId: taskCollection.taskId,
                        taskType: taskCollection.taskType,
                        waitDuration: taskCollection.waitDuration,
                        itemId: taskCollection.productInfoVos[index].itemId,
                      })
                    })
                })

                // 解除请求锁定
                isBusy = false
              })
          }

          if (!isBusy) {
            isBusy = true
            getFeedDetail(JSON.parse(JSON.stringify(rawTaskCollection)))
          } else {
            // 一秒后重试
            setTimeout(
              getFeedDetail,
              1000,
              JSON.parse(JSON.stringify(rawTaskCollection))
            )
          }
        }
      })()

      // 开始任务
      var start = () => {
        var task = taskList.pop()

        if (task) {
          // 除了小精灵和连签外的任务要先领取
          if (!["小精灵", "连签得金币"].includes(task.taskName)) {
            setTimeout(collector, 0, task, true)
          }
          // 至少等 2 秒再执行任务
          setTimeout(collector, (2 + task.waitDuration) * 1000, task)
        } else {
          // 执行下一轮任务
          executeNextCycle()
        }
      };

      (() => {
        // 获取基础信息
        Promise.all([
          request("cakebaker_getHomeData"),
          // 请求稍微慢点，避免提示【点太快啦！等下再来吧】
          new Promise((resolve) => {
            setTimeout(() => {
              request("cakebaker_getTaskDetail").then(resolve)
            }, 1000)
          }),
        ])
          /*.then(([homeData, taskData]) =>
            Promise.all([homeData.json(), taskData.json()])
          )*/
          .then(([homeData, taskData]) => {
            if (taskData.code === -30001) {
              Swal.fire({
                icon: 'error',
                title: '提示',
                html: '请先登录您的JD账号',
              })
              return false
            }
            // 如果无法获取任务详情
            console.log(taskData)
            if (taskData.data.bizCode != undefined && taskData.data.bizCode !== 0) {
              if (
                taskData.data.bizCode === -7 &&
                !~navigator.userAgent.indexOf("jdapp")
              ) {
                console.log("当前浏览器 UA：" + navigator.userAgent)
                Swal.fire({
                  icon: 'error',
                  title: '提示',
                  html: '任务详情获取失败，请确保已设置正确的浏览器 User-Agent。',
                  confirmButtonText: '查看方法'
                }).then((result) => {
                  if (result.value) {
                    GM_openInTab('https://www.baiduyun.wiki/install-jd.html', {active: true})
                  }
                })
                throw "任务详情获取失败，请确保已设置正确的浏览器 User-Agent。"

              } else {
                throw `【错误信息：${JSON.stringify(taskData.data)}】`
              }
            }

            // 获取签名 token
            secretp = homeData.data.result.cakeBakerInfo.secretp

            // 生成任务队列
            taskData.data.result.taskVos.forEach(async (taskCollection) => {
              // 跳过部分邀请任务
              if (/助力|站队/.test(taskCollection.taskName)) return

              // 针对甄选优品任务的处理
              if (taskCollection["productInfoVos"]) {
                superiorTask(taskCollection)
              }

              // 确认任务集合所在键名
              var taskCollectionContentKeyName = Object.keys(taskCollection).find(
                (keyName) =>
                  /Vos?$/.test(keyName) &&
                  !["productInfoVos", "scoreRuleVos"].includes(keyName)
              )

              // 某类任务下的任务集合内容
              var taskCollectionContent = taskCollection[taskCollectionContentKeyName]

              if (!taskCollectionContent) return

              Array(taskCollection.maxTimes - taskCollection.times)
                .fill(true)
                .forEach((_, index) => {
                  taskList.push({
                    taskName: taskCollection.taskName,
                    taskId: taskCollection.taskId,
                    taskType: taskCollection.taskType,
                    waitDuration: taskCollection.waitDuration,
                    itemId:
                      taskCollectionContent instanceof Array
                        ? taskCollectionContent[index].itemId
                        : taskCollectionContent.itemId,
                  })
                })
            })

            console.log(taskList)

            // 开始任务
            start()
          })
      })()
    }

    // 循环执行主程序
    var excuteMain = () => {
      toastr.info(`💡 正在执行第 ${currentCycle + 1} 轮任务，还有 ${MAX_CYCLES - (currentCycle + 1)} 轮未执行。`)
      console.log(`💡 正在执行第 ${currentCycle + 1} 轮任务，还有 ${MAX_CYCLES - (currentCycle + 1)} 轮未执行。`)

      new Promise(main).then(() => {
        currentCycle++

        if (currentCycle < MAX_CYCLES) {
          excuteMain()
        } else {
          toastr.clear()
          Swal.fire({
            icon: 'success',
            title: '提示',
            html: '任务已完成！请前往京东APP-我的-游戏与互动-全民叠蛋糕查看结果',
          })
          console.log("@任务已完成！")
        }
      })
    }

    var init = () => {
      var $svg = $('<svg id="svg" style="position:fixed;right: 10px;bottom: 100px; z-index: 999999;" viewBox="0 0 1186 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4094" width="64" height="64"><path d="M715.859172 61.320993q9.560943-21.650401 19.108717-43.300801c-12.524046-1.646168-42.629165-3.305505-55.15321-4.951673-7.01926-0.908685 14.301907 37.150718 21.070949 56.233097 2.067587 2.791901 6.584672 2.633869 9.337065 0.553112s4.240529-5.373092 5.636479-8.533735zM332.552261 168.848683l60.420948-28.024363c6.150083-2.857748 12.563554-5.781342 19.358935-5.807681 13.564424 0 24.837382 11.193942 38.322789 12.774264q-9.560943 29.314959-19.095548 58.643086a281.284007 281.284007 0 0 0-63.528913 39.810925 246.819835 246.819835 0 0 1 15.342285-52.572019 146.680147 146.680147 0 0 1-50.820496-24.824212z" fill="#ED758D" p-id="4095"></path><path d="M620.513125 13.64797c10.074548 3.950803 15.908567 14.565294 18.766314 25.021753 6.953413 25.311478 1.027209 52.75639-10.785692 76.197821s-29.143757 43.551019-46.290242 63.423558c-10.917386 12.655739-21.992804 25.443172-35.662582 35.069962-32.791665-35.478211-55.930202-68.822989-75.776402-115.495143-6.584672-15.368624-13.024481-37.269242-8.889307-53.454365s17.383533-31.066481 34.029583-32.383415c14.143875-1.119394 32.673141 11.931425 40.008466 24.07356 4.938504 8.191332 8.270348 14.341415 11.154433 23.546786a5.267737 5.267737 0 0 0 9.797992 0.553112c6.584672-15.803212 14.999882-28.972556 30.28949-39.205135 9.8375-6.571502 22.308868-11.602192 33.357947-7.348494z" fill="#EBDD9E" p-id="4096"></path><path d="M226.288829 603.555541l19.569644-249.624905a36.531759 36.531759 0 0 1 34.148108-33.621334 4225.462864 4225.462864 0 0 1 536.821947 2.251958c14.973544 1.014039 31.817134 3.068457 40.956658 14.973543 5.61014 7.308986 7.058768 16.883098 8.323025 26.009453 11.668038 84.44183 19.609152 165.538647 31.277191 249.980478z" fill="#F0D0D3" p-id="4097"></path><path d="M121.605717 1007.024716l12.313337-362.025251a40.087481 40.087481 0 0 1 40.522069-38.678362c261.911903 2.633869 519.030164-0.092185 786.209805 1.066717a40.271852 40.271852 0 0 1 39.942618 37.585306c8.099146 124.845376 16.211462 233.558306 24.323778 361.933066z" fill="#F0D0D3" p-id="4098"></path><path d="M241.354558 411.520175c2.225619 17.25184 9.495097 33.832043 18.147355 48.92411s25.245631 27.023493 42.51064 24.811044c18.121017-2.330974 31.053312-18.871669 38.52033-35.557228s11.760224-35.10947 22.848811-49.635255 31.89615-21.307998 49.54307-15.026221c27.300049 9.705806 22.717117 37.045363 29.920748 59.788819 6.769043 21.307998 27.813653 37.242903 50.14886 37.967217s44.380687-13.801472 52.519342-34.622204c9.337065-23.941866 5.544294-58.590409 29.578345-67.400699 16.145615-5.926205 33.818874 6.41347 42.234085 21.413352s11.009571 32.580956 18.344895 48.13395 22.229852 30.07878 39.284152 27.866331c19.819862-2.633869 29.854902-25.021753 34.240293-44.538719s8.388872-42.062883 25.627542-52.176939c19.46429-11.391482 45.118171 0.447758 59.512263 17.804952s21.953296 39.389506 35.267502 57.589539 36.50542 32.923359 57.708063 25.232462L857.798355 337.534803s-1.698845-16.027091-57.76074-16.027091-502.107558-2.172942-502.107558-2.172942-48.34466-4.385391-51.360439 30.539708-5.21506 61.645697-5.21506 61.645697zM128.96738 734.485153c6.492486 32.923359 13.696117 67.413869 35.451873 93.054581s63.094324 38.191096 90.249511 18.028832c37.782846-28.142887 31.909319-102.417984 78.383932-110.622486 33.107729-5.847188 56.351621 30.48703 68.664957 61.421818s32.09369 68.125014 65.662346 66.386661c34.740728-1.8042 50.267384-43.169108 59.051336-76.566563s30.434353-73.959033 64.79317-68.79665c30.368506 4.569762 41.654633 41.193706 47.238435 71.114454s19.174564 66.452507 49.832796 68.335724c32.278061 1.988571 50.241045-36.242033 56.522822-67.743103s16.05343-70.126754 47.52816-77.699127c27.365896-6.584672 53.16464 16.751405 65.293605 41.839005s16.777744 53.836276 32.923359 76.579732a61.369141 61.369141 0 0 0 7.993791 9.126355c23.704818 22.387884 63.041647 11.852409 75.170613-18.437081l33.318439-79.621851-12.563554-114.73132s-2.225619-18.871669-58.353361-18.871669H191.864165s-56.470145-5.070197-57.945111 37.70383z" fill="#AFCED3" p-id="4099"></path><path d="M314.813155 1023.815629c57.945111 0.092185 113.361708 0.184371 167.948637 0.184371 216.108926 0 418.337364-1.316934 703.848731-9.21854l-0.658467-23.704819c-52.677374 1.461797-102.352137 2.633869-149.919806 3.740094-4.21419-66.057427-8.42838-127.268535-12.629401-188.321612-3.661077-52.980269-7.322155-105.960537-10.970063-162.233142a52.203277 52.203277 0 0 0-51.716012-48.660724q-26.87863-0.171201-53.75726-0.171201c-4.872657-36.531759-9.21854-72.931824-13.459069-108.238834-4.833149-40.745949-9.82433-82.887848-15.671518-125.227287-1.316934-9.113186-3.00261-21.610893-10.667168-31.606424-13.169343-17.120146-36.874162-18.726806-49.55624-19.582814-84.494508-5.741834-169.568466-8.836629-254.695102-9.481927V215.454989c10.535475-9.047339 19.516967-19.372104 28.235072-29.459821 17.383533-20.149095 35.359687-40.969827 47.896902-65.846717a139.489686 139.489686 0 0 0 13.906827-43.458834q15.803212-7.993791 31.185005-16.711897c2.19928 4.912165 4.174682 9.534605 5.465278 13.169344l1.672506 3.147473a17.304517 17.304517 0 0 0 14.091198 6.861228 20.05691 20.05691 0 0 0 11.773393-3.832279c5.438939-3.950803 7.901606-9.613621 9.534605-13.314206l25.495848-57.787079-15.684688-2.054418c-6.41347-0.842838-17.317687-1.685676-28.208733-2.541683-10.43012-0.80333-20.847071-1.593491-26.957646-2.396821A12.207981 12.207981 0 0 0 679.538122 1.110755l-7.374832 0.447758-3.503045 5.465277c-4.345883 6.795381-1.975402 14.486278 5.583801 31.277191-6.940244 3.950803-13.854149 7.980622-20.939256 11.707546a92.356606 92.356606 0 0 0-2.633869-14.604802c-4.503915-16.461679-13.709287-28.142887-25.890929-32.923358-12.919126-5.043859-28.379935-2.080756-44.275332 8.546904a87.06253 87.06253 0 0 0-27.919009 30.579215c-1.870047-3.779602-4.01665-7.506526-6.584671-11.733885-9.086847-15.065729-31.869811-31.369376-51.083884-29.762716-20.478329 1.632999-38.796886 18.581944-44.578227 41.193706-5.386261 21.07095 3.6084 47.291112 9.455588 61.026738 4.082496 9.613621 8.362533 18.64779 12.84011 27.405404-5.373092 2.186111-10.746184 4.319545-16.158784 6.676857l-4.503916-0.526774c-4.253698-0.500435-8.955154-2.791901-13.959504-5.267737-7.335324-3.568892-15.64518-7.62505-25.785574-7.62505-9.508266 0-17.712767 3.845448-24.297439 6.900736l-78.304916 36.321049 15.711027 11.852409a160.165555 160.165555 0 0 0 42.352608 22.901488 259.541421 259.541421 0 0 0-11.391482 42.997907l-5.557463 31.777626 24.811043-20.623192a269.536953 269.536953 0 0 1 60.855536-38.12525l4.754133-2.159772 17.396703-53.454365q12.853279-5.794511 25.509018-10.864708c14.394092 24.231592 31.4879 46.566798 53.717752 70.614019l1.395951 1.514475v78.2259c-86.825481-0.171201-173.664132 2.238788-259.910163 7.374832a48.529031 48.529031 0 0 0-45.263033 44.762599l-18.924347 241.749637c-13.485408-0.105355-27.010323-0.158032-40.482561-0.302894-28.669661 0.171201-51.518472 21.742586-52.493003 50.13569l-3.134304 91.86934-1.632999 0.316064 1.382781 6.940244-8.731274 256.196408c-35.346518 0-71.838769 0-109.990357 0.065847v23.704818c116.996447-0.184371 219.519786-0.013169 314.813155 0.131693z m42.247254-853.268101l40.890812-18.924347c4.964842-2.304635 10.100886-4.688286 14.486277-4.714624 3.884956 0 8.164993 1.843708 12.971804 4.148343-16.409002 8.059638-33.371116 17.120146-51.202408 27.155186a135.80227 135.80227 0 0 1-17.146485-7.664558z m64.819509 27.300049a292.148715 292.148715 0 0 0-34.543188 19.411612c2.054418-6.439809 4.385391-12.800602 6.979752-19.029701l2.212449-5.267737q16.725066-9.21854 32.554617-17.185994zM706.482599 27.370426l11.022741 0.869177-10.719846 24.2711c-1.935893-4.398561-4.082496-9.03417-6.176422-13.590763-1.725184-3.713755-3.81911-8.244009-5.675987-12.471368z m-224.813862 65.846717c-7.835759-18.437081-10.943724-35.557227-8.309856-45.881992 2.80507-10.930555 11.760224-22.493239 24.297439-23.46777 8.573243 0 22.493239 9.126355 28.103379 18.43708 4.81998 7.980622 7.546034 13.169343 10.008701 20.978765a17.120146 17.120146 0 0 0 32.041012 1.553982c6.82172-16.356325 14.328246-26.180655 25.917268-33.924229 8.902476-5.965713 17.001622-8.296686 22.48007-6.176422 7.032429 2.739223 10.535475 12.853279 11.641699 17.120147a74.143404 74.143404 0 0 1 2.436329 19.754015A745.305824 745.305824 0 0 1 550.188831 94.955497l7.769913 22.387883c23.006843-7.980622 45.618606-17.120146 67.808949-27.313218a125.635537 125.635537 0 0 1-7.901606 19.503798c-11.220281 22.25619-28.221903 41.970698-44.670413 61.026737-7.993791 9.21854-16.198292 18.753145-25.324648 26.68109-29.828563-33.674011-49.358699-64.450767-66.202289-104.050982zM280.730894 332.148542a4231.178359 4231.178359 0 0 1 535.360151 2.238788c12.44503 0.842838 26.233332 2.40999 32.343907 10.364273 3.845448 5.01752 4.978012 13.169343 5.978882 20.425652 4.938504 35.70209 9.21854 71.114455 13.353714 105.960537-11.009571-2.949933-21.676739-11.681208-28.68283-21.25532-5.557463-7.62505-10.100886-16.079768-14.894527-25.021753-6.005221-11.193942-12.207981-22.769795-20.807563-33.147237-17.357195-20.939256-49.398207-35.201655-74.630669-20.45199-20.794393 12.181643-26.193824 36.874162-30.513369 56.628176l-0.711145 3.160643c-2.19928 9.969193-8.968323 33.371116-24.126237 35.346518-11.02274 1.514474-21.795263-9.929685-27.010323-21.07095a164.524608 164.524608 0 0 1-7.282647-20.122757c-3.042118-9.587282-6.071067-19.411612-11.338805-28.854031-10.719846-19.108717-34.240293-34.990946-56.628177-26.733767-22.756625 8.362533-27.115678 31.316699-30.947957 51.571149-1.580321 8.296686-3.068457 16.119276-5.623309 22.66444-6.347624 16.264139-23.889189 27.655621-41.075183 27.089339a43.827575 43.827575 0 0 1-39.244643-29.710039 130.126283 130.126283 0 0 1-3.674247-17.120146c-3.094796-18.200033-6.966583-40.824965-33.568656-50.333231-22.07182-7.835759-48.555369 0.144863-62.949462 19.016532-8.639089 11.325635-13.4459 24.126237-18.081509 36.50542-1.949063 5.267737-3.950803 10.43012-6.163252 15.500317-3.555723 7.901606-13.498577 26.615243-29.196435 28.630153-12.800602 1.593491-24.837382-8.678597-30.724078-18.950685-9.21854-16.158784-14.631141-30.421183-16.488018-43.603696l4.306375-56.009218a24.732027 24.732027 0 0 1 23.020012-22.717117z m-31.751287 133.747852a4.80681 4.80681 0 0 1 0.237049 0.447757c9.21854 16.027091 27.379065 31.040143 48.581708 31.040143a44.683582 44.683582 0 0 0 5.728664-0.381911c26.615243-3.41086 41.391246-28.07704 47.831055-42.471133 2.449498-5.491616 4.582932-11.167603 6.716366-16.84359 4.21419-11.272958 8.21767-21.900618 14.736495-30.460691 8.178162-10.706676 23.704818-15.460809 36.149848-11.03591 12.905957 4.596101 15.092068 14.117536 18.134186 31.975166a149.419371 149.419371 0 0 0 4.451238 20.228111c8.21767 25.904099 33.89789 45.355219 61.066245 46.237565s53.994308-16.84359 63.950332-42.141899c3.345013-8.586412 5.109705-17.883968 6.82172-26.865461 3.542553-18.674129 6.373962-30.28949 15.803212-33.753027s21.913788 5.596971 27.787315 16.079768c4.069327 7.256308 6.676857 15.552995 9.442419 24.336947a186.122331 186.122331 0 0 0 8.402041 23.046351c9.047339 19.398443 28.472121 37.637984 51.55798 34.622204 21.46603-2.80507 37.177057-21.874279 44.235825-53.74409l0.697975-3.22649c3.700586-16.883098 7.519695-34.332478 19.345765-41.272722 13.406392-7.901606 33.107729 1.514474 44.380688 15.131576 7.085107 8.546904 12.471368 18.581944 18.173694 29.209603 4.978012 9.21854 10.114056 18.871669 16.659219 27.826823 11.852409 16.2378 30.658232 30.131458 50.780989 31.961997 3.858618 32.515109 7.901606 65.846717 12.379182 99.48122-86.377724-0.158032-172.149658 0-255.722311 0.131694-127.202688 0.250218-258.119132 0.39508-388.495632-0.513605zM174.059212 618.173512h0.302895c151.684498 1.527644 304.857132 1.316934 453.025415 0.987701 108.51539-0.19754 220.744535-0.40825 333.18439 0.092185a28.406274 28.406274 0 0 1 28.156056 26.48355c2.080756 31.922489 4.148343 62.738752 6.229099 93.146766L962.679007 816.20093a36.610775 36.610775 0 0 1-26.206994 22.098158 32.515109 32.515109 0 0 1-29.828563-7.901606 50.188368 50.188368 0 0 1-6.452978-7.361663c-8.836629-12.44503-13.972673-27.28688-19.424782-42.984737a289.528016 289.528016 0 0 0-12.458199-31.856642c-13.999012-28.972556-44.617736-56.351621-78.713165-48.199797-41.035674 9.797992-51.031206 59.933682-56.404298 86.917667-5.531124 27.774145-20.307128 59.406908-44.169978 58.221667-24.573995-1.619829-34.91193-37.532629-38.862733-58.748441-3.437199-18.331726-13.880488-74.143404-57.141781-80.649059-40.91715-6.110575-67.163652 36.004985-78.02836 77.501586-11.852409 45.118171-27.168356 66.650047-48.199797 67.743103-20.004233 0.961362-37.835524-18.239541-53.994308-58.932812-19.635491-49.371869-49.411377-74.406791-81.728946-68.717634-32.580956 5.741834-44.301671 36.426404-54.626437 63.489404-7.322155 19.135056-14.868189 38.928579-28.788184 49.292853-21.808433 16.25097-56.56233 4.490746-74.130235-16.198293-18.147355-21.387014-25.390494-50.715142-30.934787-78.054698l3.186981-96.386425a28.050702 28.050702 0 0 1 28.287749-27.300049z m-18.674129 217.03078c24.87689 29.314959 73.577122 44.301671 106.355618 19.872539 19.45112-14.486278 28.261411-37.545798 36.768807-59.854666 10.746184-28.116548 18.555605-45.407896 36.610775-48.594877 28.630153-5.01752 48.423676 36.163017 55.574629 54.139171 7.361663 18.437081 29.420313 73.919525 74.41996 73.906356 0.948193 0 1.909555 0 2.870917-0.079017 43.1296-2.225619 60.57898-49.806457 69.902875-85.390022 7.901606-30.105119 26.193824-63.871316 51.584318-60.078545 17.883968 2.699715 30.105119 22.835642 37.348258 61.56668 9.047339 48.450015 30.631893 76.145144 60.750182 77.988852 39.033934 2.40999 61.118923-38.322789 68.875666-77.238199 6.439809-32.304399 15.579333-62.936292 38.652023-68.480586 20.412482-4.912165 41.549279 14.143875 51.860875 35.478211a269.800339 269.800339 0 0 1 11.444159 29.341297c5.755003 16.580203 11.694377 33.739858 22.493239 48.95045a73.300566 73.300566 0 0 0 9.534604 10.877878 55.943371 55.943371 0 0 0 51.189238 13.84098 60.315593 60.315593 0 0 0 43.037415-36.268372l13.946335-33.423794c0.368742 5.42577 0.750653 10.877878 1.119394 16.303647 4.187851 60.697504 8.375702 121.566209 12.563553 187.202218-263.386869 5.517955-459.74178 5.267737-697.448429 4.846318-57.194459-0.092185-117.128141-0.171201-181.13115-0.19754l6.400301-187.689483a123.291393 123.291393 0 0 0 15.276438 22.980504z" fill="#684C4B"></path></svg>')
      $('body').append($svg)

      $(document).on("click", "#svg", () => {
        console.clear()
        excuteMain()
      })


      toastr.options = {
        "closeButton": false,
        "debug": false,
        "positionClass": "toast-top-right",
        "onclick": null,
        "showDuration": "0",
        "hideDuration": "0",
        "timeOut": 15000,
        "extendedTimeOut": "100",
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "slideDown",
        "hideMethod": "slideUp"
      }

      GM_addStyle('.toast-title{font-weight:700}.toast-message{-ms-word-wrap:break-word;word-wrap:break-word}.toast-message a,.toast-message label{color:#FFF}.toast-message a:hover{color:#CCC;text-decoration:none}.toast-close-button{position:relative;right:-.3em;top:-.3em;float:right;font-size:20px;font-weight:700;color:#FFF;-webkit-text-shadow:0 1px 0 #fff;text-shadow:0 1px 0 #fff;opacity:.8;-ms-filter:progid:DXImageTransform.Microsoft.Alpha(Opacity=80);filter:alpha(opacity=80);line-height:1}.toast-close-button:focus,.toast-close-button:hover{color:#000;text-decoration:none;cursor:pointer;opacity:.4;-ms-filter:progid:DXImageTransform.Microsoft.Alpha(Opacity=40);filter:alpha(opacity=40)}.rtl .toast-close-button{left:-.3em;float:left;right:.3em}button.toast-close-button{padding:0;cursor:pointer;background:0 0;border:0;-webkit-appearance:none}.toast-top-center{top:0;right:0;width:100%}.toast-bottom-center{bottom:0;right:0;width:100%}.toast-top-full-width{top:0;right:0;width:100%}.toast-bottom-full-width{bottom:0;right:0;width:100%}.toast-top-left{top:12px;left:12px}.toast-top-right{top:12px;right:12px}.toast-bottom-right{right:12px;bottom:12px}.toast-bottom-left{bottom:12px;left:12px}#toast-container{position:fixed;z-index:999999;pointer-events:none}#toast-container *{-moz-box-sizing:border-box;-webkit-box-sizing:border-box;box-sizing:border-box}#toast-container>div{position:relative;pointer-events:auto;overflow:hidden;margin:0 0 6px;padding:15px 15px 15px 50px;width:300px;-moz-border-radius:3px;-webkit-border-radius:3px;border-radius:3px;background-position:15px center;background-repeat:no-repeat;-moz-box-shadow:0 0 12px #999;-webkit-box-shadow:0 0 12px #999;box-shadow:0 0 12px #999;color:#FFF;opacity:1;-ms-filter:progid:DXImageTransform.Microsoft.Alpha(Opacity=100);filter:alpha(opacity=80)}#toast-container>div.rtl{direction:rtl;padding:15px 50px 15px 15px;background-position:right 15px center}#toast-container>div:hover{-moz-box-shadow:0 0 12px #000;-webkit-box-shadow:0 0 12px #000;box-shadow:0 0 12px #000;opacity:1;-ms-filter:progid:DXImageTransform.Microsoft.Alpha(Opacity=100);filter:alpha(opacity=100);cursor:pointer}#toast-container>.toast-info{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAGwSURBVEhLtZa9SgNBEMc9sUxxRcoUKSzSWIhXpFMhhYWFhaBg4yPYiWCXZxBLERsLRS3EQkEfwCKdjWJAwSKCgoKCcudv4O5YLrt7EzgXhiU3/4+b2ckmwVjJSpKkQ6wAi4gwhT+z3wRBcEz0yjSseUTrcRyfsHsXmD0AmbHOC9Ii8VImnuXBPglHpQ5wwSVM7sNnTG7Za4JwDdCjxyAiH3nyA2mtaTJufiDZ5dCaqlItILh1NHatfN5skvjx9Z38m69CgzuXmZgVrPIGE763Jx9qKsRozWYw6xOHdER+nn2KkO+Bb+UV5CBN6WC6QtBgbRVozrahAbmm6HtUsgtPC19tFdxXZYBOfkbmFJ1VaHA1VAHjd0pp70oTZzvR+EVrx2Ygfdsq6eu55BHYR8hlcki+n+kERUFG8BrA0BwjeAv2M8WLQBtcy+SD6fNsmnB3AlBLrgTtVW1c2QN4bVWLATaIS60J2Du5y1TiJgjSBvFVZgTmwCU+dAZFoPxGEEs8nyHC9Bwe2GvEJv2WXZb0vjdyFT4Cxk3e/kIqlOGoVLwwPevpYHT+00T+hWwXDf4AJAOUqWcDhbwAAAAASUVORK5CYII=)!important}#toast-container>.toast-error{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAHOSURBVEhLrZa/SgNBEMZzh0WKCClSCKaIYOED+AAKeQQLG8HWztLCImBrYadgIdY+gIKNYkBFSwu7CAoqCgkkoGBI/E28PdbLZmeDLgzZzcx83/zZ2SSXC1j9fr+I1Hq93g2yxH4iwM1vkoBWAdxCmpzTxfkN2RcyZNaHFIkSo10+8kgxkXIURV5HGxTmFuc75B2RfQkpxHG8aAgaAFa0tAHqYFfQ7Iwe2yhODk8+J4C7yAoRTWI3w/4klGRgR4lO7Rpn9+gvMyWp+uxFh8+H+ARlgN1nJuJuQAYvNkEnwGFck18Er4q3egEc/oO+mhLdKgRyhdNFiacC0rlOCbhNVz4H9FnAYgDBvU3QIioZlJFLJtsoHYRDfiZoUyIxqCtRpVlANq0EU4dApjrtgezPFad5S19Wgjkc0hNVnuF4HjVA6C7QrSIbylB+oZe3aHgBsqlNqKYH48jXyJKMuAbiyVJ8KzaB3eRc0pg9VwQ4niFryI68qiOi3AbjwdsfnAtk0bCjTLJKr6mrD9g8iq/S/B81hguOMlQTnVyG40wAcjnmgsCNESDrjme7wfftP4P7SP4N3CJZdvzoNyGq2c/HWOXJGsvVg+RA/k2MC/wN6I2YA2Pt8GkAAAAASUVORK5CYII=)!important}#toast-container>.toast-success{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAADsSURBVEhLY2AYBfQMgf///3P8+/evAIgvA/FsIF+BavYDDWMBGroaSMMBiE8VC7AZDrIFaMFnii3AZTjUgsUUWUDA8OdAH6iQbQEhw4HyGsPEcKBXBIC4ARhex4G4BsjmweU1soIFaGg/WtoFZRIZdEvIMhxkCCjXIVsATV6gFGACs4Rsw0EGgIIH3QJYJgHSARQZDrWAB+jawzgs+Q2UO49D7jnRSRGoEFRILcdmEMWGI0cm0JJ2QpYA1RDvcmzJEWhABhD/pqrL0S0CWuABKgnRki9lLseS7g2AlqwHWQSKH4oKLrILpRGhEQCw2LiRUIa4lwAAAABJRU5ErkJggg==)!important}#toast-container>.toast-warning{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAGYSURBVEhL5ZSvTsNQFMbXZGICMYGYmJhAQIJAICYQPAACiSDB8AiICQQJT4CqQEwgJvYASAQCiZiYmJhAIBATCARJy+9rTsldd8sKu1M0+dLb057v6/lbq/2rK0mS/TRNj9cWNAKPYIJII7gIxCcQ51cvqID+GIEX8ASG4B1bK5gIZFeQfoJdEXOfgX4QAQg7kH2A65yQ87lyxb27sggkAzAuFhbbg1K2kgCkB1bVwyIR9m2L7PRPIhDUIXgGtyKw575yz3lTNs6X4JXnjV+LKM/m3MydnTbtOKIjtz6VhCBq4vSm3ncdrD2lk0VgUXSVKjVDJXJzijW1RQdsU7F77He8u68koNZTz8Oz5yGa6J3H3lZ0xYgXBK2QymlWWA+RWnYhskLBv2vmE+hBMCtbA7KX5drWyRT/2JsqZ2IvfB9Y4bWDNMFbJRFmC9E74SoS0CqulwjkC0+5bpcV1CZ8NMej4pjy0U+doDQsGyo1hzVJttIjhQ7GnBtRFN1UarUlH8F3xict+HY07rEzoUGPlWcjRFRr4/gChZgc3ZL2d8oAAAAASUVORK5CYII=)!important}#toast-container.toast-bottom-center>div,#toast-container.toast-top-center>div{width:300px;margin-left:auto;margin-right:auto}#toast-container.toast-bottom-full-width>div,#toast-container.toast-top-full-width>div{width:96%;margin-left:auto;margin-right:auto}.toast{background-color:#030303}.toast-success{background-color:#51A351}.toast-error{background-color:#BD362F}.toast-info{background-color:#2F96B4}.toast-warning{background-color:#F89406}.toast-progress{position:absolute;left:0;bottom:0;height:4px;background-color:#000;opacity:.4;-ms-filter:progid:DXImageTransform.Microsoft.Alpha(Opacity=40);filter:alpha(opacity=40)}@media all and (max-width:240px){#toast-container>div{padding:8px 8px 8px 50px;width:11em}#toast-container>div.rtl{padding:8px 50px 8px 8px}#toast-container .toast-close-button{right:-.2em;top:-.2em}#toast-container .rtl .toast-close-button{left:-.2em;right:.2em}}@media all and (min-width:241px) and (max-width:480px){#toast-container>div{padding:8px 8px 8px 50px;width:18em}#toast-container>div.rtl{padding:8px 50px 8px 8px}#toast-container .toast-close-button{right:-.2em;top:-.2em}#toast-container .rtl .toast-close-button{left:-.2em;right:.2em}}@media all and (min-width:481px) and (max-width:768px){#toast-container>div{padding:15px 15px 15px 50px;width:25em}#toast-container>div.rtl{padding:15px 50px 15px 15px}}')
    }

    init()
  }
)()
