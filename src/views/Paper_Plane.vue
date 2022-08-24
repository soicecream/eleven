<template>
  <div id="PaperPlane_plane">
    <i class="fa fa-paper-plane-o" aria-hidden="true"></i>
  </div>
</template>

<script>

export default {
  name: "PaperPlane",

  data() {
    return {
      deg: 0,
      ex: 0,
      ey: 0,
      vx: 0,
      vy: 0,
      count: 0,

      draw: null,

    }
  },

  // 创建阶段：数据的准备
  created() {
    window.addEventListener('mousemove', this.direction)
  },

  // 挂载阶段：数据加载到页面
  mounted () {
    // 飞机进行移动
    this.draw = setInterval(() => {
      let plane = document.getElementById('PaperPlane_plane')
      plane.style.transform = 'rotate(' + this.deg + 'deg)';
      if(this.count < 100) {
        this.vx += this.ex / 100;
        this.vy += this.ey / 100;
      }
      plane.style.left = this.vx + 'px';
      plane.style.top = this.vy + 'px';
      this.count++;
    }, 1);

    // 页面离开时 断掉定时器
    this.$once('hook:beforeDestroy', () => {
      clearInterval(this.draw);
    });
  },

  // 定义函数
  methods: {
    // 监听方向
    direction(event) {
      let plane = document.getElementById('PaperPlane_plane')
      this.ex = event.x - plane.offsetLeft - plane.clientWidth / 2;
      this.ey = event.y - plane.offsetTop - plane.clientHeight / 2;
      this.deg = 360 * Math.atan(this.ey / this.ex) / (2 * Math.PI) + 45;
      if(this.ex < 0) this.deg += 180;
      this.count = 0;
      // console.log(this.ex + " " + this.ey)
    },
  },

  // 页面离开时
  beforeDestroy() {
    // console.log("bai")
    window.removeEventListener('mousemove', this.direction)
  },

}
</script>

<style scoped>
#PaperPlane_plane {
  color: #ffffff;
  font-size: 70px;
  /* 绝对定位 */
  position: absolute;
  /* 弹性布局 水平+垂直居中*/
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>