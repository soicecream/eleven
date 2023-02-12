<template>
  <div id="app">
    <top_title class="top_title" v-if="this.$store.state.navigation_bar"/>
    <router-view v-if="vis_top_top"/>
    <router-view v-else/>
    <div class="to_top" v-if="vis_f">
      <img class="to_top_img" src="./assets/img/imgs/gotop.png" @click="go_to_top">
    </div>
  </div>
</template>

<script>

import top_title from "@/components/top_title";

export default {
  name: 'App',

  // 返回
  // 1.$router.back()
  // 2.$router.go()
  // go(-1) // 原页面表单中的内容会丢失
  // this.$router.go(-1) // 后退+刷新
  // this.$router.go(0) // 刷新
  // this.$router.go(1) // 前进
  // back() //原页表表单中的内容会保留
  // this.$router.back() //后退
  // this.$router.back(0) //刷新
  // this.$router.back(1) //前进

  // 相当于注册  也就是定义
  components: {
    top_title,
  },

  // 数据
  data() {
    return {
      vis_f: "none",
      vis_top_top: true,

    }
  },

  // 计算属性
  computed: {},

  // 定义函数  事件处理器
  methods: {
    // 获取文本数据
    get_text_data(file_url) {
      //  更新数据market_id.txt文件接口
      let xhr = new XMLHttpRequest()
      let okStatus = document.location.protocol === "file:" ? 0 : 200
      xhr.open("GET", file_url, false) // 文件路径
      xhr.overrideMimeType("text/html;charset=utf-8") //默认为utf-8
      xhr.send(null)
      // console.log(xhr.responseText) //文本的内容
      return xhr.status === okStatus ? xhr.responseText : ""
    },

    // 返回顶部
    go_to_top() {
      // document.body.scrollTop = 0;
      // document.documentElement.scrollTop = 0;

      let timer = setInterval(() => {
        let position = Math.floor(-this.scrollTop / 5)
        document.documentElement.scrollTop = document.body.scrollTop = this.scrollTop + position
        if (this.scrollTop === 0) {
          clearInterval(timer)
        }
      }, 16)
    },
    // 返回顶部是否显示
    check_roll_show() {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      this.scrollTop = scrollTop
      if (this.scrollTop > 0)
        this.vis_f = 'block'
      else
        this.vis_f = 'none'
    },

  },

  // 侦听器
  watch: {},


  // 下面都是 生命周期钩子

  // 在实例初始化之后,进行数据侦听和事件/侦听器的配置之前同步调用。
  beforeCreate() {

  },

  // 在实例创建完成后被立即同步调用。  创建阶段：数据的准备
  created() {
    this.$store.state.all_img_text = this.get_text_data('./txt/BackgroundImg.txt')
    this.$store.state.Journal_text = this.get_text_data('./txt/Journal.txt')
    this.$store.state.tongue_twister_text = this.get_text_data('./txt/TongueTwister.txt')

    // this.$store.state.all_img_text = this.get_text_data('../../txt/BackgroundImg.txt')
    // this.$store.state.Journal_text = this.get_text_data('../../txt/Journal.txt')
    // this.$store.state.tongue_twister_text = this.get_text_data('../../txt/TongueTwister.txt')

    window.addEventListener('scroll', this.check_roll_show)

  },

  // 实例被挂载后调用  挂载阶段：数据加载到页面
  mounted() {

  },

  // 在数据发生改变后，DOM 被更新之前被调用。
  beforeUpdate() {

  },

  // 在数据更改导致的虚拟 DOM 重新渲染和更新完毕之后被调用。   数据更新后调用
  // 该钩子在服务器端渲染期间不被调用。
  updated() {

  },

  // 被 keep-alive 缓存的组件激活时调用。
  // 该钩子在服务器端渲染期间不被调用。
  activated() {

  },

  // 被 keep-alive 缓存的组件失活时调用。
  // 该钩子在服务器端渲染期间不被调用。
  deactivated() {

  },

  // 实例销毁之前调用。在这一步，实例仍然完全可用。
  // 该钩子在服务器端渲染期间不被调用。
  beforeDestroy() {

  },

  // 实例销毁后调用。
  //  该钩子被调用后，对应Vue实例的所有指令都被解绑，所有的事件监听器被移除，所有的子实例也都被销毁。
  // 该钩子在服务器端渲染期间不被调用。
  destroyed() {
    window.removeEventListener('scroll', this.check_roll_show)

  },


}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.top_title {
  z-index: 9999;
  position: sticky;
  top: unset;
}

.to_top_img {
  display: none;
  position: fixed;
  bottom: 20px;
  right: 30px;
}

</style>
