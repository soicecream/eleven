<template>
  <div style="position: absolute; top: 0px; width: 100%; height: 100%;">
    <div id="container" style="width: 100%; height: 100vh;"></div>
  </div>

</template>

<script>
// https://lbsyun.baidu.com/apiconsole/center#/home 百度地图控制台
// https://lbsyun.baidu.com/index.php?title=jspopularGL api
// https://lbs.baidu.com/jsdemo.htm#aCreateMap 实例中心
export default {
  name: "Map",

  created() {

  },

  mounted() {
    var map = new BMapGL.Map("container");          // 创建地图实例
    var point = new BMapGL.Point(125.67381836040714,43.54182284072102);  // 创建点坐标
    map.centerAndZoom(point, 15);                 // 初始化地图，设置中心点坐标和地图级别

    map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放

    var scaleCtrl = new BMapGL.ScaleControl();  // 添加比例尺控件
    map.addControl(scaleCtrl);

    var zoomCtrl = new BMapGL.ZoomControl();  // 添加缩放控件
    map.addControl(zoomCtrl);

    // 创建点标记
    var marker1 = new BMapGL.Marker(new BMapGL.Point(125.67381836040714,43.54182284072102));
    var marker2 = new BMapGL.Marker(new BMapGL.Point(120.90669377961099,28.05334252326996));

    // 在地图上添加点标记
    map.addOverlay(marker1);
    map.addOverlay(marker2);

    map.addEventListener('click', this.getClickMap);
    this.$once('hook:beforeDestroy', () => {
      window.removeEventListener('click', this.getClickMap);
    });


  },

  methods: {
    getMap() {
      var script = document.createElement('script');
      script.type = 'text/javascript';
      // script.src = '//api.map.baidu.com/api?type=webgl&v=1.0&ak=您的密钥&callback=init';
      script.src = '//api.map.baidu.com/api?type=webgl&v=1.0&ak=rAtzRZTIvRjiuerjkq8TvaDM3CQqX1Ho&callback=init';
      document.body.appendChild(script);
    },

    getClickMap(e) {
      console.log('点击位置经纬度：' + e.latlng.lng + ',' + e.latlng.lat);
    },

  },

}
</script>

<style scoped>

</style>
