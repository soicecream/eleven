<template>
  <div>
    <el-button @click="changeTitle('功德')">功德</el-button>
    <el-button @click="changeTitle('财运')">财运</el-button>
    <el-button @click="changeTitle('桃花')">桃花</el-button>
    <el-button @click="changeTitle('寿命')">寿命</el-button>


    <div class="muyu-page">
      <div class="muyu-container" ref="muyuContainer" @click="clickMuYu">
        <img id="wf" src="@/assets/img/imgs/muyubai.png">
        <transition-group name="fade">
          <span v-for="item in animationItems" :key="item.id" class="animation-text">{{ item.text }}</span>
        </transition-group>
      </div>
      <p>您的{{ this.$store.state.woodenfish_click_title }}：<span>{{ this.$store.state.woodenfish_count }}</span></p>
      <audio id="audio" src="@/assets/mp3/muyu.mp3"></audio>
    </div>
  </div>
</template>

<script>
export default {
  name: "muyu",

  data() {
    return {
      count: 0,
      animationItems: [],
      animationTimeout: null,

      clickTitle: this.$store.state.woodenfish_click_title,
      clickNumber: this.$store.state.woodenfish_click_number,
    };
  },

  mounted() {
    document.body.style.background = "#000000";
    this.$store.state.navigation_bar_time_color = "#FFFFFF";
  },

  destroyed() {
    document.body.style.background = "#FFFFFF";
    this.$store.state.navigation_bar_time_color = "#000000";
  },

  methods: {
    changeTitle(title) {
      this.$store.state.woodenfish_click_title = title
    },

    clickMuYu() {
      let music = document.getElementById("audio");

      music.currentTime = 0;
      music.play();

      this.$store.state.woodenfish_count++

      const newItem = {
        id: Date.now(),
        text: `${this.$store.state.woodenfish_click_title} + ${this.$store.state.woodenfish_click_number}`
      };

      this.animationItems.push(newItem);

      clearTimeout(this.animationTimeout);
      this.animationTimeout = setTimeout(() => {
        this.animationItems.shift();
      }, 2000);
    }
  }
};
</script>

<style scoped>
.muyu-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80vh;
  background-color: #000;
}

.muyu-container {
  position: relative;
  display: inline-block;
}

#wf {
  width: 215px;
}

.fade-enter-active {
  transition: opacity 1s, transform 3s;
}

.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
  transform: translateY(0);
}

.fade-enter-to, .fade-leave {
  opacity: 1;
  transform: translateY(-50px);
}

.animation-text {
  position: absolute;
  top: -50%;
  left: 50%;
  transform: translate(-50%, -100%);
  color: #fff;
  font-size: 24px;
  animation: move-up 2s forwards;
  will-change: transform;
}

@keyframes move-up {
  0% {
    top: 0;
  }
  100% {
    top: -100px;
    opacity: 0;
  }
}

p {
  color: #fff;
}
</style>
