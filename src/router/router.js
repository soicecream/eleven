import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  { path: '/', name: '首页', component: () => import('../views/Home'), },
  { path: '/eleven', name: '拾忆', component: () => import('../views/ShiYiEleven'), children: [ ], },
  { path: '/quiet', name: '水木加贝', component: () => import('../views/IWant'), },
  { path: '/picture', name: '图库', component: () => import('../views/Picture_list'), },
  { path: '/journal', name: '日志', component: () => import('../views/Journal'), },
  { path: '/hypnosis', name: '脉冲波纹催眠', component: () => import('../views/Hypnosis'), },
  { path: '/HomeView', name: 'HomeView', component: () => import('../views/HomeView'), },
  { path: '/about', name: 'about', component: () => import('../views/AboutView'), },
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
