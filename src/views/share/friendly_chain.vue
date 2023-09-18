<template>
  <div>
    <el-card class="box-card">
      <h2>友链</h2>
      <el-divider></el-divider>

      <el-card v-for="(index, i) in this.$store.state.friendly_chain" :key="i" class="user-card"
               @click.native="toUrl(index.url)">
        <el-empty :image="index.imgUrl" :image-size="50" :description="index.title"></el-empty>
      </el-card>


    </el-card>
  </div>
</template>

<script>
export default {
  name: "friendly_chain",

  data() {
    return {}
  },

  created() {

  },

  methods: {
    toUrl(url) {
      window.open(url)
    },

  },


}
</script>

<style scoped>
.box-card {
  width: 800px;
  margin: auto;
  border-radius: 30px;
}

h2 {
  color: #777790;
}

.user-card {
  width: 100px;
  height: 120px;
  margin-left: 11px;
  float: left;
  border-radius: 20px;
  margin-bottom: 2%;
}

.user-card > /deep/ .el-card__body {
  padding: 0px;
}

/deep/ .el-empty {
  padding: 20px 0;
}

</style>
