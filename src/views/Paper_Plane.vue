<template>
  <div id="plane">
    <i class="fa fa-paper-plane-o" aria-hidden="true"></i>
  </div>
</template>

<script>

export default {
  name: "PaperPlane",

}
</script>

<style scoped>
#plane {
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