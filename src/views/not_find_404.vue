<template>
  <div class="stars">
    <div class="central-body" >
      <!--404-->
      <img src="../assets/img/svg/404.svg" width="300px">
      <!--返回-->
      <div class="btn-go">
        <a style="float:left;" class="btn-go-home" @click="go_back">GO BACK</a>
        <a style="float:right;" class="btn-go-home" @click="go_home">GO HOME</a>
      </div>
    </div>

    <div>
      <!-- 火箭 -->
      <img class="rocket" src="../assets/img/svg/rocket.svg" width="40px">

      <div class="earth-moon">
        <!--地球-->
        <img class="earth" src="../assets/img/svg/earth.svg" width="100px">
        <!-- 月亮 -->
        <img class="moon" src="../assets/img/svg/moon.svg" width="80px">
      </div>

      <div class="astronaut_box">
        <!--宇航员-->
        <img class="astronaut" src="../assets/img/svg/astronaut.svg" width="140px">
      </div>
    </div>

    <!--星星-->
    <div class="glowing_stars">
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "not_find_404",

  methods: {
    go_back() {
      // console.log("回到上一页")
      this.$router.back()
    },

    go_home() {
      // console.log("回到首页")
      this.$router.push("/")
    },

  }
}
</script>

<style scoped>

/*404 加 按钮的框*/
.central-body {
  padding: 17% 5% 10% 5%;
  text-align: center;
}

/*按钮的框*/
.btn-go {
  width: 300px;
  margin: auto;
}

/*按钮*/
.btn-go-home {
  margin: 15px auto;
  width: 100px;
  padding: 10px 15px;
  border: 1px solid #FFCB39;
  border-radius: 100px;
  font-weight: 400;
  color: white;
  letter-spacing: 2px;
  font-size: 11px;

  transition: all 0.3s ease-in;
}

/*按钮移动到上面*/
.btn-go-home:hover {
  background-color: #FFCB39;
  transform: scale(1.05);
}

/*火箭*/
.rocket {
  transform: translateX(-50px);
  animation: rocket-movement 200s linear infinite both running;
}
@keyframes rocket-movement { 100% {transform: translate(1200px, -600px);} }
/*不同的前缀 去兼容浏览器*/
@-moz-keyframes rocket-movement {
  100% { -moz-transform: translate(1200px, -600px);}
}
@-webkit-keyframes rocket-movement {
  100% {-webkit-transform: translate(1200px, -600px);}
}

/*地球*/
.earth {
  position: absolute;
  top: 20%;
  left: 15%;
}

/*月球*/
.moon {
  position: absolute;
  top: 12%;
  left: 25%;
}

/*宇航员的框*/
.astronaut_box {
  position: absolute;
  top: 60%;
  right: 20%;
  animation: move-astronaut 50s infinite linear both alternate;
}
@keyframes move-astronaut { 100% {-webkit-transform: translate(-160px, -160px);transform: translate(-160px, -160px);} }
/*不同的前缀 去兼容浏览器*/
@-moz-keyframes move-astronaut {
  100% {-moz-transform: translate(-160px, -160px);}
}
@-webkit-keyframes move-astronaut {
  100% {-webkit-transform: translate(-160px, -160px);}
}

/*宇航员*/
.astronaut {
  animation: rotate-astronaut 200s infinite linear both alternate;
}
@keyframes rotate-astronaut { 100% {-webkit-transform: rotate(-720deg);transform: rotate(-720deg);} }
/*不同的前缀 去兼容浏览器*/
@-moz-keyframes rotate-astronaut {
  100% {-moz-transform: rotate(-720deg);}
}
@-webkit-keyframes rotate-astronaut {
  100% {-webkit-transform: rotate(-720deg);}
}

/*小星星*/
.stars {
  background: url('../assets/img/svg/overlay_stars.svg') repeat left top;
}

/*小星星的框*/
.glowing_stars .star {
  position: absolute;
  background-color: #fff;
  width: 3px;
  height: 3px;
  opacity: 0.3;
}

/*小星星闪动*/
.glowing_stars .star:nth-child(1) {
  top: 80%;
  left: 25%;
  animation: glow-star 2s infinite ease-in-out alternate 1s;
}
.glowing_stars .star:nth-child(2) {
  top: 20%;
  left: 40%;
  animation: glow-star 2s infinite ease-in-out alternate 3s;
}
.glowing_stars .star:nth-child(3) {
  top: 25%;
  left: 25%;
  animation: glow-star 2s infinite ease-in-out alternate 5s;
}
.glowing_stars .star:nth-child(4) {
  top: 75%;
  left: 80%;
  animation: glow-star 2s infinite ease-in-out alternate 7s;
}
.glowing_stars .star:nth-child(5) {
  top: 90%;
  left: 50%;
  animation: glow-star 2s infinite ease-in-out alternate 9s;
}
@keyframes glow-star {
  40% {-webkit-opacity: 0.3;opacity: 0.3;}
  90%, 100% {-webkit-opacity: 1;opacity: 1;-webkit-transform: scale(1.2);transform: scale(1.2);border-radius: 999999px;}
}
/*不同的前缀 去兼容浏览器*/
@-moz-keyframes glow-star {
  40% {-moz-opacity: 0.3;}
  90%, 100% {-moz-opacity: 1;-moz-transform: scale(1.2);}
}
@-webkit-keyframes glow-star {
  40% {-webkit-opacity: 0.3;}
  90%, 100% {-webkit-opacity: 1;-webkit-transform: scale(1.2);}
}

</style>