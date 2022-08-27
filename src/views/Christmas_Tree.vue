<template>
  <div>
    <div class="star"></div>
    <ul class="tree" id="tree">
      <li v-for="(index, i) in li" :key="i" :style="{'cssText': index.cssText}">
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Christmas_Tree",

  data() {
    return {
      li: [],
    }
  },

  created() {
    this.createTree()
  },

  methods: {
    createTree() {
      for(let i = 0; i < 128; i ++) {
        // 设置li元素的样式
        // --h、--d为自定义属性， 可以通过var函数对其调用
        // --h: 线条高度
        // --d: 动画延迟时间
        this.li[i] = {
          'cssText': '--h:calc(60vh / 128 * ' + i + '); --d:calc(-28s / 128 * ' + i + ');'
        }
      }
    },

  }
}
</script>

<style scoped>
.star{
  width: 36px;
  height: 36px;
  /* 绝对定位 计算位置 */
  position: absolute;
  left: calc(50% - 18px);
  top: calc(20vh - 22px);
  z-index: 2;
  background-color: #ffce54;
  /* 裁剪成五角星 */
  clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%,
  50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
  transition: 0.3s;
}

/* 鼠标移入小星星， 星星变成图片 */
.star:hover{
  /* 设置背景图片 不平铺 */
  background: url("../assets/img/imgs/Christmas_snow.jpg") no-repeat;
  /* 保持原有比例尺寸， 裁剪长边 */
  background-size: cover;
  background-position: center;
  width: 50vw;
  height: 50vh;
  border-radius: 20px;
  /* 取消裁剪五角星 */
  clip-path: none;
  /* 计算left， 让其居中 */
  left: calc(50% - 25vw);
}

/* 再加上一句话 圣诞快乐 */
.star::before {
  /* 默认没有文字 */
  content: "";
  /* 绝对定位 */
  position: absolute;
  top: 55vh;
  width: 100%;
  text-align: center;
  color: #555;
  font-size: 6vw;
  font-family: "Kanit";
  font-weight: 900;
  /* 不让文字换行 */
  white-space: nowrap;
  /* 文字发光效果 */
  text-shadow: 0 0 10px #fff,
  0 0 20px #fff,
  0 0 40px #fff,
  0 0 80px #fff,
  0 0 120px #fff,
  0 0 180px #fff;
}

/* 鼠标移入， 设置文本 */
.star:hover::before{
  content: "Merry Christmas";
}

ul{
  padding: 0;
}

ul li{
  list-style: none;
}

.tree li{
  position: absolute;
  top: 20vh;
  right: 50%;
  width: 1px;
  /* 通过var函数调用自定义属性--h，设置每一条线的高度 */
  height: var(--h);
  /* 线条的背景颜色，透明往浅绿色渐变 */
  background: linear-gradient(transparent, rgba(46, 204, 113, 0.35));
  /* 设置旋转元素的基点位置 */
  transform-origin: 50% 0;
  /* 执行动画： 动画名 时长 加速后减速 无限次播放 */
  animation: swing 4s ease-in-out infinite;
  /* 通过var函数调用自定义属性--d，设置每一条线的动画延时时间 */
  animation-delay: var(--d);
}

/* 彩色小圆点 */
.tree li::before{
  content: "";
  position: absolute;
  left: -1px;
  bottom: -1px;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: red;
}

/* 为下标是4的倍数的所有小圆点设置背景颜色 */
.tree li:nth-child(4n)::before{
  background-color: #d8334a;
}

/* 为下标是4的倍数+1的所有小圆点设置背景颜色 */
.tree li:nth-child(4n+1)::before{
  background-color: #ffce54;
}

/* 为下标是4的倍数+2的所有小圆点设置背景颜色 */
.tree li:nth-child(4n+2)::before{
  background-color: #2ecc71;
}

/* 为下标是4的倍数+3的所有小圆点设置背景颜色 */
.tree li:nth-child(4n+3)::before{
  background-color: #5d9cec;
}

/*定义动画*/
@keyframes swing {
  0%, 100% { transform: rotateZ(-30deg); }
  5%, 45% { opacity: 0.25; }
  50%, 100%, 0% { opacity: 1; }
  50% { transform: rotateZ(30deg); }
}
</style>