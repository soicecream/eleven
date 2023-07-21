import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {

        // 所有背景图片的位置
        all_img_text: "",

        // 日志的文本
        Journal_text: "",

        // 绕口令的文本
        tongue_twister_text: "",


        // 导航栏是否显示
        navigation_bar: true,

        // 标题上日期的颜色
        navigation_bar_time_color: "",

        // 页头的显示多页面
        navigation_bar_title_vis: false,

        // 是否进入到了追踪纸飞机页面
        paper_plane_vie: false,

        // 木鱼计数
        woodenfish_count: 0,


        // 导航栏的所有内容
        // npm run deploy
        top_title_span_url: [
            {id: 0, title: "圣诞树", type: 1, url: "/christmasTree", show: false,},
            {id: 1, title: "图库", type: 1, url: "/picture", show: false,},
            {id: 2, title: "日志", type: 1, url: "/journal", show: true,},
            {id: 3, title: "绕口令", type: 1, url: "/tongueTwister", show: true,},
            {id: 4, title: "水波", type: 1, url: "/", show: false,},
            {id: 5, title: "脉冲波纹催眠", type: 1, url: "/hypnosis", show: true,},
            {id: 6, title: "纸飞机", type: 1, url: "/paperPlane", show: true,},
            {id: 7, title: "指尖陀螺", type: 1, url: "/fingertipGyroscope", show: true,},
            {id: 8, title: "木鱼", type: 1, url: "/woodenFish", show: true,},
            {id: 9, title: "随机食物", type: 1, url: "/RandomFifteen", show: true,},

            {id: 999, title: "百度地图", type: 1, url: "/map", show: false,},
            {id: 1000, title: "text", type: 1, url: "/text", show: false,},
        ],

        // 水木加贝的url
        shuimujiabei_url: [
            {
                title: "搜索", url_body_color: "#414141", content: [
                    {title: "百度", url: "https://www.baidu.com/", introduce: "百度一下,你就知道",},
                    {title: "微博", url: "https://www.weibo.com/", introduce: "随时随地发现新鲜事",},
                    {title: "知乎", url: "https://www.zhihu.com/", introduce: "中文互联网高质量的问答社区和创作者聚集的原创内容平台",},

                    {title: "B站", url: "https://www.bilibili.com/", introduce: "哔哩哔哩 (゜-゜)つロ 干杯~",},
                    {title: "知网", url: "https://www.cnki.net/", introduce: "",},
                    {title: "", url: "", introduce: "",},

                    {title: "", url: "", introduce: "",},
                    {title: "", url: "", introduce: "",},
                    {title: "", url: "", introduce: "",},

                    {title: "CSDN", url: "https://www.csdn.net/", introduce: "全球知名中文IT技术交流平台",},
                    {title: "博客云", url: "https://www.cnblogs.com/", introduce: "一个面向开发者的知识分享社区",},
                    {title: "掘金", url: "https://juejin.cn/", introduce: "代码不止,掘金不停",},

                    {title: "Gitee", url: "https://gitee.com/", introduce: "",},
                    {title: "GitHub", url: "https://github.com/", introduce: "",},
                    {title: "菜鸟助手", url: "https://www.runoob.com/", introduce: "",},

                    {title: "开源中国", url: "https://www.oschina.net/", introduce: "",},
                    {title: "", url: "", introduce: "",},
                    {title: "", url: "", introduce: "",},

                    {title: "", url: "", introduce: "",},
                    {title: "", url: "", introduce: "",},
                    {title: "", url: "", introduce: "",},

                    {title: "QQ邮箱", url: "https://mail.qq.com/", introduce: "",},
                    {title: "网易邮箱", url: "https://mail.163.com/", introduce: "",},
                    {title: "谷歌邮箱", url: "https://mail.google.com/mail/u/0/#inbox", introduce: "",},

                    {title: "", url: "", introduce: "",},
                    {title: "", url: "", introduce: "",},
                    {title: "", url: "", introduce: "",},

                    {title: "LaTeX公式", url: "https://www.cnblogs.com/1024th/p/11623258.html", introduce: "",},
                    {title: "在线LaTeX", url: "https://www.latexlive.com/", introduce: "",},
                    {title: "", url: "", introduce: "",},

                    {title: "", url: "", introduce: "",},
                    {title: "", url: "", introduce: "",},
                    {title: "", url: "", introduce: "",},


                    {title: "ICPC", url: "https://icpc.global/", introduce: "",},
                    {title: "CCPC", url: "https://ccpc.io/", introduce: "",},
                    {title: "", url: "", introduce: "",},

                    {title: "", url: "", introduce: "",},
                    {title: "", url: "", introduce: "",},
                    {title: "", url: "", introduce: "",},

                    {title: "dbbqb", url: "https://www.dbbqb.com/", introduce: "表情包搜索",},
                    {title: "", url: "", introduce: "",},
                    {title: "", url: "", introduce: "",},

                    {title: "chatGPT", url: "https://chat.openai.com/chat", introduce: "ai回答",},
                    {title: "chathub", url: "https://chrome.google.com/webstore/detail/chathub-all-in-one-chatbo/iaakpnchhognanibcahlpcplchdfmgma/related", introduce: "ai回答",},
                    {title: "poe", url: "https://poe.com/", introduce: "ai回答",},

                    {title: "", url: "", introduce: "",},
                    {title: "", url: "", introduce: "",},
                    {title: "", url: "", introduce: "",},


                    {title: "coding", url: "https://e.coding.net/", introduce: "coding",},
                    {title: "slack", url: "https://slack.com/", introduce: "slack",},
                    {title: "Eolink Apikit", url: "https://eolink.com/home", introduce: "apikit",},

                    {title: "figma", url: "https://www.figma.com/", introduce: "",},
                    {title: "", url: "", introduce: "",},
                    {title: "", url: "", introduce: "",},

                    {title: "", url: "", introduce: "",},
                    {title: "", url: "", introduce: "",},
                    {title: "", url: "", introduce: "",},

                    {title: "youtube", url: "https://www.youtube.com/", introduce: "",},
                    {title: "twitter", url: "https://twitter.com/", introduce: "",},
                    {title: "", url: "", introduce: "",},

                    {title: "", url: "", introduce: "",},
                    {title: "", url: "", introduce: "",},
                    {title: "", url: "", introduce: "",},

                    {title: "软考", url: "https://www.ruankao.org.cn/", introduce: "软考报名",},
                    {title: "", url: "", introduce: "",},
                    {title: "", url: "", introduce: "",},

                ],
            },
            {
                title: "oj", url_body_color: "#414141", content: [
                    {title: "牛客", url: "https://ac.nowcoder.com/acm/home", introduce: "",},
                    {title: "洛谷", url: "https://www.luogu.com.cn/problem/list", introduce: "",},
                    {title: "PTA", url: "https://pintia.cn/", introduce: "",},

                    {title: "力扣", url: "https://leetcode.cn/", introduce: "",},
                    {title: "AcWing", url: "https://www.acwing.com/", introduce: "",},
                    {title: "", url: "", introduce: "",},

                    {title: "", url: "", introduce: "",},
                    {title: "", url: "", introduce: "",},
                    {title: "", url: "", introduce: "",},

                    {title: "蓝桥", url: "https://www.lanqiao.cn/", introduce: "",},
                    {title: "hdu1", url: "http://acm.hdu.edu.cn", introduce: "",},
                    {title: "hdu2", url: "http://acm.dingbacode.com", introduce: "",},

                    {title: "zoj", url: "http://zoj.pintia.cn", introduce: "",},
                    {title: "poj", url: "http://poj.org/", introduce: "",},
                    {title: "", url: "", introduce: "",},

                    {title: "", url: "", introduce: "",},
                    {title: "", url: "", introduce: "",},
                    {title: "", url: "", introduce: "",},

                    {title: "Codeforces", url: "https://codeforces.com/", introduce: "",},
                    {title: "CodeChef", url: "https://www.codechef.com/", introduce: "",},
                    {title: "AtCoder", url: "https://atcoder.jp/", introduce: "",},

                    {title: "VJudge", url: "https://vjudge.net/", introduce: "",},
                    {title: "", url: "", introduce: "",},
                    {title: "", url: "", introduce: "",},

                    {title: "", url: "", introduce: "",},
                    {title: "", url: "", introduce: "",},
                    {title: "", url: "", introduce: "",},

                    {title: "做题统计", url: "https://ojhunt.com/", introduce: "",},
                    {title: "CFTracker", url: "https://cftracker.netlify.app/contests", introduce: "cf的题目统计",},
                    {title: "atc Problems", url: "https://kenkoooo.com/atcoder/#/table/", introduce: "abc的题目统计",},

                    {title: "", url: "", introduce: "",},
                    {title: "", url: "", introduce: "",},
                    {title: "", url: "", introduce: "",},

                    {title: "ZIME2020", url: "https://acm.521207.xyz/", introduce: "",},
                    {title: "ZIME2021", url: "http://106.53.134.113/loginpage.php", introduce: "",},
                    {title: "ZIME2022", url: "https://2022.acm.521207.xyz/", introduce: "",},

                    {title: "乐清", url: "http://51xinao.com/loginpage.php", introduce: "",},
                    {title: "信奥", url: "http://ybt.ssoier.cn:8088/index.php", introduce: "",},
                    {title: "USACO", url: "http://www.usaco.org/index.php", introduce: "",},

                    {title: "OpenJudge", url: "http://openjudge.cn/", introduce: "北大的",},
                    {title: "", url: "", introduce: "",},
                    {title: "", url: "", introduce: "",},

                    {title: "", url: "", introduce: "",},
                    {title: "", url: "", introduce: "",},
                    {title: "", url: "", introduce: "",},

                    {title: "郑州轻工业", url: "http://acm.zzuli.edu.cn/", introduce: "",},
                    {title: "东方博宜", url: "https://oj.czos.cn/", introduce: "",},
                    {title: "51nod", url: "https://www.51nod.com/", introduce: "",},

                    {title: "N诺", url: "https://noobdream.com/DreamJudge/Contest/index_judge/", introduce: "",},
                    {title: "NOI", url: "http://noi-test.zzstep.com/", introduce: "",},
                    {title: "吉首", url: "http://www.jsuacm.cn/", introduce: "",},

                    {title: "台州学院", url: "http://www.tzcoder.cn/acmhome/welcome.do?method=index", introduce: "",},
                    {title: "Libre OJ", url: "https://loj.ac/", introduce: "",},
                    {title: "华东师范", url: "https://acm.ecnu.edu.cn/", introduce: "",},

                    {title: "hydro", url: "https://oj.undefined.moe/", introduce: "",},
                    {title: "UOJ", url: "https://uoj.ac/", introduce: "",},
                    {title: "CSG", url: "https://cpc.csgrandeur.cn/", introduce: "",},

                    {title: "学军", url: "https://xjoi.net/", introduce: "",},
                    {title: "北京交通", url: "https://citel.bjtu.edu.cn/acm/", introduce: "",},
                    {title: "福建工程", url: "http://120.78.128.11/index.jsp", introduce: "",},

                    {title: "北京化工", url: "https://buctcoder.com/", introduce: "",},
                    {title: "华南理工", url: "https://scut.online/", introduce: "",},
                    {title: "青岛", url: "https://qduoj.com/", introduce: "",},

                    {title: "浙江财经", url: "http://acm.ocrosoft.com/", introduce: "",},
                    {title: "", url: "", introduce: "",},
                    {title: "", url: "", introduce: "",},

                ],
            },
            {
                title: "学习", url_body_color: "#414141", content: [
                    {title: "学习通", url: "https://passport2.chaoxing.com/login?fid=&newversion=true&refer=https%3A%2F%2Fi.chaoxing.com", introduce: "",},
                    {title: "懒人Excel", url: "https://www.lanrenexcel.com/", introduce: "学习Excel 我也不知道好还是不好",},
                    {title: "OI Wiki", url: "https://oi-wiki.org/", introduce: "编程知识整合站点",},

                    {title: "律法", url: "https://flk.npc.gov.cn/", introduce: "国家法律法规",},
                    {title: "", url: "", introduce: "",},
                    {title: "", url: "", introduce: "",},

                    {title: "", url: "", introduce: "",},
                    {title: "", url: "", introduce: "",},
                    {title: "", url: "", introduce: "",},

                    {title: "可视化编程", url: "https://visualgo.net/zh", introduce: "",},
                    {title: "希赛", url: "https://wangxiao.xisaiwang.com/tiku2/list-zt132.html", introduce: "软考"},
                    {title: "W3school", url: "https://www.w3school.com.cn/", introduce: "Web",},

                    {title: "Lay-ui", url: "https://www.layuiweb.com/", introduce: "开源模块化前端UI框架",},
                    {title: "QuickRef.ME", url: "https://quickref.me/", introduce: "",},
                    {title: "ECHARTS", url: "https://echarts.apache.org/zh/index.html", introduce: "一个基于 JavaScript 的开源可视化图表库",},

                    {title: "", url: "", introduce: "",},
                    {title: "", url: "", introduce: "",},
                    {title: "", url: "", introduce: "",},

                    {title: "vue3", url: "https://vue3js.cn/", introduce: "",},
                    {title: "Vue.js", url: "https://cn.vuejs.org/index.html", introduce: "",},
                    {title: "MyBatis-P", url: "https://baomidou.com/", introduce: "Spring Boot",},

                    {title: "VuePress", url: "https://www.vuepress.cn/", introduce: "Vue 驱动的静态网站生成器",},
                    {title: "Element-ui", url: "https://element.eleme.cn/#/zh-CN/component/installation", introduce: "基于 Vue2 的 UI 组件库和前端解决方案",},
                    {title: "Element+", url: "https://element-plus.org/zh-CN/component/button.html", introduce: "基于 Vue3 的 UI 组件库和前端解决方案",},

                    {title: "Ant Design", url: "https://2x.antdv.com/components/overview-cn", introduce: "蚂蚁金服UI组件库",},
                    {title: "View Design", url: "https://www.iviewui.com/", introduce: "基于 Vue3 的 UI 组件库和前端解决方案",},
                    {title: "typecho", url: "http://typecho.org/", introduce: "",},

                    {title: "vite", url: "https://www.vitejs.net/", introduce: "",},
                    {title: "typescript", url: "https://www.tslang.cn/", introduce: "",},
                    {title: "", url: "", introduce: "",},

                    {title: "Gridea", url: "https://gridea.dev/", introduce: "Gridea 是一个静态博客写作客户端，帮助你更容易地构建并管理博客或任何静态站点。",},
                    {title: "zblogcn", url: "https://www.zblogcn.com/", introduce: "",},
                    {title: "hugo", url: "https://gohugo.io/", introduce: "Hugo 是最流行的开源静态站点生成器之一",},

                    {title: "undraw", url: "https://undraw.gitee.io/", introduce: "基于vue3的评论组件",},
                    {title: "sa-token", url: "https://sa-token.cc/", introduce: "一个轻量级 java 权限认证框架，让鉴权变得简单、优雅！",},
                    {title: "爱课堂", url: "https://www.icourses.cn/home/", introduce: "",},

                    {title: "", url: "", introduce: "",},
                    {title: "", url: "", introduce: "",},
                    {title: "", url: "", introduce: "",},

                    {title: "ruoyi", url: "http://doc.ruoyi.vip/", introduce: "快速构建web应用程序",},
                    {title: "", url: "", introduce: "",},
                    {title: "", url: "", introduce: "",},

                    {title: "qwerty", url: "https://qwerty.liumingye.cn/", introduce: "被单词",},
                    {title: "", url: "", introduce: "",},
                    {title: "", url: "", introduce: "",},

                    {title: "", url: "", introduce: "",},
                    {title: "", url: "", introduce: "",},
                    {title: "", url: "", introduce: "",},

                    {title: "码市", url: "https://www.codemart.com/", introduce: "",},
                    {title: "猿急送", url: "https://www.yuanjisong.com/", introduce: "",},
                    {title: "解放号", url: "https://www.jfh.com/", introduce: "",},

                    {title: "圆领", url: "https://www.yuanling.com/home", introduce: "",},
                    {title: "外包大师", url: "http://www.waibaodashi.com/", introduce: "",},
                    {title: "", url: "", introduce: "",},

                    {title: "", url: "", introduce: "",},
                    {title: "", url: "", introduce: "",},
                    {title: "", url: "", introduce: "",},

                    {title: "自考", url: "https://www.exam100.net/", introduce: "自考",},
                    {title: "专升本数学", url: "http://video.kaola100.com/book_list/5142", introduce: "",},
                    {title: "", url: "", introduce: "",},

                ],
            },
            {
                title: "工具", url_body_color: "#414141", content: [
                    {title: "百度翻译", url: "http://fanyi.baidu.com/", introduce: "",},
                    {title: "有道词典", url: "http://fanyi.youdao.com/", introduce: "",},
                    {title: "谷歌翻译", url: "https://translate.google.cn/", introduce: "",},

                    {title: "搜狗翻译", url: "https://fanyi.sogou.com/text", introduce: "",},
                    {title: "DeepL", url: "https://www.deepl.com/translator", introduce: "全世界最准确的翻译",},
                    {title: "可视化正则", url: "https://regexr.com/", introduce: "可视化验证正则表达式",},

                    {title: "", url: "", introduce: "",},
                    {title: "", url: "", introduce: "",},
                    {title: "", url: "", introduce: "",},

                    {title: "有道云笔记", url: "https://note.youdao.com/", introduce: "记笔记",},
                    {title: "腾讯文档", url: "https://docs.qq.com/desktop/", introduce: "",},
                    {title: "拷贝兔", url: "https://cp.anyknew.com/", introduce: "小文件的不同电脑传输下载",},

                    {title: "notion", url: "https://www.notion.so/", introduce: "",},
                    {title: "微信文件传输", url: "https://szfilehelper.weixin.qq.com/", introduce: "",},
                    {title: "", url: "", introduce: "",},

                    {title: "", url: "", introduce: "",},
                    {title: "", url: "", introduce: "",},
                    {title: "", url: "", introduce: "",},


                    {title: "写代码1", url: "https://paste.ubuntu.com/", introduce: "",},
                    {title: "写代码2", url: "https://ideone.com/", introduce: "",},
                    {title: "写代码3", url: "https://paste.centos.org/", introduce: "",},

                    {title: "代码对比1", url: "https://tool.lu/diff/", introduce: "",},
                    {title: "代码对比2", url: "https://www.diffchecker.com/diff", introduce: "",},
                    {title: "代码对比3", url: "https://csacademy.com/app/diffing_tool/", introduce: "",},

                    {title: "数列", url: "http://oeis.org/hints.html", introduce: "",},
                    {title: "函数画图", url: "https://www.desmos.com/calculator?lang=zh-CN", introduce: "",},
                    {title: "图论画图", url: "https://csacademy.com/app/graph_editor/", introduce: "",},

                    {title: "wolframalpha", url: "https://www.wolframalpha.com/", introduce: "",},
                    {title: "参考文献格式", url: "http://youkud.com/tool/referance/index.html", introduce: "参考文献格式生成器",},
                    {title: "", url: "", introduce: "",},

                    {title: "scratch", url: "https://makecode.microbit.org/#", introduce: "在线scratch",},
                    {title: "", url: "", introduce: "",},
                    {title: "", url: "", introduce: "",},

                    {title: "代码可视化", url: "https://pythontutor.com/", introduce: "代码可视化",},
                    {title: "", url: "", introduce: "",},
                    {title: "", url: "", introduce: "",},

                    {title: "", url: "", introduce: "",},
                    {title: "", url: "", introduce: "",},
                    {title: "", url: "", introduce: "",},

                    {title: "aixcoder", url: "https://codesearch.aixcoder.com/#/", introduce: "一个ai的代码生成器",},
                    {title: "Vega ai", url: "https://rightbrain.art//?from=ai.jb51.cc", introduce: "一个图片的ai生成器",},
                    {title: "", url: "", introduce: "",},

                    {title: "", url: "", introduce: "",},
                    {title: "", url: "", introduce: "",},
                    {title: "", url: "", introduce: "",},

                    {title: "看榜", url: "https://board.xcpcio.com/", introduce: "",},
                    {title: "在线运行", url: "https://www.dooccn.com/", introduce: "",},
                    {title: "作业部落", url: "https://www.zybuluo.com/mdeditor#2272516", introduce: "",},

                    {title: "图床1", url: "https://www.wailian.work/", introduce: "",},
                    {title: "图床2", url: "https://www.giaott.com/", introduce: "",},
                    {title: "留言本", url: "https://note.ms/nyco", introduce: "",},


                    {title: "", url: "", introduce: "",},
                    {title: "", url: "", introduce: "",},
                    {title: "", url: "", introduce: "",},

                    {title: "华为云", url: "https://www.huaweicloud.com/", introduce: "",},
                    {title: "阿里云", url: "https://www.aliyun.com", introduce: "",},
                    {title: "腾讯云", url: "https://cloud.tencent.com/", introduce: "",},

                    {title: "百度智能云", url: "https://cloud.baidu.com/", introduce: "",},
                    {title: "", url: "", introduce: "",},
                    {title: "", url: "", introduce: "",},

                    {title: "bluehost", url: "https://cn.bluehost.com/", introduce: "",},
                    {title: "lightnode", url: "https://www.lightnode.com/zh-CN/home", introduce: "",},
                    {title: "", url: "", introduce: "",},

                    {title: "", url: "", introduce: "",},
                    {title: "", url: "", introduce: "",},
                    {title: "", url: "", introduce: "",},

                    {title: "godaddy", url: "https://www.godaddy.com/zh-sg", introduce: "",},
                    {title: "", url: "", introduce: "",},
                    {title: "", url: "", introduce: "",},

                    {title: "", url: "", introduce: "",},
                    {title: "", url: "", introduce: "",},
                    {title: "", url: "", introduce: "",},

                    {title: "xshell", url: "https://www.xshell.com/zh/free-for-home-school/", introduce: "",},
                    {title: "百度统计", url: "https://tongji.baidu.com/", introduce: "",},
                    {title: "", url: "", introduce: "",},

                    {title: "", url: "", introduce: "",},
                    {title: "", url: "", introduce: "",},
                    {title: "", url: "", introduce: "",},

                    {title: "菜鸟正则测试", url: "https://c.runoob.com/front-end/854", introduce: "",},
                    {title: "流程图", url: "https://app.diagrams.net/", introduce: "",},
                    {title: "cron", url: "https://cron.qqe2.com/", introduce: "",},

                    {title: "", url: "", introduce: "",},
                    {title: "", url: "", introduce: "",},
                    {title: "", url: "", introduce: "",},

                    {title: "油猴", url: "https://www.tampermonkey.net/", introduce: "油猴Tampermonkey",},
                    {title: "视频会员1", url: "https://greasyfork.org/zh-CN/scripts/418804-%E8%A7%A3%E9%94%81b%E7%AB%99%E5%A4%A7%E4%BC%9A%E5%91%98%E7%95%AA%E5%89%A7-b%E7%AB%99%E8%A7%86%E9%A2%91%E8%A7%A3%E6%9E%90%E4%B8%8B%E8%BD%BD-%E5%85%A8%E7%BD%91vip%E8%A7%86%E9%A2%91%E5%85%8D%E8%B4%B9%E7%A0%B4%E8%A7%A3%E5%8E%BB%E5%B9%BF%E5%91%8A-%E5%85%A8%E7%BD%91%E9%9F%B3%E4%B9%90%E7%9B%B4%E6%8E%A5%E4%B8%8B%E8%BD%BD-%E6%B2%B9%E7%AE%A1-facebook%E7%AD%89%E5%9B%BD%E5%A4%96%E8%A7%86%E9%A2%91%E8%A7%A3%E6%9E%90%E4%B8%8B%E8%BD%BD-%E7%BD%91%E7%9B%98%E6%90%9C%E7%B4%A2%E5%BC%95%E6%93%8E%E7%A0%B4%E8%A7%A3%E6%97%A0%E9%99%90%E4%B8%8B%E8%BD%BD%E7%AD%89", introduce: "",},
                    {title: "视频会员2", url: "https://greasyfork.org/zh-CN/scripts/370634-%E6%87%92%E4%BA%BA%E4%B8%93%E7%94%A8-%E5%85%A8%E7%BD%91vip%E8%A7%86%E9%A2%91%E5%85%8D%E8%B4%B9%E7%A0%B4%E8%A7%A3%E5%8E%BB%E5%B9%BF%E5%91%8A-%E5%85%A8%E7%BD%91%E9%9F%B3%E4%B9%90%E7%9B%B4%E6%8E%A5%E4%B8%8B%E8%BD%BD-%E7%9F%A5%E4%B9%8E%E5%A2%9E%E5%BC%BA-%E7%9F%AD%E8%A7%86%E9%A2%91%E6%97%A0%E6%B0%B4%E5%8D%B0%E4%B8%8B%E8%BD%BD-%E7%99%BE%E5%BA%A6%E7%BD%91%E7%9B%98%E7%9B%B4%E6%8E%A5%E4%B8%8B%E8%BD%BD%E7%AD%89%E5%A4%9A%E5%8A%9F%E8%83%BD%E5%B7%A5%E5%85%B7%E7%AE%B1-%E5%8A%9F%E8%83%BD%E5%8F%AF%E7%8B%AC%E7%AB%8B%E5%BC%80%E5%85%B3-%E9%95%BF%E6%9C%9F%E6%9B%B4%E6%96%B0-%E6%94%BE%E5%BF%83%E4%BD%BF%E7%94%A8-v5-4", introduce: "",},

                    {title: "", url: "", introduce: "",},
                    {title: "", url: "", introduce: "",},
                    {title: "", url: "", introduce: "",},

                    {title: "图片素材", url: "https://pixabay.com/zh/", introduce: "",},
                    {title: "wallhaven", url: "https://wallhaven.cc/", introduce: "",},
                    {title: "矢量图", url: "https://www.iconfont.cn/", introduce: "阿里的矢量图图库",},

                    {title: "FontAwesome", url: "https://fontawesome.com/", introduce: "Font Awesome 图标库",},
                    {title: "IconPark", url: "https://iconpark.oceanengine.com/official", introduce: "字节跳动官方图标库",},
                    {title: "Remix Icon", url: "http://www.remixicon.com/", introduce: "Remix Icon 图标库",},

                    {title: "", url: "", introduce: "",},
                    {title: "", url: "", introduce: "",},
                    {title: "", url: "", introduce: "",},

                    {title: "颜色选取", url: "https://color.uisdc.com/pick.html", introduce: "",},
                    {title: "WebGradients", url: "https://webgradients.com/", introduce: "css渐变色",},
                    {title: "coolors", url: "https://coolors.co/", introduce: "",},

                    {title: "colorhunt", url: "https://colorhunt.co/", introduce: "",},
                    {title: "中国色", url: "http://zhongguose.com/", introduce: "",},
                    {title: "中国色彩网", url: "https://www.cncolor.cn/", introduce: "",},

                    {title: "mycolor", url: "https://mycolor.space/", introduce: "选取颜色的三色编码",},
                    {title: "", url: "", introduce: "",},
                    {title: "", url: "", introduce: "",},

                    {title: "", url: "", introduce: "",},
                    {title: "", url: "", introduce: "",},
                    {title: "", url: "", introduce: "",},

                    {title: "PPT模板", url: "https://ppt.sotary.com/web/wxapp/index.html", introduce: "",},
                    {title: "PDF转换", url: "https://www.pdfpai.com/", introduce: "",},
                    {title: "PDF转换", url: "https://www.ilovepdf.com/zh-cn", introduce: "",},

                    {title: "秘塔写作猫", url: "https://xiezuocat.com/#/", introduce: "论文降重",},
                    {title: "调音", url: "https://vocalremover.org/ch/", introduce: "对声音的一些处理",},
                    {title: "在线PS", url: "https://www.uupoop.com/#/", introduce: "",},

                    {title: "aconvert", url: "https://www.aconvert.com/cn/", introduce: "多种文件格式相互转换",},
                    {title: "音乐解锁", url: "https://demo.unlock-music.dev/", introduce: "",},
                    {title: "在线svg", url: "http://www.zuohaotu.com/svg/", introduce: "在线svg制作",},

                    {title: "自动剪辑", url: "https://autocut.video/", introduce: "",},
                    {title: "", url: "", introduce: "",},
                    {title: "", url: "", introduce: "",},

                    {title: "", url: "", introduce: "",},
                    {title: "", url: "", introduce: "",},
                    {title: "", url: "", introduce: "",},

                    {title: "JetBrains", url: "https://crustwebsites.net/ipfs/bafybeiatyghkzrrtodzt3stm652rkrjxndg4hq2ublfdmifk7plg5k5brq/", introduce: "JetBrains的激活码",},
                    {title: "爱激活", url: "https://www.ajihuo.com/", introduce: "",},
                    {title: "积微成著", url: "https://www.jiweichengzhu.com/", introduce: "",},

                    {title: "异常教程", url: "https://exception.site/", introduce: "",},
                    {title: "蜻蜓工具", url: "https://33tool.com/", introduce: "",},
                    {title: "", url: "", introduce: "",},

                    {title: "", url: "", introduce: "",},
                    {title: "", url: "", introduce: "",},
                    {title: "", url: "", introduce: "",},

                    {title: "奇迹秀", url: "https://www.qijishow.com/", introduce: "",},
                    {title: "宝塔", url: "https://www.bt.cn/new/index.html", introduce: "",},
                    {title: "Rutracker", url: "http://rutracker.in/", introduce: "俄罗斯的盗版资源",},

                    {title: "", url: "", introduce: "",},
                    {title: "", url: "", introduce: "",},
                    {title: "", url: "", introduce: "",},

                    {title: "工具1", url: "https://xiaomark.com/tool", introduce: "",},
                    {title: "工具2", url: "https://tooltt.com/", introduce: "",},
                    {title: "工具3", url: "https://www.toolfk.com/", introduce: "",},

                    {title: "工具4", url: "https://www.toolmao.com/#term-102", introduce: "",},
                    {title: "", url: "", introduce: "",},
                    {title: "", url: "", introduce: "",},

                    {title: "", url: "", introduce: "",},
                    {title: "", url: "", introduce: "",},
                    {title: "", url: "", introduce: "",},

                    {title: "tinypng", url: "https://tinypng.com/", introduce: "在线压缩图片",},
                    {title: "下载b站视频", url: "https://xbeibeix.com/api/bilibili/", introduce: "",},
                    {title: "稿定抠图", url: "https://koutu.gaoding.com/", introduce: "在线AI抠图",},

                    {title: "草料", url: "https://cli.im/", introduce: "草料二维码生成器",},
                    {title: "扒网站", url: "https://bazhan.wang/", introduce: "在线扒站工具",},
                    {title: "", url: "", introduce: "",},

                    {title: "", url: "", introduce: "",},
                    {title: "", url: "", introduce: "",},
                    {title: "", url: "", introduce: "",},

                    {title: "评语生成器", url: "https://class.acagrid.com/pc/comment", introduce: "",},
                    {title: "字数统计", url: "https://www.eteste.com/", introduce: "",},
                    {title: "魔方还原", url: "https://rubiks-cube-solver.com/zh/", introduce: "",},


                    {title: "", url: "", introduce: "",},
                    {title: "", url: "", introduce: "",},
                    {title: "", url: "", introduce: "",},

                    {title: "果核", url: "https://www.ghxi.com/", introduce: "",},
                    {title: "MSDN", url: "https://msdn.itellyou.cn/", introduce: "",},
                    {title: "", url: "", introduce: "",},

                    {title: "network", url: "https://arr003.network/download/", introduce: "梯子",},
                    {title: "lanzouw", url: "https://ayden.lanzouw.com/iHfh30967kud", introduce: "梯子",},
                    {title: "lico", url: "https://www.lico.live/", introduce: "梯子",},

                    {title: "", url: "", introduce: "",},
                    {title: "", url: "", introduce: "",},
                    {title: "", url: "", introduce: "",},

                    {title: "github加速器", url: "https://github.com/dotnetcore/FastGithub", introduce: "",},
                    {title: "", url: "", introduce: "",},
                    {title: "", url: "", introduce: "",},

                    {title: "", url: "", introduce: "",},
                    {title: "", url: "", introduce: "",},
                    {title: "", url: "", introduce: "",},

                    {title: "清华镜像站", url: "https://mirrors.tuna.tsinghua.edu.cn/", introduce: "",},
                    {title: "华为镜像站", url: "https://mirrors.huaweicloud.com/home", introduce: "",},
                    {title: "腾讯镜像站", url: "https://mirrors.cloud.tencent.com/", introduce: "",},

                ],
            },
            {
                title: "娱乐", url_body_color: "#414141", content: [
                    {title: "爱奇艺", url: "https://www.iqiyi.com/", introduce: "",},
                    {title: "腾讯视频", url: "https://v.qq.com/", introduce: "",},
                    {title: "优酷视频", url: "https://www.youku.com/", introduce: "",},

                    {title: "芒果视频", url: "https://www.mgtv.com/", introduce: "",},
                    {title: "咪咕视频", url: "https://www.migu.cn/index.html", introduce: "",},
                    {title: "", url: "", introduce: "",},

                    {title: "", url: "", introduce: "",},
                    {title: "", url: "", introduce: "",},
                    {title: "", url: "", introduce: "",},

                    {title: "片库", url: "https://www.btnull.org/", introduce: "",},
                    {title: "合家影院", url: "https://www.ihejia.com.cn/", introduce: "",},
                    {title: "555电影", url: "http://www.5ying.fun/", introduce: "",},

                    {title: "茶杯狐", url: "https://cupfox.app/", introduce: "",},
                    {title: "", url: "", introduce: "",},
                    {title: "", url: "", introduce: "",},

                    {title: "", url: "", introduce: "",},
                    {title: "", url: "", introduce: "",},
                    {title: "", url: "", introduce: "",},

                    {title: "斗鱼", url: "https://www.douyu.com/", introduce: "",},
                    {title: "虎牙", url: "https://www.huya.com/", introduce: "",},
                    {title: "抖音", url: "https://www.douyin.com/?enter=guide", introduce: "",},

                    {title: "", url: "", introduce: "",},
                    {title: "", url: "", introduce: "",},
                    {title: "", url: "", introduce: "",},

                    {title: "网易云音乐", url: "https://music.163.com/", introduce: "",},
                    {title: "qq音乐", url: "https://y.qq.com/", introduce: "",},
                    {title: "酷狗音乐", url: "https://www.kugou.com/", introduce: "",},

                    {title: "", url: "", introduce: "",},
                    {title: "", url: "", introduce: "",},
                    {title: "", url: "", introduce: "",},

                    {title: "打发时间", url: "https://theuselessweb.com/", introduce: "一个可以发呆的小网站 会随机蹦出一些奇奇怪怪的网站",},
                    {title: "打字", url: "https://barneyzhao.gitee.io/typing-cn/#/", introduce: "",},
                    {title: "字符画", url: "http://patorjk.com/software/taag/#p=display&f=Graffiti&t=welcome%20to%202048%20", introduce: "字母生成字符画",},

                    {title: "摸鱼神器", url: "https://fakeupdate.net/", introduce: "假装windows升级界面",},
                    {title: "小霸王游戏机", url: "https://www.yikm.net/", introduce: "童年的怀旧小游戏",},
                    {title: "游戏机", url: "http://lab.mkblog.cn/FCGames/#/", introduce: "童年的怀旧小游戏",},

                    {title: "扫雷", url: "http://www.minesweeper.cn/", introduce: "",},
                    {title: "2048", url: "https://2048game.com/", introduce: "",},
                    {title: "俄罗斯方块", url: "https://www.goodoldtetris.com/", introduce: "",},

                    {title: "三阶魔方", url: "https://uploadfiles.nowcoder.com/files/xiaosha/index.html", introduce: "",},
                    {title: "", url: "", introduce: "",},
                    {title: "", url: "", introduce: "",},

                ],
            },
            {
                title: "灵感", url_body_color: "#414141", content: [
                    {title: "NV资源网", url: "https://noisevip.cn/", introduce: "",},
                    {title: "Halo", url: "https://halo.run/", introduce: "一款现代化的开源博客/CMS系统",},
                    {title: "hexo", url: "https://hexo.io/zh-cn/", introduce: "快速、简洁且高效的博客框架",},

                    {title: "Vue资源精选", url: "http://vue.awesometiny.com/", introduce: "前端组件库资源",},
                    {title: "wordpress", url: "https://cn.wordpress.org/", introduce: "WordPress是一款能让您建立出色网站、博客或应用程序的开源软件",},
                    {title: "", url: "", introduce: "",},

                    {title: "", url: "", introduce: "",},
                    {title: "", url: "", introduce: "",},
                    {title: "", url: "", introduce: "",},

                    {title: "花瓣", url: "https://huaban.com/", introduce: "",},
                    {title: "站酷", url: "https://www.zcool.com.cn/", introduce: "",},
                    {title: "osrc", url: "https://docs.osrc.com/", introduce: "",},

                    {title: "", url: "", introduce: "",},
                    {title: "", url: "", introduce: "",},
                    {title: "", url: "", introduce: "",},

                    {title: "公众号测试", url: "https://mp.weixin.qq.com/debug/cgi-bin/sandbox?t=sandbox/login", introduce: "",},
                    {title: "企业微信", url: "https://work.weixin.qq.com/wework_admin/loginpage_wx?redirect_uri=https%3A%2F%2Fwork.weixin.qq.com%2Fwework_admin%2Fframe#index", introduce: "",},
                    {title: "微信官网", url: "https://weixin.qq.com/", introduce: "",},

                    {title: "微信网页版", url: "https://wx.qq.com/", introduce: "",},
                    {title: "", url: "", introduce: "",},
                    {title: "", url: "", introduce: "",},

                    {title: "", url: "", introduce: "",},
                    {title: "", url: "", introduce: "",},
                    {title: "", url: "", introduce: "",},

                    {title: "hydro", url: "https://hydro.js.org/", introduce: "",},
                    {title: "青岛", url: "https://opensource.qduoj.com/#/", introduce: "",},
                    {title: "hoj", url: "https://docs.hdoi.cn/", introduce: "",},

                    {title: "hustoj", url: "https://zhblue.github.io/hustoj/#/", introduce: "",},
                    {title: "", url: "", introduce: "",},
                    {title: "", url: "", introduce: "",},

                    {title: "bmrs", url: "https://www.bmrs.top/", introduce: "",},
                    {title: "soybean", url: "https://docs.soybean.pro/", introduce: "",},
                    {title: "", url: "", introduce: "",},

                    {title: "", url: "", introduce: "",},
                    {title: "", url: "", introduce: "",},
                    {title: "", url: "", introduce: "",},

                    {title: "简历", url: "https://www.51386.com/", introduce: "简历模板",},
                    {title: "简历", url: "https://www.gerenjianli.com/", introduce: "简历模板",},
                    {title: "", url: "", introduce: "",},

                    {title: "", url: "", introduce: "",},
                    {title: "", url: "", introduce: "",},
                    {title: "", url: "", introduce: "",},

                    {title: "navnav", url: "https://navnav.co/", introduce: "css动画布局",},
                    {title: "animxyz", url: "https://animxyz.com/", introduce: "css动画布局",},
                    {title: "100天css", url: "https://100dayscss.com/", introduce: "",},

                    {title: "pixijs", url: "https://pixijs.com/", introduce: "",},
                    {title: "", url: "", introduce: "",},
                    {title: "", url: "", introduce: "",},

                    {title: "", url: "", introduce: "",},
                    {title: "", url: "", introduce: "",},
                    {title: "", url: "", introduce: "",},

                    {title: "chatguide", url: "https://chatguide.plexpt.com/", introduce: "调教chatGPT",},
                    {title: "ai-bot", url: "https://ai-bot.cn/", introduce: "ai工具集",},
                    {title: "cursor", url: "https://www.cursor.so/", introduce: "内置ai的编辑器",},
                ]
            },],

    },

    getters: {},

    mutations: {},

    actions: {},

    modules: {},

})
