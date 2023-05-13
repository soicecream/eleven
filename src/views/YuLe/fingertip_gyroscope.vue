<template>
  <div class="bg">
    <div class="everything">
      <div class="holder">
        <div class="spinner"><img src="../../assets/img/imgs/YuLe/fingertip_gyroscope.png"></div>
        <div class="handle"></div>
      </div>
    </div>
  </div>
</template>

<script>

import store from "@/store/store";

export default {
  name: "fingertip_gyroscope",

  mounted() {
    document.body.style.background = '-moz-linear-gradient(-45deg, rgba(0, 0, 0, 0.3) 0, rgba(0, 0, 0, 0) 100%)'
    document.body.style.background = '-webkit-linear-gradient(-45deg, rgba(0, 0, 0, 0.3) 0, rgba(0, 0, 0, 0) 100%)'
    document.body.style.background = 'linear-gradient(135deg, rgba(0, 0, 0, 0.3) 0, rgba(0, 0, 0, 0) 100%)'

    const name = "body-fingertip-gyroscope"

    const js = document.createElement("script")
    js.type = "text/javascript"
    js.src = "../js/YuLe/fingertip_gyroscope/fingertip_gyroscope.js"
    js.id = name
    document.body.appendChild(js);
    this.$once('hook:beforeDestroy', () => {
      const scriptElement = document.getElementById(name);
      if (scriptElement) {
        scriptElement.remove();
      }
    });
    document.body.style.backgroundColor = ''
  },

  beforeDestroy() {
  },

}
</script>

<style scoped>
.bg {
  position: fixed;
  top: 0px;
  height: 100vh;
  width: 100vw;
}

.everything {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%
}

.spinner img {
  width: 100%
}

.holder, .spinner {
  width: 300px;
  height: 300px;
  position: relative
}

.handle {
  width: 70px;
  height: 70px;
  position: absolute;
  top: 115px;
  left: 115px;
  z-index: 1
}

@media screen and (min-width: 500px) {
  .holder, .spinner {
    width: 500px;
    height: 500px;
    position: relative
  }

  .handle {
    width: 100px;
    height: 100px;
    position: absolute;
    top: 200px;
    left: 200px;
    z-index: 1
  }
}
</style>
