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
export default {
  name: "fingertip_gyroscope",

  mounted() {
    const js = document.createElement("script")
    js.type = "text/javascript"
    js.src = "../js/YuLe/fingertip_gyroscope/fingertip_gyroscope.js"
    js.title = "fingertip_gyroscope"
    document.getElementsByTagName('head')[0].appendChild(js);

  },

  destroyed() {
    var allsuspects = document.getElementsByTagName("script")
    for (var i = allsuspects.length; i >= 0; i--) {
      if (allsuspects[i] && allsuspects[i].getAttribute("src") != null && allsuspects[i].getAttribute("src").indexOf("fingertip_gyroscope") != -1)
        allsuspects[i].parentNode.removeChild(allsuspects[i])
    }
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
