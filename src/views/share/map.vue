<template>
  <div style="position: absolute; top: 0px; width: 100%; height: 100%;">
    <div id="container" style="width: 100%; height: 100vh;"></div>
  </div>

</template>

<script>
// https://console.amap.com/ 缺德地图管理
// https://api.map.baidu.com/lbsapi/getpoint/index.html 坐标拾取器
export default {
  name: "Map",

  mounted() {
    // let script = document.createElement('script');
    // script.type = 'text/javascript';
    // // script.src = 'https://webapi.amap.com/maps?v=2.0&key=您申请的key值';
    // script.src = 'https://webapi.amap.com/maps?v=2.0&key=a8036be120bf3e907dff5f13c43b54b4';
    // document.body.appendChild(script);

    // 创建地图实例
    var map = new AMap.Map("container", {
      zoom: 13, // 缩放级别
      center: [43.535195, 125.667650], // 中心点的经纬度位置
    });

    // 创建一个 Marker 实例：
    var marker = new AMap.Marker({
      position: new AMap.LngLat(43.535195, 125.667650),   // 经纬度对象，也可以是经纬度构成的一维数组[116.39, 39.9]
      title: '长春科技学院'
    });

    // 将创建的点标记添加到已有的地图实例：
    map.add(marker);

    // // 移除已创建的 marker
    // map.remove(marker);
  },

}
</script>

<style scoped>

</style>
