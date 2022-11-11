<template>
  <div>
    <ul>
      <li v-for="(index, i) in url" :key="i"
          :style="{'border-color': index.url_body_color, }"
          @mouseout="url[i].url_body_color = '#414141FF'"
          @mouseover="url[i].url_body_color = '#ff5252cc'">
        <div>
          <div :style="{'background': index.url_body_color }" class="top_label"> {{ index.title }}</div>
          <div class="content_list" >
            <span v-for="(res, j) in index.content" :key="j">
              <a :href="res.url" :target="res.targets" :title="res.introduce"> {{ res.name }} </a>
            </span>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: "ShiYi_eleven",

  data() {
    return {
      url: this.$store.state.ShiYi_eleven_url,
    }
  },

}
</script>

<style scoped>

a {
  text-decoration: none;
  font-weight: bold;
  color: #414141FF;
  font-size: 20px;
}

a:hover {
  color: #ff5252cc;
}

ul {
  list-style: none;
  margin-left: 5%;
}

li {
  display: block;
  position: relative;
  padding: 30px;
  float: left;
  width: 400px;
  height: 250px;
  margin: 1% 2.3%;
  border: 4px solid;
}

.top_label {
  position: absolute;
  top: 0;
  left: 0;
  padding: 2px 14px 2px 10px;
  color: #ffffff;
}

.content_list {
  margin-top: 10px;
  flex-flow: wrap;
  height: 250px;
  overflow: auto;
  position: relative;
}

.content_list::-webkit-scrollbar {
  display: none;
}

.content_list > span {
  display: block;
  width: 33%;
  height: 30px;
  float: left;
  text-align: center;
  margin: 1.3% 0.1%;
}


</style>