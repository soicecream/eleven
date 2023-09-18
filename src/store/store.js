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
        woodenfish_click_title: '功德',
        woodenfish_click_number: 1,


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
                webClassify: "搜索", url_body_color: "#414141", websiteList: [
                    {title: "百度", url: "https://www.baidu.com/", description: "百度一下,你就知道",},
                    {title: "微博", url: "https://www.weibo.com/", description: "随时随地发现新鲜事",},
                    {
                        title: "知乎",
                        url: "https://www.zhihu.com/",
                        description: "中文互联网高质量的问答社区和创作者聚集的原创内容平台",
                    },

                    {title: "B站", url: "https://www.bilibili.com/", description: "哔哩哔哩 (゜-゜)つロ 干杯~",},
                    {title: "知网", url: "https://www.cnki.net/", description: "",},
                    {title: "", url: "", description: "",},

                    {title: "", url: "", description: "",},
                    {title: "", url: "", description: "",},
                    {title: "", url: "", description: "",},

                    {title: "CSDN", url: "https://www.csdn.net/", description: "全球知名中文IT技术交流平台",},
                    {title: "博客云", url: "https://www.cnblogs.com/", description: "一个面向开发者的知识分享社区",},
                    {title: "掘金", url: "https://juejin.cn/", description: "代码不止,掘金不停",},

                    {title: "Gitee", url: "https://gitee.com/", description: "",},
                    {title: "GitHub", url: "https://github.com/", description: "",},
                    {title: "菜鸟助手", url: "https://www.runoob.com/", description: "",},

                    {title: "开源中国", url: "https://www.oschina.net/", description: "",},
                    {title: "", url: "", description: "",},
                    {title: "", url: "", description: "",},

                    {title: "", url: "", description: "",},
                    {title: "", url: "", description: "",},
                    {title: "", url: "", description: "",},

                    {title: "QQ邮箱", url: "https://mail.qq.com/", description: "",},
                    {title: "网易邮箱", url: "https://mail.163.com/", description: "",},
                    {title: "谷歌邮箱", url: "https://mail.google.com/mail/u/0/#inbox", description: "",},

                    {title: "", url: "", description: "",},
                    {title: "", url: "", description: "",},
                    {title: "", url: "", description: "",},

                    {title: "LaTeX公式", url: "https://www.cnblogs.com/1024th/p/11623258.html", description: "",},
                    {title: "在线LaTeX", url: "https://www.latexlive.com/", description: "",},
                    {title: "", url: "", description: "",},

                    {title: "", url: "", description: "",},
                    {title: "", url: "", description: "",},
                    {title: "", url: "", description: "",},


                    {title: "ICPC", url: "https://icpc.global/", description: "",},
                    {title: "CCPC", url: "https://ccpc.io/", description: "",},
                    {title: "", url: "", description: "",},

                    {title: "", url: "", description: "",},
                    {title: "", url: "", description: "",},
                    {title: "", url: "", description: "",},

                    {title: "dbbqb", url: "https://www.dbbqb.com/", description: "表情包搜索",},
                    {title: "", url: "", description: "",},
                    {title: "", url: "", description: "",},

                    {title: "chatGPT", url: "https://chat.openai.com/chat", description: "ai回答",},
                    {
                        title: "chathub",
                        url: "https://chrome.google.com/webstore/detail/chathub-all-in-one-chatbo/iaakpnchhognanibcahlpcplchdfmgma/related",
                        description: "ai回答",
                    },
                    {title: "poe", url: "https://poe.com/", description: "ai回答",},

                    {title: "claude ", url: "https://claude.ai/ ", description: "ai",},
                    {title: "文心一言", url: "https://yiyan.baidu.com/", description: "ai",},
                    {title: "", url: "", description: "",},

                    {title: "", url: "", description: "",},
                    {title: "", url: "", description: "",},
                    {title: "", url: "", description: "",},


                    {title: "coding", url: "https://e.coding.net/", description: "coding",},
                    {title: "slack", url: "https://slack.com/", description: "slack",},
                    {title: "Eolink Apikit", url: "https://eolink.com/home", description: "apikit",},

                    {title: "figma", url: "https://www.figma.com/", description: "",},
                    {title: "", url: "", description: "",},
                    {title: "", url: "", description: "",},

                    {title: "", url: "", description: "",},
                    {title: "", url: "", description: "",},
                    {title: "", url: "", description: "",},

                    {title: "youtube", url: "https://www.youtube.com/", description: "",},
                    {title: "twitter", url: "https://twitter.com/", description: "",},
                    {title: "", url: "", description: "",},

                    {title: "", url: "", description: "",},
                    {title: "", url: "", description: "",},
                    {title: "", url: "", description: "",},

                    {title: "软考", url: "https://www.ruankao.org.cn/", description: "软考报名",},
                    {title: "", url: "", description: "",},
                    {title: "", url: "", description: "",},

                ],
            },
            {
                webClassify: "oj", url_body_color: "#414141", websiteList: [
                    {title: "牛客", url: "https://ac.nowcoder.com/acm/home", description: "",},
                    {title: "洛谷", url: "https://www.luogu.com.cn/problem/list", description: "",},
                    {title: "PTA", url: "https://pintia.cn/", description: "",},

                    {title: "力扣", url: "https://leetcode.cn/", description: "",},
                    {title: "AcWing", url: "https://www.acwing.com/", description: "",},
                    {title: "", url: "", description: "",},

                    {title: "", url: "", description: "",},
                    {title: "", url: "", description: "",},
                    {title: "", url: "", description: "",},

                    {title: "蓝桥", url: "https://www.lanqiao.cn/", description: "",},
                    {title: "hdu1", url: "http://acm.hdu.edu.cn", description: "",},
                    {title: "hdu2", url: "http://acm.dingbacode.com", description: "",},

                    {title: "zoj", url: "http://zoj.pintia.cn", description: "",},
                    {title: "poj", url: "http://poj.org/", description: "",},
                    {title: "", url: "", description: "",},

                    {title: "", url: "", description: "",},
                    {title: "", url: "", description: "",},
                    {title: "", url: "", description: "",},

                    {title: "Codeforces", url: "https://codeforces.com/", description: "",},
                    {title: "CodeChef", url: "https://www.codechef.com/", description: "",},
                    {title: "AtCoder", url: "https://atcoder.jp/", description: "",},

                    {title: "VJudge", url: "https://vjudge.net/", description: "",},
                    {title: "", url: "", description: "",},
                    {title: "", url: "", description: "",},

                    {title: "", url: "", description: "",},
                    {title: "", url: "", description: "",},
                    {title: "", url: "", description: "",},

                    {title: "做题统计", url: "https://ojhunt.com/", description: "",},
                    {title: "CFTracker", url: "https://cftracker.netlify.app/contests", description: "cf的题目统计",},
                    {title: "atc Problems", url: "https://kenkoooo.com/atcoder/#/table/", description: "abc的题目统计",},

                    {title: "", url: "", description: "",},
                    {title: "", url: "", description: "",},
                    {title: "", url: "", description: "",},

                    {title: "ZIME2020", url: "https://acm.521207.xyz/", description: "",},
                    {title: "ZIME2021", url: "http://106.53.134.113/loginpage.php", description: "",},
                    {title: "ZIME2022", url: "https://2022.acm.521207.xyz/", description: "",},

                    {title: "乐清", url: "http://51xinao.com/loginpage.php", description: "",},
                    {title: "信奥", url: "http://ybt.ssoier.cn:8088/index.php", description: "",},
                    {title: "USACO", url: "http://www.usaco.org/index.php", description: "",},

                    {title: "OpenJudge", url: "http://openjudge.cn/", description: "北大的",},
                    {title: "", url: "", description: "",},
                    {title: "", url: "", description: "",},

                    {title: "", url: "", description: "",},
                    {title: "", url: "", description: "",},
                    {title: "", url: "", description: "",},

                    {title: "郑州轻工业", url: "http://acm.zzuli.edu.cn/", description: "",},
                    {title: "东方博宜", url: "https://oj.czos.cn/", description: "",},
                    {title: "51nod", url: "https://www.51nod.com/", description: "",},

                    {title: "N诺", url: "https://noobdream.com/DreamJudge/Contest/index_judge/", description: "",},
                    {title: "NOI", url: "http://noi-test.zzstep.com/", description: "",},
                    {title: "吉首", url: "http://www.jsuacm.cn/", description: "",},

                    {title: "台州学院", url: "http://www.tzcoder.cn/acmhome/welcome.do?method=index", description: "",},
                    {title: "Libre OJ", url: "https://loj.ac/", description: "",},
                    {title: "华东师范", url: "https://acm.ecnu.edu.cn/", description: "",},

                    {title: "hydro", url: "https://oj.undefined.moe/", description: "",},
                    {title: "UOJ", url: "https://uoj.ac/", description: "",},
                    {title: "CSG", url: "https://cpc.csgrandeur.cn/", description: "",},

                    {title: "学军", url: "https://xjoi.net/", description: "",},
                    {title: "北京交通", url: "https://citel.bjtu.edu.cn/acm/", description: "",},
                    {title: "福建工程", url: "http://120.78.128.11/index.jsp", description: "",},

                    {title: "北京化工", url: "https://buctcoder.com/", description: "",},
                    {title: "华南理工", url: "https://scut.online/", description: "",},
                    {title: "青岛", url: "https://qduoj.com/", description: "",},

                    {title: "浙江财经", url: "http://acm.ocrosoft.com/", description: "",},
                    {title: "", url: "", description: "",},
                    {title: "", url: "", description: "",},

                ],
            },
            {
                webClassify: "学习", url_body_color: "#414141", websiteList: [
                    {
                        title: "学习通",
                        url: "https://passport2.chaoxing.com/login?fid=&newversion=true&refer=https%3A%2F%2Fi.chaoxing.com",
                        description: "",
                    },
                    {
                        title: "懒人Excel",
                        url: "https://www.lanrenexcel.com/",
                        description: "学习Excel 我也不知道好还是不好",
                    },
                    {title: "OI Wiki", url: "https://oi-wiki.org/", description: "编程知识整合站点",},

                    {title: "律法", url: "https://flk.npc.gov.cn/", description: "国家法律法规",},
                    {title: "", url: "", description: "",},
                    {title: "", url: "", description: "",},

                    {title: "", url: "", description: "",},
                    {title: "", url: "", description: "",},
                    {title: "", url: "", description: "",},

                    {title: "可视化编程", url: "https://visualgo.net/zh", description: "",},
                    {title: "希赛", url: "https://wangxiao.xisaiwang.com/tiku2/list-zt132.html", description: "软考"},
                    {title: "W3school", url: "https://www.w3school.com.cn/", description: "Web",},

                    {title: "Lay-ui", url: "https://www.layuiweb.com/", description: "开源模块化前端UI框架",},
                    {title: "QuickRef.ME", url: "https://quickref.me/", description: "",},
                    {
                        title: "ECHARTS",
                        url: "https://echarts.apache.org/zh/index.html",
                        description: "一个基于 JavaScript 的开源可视化图表库",
                    },

                    {title: "", url: "", description: "",},
                    {title: "", url: "", description: "",},
                    {title: "", url: "", description: "",},

                    {title: "vue3", url: "https://vue3js.cn/", description: "",},
                    {title: "Vue.js", url: "https://cn.vuejs.org/index.html", description: "",},
                    {title: "", url: "", description: "",},

                    {title: "MyBatis-P", url: "https://baomidou.com/", description: "mybatis-plus",},
                    {title: "MyBatis-F", url: "https://mybatis-flex.com/", description: "MyBatis-Flex",},
                    {title: "", url: "", description: "",},

                    {title: "VuePress", url: "https://www.vuepress.cn/", description: "Vue 驱动的静态网站生成器",},
                    {
                        title: "Element-ui",
                        url: "https://element.eleme.cn/#/zh-CN/component/installation",
                        description: "基于 Vue2 的 UI 组件库和前端解决方案",
                    },
                    {
                        title: "Element+",
                        url: "https://element-plus.org/zh-CN/component/button.html",
                        description: "基于 Vue3 的 UI 组件库和前端解决方案",
                    },

                    {
                        title: "华为云组件",
                        url: "https://opentiny.design/",
                        description: "华为云 的 UI 组件库和前端解决方案",
                    },
                    {
                        title: "Ant Design",
                        url: "https://2x.antdv.com/components/overview-cn",
                        description: "蚂蚁金服UI组件库",
                    },
                    {
                        title: "View Design",
                        url: "https://www.iviewui.com/",
                        description: "基于 Vue3 的 UI 组件库和前端解决方案",
                    },

                    {title: "typecho", url: "http://typecho.org/", description: "",},
                    {title: "vite", url: "https://www.vitejs.net/", description: "",},
                    {title: "typescript", url: "https://www.tslang.cn/", description: "",},

                    {
                        title: "Gridea",
                        url: "https://gridea.dev/",
                        description: "Gridea 是一个静态博客写作客户端，帮助你更容易地构建并管理博客或任何静态站点。",
                    },
                    {title: "zblogcn", url: "https://www.zblogcn.com/", description: "",},
                    {title: "hugo", url: "https://gohugo.io/", description: "Hugo 是最流行的开源静态站点生成器之一",},

                    {title: "undraw", url: "https://undraw.gitee.io/", description: "基于vue3的评论组件",},
                    {
                        title: "sa-token",
                        url: "https://sa-token.cc/",
                        description: "一个轻量级 java 权限认证框架，让鉴权变得简单、优雅！",
                    },
                    {title: "爱课堂", url: "https://www.icourses.cn/home/", description: "",},

                    {title: "", url: "", description: "",},
                    {title: "", url: "", description: "",},
                    {title: "", url: "", description: "",},

                    {title: "ruoyi", url: "http://doc.ruoyi.vip/", description: "快速构建web应用程序",},
                    {title: "", url: "", description: "",},
                    {title: "", url: "", description: "",},

                    {title: "qwerty", url: "https://qwerty.liumingye.cn/", description: "被单词",},
                    {title: "", url: "", description: "",},
                    {title: "", url: "", description: "",},

                    {title: "", url: "", description: "",},
                    {title: "", url: "", description: "",},
                    {title: "", url: "", description: "",},

                    {title: "码市", url: "https://www.codemart.com/", description: "",},
                    {title: "猿急送", url: "https://www.yuanjisong.com/", description: "",},
                    {title: "解放号", url: "https://www.jfh.com/", description: "",},

                    {title: "圆领", url: "https://www.yuanling.com/home", description: "",},
                    {title: "外包大师", url: "http://www.waibaodashi.com/", description: "",},
                    {title: "", url: "", description: "",},

                    {title: "", url: "", description: "",},
                    {title: "", url: "", description: "",},
                    {title: "", url: "", description: "",},

                    {title: "自考", url: "https://www.exam100.net/", description: "自考",},
                    {title: "专升本数学", url: "http://video.kaola100.com/book_list/5142", description: "",},
                    {title: "", url: "", description: "",},

                ],
            },
            {
                webClassify: "工具", url_body_color: "#414141", websiteList: [
                    {title: "百度翻译", url: "http://fanyi.baidu.com/", description: "",},
                    {title: "有道词典", url: "http://fanyi.youdao.com/", description: "",},
                    {title: "谷歌翻译", url: "https://translate.google.cn/", description: "",},

                    {title: "搜狗翻译", url: "https://fanyi.sogou.com/text", description: "",},
                    {title: "DeepL", url: "https://www.deepl.com/translator", description: "全世界最准确的翻译",},
                    {title: "可视化正则", url: "https://regexr.com/", description: "可视化验证正则表达式",},

                    {title: "", url: "", description: "",},
                    {title: "", url: "", description: "",},
                    {title: "", url: "", description: "",},

                    {title: "有道云笔记", url: "https://note.youdao.com/", description: "记笔记",},
                    {title: "腾讯文档", url: "https://docs.qq.com/desktop/", description: "",},
                    {title: "拷贝兔", url: "https://cp.anyknew.com/", description: "小文件的不同电脑传输下载",},

                    {title: "notion", url: "https://www.notion.so/", description: "",},
                    {title: "微信文件传输", url: "https://szfilehelper.weixin.qq.com/", description: "",},
                    {title: "", url: "", description: "",},

                    {title: "", url: "", description: "",},
                    {title: "", url: "", description: "",},
                    {title: "", url: "", description: "",},


                    {title: "写代码1", url: "https://paste.ubuntu.com/", description: "",},
                    {title: "写代码2", url: "https://ideone.com/", description: "",},
                    {title: "写代码3", url: "https://paste.centos.org/", description: "",},

                    {title: "代码对比1", url: "https://tool.lu/diff/", description: "",},
                    {title: "代码对比2", url: "https://www.diffchecker.com/diff", description: "",},
                    {title: "代码对比3", url: "https://csacademy.com/app/diffing_tool/", description: "",},

                    {title: "数列", url: "http://oeis.org/hints.html", description: "",},
                    {title: "函数画图", url: "https://www.desmos.com/calculator?lang=zh-CN", description: "",},
                    {title: "图论画图", url: "https://csacademy.com/app/graph_editor/", description: "",},

                    {title: "wolframalpha", url: "https://www.wolframalpha.com/", description: "",},
                    {
                        title: "参考文献格式",
                        url: "http://youkud.com/tool/referance/index.html",
                        description: "参考文献格式生成器",
                    },
                    {title: "", url: "", description: "",},

                    {title: "scratch", url: "https://makecode.microbit.org/#", description: "在线scratch",},
                    {title: "", url: "", description: "",},
                    {title: "", url: "", description: "",},

                    {title: "代码可视化", url: "https://pythontutor.com/", description: "代码可视化",},
                    {title: "", url: "", description: "",},
                    {title: "", url: "", description: "",},

                    {title: "", url: "", description: "",},
                    {title: "", url: "", description: "",},
                    {title: "", url: "", description: "",},

                    {title: "aixcoder", url: "https://codesearch.aixcoder.com/#/", description: "一个ai的代码生成器",},
                    {
                        title: "Vega ai",
                        url: "https://rightbrain.art//?from=ai.jb51.cc",
                        description: "一个图片的ai生成器",
                    },
                    {title: "", url: "", description: "",},

                    {title: "", url: "", description: "",},
                    {title: "", url: "", description: "",},
                    {title: "", url: "", description: "",},

                    {title: "看榜", url: "https://board.xcpcio.com/", description: "",},
                    {title: "在线运行", url: "https://www.dooccn.com/", description: "",},
                    {title: "作业部落", url: "https://www.zybuluo.com/mdeditor#2272516", description: "",},

                    {title: "图床1", url: "https://www.wailian.work/", description: "",},
                    {title: "图床2", url: "https://www.giaott.com/", description: "",},
                    {title: "留言本", url: "https://note.ms/nyco", description: "",},


                    {title: "", url: "", description: "",},
                    {title: "", url: "", description: "",},
                    {title: "", url: "", description: "",},

                    {title: "华为云", url: "https://www.huaweicloud.com/", description: "",},
                    {title: "阿里云", url: "https://www.aliyun.com", description: "",},
                    {title: "腾讯云", url: "https://cloud.tencent.com/", description: "",},

                    {title: "百度智能云", url: "https://cloud.baidu.com/", description: "",},
                    {title: "", url: "", description: "",},
                    {title: "", url: "", description: "",},

                    {title: "bluehost", url: "https://cn.bluehost.com/", description: "",},
                    {title: "lightnode", url: "https://www.lightnode.com/zh-CN/home", description: "",},
                    {title: "", url: "", description: "",},

                    {title: "", url: "", description: "",},
                    {title: "", url: "", description: "",},
                    {title: "", url: "", description: "",},

                    {title: "godaddy", url: "https://www.godaddy.com/zh-sg", description: "",},
                    {title: "", url: "", description: "",},
                    {title: "", url: "", description: "",},

                    {title: "", url: "", description: "",},
                    {title: "", url: "", description: "",},
                    {title: "", url: "", description: "",},

                    {title: "xshell", url: "https://www.xshell.com/zh/free-for-home-school/", description: "",},
                    {title: "百度统计", url: "https://tongji.baidu.com/", description: "",},
                    {title: "", url: "", description: "",},

                    {title: "", url: "", description: "",},
                    {title: "", url: "", description: "",},
                    {title: "", url: "", description: "",},

                    {title: "菜鸟正则测试", url: "https://c.runoob.com/front-end/854", description: "",},
                    {title: "流程图", url: "https://app.diagrams.net/", description: "",},
                    {title: "cron", url: "https://cron.qqe2.com/", description: "",},

                    {title: "", url: "", description: "",},
                    {title: "", url: "", description: "",},
                    {title: "", url: "", description: "",},

                    {title: "油猴", url: "https://www.tampermonkey.net/", description: "油猴Tampermonkey",},
                    {
                        title: "视频会员1",
                        url: "https://greasyfork.org/zh-CN/scripts/418804-%E8%A7%A3%E9%94%81b%E7%AB%99%E5%A4%A7%E4%BC%9A%E5%91%98%E7%95%AA%E5%89%A7-b%E7%AB%99%E8%A7%86%E9%A2%91%E8%A7%A3%E6%9E%90%E4%B8%8B%E8%BD%BD-%E5%85%A8%E7%BD%91vip%E8%A7%86%E9%A2%91%E5%85%8D%E8%B4%B9%E7%A0%B4%E8%A7%A3%E5%8E%BB%E5%B9%BF%E5%91%8A-%E5%85%A8%E7%BD%91%E9%9F%B3%E4%B9%90%E7%9B%B4%E6%8E%A5%E4%B8%8B%E8%BD%BD-%E6%B2%B9%E7%AE%A1-facebook%E7%AD%89%E5%9B%BD%E5%A4%96%E8%A7%86%E9%A2%91%E8%A7%A3%E6%9E%90%E4%B8%8B%E8%BD%BD-%E7%BD%91%E7%9B%98%E6%90%9C%E7%B4%A2%E5%BC%95%E6%93%8E%E7%A0%B4%E8%A7%A3%E6%97%A0%E9%99%90%E4%B8%8B%E8%BD%BD%E7%AD%89",
                        description: "",
                    },
                    {
                        title: "视频会员2",
                        url: "https://greasyfork.org/zh-CN/scripts/370634-%E6%87%92%E4%BA%BA%E4%B8%93%E7%94%A8-%E5%85%A8%E7%BD%91vip%E8%A7%86%E9%A2%91%E5%85%8D%E8%B4%B9%E7%A0%B4%E8%A7%A3%E5%8E%BB%E5%B9%BF%E5%91%8A-%E5%85%A8%E7%BD%91%E9%9F%B3%E4%B9%90%E7%9B%B4%E6%8E%A5%E4%B8%8B%E8%BD%BD-%E7%9F%A5%E4%B9%8E%E5%A2%9E%E5%BC%BA-%E7%9F%AD%E8%A7%86%E9%A2%91%E6%97%A0%E6%B0%B4%E5%8D%B0%E4%B8%8B%E8%BD%BD-%E7%99%BE%E5%BA%A6%E7%BD%91%E7%9B%98%E7%9B%B4%E6%8E%A5%E4%B8%8B%E8%BD%BD%E7%AD%89%E5%A4%9A%E5%8A%9F%E8%83%BD%E5%B7%A5%E5%85%B7%E7%AE%B1-%E5%8A%9F%E8%83%BD%E5%8F%AF%E7%8B%AC%E7%AB%8B%E5%BC%80%E5%85%B3-%E9%95%BF%E6%9C%9F%E6%9B%B4%E6%96%B0-%E6%94%BE%E5%BF%83%E4%BD%BF%E7%94%A8-v5-4",
                        description: "",
                    },

                    {title: "", url: "", description: "",},
                    {title: "", url: "", description: "",},
                    {title: "", url: "", description: "",},

                    {title: "图片素材", url: "https://pixabay.com/zh/", description: "",},
                    {title: "wallhaven", url: "https://wallhaven.cc/", description: "",},
                    {title: "矢量图", url: "https://www.iconfont.cn/", description: "阿里的矢量图图库",},

                    {title: "FontAwesome", url: "https://fontawesome.com/", description: "Font Awesome 图标库",},
                    {
                        title: "IconPark",
                        url: "https://iconpark.oceanengine.com/official",
                        description: "字节跳动官方图标库",
                    },
                    {title: "Remix Icon", url: "http://www.remixicon.com/", description: "Remix Icon 图标库",},

                    {title: "", url: "", description: "",},
                    {title: "", url: "", description: "",},
                    {title: "", url: "", description: "",},

                    {title: "颜色选取", url: "https://color.uisdc.com/pick.html", description: "",},
                    {title: "WebGradients", url: "https://webgradients.com/", description: "css渐变色",},
                    {title: "coolors", url: "https://coolors.co/", description: "",},

                    {title: "colorhunt", url: "https://colorhunt.co/", description: "",},
                    {title: "中国色", url: "http://zhongguose.com/", description: "",},
                    {title: "中国色彩网", url: "https://www.cncolor.cn/", description: "",},

                    {title: "mycolor", url: "https://mycolor.space/", description: "选取颜色的三色编码",},
                    {title: "", url: "", description: "",},
                    {title: "", url: "", description: "",},

                    {title: "", url: "", description: "",},
                    {title: "", url: "", description: "",},
                    {title: "", url: "", description: "",},

                    {title: "PPT模板", url: "https://ppt.sotary.com/web/wxapp/index.html", description: "",},
                    {title: "PDF转换", url: "https://www.pdfpai.com/", description: "",},
                    {title: "PDF转换", url: "https://www.ilovepdf.com/zh-cn", description: "",},

                    {title: "秘塔写作猫", url: "https://xiezuocat.com/#/", description: "论文降重",},
                    {title: "调音", url: "https://vocalremover.org/ch/", description: "对声音的一些处理",},
                    {title: "在线PS", url: "https://www.uupoop.com/#/", description: "",},

                    {title: "aconvert", url: "https://www.aconvert.com/cn/", description: "多种文件格式相互转换",},
                    {title: "音乐解锁", url: "https://demo.unlock-music.dev/", description: "",},
                    {title: "在线svg", url: "http://www.zuohaotu.com/svg/", description: "在线svg制作",},

                    {title: "自动剪辑", url: "https://autocut.video/", description: "",},
                    {title: "", url: "", description: "",},
                    {title: "", url: "", description: "",},

                    {title: "", url: "", description: "",},
                    {title: "", url: "", description: "",},
                    {title: "", url: "", description: "",},

                    {
                        title: "JetBrains",
                        url: "https://crustwebsites.net/ipfs/bafybeiatyghkzrrtodzt3stm652rkrjxndg4hq2ublfdmifk7plg5k5brq/",
                        description: "JetBrains的激活码",
                    },
                    {title: "爱激活", url: "https://www.ajihuo.com/", description: "",},
                    {title: "积微成著", url: "https://www.jiweichengzhu.com/", description: "",},

                    {title: "异常教程", url: "https://exception.site/", description: "",},
                    {title: "蜻蜓工具", url: "https://33tool.com/", description: "",},
                    {title: "", url: "", description: "",},

                    {title: "", url: "", description: "",},
                    {title: "", url: "", description: "",},
                    {title: "", url: "", description: "",},

                    {title: "奇迹秀", url: "https://www.qijishow.com/", description: "",},
                    {title: "宝塔", url: "https://www.bt.cn/new/index.html", description: "",},
                    {title: "Rutracker", url: "http://rutracker.in/", description: "俄罗斯的盗版资源",},

                    {title: "", url: "", description: "",},
                    {title: "", url: "", description: "",},
                    {title: "", url: "", description: "",},

                    {title: "工具1", url: "https://xiaomark.com/tool", description: "",},
                    {title: "工具2", url: "https://tooltt.com/", description: "",},
                    {title: "工具3", url: "https://www.toolfk.com/", description: "",},

                    {title: "工具4", url: "https://www.toolmao.com/#term-102", description: "",},
                    {title: "", url: "", description: "",},
                    {title: "", url: "", description: "",},

                    {title: "", url: "", description: "",},
                    {title: "", url: "", description: "",},
                    {title: "", url: "", description: "",},

                    {title: "tinypng", url: "https://tinypng.com/", description: "在线压缩图片",},
                    {title: "下载b站视频", url: "https://xbeibeix.com/api/bilibili/", description: "",},
                    {title: "稿定抠图", url: "https://koutu.gaoding.com/", description: "在线AI抠图",},

                    {title: "草料", url: "https://cli.im/", description: "草料二维码生成器",},
                    {title: "扒网站", url: "https://bazhan.wang/", description: "在线扒站工具",},
                    {title: "", url: "", description: "",},

                    {title: "", url: "", description: "",},
                    {title: "", url: "", description: "",},
                    {title: "", url: "", description: "",},

                    {title: "评语生成器", url: "https://class.acagrid.com/pc/comment", description: "",},
                    {title: "字数统计", url: "https://www.eteste.com/", description: "",},
                    {title: "魔方还原", url: "https://rubiks-cube-solver.com/zh/", description: "",},


                    {title: "", url: "", description: "",},
                    {title: "", url: "", description: "",},
                    {title: "", url: "", description: "",},

                    {title: "果核", url: "https://www.ghxi.com/", description: "",},
                    {title: "MSDN", url: "https://msdn.itellyou.cn/", description: "",},
                    {title: "", url: "", description: "",},

                    {title: "network", url: "https://arr003.network/download/", description: "梯子",},
                    {title: "lanzouw", url: "https://ayden.lanzouw.com/iHfh30967kud", description: "梯子",},
                    {title: "lico", url: "https://www.lico.live/", description: "梯子",},

                    {title: "", url: "", description: "",},
                    {title: "", url: "", description: "",},
                    {title: "", url: "", description: "",},

                    {title: "github加速器", url: "https://github.com/dotnetcore/FastGithub", description: "",},
                    {title: "", url: "", description: "",},
                    {title: "", url: "", description: "",},

                    {title: "", url: "", description: "",},
                    {title: "", url: "", description: "",},
                    {title: "", url: "", description: "",},

                    {title: "清华镜像站", url: "https://mirrors.tuna.tsinghua.edu.cn/", description: "",},
                    {title: "华为镜像站", url: "https://mirrors.huaweicloud.com/home", description: "",},
                    {title: "腾讯镜像站", url: "https://mirrors.cloud.tencent.com/", description: "",},

                ],
            },
            {
                webClassify: "娱乐", url_body_color: "#414141", websiteList: [
                    {title: "爱奇艺", url: "https://www.iqiyi.com/", description: "",},
                    {title: "腾讯视频", url: "https://v.qq.com/", description: "",},
                    {title: "优酷视频", url: "https://www.youku.com/", description: "",},

                    {title: "芒果视频", url: "https://www.mgtv.com/", description: "",},
                    {title: "咪咕视频", url: "https://www.migu.cn/index.html", description: "",},
                    {title: "", url: "", description: "",},

                    {title: "", url: "", description: "",},
                    {title: "", url: "", description: "",},
                    {title: "", url: "", description: "",},

                    {title: "片库", url: "https://www.btnull.org/", description: "",},
                    {title: "合家影院", url: "https://www.ihejia.com.cn/", description: "",},
                    {title: "555电影", url: "http://www.5ying.fun/", description: "",},

                    {title: "茶杯狐", url: "https://cupfox.app/", description: "",},
                    {title: "耐看点播", url: "https://www.nkvod.com/", description: "",},
                    {title: "素白白", url: "https://subaibai.vip/", description: "",},

                    {title: "no", url: "https://www.novipnoad.net/", description: "",},
                    {title: "", url: "", description: "",},
                    {title: "", url: "", description: "",},

                    {title: "", url: "", description: "",},
                    {title: "", url: "", description: "",},
                    {title: "", url: "", description: "",},

                    {title: "斗鱼", url: "https://www.douyu.com/", description: "",},
                    {title: "虎牙", url: "https://www.huya.com/", description: "",},
                    {title: "抖音", url: "https://www.douyin.com/?enter=guide", description: "",},

                    {title: "", url: "", description: "",},
                    {title: "", url: "", description: "",},
                    {title: "", url: "", description: "",},

                    {title: "网易云音乐", url: "https://music.163.com/", description: "",},
                    {title: "qq音乐", url: "https://y.qq.com/", description: "",},
                    {title: "酷狗音乐", url: "https://www.kugou.com/", description: "",},

                    {title: "", url: "", description: "",},
                    {title: "", url: "", description: "",},
                    {title: "", url: "", description: "",},

                    {
                        title: "打发时间",
                        url: "https://theuselessweb.com/",
                        description: "一个可以发呆的小网站 会随机蹦出一些奇奇怪怪的网站",
                    },
                    {title: "打字", url: "https://barneyzhao.gitee.io/typing-cn/#/", description: "",},
                    {
                        title: "字符画",
                        url: "http://patorjk.com/software/taag/#p=display&f=Graffiti&t=welcome%20to%202048%20",
                        description: "字母生成字符画",
                    },

                    {title: "摸鱼神器", url: "https://fakeupdate.net/", description: "假装windows升级界面",},
                    {title: "小霸王游戏机", url: "https://www.yikm.net/", description: "童年的怀旧小游戏",},
                    {title: "游戏机", url: "http://lab.mkblog.cn/FCGames/#/", description: "童年的怀旧小游戏",},

                    {title: "扫雷", url: "http://www.minesweeper.cn/", description: "",},
                    {title: "2048", url: "https://2048game.com/", description: "",},
                    {title: "俄罗斯方块", url: "https://www.goodoldtetris.com/", description: "",},

                    {
                        title: "三阶魔方",
                        url: "https://uploadfiles.nowcoder.com/files/xiaosha/index.html",
                        description: "",
                    },
                    {title: "", url: "", description: "",},
                    {title: "", url: "", description: "",},

                ],
            },
            {
                webClassify: "灵感", url_body_color: "#414141", websiteList: [
                    {title: "NV资源网", url: "https://noisevip.cn/", description: "",},
                    {title: "Halo", url: "https://halo.run/", description: "一款现代化的开源博客/CMS系统",},
                    {title: "hexo", url: "https://hexo.io/zh-cn/", description: "快速、简洁且高效的博客框架",},

                    {title: "Vue资源精选", url: "http://vue.awesometiny.com/", description: "前端组件库资源",},
                    {
                        title: "wordpress",
                        url: "https://cn.wordpress.org/",
                        description: "WordPress是一款能让您建立出色网站、博客或应用程序的开源软件",
                    },
                    {title: "", url: "", description: "",},

                    {title: "", url: "", description: "",},
                    {title: "", url: "", description: "",},
                    {title: "", url: "", description: "",},

                    {title: "花瓣", url: "https://huaban.com/", description: "",},
                    {title: "站酷", url: "https://www.zcool.com.cn/", description: "",},
                    {title: "osrc", url: "https://docs.osrc.com/", description: "",},

                    {title: "", url: "", description: "",},
                    {title: "", url: "", description: "",},
                    {title: "", url: "", description: "",},

                    {
                        title: "公众号测试",
                        url: "https://mp.weixin.qq.com/debug/cgi-bin/sandbox?t=sandbox/login",
                        description: "",
                    },
                    {
                        title: "企业微信",
                        url: "https://work.weixin.qq.com/wework_admin/loginpage_wx?redirect_uri=https%3A%2F%2Fwork.weixin.qq.com%2Fwework_admin%2Fframe#index",
                        description: "",
                    },
                    {title: "微信官网", url: "https://weixin.qq.com/", description: "",},

                    {title: "微信网页版", url: "https://wx.qq.com/", description: "",},
                    {title: "", url: "", description: "",},
                    {title: "", url: "", description: "",},

                    {title: "", url: "", description: "",},
                    {title: "", url: "", description: "",},
                    {title: "", url: "", description: "",},

                    {title: "hydro", url: "https://hydro.js.org/", description: "",},
                    {title: "青岛", url: "https://opensource.qduoj.com/#/", description: "",},
                    {title: "hoj", url: "https://docs.hdoi.cn/", description: "",},

                    {title: "hustoj", url: "https://zhblue.github.io/hustoj/#/", description: "",},
                    {title: "", url: "", description: "",},
                    {title: "", url: "", description: "",},

                    {title: "bmrs", url: "https://www.bmrs.top/", description: "",},
                    {title: "soybean", url: "https://docs.soybean.pro/", description: "",},
                    {title: "", url: "", description: "",},

                    {title: "", url: "", description: "",},
                    {title: "", url: "", description: "",},
                    {title: "", url: "", description: "",},

                    {title: "简历", url: "https://www.51386.com/", description: "简历模板",},
                    {title: "简历", url: "https://www.gerenjianli.com/", description: "简历模板",},
                    {title: "", url: "", description: "",},

                    {title: "", url: "", description: "",},
                    {title: "", url: "", description: "",},
                    {title: "", url: "", description: "",},

                    {title: "navnav", url: "https://navnav.co/", description: "css动画布局",},
                    {title: "animxyz", url: "https://animxyz.com/", description: "css动画布局",},
                    {title: "100天css", url: "https://100dayscss.com/", description: "",},

                    {title: "pixijs", url: "https://pixijs.com/", description: "",},
                    {title: "", url: "", description: "",},
                    {title: "", url: "", description: "",},

                    {title: "", url: "", description: "",},
                    {title: "", url: "", description: "",},
                    {title: "", url: "", description: "",},

                    {title: "chatguide", url: "https://chatguide.plexpt.com/", description: "调教chatGPT",},
                    {title: "ai-bot", url: "https://ai-bot.cn/", description: "ai工具集",},
                    {title: "cursor", url: "https://www.cursor.so/", description: "内置ai的编辑器",},
                ]
            },],

    },

    getters: {},

    mutations: {},

    actions: {},

    modules: {},

})
