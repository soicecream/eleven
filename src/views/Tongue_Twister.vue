<template>
  <div>
    <div class="picture_list_top" >
      <img class="picture_list_top_picture" :src="top_picture_top">
      <h1 > 绕口令 </h1>
    </div>

    <div>
      <ul>
        <li v-for="(index, i) in tongue_twister_text_title" :key="i"
            :style="{'border-color': index.body_color, }"
            @mouseover="move_upper(i, true)"
            @mouseout="move_upper(i, false)">
          <div>
            <div :style="{'background-color': index.body_color }" class="top_label"> {{ index.title }}</div>
            <div class="content_list">
              <span v-for="(res, j) in index.content" :key="j" > {{res}} </span>
            </div>
          </div>
        </li>
      </ul>
    </div>

  </div>
</template>

<script>
export default {
  name: "TongueTwister",

  data() {
    return {
      top_picture_top: "",

      tongue_twister_text_title: [],

    }
  },

  created() {
    this.getData()
    this.getImg()

  },

  methods: {
    getData() {
      let data = this.$store.state.text.tongue_twister_text.split("{}{}{}\n")
      for(let i = 0; i < data.length; i ++)
      {
        this.tongue_twister_text_title[i] = {
          "title": data[i].substring(0, data[i].indexOf("\n")),
          "content": ("\n" + data[i].substring(data[i].indexOf("\n") + 1)).split("\n"),
          "body_color": '#414141FF',
        }
      }

    },

    getImg() {
      let num = Math.floor(Math.random() * 30) + 1
      num = num < 10 ? '00' + num : (num < 100 ? '0' + num : num)
      this.top_picture_top = require("@/assets/img/background/" + num + ".jpg")
    },

    move_upper(i, vis) {
      this.$forceUpdate();
      if(vis)
        this.Journal_title[i].body_color = '#ff5252cc'
      else
        this.Journal_title[i].body_color = '#414141FF'
    }

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
  top: 0; bottom: 0; left: 0; right: 0;
  background-color: rgba(0,0,0,.3);
  height: 400px;
}

.picture_list_top_picture {
  object-fit: cover;
  width: 100%;
  height: 100%;
}

h1 {
  color: #ffffff;
  font-size: 40px;
  font-weight: 500;
  font-family: Ubuntu, sans-serif;
  margin: auto;
  position: absolute;
  top: 45%;
  left: 0;
  right: 0;
  text-align: center;
  text-shadow: 3px 3px 11px #000000;
}


li {
  list-style: none;
  margin:2% auto;
  display: block;
  position: relative;
  padding: 30px;
  width: 700px;
  border: 4px solid;
}

.top_label {
  position: absolute;
  top: 0;
  left: 0;
  padding: 2px 14px 2px 10px;
  color: #ffffff;
}

.content_list > span {
  margin-top: 1%;
  display: block;
  width: 100%;
  font-size: 11px;
  color: #414141FF;
}

</style>