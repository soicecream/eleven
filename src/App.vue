<template>
  <div id="app" >
    <top_title class="top_title"/>
    <router-view />
    <div class="to_top">
      <img class="to_top_img" src="./assets/img/imgs/gotop.png" @click="go_to_top" :style="{'display': vis_f}">
    </div>
  </div>
</template>

<script>

import top_title from "@/components/top_title";

export default {
  name: 'App',

  // 相当于注册  也就是定义
  components: {
    top_title,
  },

  mounted () {
    window.addEventListener('scroll', this.check_roll_show)
  },
  destroyed () {
    window.removeEventListener('scroll', this.check_roll_show)
  },

  data() {
    return {
      vis_f: "none"
    }
  },

  methods: {
    go_to_top() {
      // document.body.scrollTop = 0;
      // document.documentElement.scrollTop = 0;

      let timer = setInterval(() => {
        let ispeed = Math.floor(-this.scrollTop / 5)
        document.documentElement.scrollTop = document.body.scrollTop = this.scrollTop + ispeed
        if (this.scrollTop === 0) {
          clearInterval(timer)
        }
      }, 16)
    },

    check_roll_show() {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      this.scrollTop = scrollTop
      if (this.scrollTop > 0)
        this.vis_f = 'block'
      else
        this.vis_f = 'none'
    },
  }

}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.top_title{
  top: 0;
  z-index: 9999;
  top: unset;
}

.to_top_img{
  display: none;
  position: fixed;
  bottom: 20px;
  right: 30px;
}

</style>
