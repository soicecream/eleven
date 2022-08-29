<template>
  <div class="title_logo">
    <span class="title_span_to"> <router-link to="/eleven"> Y </router-link> </span>
    <span class="title_span_to_to"> <a> U </a> </span>
    <span class="title_span_to"> <router-link to="/"> H </router-link> </span>
    <span class="title_span_to_to"> <router-link to="/quiet"> M </router-link> </span>
    <span class="title_span_to_to"> <a> E </a> </span>
    <span class="title_span_to_to"> <a @click="$store.state.navigation_bar_title_vis = !$store.state.navigation_bar_title_vis"> · </a> </span>
    <span v-for="(index, i) in span_url" :key="i"
          v-show="$store.state.navigation_bar_title_vis && index.show" class="title_span_to_to" >
      <router-link v-if="index.type == 1" :to="index.url"> {{index.id}} </router-link>
      <a v-else :title="index.title" :href="index.url"> {{index.id}} </a>
    </span>

    <div style="float: right; text-align: center">
      <span :style="{'color': this.$store.state.navigation_bar_time_color}"> {{ ShowNowDate }} </span>
      <br>
      <span :style="{'color': this.$store.state.navigation_bar_time_color}"> {{ ShowNowTime }} </span>
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

      span_url: [],

    }
  },

  created() {
    this.get_top_title()
    this.getTime()

  },

  methods: {
    get_top_title() {
      this.span_url = this.$store.state.top_title_span_url
    },

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