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

import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'

Vue.use(mavonEditor)

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
    {
        let dateTime = new Date()
        let month = dateTime.getMonth() + 1, day = dateTime.getDate()
        store.state.top_title_span_url[0].show = false
        if (month == 1 && day == 2) {
            store.state.top_title_span_url[0].show = true
        }
    }

    if (to.path === '/404') {
        next()
    } else {
        if (to.matched.length === 0) {
            next('/404')
        } else {
            let show_page = to.path == '/' || to.path == '/eleven' || to.path == '/quiet'

            if (!show_page) {
                show_page = true
                let top_title_url = store.state.top_title_span_url
                for (let i = 0; i < top_title_url.length; i++) {
                    if (to.path === top_title_url[i].url) {
                        if (!top_title_url[i].show) {
                            show_page = false
                            next('/404')
                        }
                        break
                    }
                }
            }

            if (show_page) {
                // 设置背景颜色

                document.title = to.name ? to.name : "水木加贝"
                next()
            }
        }
    }

});

new Vue({
    router, store, render: h => h(App)
}).$mount('#app');
