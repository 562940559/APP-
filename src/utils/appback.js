/**
 * 解决hbuilder打包app之后点击手机返回键直接退出app的
 */
import {Toast} from 'vant';
document.addEventListener('plusready', function () {
  var webview = plus.webview.currentWebview();
  plus.key.addEventListener('backbutton', function () {
    webview.canBack(function(e) {
      let isIndex = localStorage.getItem('isIndex');
      let isAddMission = localStorage.getItem('isAddMission');
      if(e.canBack && isIndex == 'false') {
        if(isAddMission == 'true') {
          return
        }
        webview.back();
      }else {
        // 首页返回键处理
        // 处理逻辑：1秒内，连续两次按返回键，则退出应用；
        var first = null
        plus.key.addEventListener(
          'backbutton',
          function () {
            // 首次按键，提示‘再按一次退出应用’
            if (!first) {
              first = new Date().getTime()
              Toast('再按一次退出应用') // 此处可以用自定义提示
              setTimeout(function () {
                first = null
              }, 1000)
            } else {
              if (new Date().getTime() - first < 1500) {
                plus.runtime.quit()
              }
            }
          },
          false
        )
      }
    })
  })
})