import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/store'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// npm install font-awesome --save
import 'font-awesome/css/font-awesome.min.css'

Vue.use(ElementUI);

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {

  if(to.path === '/')
  {
    let num = Math.floor(Math.random() * 30) + 1
    num = num < 10 ? '00' + num : (num < 100 ? '0' + num : num)
    let path = require("@/assets/img/background/" + num + ".jpg")
    document.body.style.backgroundImage = 'url(' + path + ')'
    store.state.top_header_time_color = '#ffffff'

    // window.document.body.style.backgroundImage = 'url(' + data[num] + ')'

  }
  else
  {
    store.state.top_header_time_color = '#414141'
    document.body.style.backgroundImage = 'url()'

    // let script = document.createElement('script');
    // script.setAttribute('type','text/javascript');
    // // let url = "//cdn.bootcss.com/canvas-nest.js/1.0.0/canvas-nest.min.js";
    // // let url = "./MagneticIronWireBlack.js"
    // script.setAttribute('src', "MagneticIronWireBlack.js");
    // document.getElementsByTagName('head')[0].appendChild(script);
  }

  if(to.path === '/hypnosis' || to.path === '/paper_plane')
  {
    document.body.style.backgroundColor = '#00b8a9'
    store.state.top_header_time_color = '#ffffff'
  }
  else
    document.body.style.backgroundColor = ''


  document.title = to.name ? to.name : "拾忆哟"
  next()

});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
