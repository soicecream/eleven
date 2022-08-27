import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/store'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// npm install font-awesome --save
import 'font-awesome/css/font-awesome.min.css'
import fr from "element-ui/src/locale/lang/fr";
import fa from "element-ui/src/locale/lang/fa";
import form from "element-ui/packages/form";

Vue.use(ElementUI);

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  if(to.path === '/404')
  {
    store.state.navigation_bar = false
    next()
  }
  else
  {
    if(to.matched.length === 0)
      next('/404')
    else
    {
      let show_page = to.path == '/' || to.path == '/eleven' || to.path == '/quiet'

      if(!show_page)
      {
        show_page = true
        let top_title_url = store.state.top_title_span_url
        for(let i = 0; i < top_title_url.length; i ++)
        {
          if(to.path === top_title_url[i].url)
          {
            if(!top_title_url[i].show)
            {
              show_page = false
              next('/404')
            }
            break
          }
        }
      }

      if(show_page)
      {
        // 设置背景图片 以及 设置导航栏上时间的颜色
        if(to.path === '/')
        {
          let num = Math.floor(Math.random() * 30) + 1
          num = num < 10 ? '00' + num : (num < 100 ? '0' + num : num)
          let path = require("@/assets/img/background/" + num + ".jpg")
          document.body.style.backgroundImage = 'url(' + path + ')'
          store.state.navigation_bar_time_color = '#ffffff'

        }
        else
        {
          if(to.path === '/hypnosis' || to.path === '/paper_plane')
            store.state.navigation_bar_time_color = '#ffffff'
          else
            store.state.navigation_bar_time_color = '#414141'

          document.body.style.backgroundImage = 'url()'

        }


        // 设置背景颜色
        if(to.path === '/hypnosis' || to.path === '/paper_plane')
          document.body.style.backgroundColor = '#00b8a9'
        else if(to.path == '/christmas_tree')
          document.body.style.backgroundColor = '#333333'
        else
          document.body.style.backgroundColor = '#ffffff'

        document.title = to.name ? to.name : "拾忆哟"
        next()
      }
    }
  }

});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
