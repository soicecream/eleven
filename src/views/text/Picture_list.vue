<template>
  <div>
    <div class="picture_list_top" >
      <img class="picture_list_top_picture" :src="top_picture_top">
      <h1 > 画廊 </h1>
    </div>
  </div>

</template>

<script>

export default {
  name: "Picture_list",

  data() {
    return {
      top_picture_top: "",

    }
  },

  created() {
    this.getImg()

  },

  methods: {
    getImg() {
      let num = Math.floor(Math.random() * 30) + 1
      num = num < 10 ? '00' + num : (num < 100 ? '0' + num : num)
      this.top_picture_top = require("@/assets/img/background/" + num + ".jpg")
    },

  },

}
</script>

<style scoped>
.picture_list_top {
  width: 100%;
  height: 400px;

  position: relative;
  top: 0;
  left: 0;
  overflow: hidden;

}

.picture_list_top:before {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0,0,0,.3);
}

.picture_list_top_picture {
  object-fit: cover;
  width: 100%;
  height: 100%;
}

h1 {
  color: #fff;
  font-size: 40px;
  font-weight: 500;
  font-family: Ubuntu, sans-serif;
  margin: auto;
  position: absolute;
  top: 45%;
  left: 0;
  right: 0;
  text-align: center;
  text-shadow: 3px 3px 11px #000;
}

</style>