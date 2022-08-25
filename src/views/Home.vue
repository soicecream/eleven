<template>
  <div>
    <h1 class="title_top_title" :data-text="title"> {{title}} </h1>
    <span class="title_top_title_label" style="font-size: 40px;"> 《{{ text_title }}》 </span> <br> <br>
    <span style="white-space:pre-wrap; "> {{ text }} </span>
    <span aria-hidden="true" class="blink">|</span>
  </div>

</template>

<script>

export default {
  name: "Home",

  data() {
    return {
      title: "水木加贝",

      // 文本
      text_title: "",
      text_all: "",
      // 要显示的文本信息
      text: "", // 文本
      text_count: -2, // 字数
      text_k: 1, // 增加文字还是减少文字
      text_step: 0, // 修改文字的速度

      // 计时器的名称
      set_text: null,

    }
  },

  created() {
    this.getData()

  },

  mounted() {
    this.set_text = setTimeout(this.set_title_top, this.text_step)

  },

  methods: {
    // 获取数据
    getData() {
      let data = this.$store.state.tongue_twister_text.split("{}{}{}")

      let num = Math.floor(Math.random() * data.length)
      num = 0

      let title = data[num].substring(data[num].indexOf("\n") + 1);
      this.text_title = title.substring(0, title.indexOf("\n"))
      this.text_all = title.substring(title.indexOf("\n") + 1)
    },

    // 设置标题文本
    set_title_top() {
      if (this.text === this.text_all)
        this.text_k = -1;
      else if (this.text.length == 0)
        this.text_k = 1;
      this.text_step = 200 + this.text_k * 100

      this.text_count = (this.text_count + this.text_k) % this.text_all.length;
      this.text = this.text_all.substring(0, this.text_count + 1);

      this.set_text = setTimeout(this.set_title_top, this.text_step)

      // console.log(this.text_step)
    },

  },

  beforeDestroy() {
    // console.log("离开")
    clearTimeout(this.set_text);
    this.set_text = null;
  }
}
</script>

<style scoped>
div {
  height: 100%;
  width: 100%;
  position: fixed;
  text-align: center;
}

h1{
  font-family: Ubuntu, sans-serif;
}

div>span {
  font-weight: bold;
  text-shadow: 2px 2px 4px rgb(0 0 0 / 15%);
  color: #ffffff;
  font-family: Ubuntu, sans-serif;
}


/* 移动到文字上, 出现下划线 */
.title_top_title_label {
  font-size: 24px;
  color: #ffffff;
  position: relative;
}
.title_top_title_label:after {
  content: '';
  width: 100%;
  height: 1px;
  position: absolute;
  bottom: 0;
  left: 0;
  transform: scaleX(0);
  background-color: #ffffff;
  transition-duration: 0.2s;
}
.title_top_title_label:hover:after {
  transform: scaleX(1);
}


/* 移动到文字上时渐变闪烁 */
.title_top_title {
  margin-top: 5%;
  font-size: 80px;
  position: relative;
  color: #fff;
}
.title_top_title:after, .title_top_title:before {
  content: attr(data-text);
  position: absolute;
  width: 100%;
  background: rgba(0, 0, 0, 0);
  clip: rect(0, 0, 0, 0)
}
.title_top_title:before {
  left: -1px;
  text-shadow: 1px 0 #ff3f1a
}
.title_top_title:after {
  left: 1px;
  text-shadow: -1px 0 #00a7e0
}
.title_top_title:hover:before {
  text-shadow: 4px 0 #ff3f1a;
  animation: glitch-loop-1 .8s infinite ease-in-out alternate-reverse;
}
.title_top_title:hover:after {
  text-shadow: -5px 0 #00a7e0;
  animation: glitch-loop-2 .8s infinite ease-in-out alternate-reverse;
}
@keyframes glitch-loop-1 {
  0% { clip: rect(36px, 9999px, 9px, 0) }
  25% { clip: rect(25px, 9999px, 99px, 0) }
  50% { clip: rect(50px, 9999px, 102px, 0) }
  75% { clip: rect(30px, 9999px, 92px, 0) }
  100% { clip: rect(91px, 9999px, 98px, 0) }
}
@keyframes glitch-loop-2 {
  0% { top: -1px; left: 1px; clip: rect(65px, 9999px, 119px, 0) }
  25% { top: -6px; left: 4px; clip: rect(79px, 9999px, 19px, 0) }
  50% { top: -3px; left: 2px; clip: rect(68px, 9999px, 11px, 0) }
  75% { top: 0; left: -4px; clip: rect(95px, 9999px, 53px, 0) }
  100% { top: -1px; left: -1px; clip: rect(31px, 9999px, 149px, 0) }
}


/* 定义文字闪烁 */
/* 定义keyframe动画，命名为blink */
@keyframes blink {
  0% { opacity: 1; }
  100% { opacity: 0; }
}
.blink {
  animation: blink 0.5s linear infinite;
}

</style>