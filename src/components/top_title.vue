<template>
  <div class="title_logo">
    <span class="title_span_to"> <router-link to="/eleven"> Y </router-link> </span>
    <span class="title_span_to_to"> <a> U </a> </span>
    <span class="title_span_to"> <router-link to="/"> H </router-link> </span>
    <span class="title_span_to_to"> <router-link to="/quiet"> M </router-link> </span>
    <span class="title_span_to_to"> <a> E </a> </span>
    <span class="title_span_to_to"> <a @click="Show_Show = !Show_Show"> · </a> </span>
    <span v-show="Show_Show" class="title_span_to_to"> <router-link title="图库" to="/picture"> 1 </router-link> </span>
    <span v-show="Show_Show" class="title_span_to_to"> <router-link title="日志" to="/journal"> 2 </router-link> </span>
    <span v-show="Show_Show" class="title_span_to_to"> <router-link title="绕口令" to="/tongue_twister"> 3 </router-link> </span>
    <span v-show="Show_Show" class="title_span_to_to"> <router-link title="水波" to=""> 4 </router-link> </span>
    <span v-show="Show_Show" class="title_span_to_to"> <router-link title="脉冲波纹催眠" to="/hypnosis"> 5 </router-link> </span>
    <span v-show="Show_Show" class="title_span_to_to"> <router-link title="纸飞机" to="/paper_plane"> 6 </router-link> </span>
    <span v-show="Show_Show" class="title_span_to_to"> <a title="拾忆" href="https://soicecream.github.io/soicecream.github.io/"> 7 </a> </span>
    <span v-show="Show_Show" class="title_span_to_to"> <a title="水木加贝" href="https://soicecream.github.io/soicecreams.github.io/"> 8 </a> </span>

    <div style="float: right; text-align: center">
      <span :style="{'color': this.$store.state.top_header_time_color}"> {{ ShowNowDate }} </span>
      <br>
      <span :style="{'color': this.$store.state.top_header_time_color}"> {{ ShowNowTime }} </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "top_title",

  data() {
    return {
      time_color: "",
      ShowNowDate: "",
      ShowNowTime: "",
      weeks: ["天", "一", "二", "三", "四", "五", "六"],

      Show_Show: false,
    }
  },

  created() {
    this.getTime()

  },

  methods: {
    getTime() {
      let data = new Date();
      let year = data.getFullYear();
      let month = data.getMonth() + 1;
      let day = data.getDate();

      let hour = data.getHours();
      hour = hour < 10 ? '0' + hour : hour;
      let minute = data.getMinutes();
      minute = minute < 10 ? '0' + minute : minute;
      let seconds = data.getSeconds();
      seconds = seconds < 10 ? '0' + seconds : seconds;

      this.ShowNowDate = year + "年" + month + "月" + day + "日" + " " + "星期" + this.weeks[data.getDay()];
      this.ShowNowTime = hour + "时" + minute + "分" + seconds + "秒";

      setTimeout(this.getTime, 1000);
    },

  },
}
</script>

<style scoped>

a {
  text-decoration: none;
  cursor: pointer;
}

.title_logo {
  height: 50px;
  margin: 2em 0 2em 2em;
}

.title_logo > span {
  float: left;
  text-align: center;
  line-height: 25px;
  margin-top: 13px;
}

.title_logo > span > a {
  width: 26px;
  height: 24px;
  display: block;
  font-weight: bold;
}

.title_span_to_to > a:hover {
  background: #52575d;
}

.title_span_to, .title_logo > .title_span_to > a {
  background: #ffffff;
  color: #414141;
}

.title_logo > span > a, .title_span_to > a:hover {
  background: #414141;
  color: #ffffff;
}

.title_logo > div > {
  width: 200px;
  height: 50px;
}

.title_logo > div > span {
  font-weight: bold;
  color: #414141;
}

</style>