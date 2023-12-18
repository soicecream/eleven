<template>
  <div>
    <ul>
      <li v-for="(index, i) in url" :key="i"
          :style="{'border-color': index.url_body_color, }"
          @mouseover="url[i].url_body_color = '#ff5252cc'"
          @mouseout="url[i].url_body_color = '#414141FF'">
        <div>
          <div :style="{'background': index.url_body_color }" class="top_label"> {{ index.webClassify }}</div>
          <div class="content_list">
            <span v-for="(res, j) in index.websiteList" :key="j">
              <a :href="res.url" target="_blank"
                 :title="res.description && res.description != '' ? res.description : ''">
                {{ res.title }}
              </a>
            </span>
          </div>
        </div>
      </li>
    </ul>

    <el-dialog :visible.sync="dialog.show" title="搜索" width="30%">
      <el-form label-width="50px">
        <el-form-item label="信息">
          <el-input v-model="dialog.message" clearable/>
        </el-form-item>
      </el-form>

      <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialog.message = ''; dialog.show = false;">取消</el-button>
        <el-button @click="dialog.message = ''">重置</el-button>
        <el-button type="primary" @click="select_website">搜索</el-button>
      </span>
      </template>
    </el-dialog>

  </div>
</template>

<script>

export default {
  name: "i_want",

  data() {
    return {
      url: [],

      lastKeypressTime: 0,

      dialog: {
        show: false,
        message: '',

      }

    }
  },

  mounted() {
    this.url = Object.assign([], this.$store.getters.shuimujiabeiUrl)

    window.addEventListener('keydown', this.handleKeyDown)
  },

  methods: {
    handleKeyDown(event) {
      if (!this.dialog.show && event.key === 'Enter' && !event.repeat) {
        const currentTime = new Date().getTime()
        if (currentTime - this.lastKeypressTime < 200) {
          this.dialog.show = true
          this.dialog.message = ''
        }
        this.lastKeypressTime = currentTime
      }
    },

    select_website() {
      let message = this.dialog.message.toLowerCase();

      this.url = Object.assign([], this.$store.getters.shuimujiabeiUrl)
      if (!message) {
        this.dialog.show = false
        return
      }

      const filteredData = this.url.map(item => {
        const filteredWebsites = item.websiteList.filter(
            (website) =>
                website.title.includes(message) ||
                website.url.includes(message) ||
                (website.description && website.description.includes(message))
        )
        return {
          ...item,
          websiteList: filteredWebsites,
        }
      }).filter(item => item.websiteList.length > 0)

      this.url = JSON.parse(JSON.stringify(filteredData))

      this.dialog.message = ''
      this.dialog.show = false
    }

  },

  destroyed() {
    window.removeEventListener('keydown', this.handleKeyDown)
  }

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
  margin-left: 1%;
}

li {
  display: block;
  position: relative;
  padding: 30px;
  float: left;
//width: 400px; width: 25%; height: 250px; margin: 1% 2%; border: 4px solid;
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
