<template>
  <div>
    <el-row :gutter="10" style="margin-left: 10px; margin-right: 10px;">
      <el-col v-for="(index, i) in url" :key="i"
              :xs="24" :sm="24" :md="12" :lg="12" :xl="8"
              style="margin-bottom: 10px;">
<!--            @mouseover="update_color(index, true)"-->
<!--            @mouseout="update_color(index,false)"-->
        <div
            style="display: inline-block; width: 100%; height: 350px;"
        >
          <el-card :style="{'border': `5px solid ${index.url_body_color}`, height: '350px',}">
            <!--            <div style="width: 100%;">-->
<!--            <div :style="{ background: index.url_body_color,-->
<!--                    display: 'flex', alignItems: 'center', padding: '4px 14px'}">-->
<!--                <span style="font-weight: bold; font-size: 20px; color: #ffffff;">-->
<!--                  {{ index.webClassify }}-->
<!--                </span>-->
<!--            </div>-->
            <div slot="header" style="font-weight: bold; font-size: 20px; color: #414141FF;">
              {{ index.webClassify}}
            </div>

            <!--            </div>-->
            <div class="content-list" style="min-width: 350px; height: 280px;">
              <span v-for="(res, j) in index.websiteList" :key="j"
                    style="width: 30%; max-width: 100%; min-width: 100px;">
                <a :href="res.url" target="_blank"
                   :title="res.description && res.description !== '' ? res.description : ''">
                  {{ res.title }}
                </a>
              </span>
            </div>
          </el-card>
        </div>

      </el-col>
    </el-row>

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

import {left} from "core-js/internals/array-reduce";

export default {
  name: "shuimujiabei",

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
    left,
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
    },

    update_color(item, flag) {
      item.url_body_color = '#414141FF'
      if (flag) {
        item.url_body_color = '#ff5252cc'
      }
    },

  },

  destroyed() {
    window.removeEventListener('keydown', this.handleKeyDown)
  }

}
</script>


<style scoped>
/deep/ .el-card__body {
  padding: 0;
}


a {
  text-decoration: none;
  font-weight: bold;
  color: #414141FF;
  font-size: 20px;
}

a:hover {
  color: #ff5252cc;
}

.content-list {
  margin-top: 10px;
  height: 250px;
  overflow: auto;
  position: relative;
}

.content-list::-webkit-scrollbar {
  display: none;
}

.content-list > span {
  display: block;
  width: 33%;
  height: 30px;
  float: left;
  text-align: center;
  margin: 1.3% 0.1%;
}


</style>
