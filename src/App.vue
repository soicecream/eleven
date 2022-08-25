<template>
  <div id="app" >
    <top_title class="top_title"/>
    <router-view v-if="vis_top_top" />
    <router-view v-else />
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
      vis_f: "none",
      vis_top_top: true,

    }
  },

  created() {
    this.$store.state.all_img_text = this.getData('../../txt/BackgroundImg.txt')
    this.$store.state.Journal_text = this.getData('../../txt/Journal.txt')
    this.$store.state.tongue_twister_text = this.getData('../../txt/TongueTwister.txt')
  },

  methods: {
    getData(file_url){
      //  更新数据market_id.txt文件接口
      let xhr = new XMLHttpRequest(),
          okStatus = document.location.protocol === "file:" ? 0 : 200;
      xhr.open("GET", file_url, false); // 文件路径
      xhr.overrideMimeType("text/html;charset=utf-8"); //默认为utf-8
      xhr.send(null);
      // console.log(xhr.responseText) //文本的内容
      return xhr.status === okStatus ? xhr.responseText : null;
    },

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
  z-index: 9999;
  position: sticky;
  top: unset;
}

.to_top_img{
  display: none;
  position: fixed;
  bottom: 20px;
  right: 30px;
}

</style>
