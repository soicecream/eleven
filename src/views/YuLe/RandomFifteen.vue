<template>
  <div id="wrapper">
    <h1>
      {{ title }}
      <br>
      <br>
      <span :style="{ color: '#FF9733' }" ref="food">{{ food }}</span>
    </h1>
    <button @click="toggleRunning">{{ running ? '停止' : '开始' }}</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      title: '待会吃什么，吃什么？',
      running: false,
      foodList: [
        '麻辣烫', '麻辣香锅', '饺子', '米线', '炒饭', '黄焖鸡', '麦当劳', '肯德基', '螺蛳粉', '炸鸡', '寿司', '粥', '酸菜鱼',
        '馄饨', '酸辣粉', '烧烤', '凉皮', '火锅', '水饺', '披萨', '冒菜', '拉面', '汉堡', '煎饼果子', '煲仔饭', '重庆小面',
        '炸酱面', 'KFC', '包子', '黄焖鸡米饭', '鸡公煲', '烤冷面', '兰州拉面', '沙县', '肠粉', '西北风', '泡面', '小碗菜', '面包',
        '汉堡王', '盖浇饭', '面', '米饭', '沙县小吃', '咖喱饭', '炒面', '烤肉拌饭', '华莱士', '石锅拌饭', '猪脚饭', '烩面',
        '热干面', '刀削面', '油泼面', '土豆粉', '螺狮粉', '凉皮儿', '肉夹馍', '羊肉汤', '卤肉饭', '烤肉饭', '驴肉火烧', '川菜',
        '烤串', '烤鸭', '蟹黄包', '生煎', '炒年糕', 'KFC', '麦当劳'
      ],
      food: '',
      timer: null
    };
  },
  methods: {
    toggleRunning() {
      if (this.running) {
        this.stop();
      } else {
        this.start();
      }
    },
    start() {
      this.running = true;
      const heading = this.$refs.food;
      heading.innerHTML = '';

      const list = this.foodList;
      this.food = list[0];

      const timer = setInterval(() => {
        const r = Math.ceil(Math.random() * list.length);
        const food = list[r - 1];
        heading.innerHTML = food;

        const tempSpan = document.createElement('span');
        tempSpan.classList.add('temp');
        tempSpan.innerHTML = food;
        tempSpan.style.display = 'none';
        tempSpan.style.top = `${Math.ceil(Math.random() * document.documentElement.clientHeight)}px`;
        tempSpan.style.left = `${Math.ceil(Math.random() * (document.documentElement.clientWidth - 50))}px`;
        tempSpan.style.color = `rgba(0,0,0,${Math.random()})`;
        tempSpan.style.fontSize = `${Math.ceil(Math.random() * (37 - 14) + 14)}px`;

        document.body.appendChild(tempSpan);
        tempSpan.style.display = 'block';

        setTimeout(() => {
          tempSpan.style.display = 'none';
          tempSpan.remove();
        }, 1000);
      }, 50);

      this.timer = timer;
    },

    stop() {
      this.running = false;
      clearInterval(this.timer);
      this.title = '待会吃什么，吃这个！';
    }
  }
};
</script>
<style>
html {
  overflow: hidden;
  height: 100%;
}

body {
  position: relative;
  overflow: hidden;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  background: #EEE;
  font-family: "微软雅黑";
}

#wrapper {
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -60px;
  margin-left: -250px;
  width: 500px;
  height: 120px;
  text-align: center;
}

#wrapper h1 {
  margin: 0 0 20px;
  padding: 0;
  font-weight: 300;
  font-size: 30px;
}

#wrapper h1 b {
  font-weight: 700;
}

button {
  width: 120px;
  height: 40px;
  vertical-align: middle;
  font-family: "微软雅黑";
  cursor: pointer;
}

.temp {
  position: absolute;
  z-index: -1;
  color: #777;
}
</style>