import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  { path: '/', name: '首页', component: () => import('../views/share/home'), },
  { path: '/eleven', name: '拾忆', component: () => import('../views/webPage/ShiYiEleven'), children: [ ], },
  { path: '/quiet', name: '水木加贝', component: () => import('../views/webPage/IWant'), },

  { path: '/links', name: '友链', component: () => import('../views/share/friendly_chain'), },

  { path: '/picture', name: '图库', component: () => import('../views/text/Picture_list'), },
  { path: '/journal', name: '日志', component: () => import('../views/text/Journal'), },
  { path: '/tongueTwister', name: '绕口令', component: () => import('../views/text/Tongue_Twister'), },

  { path: '/christmasTree', name: '圣诞树', component: () => import('../views/YuLe/Christmas_Tree'), },
  { path: '/hypnosis', name: '脉冲波纹催眠', component: () => import('../views/YuLe/Hypnosis'), },
  { path: '/paperPlane', name: '纸飞机', component: () => import('../views/YuLe/Paper_Plane'), },
  { path: '/fingertipGyroscope', name: '指尖陀螺', component: () => import('../views/YuLe/fingertip_gyroscope'), },


  { path: '/map', name: '地图', component: () => import('../views/share/map'), },
  { path: '/text', name: 'text', component: () => import('../views/share/text'), },
  { path: '/about', name: 'about', component: () => import('../views/share/about'), },

  { path: '/404', name: '404', component: () => import('../views/share/not_find_404'), },
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
