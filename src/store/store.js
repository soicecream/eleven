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


        // 导航栏的所有内容
        // npm run deploy
        top_title_span_url: [
            {id: 0, title: "圣诞树", type: 1, url: "/christmas_tree", show: false,},
            {id: 1, title: "图库", type: 1, url: "/picture", show: false,},
            {id: 2, title: "日志", type: 1, url: "/journal", show: true,},
            {id: 3, title: "绕口令", type: 1, url: "/tongue_twister", show: true,},
            {id: 4, title: "水波", type: 1, url: "/", show: false,},
            {id: 5, title: "脉冲波纹催眠", type: 1, url: "/hypnosis", show: true,},
            {id: 6, title: "纸飞机", type: 1, url: "/paper_plane", show: true,},
            {id: 7, title: "指尖陀螺", type: 1, url: "/fingertip_gyroscope", show: true,},

            {id: 999, title: "百度地图", type: 1, url: "/map", show: false,},
            {id: 1000, title: "text", type: 1, url: "/text", show: false,},
        ],

        // 拾忆的url
        ShiYi_eleven_url: [
            {
                title: "搜索",
                url_body_color: "#414141",
                content: [
                    {name: "百度", url: "https://www.baidu.com/", targets: "_blank", introduce: "百度一下,你就知道",},
                    {name: "微博", url: "https://www.weibo.com/", targets: "_blank", introduce: "随时随地发现新鲜事",},
                    {
                        name: "知乎",
                        url: "https://www.zhihu.com/",
                        targets: "_blank",
                        introduce: "中文互联网高质量的问答社区和创作者聚集的原创内容平台",
                    },

                    {name: "B站", url: "https://www.bilibili.com/", targets: "_blank", introduce: "哔哩哔哩 (゜-゜)つロ 干杯~",},
                    {name: "知网", url: "https://www.cnki.net/", targets: "_blank", introduce: "",},
                    {name: "", url: "", targets: "_blank", introduce: "",},

                    {name: "", url: "", targets: "_blank", introduce: "",},
                    {name: "", url: "", targets: "_blank", introduce: "",},
                    {name: "", url: "", targets: "_blank", introduce: "",},

                    {name: "qq邮箱", url: "https://mail.qq.com/", targets: "_blank", introduce: "",},
                    {name: "网易邮箱", url: "https://mail.163.com/", targets: "_blank", introduce: "",},
                    {name: "", url: "", targets: "_blank", introduce: "",},

                    {name: "", url: "", targets: "_blank", introduce: "",},
                    {name: "", url: "", targets: "_blank", introduce: "",},
                    {name: "", url: "", targets: "_blank", introduce: "",},

                    {name: "CSDN", url: "https://www.csdn.net/", targets: "_blank", introduce: "全球知名中文IT技术交流平台",},
                    {name: "博客云", url: "https://www.cnblogs.com/", targets: "_blank", introduce: "一个面向开发者的知识分享社区",},
                    {name: "", url: "", targets: "_blank", introduce: "",},

                    {name: "", url: "", targets: "_blank", introduce: "",},
                    {name: "", url: "", targets: "_blank", introduce: "",},
                    {name: "", url: "", targets: "_blank", introduce: "",},

                    {name: "逗逼拯救世界", url: "https://www.dbbqb.com/", targets: "_blank", introduce: "表情包搜索",},

                ],
            },
            {
                title: "追剧",
                url_body_color: "#414141",
                content: [
                    {name: "爱奇艺", url: "https://www.iqiyi.com/", targets: "_blank", introduce: "",},
                    {name: "腾讯视频", url: "https://v.qq.com/", targets: "_blank", introduce: "",},
                    {name: "优酷视频", url: "https://www.youku.com/", targets: "_blank", introduce: "",},

                    {name: "芒果视频", url: "https://www.mgtv.com/", targets: "_blank", introduce: "",},
                    {name: "咪咕视频", url: "https://www.migu.cn/index.html", targets: "_blank", introduce: "",},
                    {name: "", url: "", targets: "_blank", introduce: "",},

                    {name: "", url: "", targets: "_blank", introduce: "",},
                    {name: "", url: "", targets: "_blank", introduce: "",},
                    {name: "", url: "", targets: "_blank", introduce: "",},

                    {name: "片库", url: "https://www.btnull.org/", targets: "_blank", introduce: "",},
                    {name: "耐看点播", url: "https://www.nkvod.cc", targets: "_blank", introduce: "",},
                    {name: "555电影", url: "http://www.5ying.fun/", targets: "_blank", introduce: "",},

                    {name: "茶杯狐", url: "https://cupfox.app/", targets: "_blank", introduce: "",},
                    {name: "低端影视", url: "https://ddrk.me/tag/recommend/", targets: "_blank", introduce: "",},
                    {name: "奇粹影视", url: "http://www.blssv.com/", targets: "_blank", introduce: "",},

                ],
            },
            {
                title: "学习",
                url_body_color: "#414141",
                content: [
                    {
                        name: "学习通",
                        url: "https://passport2.chaoxing.com/login?fid=&newversion=true&refer=https%3A%2F%2Fi.chaoxing.com",
                        targets: "_blank",
                        introduce: "",
                    },
                    {
                        name: "懒人Excel",
                        url: "https://www.lanrenexcel.com/",
                        targets: "_blank",
                        introduce: "学习Excel 我也不知道好还是不好",
                    },
                    {name: "", url: "", targets: "_blank", introduce: "",},

                    {name: "", url: "", targets: "_blank", introduce: "",},
                    {name: "", url: "", targets: "_blank", introduce: "",},
                    {name: "", url: "", targets: "_blank", introduce: "",},

                    {name: "教务系统", url: "http://58.244.173.36/netjw/", targets: "_blank", introduce: "",},
                    {name: "奇迹秀", url: "https://www.qijishow.com/", targets: "_blank", introduce: "",},
                ],
            },
            {
                title: "工具",
                url_body_color: "#414141",
                content: [
                    {name: "百度翻译", url: "http://fanyi.baidu.com/", targets: "_blank", introduce: "",},
                    {name: "有道词典", url: "http://fanyi.youdao.com/", targets: "_blank", introduce: "",},
                    {name: "谷歌翻译", url: "https://translate.google.cn/", targets: "_blank", introduce: "",},

                    {name: "搜狗翻译", url: "https://fanyi.sogou.com/text", targets: "_blank", introduce: "",},
                    {
                        name: "DeepL",
                        url: "https://www.deepl.com/translator",
                        targets: "_blank",
                        introduce: "全世界最准确的翻译",
                    },
                    {name: "", url: "", targets: "_blank", introduce: "",},

                    {name: "", url: "", targets: "_blank", introduce: "",},
                    {name: "", url: "", targets: "_blank", introduce: "",},
                    {name: "", url: "", targets: "_blank", introduce: "",},

                    {name: "有道云笔记", url: "https://note.youdao.com/", targets: "_blank", introduce: "记笔记",},
                    {name: "拷贝兔", url: "https://cp.anyknew.com/", targets: "_blank", introduce: "小文件的不同电脑传输下载",},
                    {name: "", url: "", targets: "_blank", introduce: "",},

                    {name: "", url: "", targets: "_blank", introduce: "",},
                    {name: "", url: "", targets: "_blank", introduce: "",},
                    {name: "", url: "", targets: "_blank", introduce: "",},

                    {
                        name: "PPT模板",
                        url: "https://ppt.sotary.com/web/wxapp/index.html",
                        targets: "_blank",
                        introduce: "",
                    },
                    {name: "PDF转换", url: "https://www.pdfpai.com/", targets: "_blank", introduce: "",},
                    {name: "调音", url: "https://vocalremover.org/ch/", targets: "_blank", introduce: "对声音的一些处理",},

                    {name: "流程图", url: "https://app.diagrams.net/", targets: "_blank", introduce: "",},
                    {name: "论文降重", url: "https://xiezuocat.com/#/", targets: "_blank", introduce: "",},
                    {name: "矢量图", url: "https://www.iconfont.cn/", targets: "_blank", introduce: "阿里的矢量图图库",},

                    {name: "在线PS", url: "https://www.uupoop.com/#/", targets: "_blank", introduce: "",},
                    {name: "音乐解锁", url: "https://demo.unlock-music.dev/", targets: "_blank", introduce: "",},
                    {name: "", url: "", targets: "_blank", introduce: "",},

                    {name: "简历", url: "https://www.51386.com/", targets: "_blank", introduce: "简历模板",},
                    {name: "简历", url: "https://www.gerenjianli.com/", targets: "_blank", introduce: "简历模板",},
                    {name: "", url: "", targets: "_blank", introduce: "",},

                    {name: "", url: "", targets: "_blank", introduce: "",},
                    {name: "", url: "", targets: "_blank", introduce: "",},
                    {name: "", url: "", targets: "_blank", introduce: "",},

                    {name: "工具1", url: "https://xiaomark.com/tool", targets: "_blank", introduce: "",},
                    {name: "工具2", url: "https://tooltt.com/", targets: "_blank", introduce: "",},
                    {name: "工具3", url: "https://www.toolfk.com/", targets: "_blank", introduce: "",},

                    {name: "工具4", url: "https://www.toolmao.com/#term-102", targets: "_blank", introduce: "",},
                    {name: "工具5", url: "https://ujuji.com/", targets: "_blank", introduce: "",},
                    {name: "", url: "", targets: "_blank", introduce: "",},

                    {name: "", url: "", targets: "_blank", introduce: "",},
                    {name: "", url: "", targets: "_blank", introduce: "",},
                    {name: "", url: "", targets: "_blank", introduce: "",},

                    {name: "评语生成器", url: "https://class.acagrid.com/pc/comment", targets: "_blank", introduce: "",},
                    {name: "参考文献格式", url: "http://youkud.com/tool/referance/index.html", targets: "_blank", introduce: "参考文献格式生成器",},
                    {name: "字数统计", url: "https://www.eteste.com/", targets: "_blank", introduce: "",},

                    {name: "魔方还原", url: "https://rubiks-cube-solver.com/zh/", targets: "_blank", introduce: "",},
                ],
            },
            {
                title: "娱乐",
                url_body_color: "#414141",
                content: [
                    {name: "斗鱼", url: "https://www.douyu.com/", targets: "_blank", introduce: "",},
                    {name: "虎牙", url: "https://www.huya.com/", targets: "_blank", introduce: "",},
                    {name: "抖音", url: "https://www.douyin.com/?enter=guide", targets: "_blank", introduce: "",},

                    {name: "", url: "", targets: "_blank", introduce: "",},
                    {name: "", url: "", targets: "_blank", introduce: "",},
                    {name: "", url: "", targets: "_blank", introduce: "",},

                    {name: "网易云音乐", url: "https://music.163.com/", targets: "_blank", introduce: "",},
                    {name: "qq音乐", url: "https://y.qq.com/", targets: "_blank", introduce: "",},
                    {name: "酷狗音乐", url: "https://www.kugou.com/", targets: "_blank", introduce: "",},

                    {name: "", url: "", targets: "_blank", introduce: "",},
                    {name: "", url: "", targets: "_blank", introduce: "",},
                    {name: "", url: "", targets: "_blank", introduce: "",},

                    {name: "漫画", url: "https://www.cnanjie.com/", targets: "_blank", introduce: "",},
                    {name: "", url: "", targets: "_blank", introduce: "",},
                    {name: "", url: "", targets: "_blank", introduce: "",},

                    {name: "", url: "", targets: "_blank", introduce: "",},
                    {name: "", url: "", targets: "_blank", introduce: "",},
                    {name: "", url: "", targets: "_blank", introduce: "",},

                    {
                        name: "打发时间",
                        url: "https://theuselessweb.com/",
                        targets: "_blank",
                        introduce: "一个可以发呆的小网站 会随机蹦出一些奇奇怪怪的网站",
                    },
                    {name: "打字", url: "https://barneyzhao.gitee.io/typing-cn/#/", targets: "_blank", introduce: "",},
                    {
                        name: "字符画",
                        url: "http://patorjk.com/software/taag/#p=display&f=Graffiti&t=welcome%20to%202048%20",
                        targets: "_blank",
                        introduce: "字母生成字符画",
                    },

                    {name: "摸鱼神器", url: "https://fakeupdate.net/", targets: "_blank", introduce: "假装windows升级界面",},
                    {name: "小霸王游戏机", url: "https://www.yikm.net/", targets: "_blank", introduce: "童年的怀旧小游戏",},
                    {name: "游戏机", url: "http://lab.mkblog.cn/FCGames/#/", targets: "_blank", introduce: "童年的怀旧小游戏",},

                    {name: "扫雷", url: "http://www.minesweeper.cn/", targets: "_blank", introduce: "",},
                    {name: "2048", url: "https://2048game.com/", targets: "_blank", introduce: "",},
                    {name: "俄罗斯方块", url: "https://www.goodoldtetris.com/", targets: "_blank", introduce: "",},

                    {
                        name: "表情包制作",
                        url: "https://sorry.xuty.tk/wangjingze/",
                        targets: "_blank",
                        introduce: "童年的怀旧小游戏",
                    },
                    {
                        name: "三阶魔方",
                        url: "https://uploadfiles.nowcoder.com/files/xiaosha/index.html",
                        targets: "_blank",
                        introduce: "",
                    },
                    {name: "", url: "", targets: "_blank", introduce: "",},
                ],
            },
            {
                title: "插件",
                url_body_color: "#414141",
                content: [
                    {name: "油猴", url: "https://www.tampermonkey.net/", targets: "_blank", introduce: "油猴Tampermonkey",},
                    {name: "", url: "", targets: "_blank", introduce: "",},
                    {name: "", url: "", targets: "_blank", introduce: "",},

                    {
                        name: "视频会员1",
                        url: "https://greasyfork.org/zh-CN/scripts/418804-%E8%A7%A3%E9%94%81b%E7%AB%99%E5%A4%A7%E4%BC%9A%E5%91%98%E7%95%AA%E5%89%A7-b%E7%AB%99%E8%A7%86%E9%A2%91%E8%A7%A3%E6%9E%90%E4%B8%8B%E8%BD%BD-%E5%85%A8%E7%BD%91vip%E8%A7%86%E9%A2%91%E5%85%8D%E8%B4%B9%E7%A0%B4%E8%A7%A3%E5%8E%BB%E5%B9%BF%E5%91%8A-%E5%85%A8%E7%BD%91%E9%9F%B3%E4%B9%90%E7%9B%B4%E6%8E%A5%E4%B8%8B%E8%BD%BD-%E6%B2%B9%E7%AE%A1-facebook%E7%AD%89%E5%9B%BD%E5%A4%96%E8%A7%86%E9%A2%91%E8%A7%A3%E6%9E%90%E4%B8%8B%E8%BD%BD-%E7%BD%91%E7%9B%98%E6%90%9C%E7%B4%A2%E5%BC%95%E6%93%8E%E7%A0%B4%E8%A7%A3%E6%97%A0%E9%99%90%E4%B8%8B%E8%BD%BD%E7%AD%89",
                        targets: "_blank",
                        introduce: "",
                    },
                    {
                        name: "视频会员2",
                        url: "https://greasyfork.org/zh-CN/scripts/370634-%E6%87%92%E4%BA%BA%E4%B8%93%E7%94%A8-%E5%85%A8%E7%BD%91vip%E8%A7%86%E9%A2%91%E5%85%8D%E8%B4%B9%E7%A0%B4%E8%A7%A3%E5%8E%BB%E5%B9%BF%E5%91%8A-%E5%85%A8%E7%BD%91%E9%9F%B3%E4%B9%90%E7%9B%B4%E6%8E%A5%E4%B8%8B%E8%BD%BD-%E7%9F%A5%E4%B9%8E%E5%A2%9E%E5%BC%BA-%E7%9F%AD%E8%A7%86%E9%A2%91%E6%97%A0%E6%B0%B4%E5%8D%B0%E4%B8%8B%E8%BD%BD-%E7%99%BE%E5%BA%A6%E7%BD%91%E7%9B%98%E7%9B%B4%E6%8E%A5%E4%B8%8B%E8%BD%BD%E7%AD%89%E5%A4%9A%E5%8A%9F%E8%83%BD%E5%B7%A5%E5%85%B7%E7%AE%B1-%E5%8A%9F%E8%83%BD%E5%8F%AF%E7%8B%AC%E7%AB%8B%E5%BC%80%E5%85%B3-%E9%95%BF%E6%9C%9F%E6%9B%B4%E6%96%B0-%E6%94%BE%E5%BF%83%E4%BD%BF%E7%94%A8-v5-4",
                        targets: "_blank",
                        introduce: "",
                    },
                ]
            },
        ],

        // 水木加贝的url
        eleven_url: [
            {
                title: "搜索",
                url_body_color: "#414141",
                content: [
                    {name: "百度", url: "https://www.baidu.com/", targets: "_blank", introduce: "百度一下,你就知道",},
                    {name: "微博", url: "https://www.weibo.com/", targets: "_blank", introduce: "随时随地发现新鲜事",},
                    {
                        name: "知乎",
                        url: "https://www.zhihu.com/",
                        targets: "_blank",
                        introduce: "中文互联网高质量的问答社区和创作者聚集的原创内容平台",
                    },

                    {name: "B站", url: "https://www.bilibili.com/", targets: "_blank", introduce: "哔哩哔哩 (゜-゜)つロ 干杯~",},
                    {name: "知网", url: "https://www.cnki.net/", targets: "_blank", introduce: "",},
                    {name: "", url: "", targets: "_blank", introduce: "",},

                    {name: "", url: "", targets: "_blank", introduce: "",},
                    {name: "", url: "", targets: "_blank", introduce: "",},
                    {name: "", url: "", targets: "_blank", introduce: "",},

                    {name: "CSDN", url: "https://www.csdn.net/", targets: "_blank", introduce: "全球知名中文IT技术交流平台",},
                    {name: "博客云", url: "https://www.cnblogs.com/", targets: "_blank", introduce: "一个面向开发者的知识分享社区",},
                    {name: "掘金", url: "https://juejin.cn/", targets: "_blank", introduce: "代码不止,掘金不停",},

                    {name: "Gitee", url: "https://gitee.com/", targets: "_blank", introduce: "",},
                    {name: "GitHub", url: "https://github.com/", targets: "_blank", introduce: "",},
                    {name: "菜鸟助手", url: "https://www.runoob.com/", targets: "_blank", introduce: "",},

                    {name: "开源中国", url: "https://www.oschina.net/", targets: "_blank", introduce: "",},
                    {name: "", url: "", targets: "_blank", introduce: "",},
                    {name: "", url: "", targets: "_blank", introduce: "",},

                    {name: "", url: "", targets: "_blank", introduce: "",},
                    {name: "", url: "", targets: "_blank", introduce: "",},
                    {name: "", url: "", targets: "_blank", introduce: "",},

                    {name: "qq邮箱", url: "https://mail.qq.com/", targets: "_blank", introduce: "",},
                    {name: "网易邮箱", url: "https://mail.163.com/", targets: "_blank", introduce: "",},
                    {name: "", url: "", targets: "_blank", introduce: "",},

                    {name: "", url: "", targets: "_blank", introduce: "",},
                    {name: "", url: "", targets: "_blank", introduce: "",},
                    {name: "", url: "", targets: "_blank", introduce: "",},

                    {
                        name: "LaTeX公式",
                        url: "https://www.cnblogs.com/1024th/p/11623258.html",
                        targets: "_blank",
                        introduce: "",
                    },
                    {name: "在线LaTeX", url: "https://www.latexlive.com/", targets: "_blank", introduce: "",},
                    {
                        name: "VPN",
                        url: "https://newvpn.zime.edu.cn/login/login.html",
                        targets: "_blank",
                        introduce: "",
                    },

                    {name: "", url: "", targets: "_blank", introduce: "",},
                    {name: "", url: "", targets: "_blank", introduce: "",},
                    {name: "", url: "", targets: "_blank", introduce: "",},


                    {name: "ICPC", url: "https://icpc.global/", targets: "_blank", introduce: "",},
                    {name: "CCPC", url: "https://ccpc.io/", targets: "_blank", introduce: "",},
                    {name: "", url: "", targets: "_blank", introduce: "",},

                    {name: "", url: "", targets: "_blank", introduce: "",},
                    {name: "", url: "", targets: "_blank", introduce: "",},
                    {name: "", url: "", targets: "_blank", introduce: "",},

                    {name: "逗逼拯救世界", url: "https://www.dbbqb.com/", targets: "_blank", introduce: "表情包搜索",},

                ],
            },
            {
                title: "oj",
                url_body_color: "#414141",
                content: [
                    {name: "牛客", url: "https://ac.nowcoder.com/acm/home", targets: "_blank", introduce: "",},
                    {name: "洛谷", url: "https://www.luogu.com.cn/problem/list", targets: "_blank", introduce: "",},
                    {name: "PTA", url: "https://pintia.cn/", targets: "_blank", introduce: "",},

                    {name: "力扣", url: "https://leetcode.cn/", targets: "_blank", introduce: "",},
                    {name: "AcWing", url: "https://www.acwing.com/", targets: "_blank", introduce: "",},
                    {name: "", url: "", targets: "_blank", introduce: "",},

                    {name: "", url: "", targets: "_blank", introduce: "",},
                    {name: "", url: "", targets: "_blank", introduce: "",},
                    {name: "", url: "", targets: "_blank", introduce: "",},

                    {name: "蓝桥", url: "https://www.lanqiao.cn/", targets: "_blank", introduce: "",},
                    {name: "hdu1", url: "http://acm.hdu.edu.cn", targets: "_blank", introduce: "",},
                    {name: "hdu2", url: "http://acm.dingbacode.com", targets: "_blank", introduce: "",},

                    {name: "zoj", url: "http://zoj.pintia.cn", targets: "_blank", introduce: "",},
                    {name: "poj", url: "http://poj.org/", targets: "_blank", introduce: "",},
                    {name: "", url: "", targets: "_blank", introduce: "",},

                    {name: "", url: "", targets: "_blank", introduce: "",},
                    {name: "", url: "", targets: "_blank", introduce: "",},
                    {name: "", url: "", targets: "_blank", introduce: "",},

                    {name: "Codeforces", url: "https://codeforces.com/", targets: "_blank", introduce: "",},
                    {name: "CodeChef", url: "https://www.codechef.com/", targets: "_blank", introduce: "",},
                    {name: "AtCoder", url: "https://atcoder.jp/", targets: "_blank", introduce: "",},

                    {name: "VJudge", url: "https://vjudge.net/", targets: "_blank", introduce: "",},
                    {name: "", url: "", targets: "_blank", introduce: "",},
                    {name: "", url: "", targets: "_blank", introduce: "",},

                    {name: "", url: "", targets: "_blank", introduce: "",},
                    {name: "", url: "", targets: "_blank", introduce: "",},
                    {name: "", url: "", targets: "_blank", introduce: "",},

                    {name: "做题统计", url: "https://ojhunt.com/", targets: "_blank", introduce: "",},
                    {
                        name: "CFTracker",
                        url: "https://cftracker.netlify.app/contests",
                        targets: "_blank",
                        introduce: "",
                    },
                    {
                        name: "atc Problems",
                        url: "https://kenkoooo.com/atcoder/#/table/",
                        targets: "_blank",
                        introduce: "",
                    },

                    {name: "", url: "", targets: "_blank", introduce: "",},
                    {name: "", url: "", targets: "_blank", introduce: "",},
                    {name: "", url: "", targets: "_blank", introduce: "",},

                    {name: "ZIME2020", url: "https://acm.521207.xyz/", targets: "_blank", introduce: "",},
                    {name: "ZIME2021", url: "http://106.53.134.113/loginpage.php", targets: "_blank", introduce: "",},
                    {name: "ZIME2022", url: "https://2022.acm.521207.xyz/", targets: "_blank", introduce: "",},

                    {name: "乐清", url: "http://51xinao.com/loginpage.php", targets: "_blank", introduce: "",},
                    {name: "信奥", url: "http://ybt.ssoier.cn:8088/index.php", targets: "_blank", introduce: "",},
                    {name: "USACO", url: "http://www.usaco.org/index.php", targets: "_blank", introduce: "",},

                    {name: "OpenJudge", url: "http://openjudge.cn/", targets: "_blank", introduce: "北大的",},
                    {name: "", url: "", targets: "_blank", introduce: "",},
                    {name: "", url: "", targets: "_blank", introduce: "",},

                    {name: "", url: "", targets: "_blank", introduce: "",},
                    {name: "", url: "", targets: "_blank", introduce: "",},
                    {name: "", url: "", targets: "_blank", introduce: "",},

                    {name: "郑州轻工业", url: "http://acm.zzuli.edu.cn/", targets: "_blank", introduce: "",},
                    {name: "东方博宜", url: "https://oj.czos.cn/", targets: "_blank", introduce: "",},
                    {name: "51nod", url: "https://www.51nod.com/", targets: "_blank", introduce: "",},

                    {
                        name: "N诺",
                        url: "https://noobdream.com/DreamJudge/Contest/index_judge/",
                        targets: "_blank",
                        introduce: "",
                    },
                    {name: "NOI", url: "http://noi-test.zzstep.com/", targets: "_blank", introduce: "",},
                    {name: "吉首", url: "http://www.jsuacm.cn/", targets: "_blank", introduce: "",},

                    {
                        name: "台州学院",
                        url: "http://www.tzcoder.cn/acmhome/welcome.do?method=index",
                        targets: "_blank",
                        introduce: "",
                    },
                    {name: "Libre OJ", url: "https://loj.ac/", targets: "_blank", introduce: "",},
                    {name: "华东师范", url: "https://acm.ecnu.edu.cn/", targets: "_blank", introduce: "",},

                    {name: "hydro", url: "https://oj.undefined.moe/", targets: "_blank", introduce: "",},
                    {name: "UOJ", url: "https://uoj.ac/", targets: "_blank", introduce: "",},
                    {name: "CSG", url: "https://cpc.csgrandeur.cn/", targets: "_blank", introduce: "",},

                    {name: "学军", url: "https://xjoi.net/", targets: "_blank", introduce: "",},
                    {name: "北京交通", url: "https://citel.bjtu.edu.cn/acm/", targets: "_blank", introduce: "",},
                    {name: "福建工程", url: "http://120.78.128.11/index.jsp", targets: "_blank", introduce: "",},

                    {name: "北京化工", url: "https://buctcoder.com/", targets: "_blank", introduce: "",},
                    {name: "华南理工", url: "https://scut.online/", targets: "_blank", introduce: "",},
                    {name: "青岛", url: "https://qduoj.com/", targets: "_blank", introduce: "",},

                    {name: "浙江财经", url: "http://acm.ocrosoft.com/", targets: "_blank", introduce: "",},
                    {name: "", url: "", targets: "_blank", introduce: "",},
                    {name: "", url: "", targets: "_blank", introduce: "",},

                ],
            },
            {
                title: "学习",
                url_body_color: "#414141",
                content: [
                    {
                        name: "学习通",
                        url: "https://passport2.chaoxing.com/login?fid=&newversion=true&refer=https%3A%2F%2Fi.chaoxing.com",
                        targets: "_blank",
                        introduce: "",
                    },
                    {
                        name: "懒人Excel",
                        url: "https://www.lanrenexcel.com/",
                        targets: "_blank",
                        introduce: "学习Excel 我也不知道好还是不好",
                    },
                    {name: "OI Wiki", url: "https://oi-wiki.org/", targets: "_blank", introduce: "编程知识整合站点",},

                    {name: "律法", url: "https://flk.npc.gov.cn/", targets: "_blank", introduce: "国家法律法规",},
                    {name: "", url: "", targets: "_blank", introduce: "",},
                    {name: "", url: "", targets: "_blank", introduce: "",},

                    {name: "", url: "", targets: "_blank", introduce: "",},
                    {name: "", url: "", targets: "_blank", introduce: "",},
                    {name: "", url: "", targets: "_blank", introduce: "",},

                    {name: "可视化编程", url: "https://visualgo.net/zh", targets: "_blank", introduce: "",},
                    {
                        name: "希赛",
                        url: "https://wangxiao.xisaiwang.com/tiku2/list-zt132.html",
                        targets: "_blank",
                        introduce: "软考",
                    },
                    {name: "W3school", url: "https://www.w3school.com.cn/", targets: "_blank", introduce: "Web",},

                    {name: "Lay-ui", url: "https://www.layuiweb.com/", targets: "_blank", introduce: "开源模块化前端UI框架",},
                    {name: "QuickRef.ME", url: "https://quickref.me/", targets: "_blank", introduce: "",},
                    {
                        name: "ECHARTS",
                        url: "https://echarts.apache.org/zh/index.html",
                        targets: "_blank",
                        introduce: "一个基于 JavaScript 的开源可视化图表库",
                    },

                    {name: "", url: "", targets: "_blank", introduce: "",},
                    {name: "", url: "", targets: "_blank", introduce: "",},
                    {name: "", url: "", targets: "_blank", introduce: "",},

                    {name: "vue3", url: "https://vue3js.cn/", targets: "_blank", introduce: "",},
                    {name: "Vue.js", url: "https://cn.vuejs.org/index.html", targets: "_blank", introduce: "",},
                    {name: "MyBatis-P", url: "https://baomidou.com/", targets: "_blank", introduce: "Spring Boot",},

                    {
                        name: "VuePress",
                        url: "https://www.vuepress.cn/",
                        targets: "_blank",
                        introduce: "Vue 驱动的静态网站生成器",
                    },
                    {
                        name: "Element-ui2",
                        url: "https://element.eleme.io/#/zh-CN",
                        targets: "_blank",
                        introduce: "基于 Vue2 的 UI 组件库和前端解决方案",
                    },
                    {
                        name: "Element-ui3",
                        url: "https://element-plus.gitee.io/zh-CN/",
                        targets: "_blank",
                        introduce: "基于 Vue3 的 UI 组件库和前端解决方案",
                    },

                    {
                        name: "Ant Design",
                        url: "https://2x.antdv.com/components/overview-cn",
                        targets: "_blank",
                        introduce: "蚂蚁金服UI组件库",
                    },
                    {
                        name: "View Design",
                        url: "https://www.iviewui.com/",
                        targets: "_blank",
                        introduce: "基于 Vue3 的 UI 组件库和前端解决方案",
                    },
                    {name: "typecho", url: "http://typecho.org/", targets: "_blank", introduce: "",},

                    {
                        name: "Gridea",
                        url: "https://gridea.dev/",
                        targets: "_blank",
                        introduce: "Gridea 是一个静态博客写作客户端，帮助你更容易地构建并管理博客或任何静态站点。",
                    },
                    {name: "zblogcn", url: "https://www.zblogcn.com/", targets: "_blank", introduce: "",},
                    {name: "hugo", url: "https://gohugo.io/", targets: "_blank", introduce: "Hugo 是最流行的开源静态站点生成器之一",},
                ],
            },
            {
                title: "工具",
                url_body_color: "#414141",
                content: [
                    {name: "百度翻译", url: "http://fanyi.baidu.com/", targets: "_blank", introduce: "",},
                    {name: "有道词典", url: "http://fanyi.youdao.com/", targets: "_blank", introduce: "",},
                    {name: "谷歌翻译", url: "https://translate.google.cn/", targets: "_blank", introduce: "",},

                    {name: "搜狗翻译", url: "https://fanyi.sogou.com/text", targets: "_blank", introduce: "",},
                    {name: "DeepL", url: "https://www.deepl.com/translator", targets: "_blank", introduce: "全世界最准确的翻译",},
                    {name: "可视化正则", url: "https://regexr.com/", targets: "_blank", introduce: "可视化验证正则表达式",},

                    {name: "", url: "", targets: "_blank", introduce: "",},
                    {name: "", url: "", targets: "_blank", introduce: "",},
                    {name: "", url: "", targets: "_blank", introduce: "",},

                    {name: "有道云笔记", url: "https://note.youdao.com/", targets: "_blank", introduce: "记笔记",},
                    {name: "腾讯文档", url: "https://docs.qq.com/desktop/", targets: "_blank", introduce: "",},
                    {name: "拷贝兔", url: "https://cp.anyknew.com/", targets: "_blank", introduce: "小文件的不同电脑传输下载",},

                    {name: "", url: "", targets: "_blank", introduce: "",},
                    {name: "", url: "", targets: "_blank", introduce: "",},
                    {name: "", url: "", targets: "_blank", introduce: "",},


                    {name: "写代码1", url: "https://paste.ubuntu.com/", targets: "_blank", introduce: "",},
                    {name: "写代码2", url: "https://ideone.com/", targets: "_blank", introduce: "",},
                    {name: "写代码3", url: "https://paste.centos.org/", targets: "_blank", introduce: "",},

                    {name: "代码对比1", url: "https://tool.lu/diff/", targets: "_blank", introduce: "",},
                    {name: "代码对比2", url: "https://www.diffchecker.com/diff", targets: "_blank", introduce: "",},
                    {name: "代码对比3", url: "https://csacademy.com/app/diffing_tool/", targets: "_blank", introduce: "",},

                    {name: "数列", url: "http://oeis.org/hints.html", targets: "_blank", introduce: "",},
                    {name: "函数画图", url: "https://www.desmos.com/calculator?lang=zh-CN", targets: "_blank", introduce: "",},
                    {name: "图论画图", url: "https://csacademy.com/app/graph_editor/", targets: "_blank", introduce: "",},

                    {name: "wolframalpha", url: "https://www.wolframalpha.com/", targets: "_blank", introduce: "",},
                    {name: "参考文献格式", url: "http://youkud.com/tool/referance/index.html", targets: "_blank", introduce: "参考文献格式生成器",},
                    {name: "", url: "", targets: "_blank", introduce: "",},

                    {name: "", url: "", targets: "_blank", introduce: "",},
                    {name: "", url: "", targets: "_blank", introduce: "",},
                    {name: "", url: "", targets: "_blank", introduce: "",},

                    {name: "看榜", url: "https://board.xcpcio.com/", targets: "_blank", introduce: "",},
                    {name: "在线运行", url: "https://www.dooccn.com/", targets: "_blank", introduce: "",},
                    {name: "作业部落", url: "https://www.zybuluo.com/mdeditor#2272516", targets: "_blank", introduce: "",},

                    {name: "图床1", url: "https://www.wailian.work/", targets: "_blank", introduce: "",},
                    {name: "图床2", url: "https://www.giaott.com/", targets: "_blank", introduce: "",},
                    {name: "留言本", url: "https://note.ms/nyco", targets: "_blank", introduce: "",},


                    {name: "", url: "", targets: "_blank", introduce: "",},
                    {name: "", url: "", targets: "_blank", introduce: "",},
                    {name: "", url: "", targets: "_blank", introduce: "",},

                    {name: "华为云", url: "https://www.huaweicloud.com/", targets: "_blank", introduce: "",},
                    {name: "阿里云", url: "https://www.aliyun.com", targets: "_blank", introduce: "",},
                    {name: "腾讯云", url: "https://cloud.tencent.com/", targets: "_blank", introduce: "",},

                    {name: "百度智能云", url: "https://cloud.baidu.com/", targets: "_blank", introduce: "",},
                    {name: "", url: "", targets: "_blank", introduce: "",},
                    {name: "", url: "", targets: "_blank", introduce: "",},

                    {name: "bluehost", url: "https://cn.bluehost.com/", targets: "_blank", introduce: "",},
                    {name: "lightnode", url: "https://www.lightnode.com/zh-CN/home", targets: "_blank", introduce: "",},
                    {name: "", url: "", targets: "_blank", introduce: "",},

                    {name: "", url: "", targets: "_blank", introduce: "",},
                    {name: "", url: "", targets: "_blank", introduce: "",},
                    {name: "", url: "", targets: "_blank", introduce: "",},

                    {name: "godaddy", url: "https://www.godaddy.com/zh-sg", targets: "_blank", introduce: "",},
                    {name: "", url: "", targets: "_blank", introduce: "",},
                    {name: "", url: "", targets: "_blank", introduce: "",},

                    {name: "", url: "", targets: "_blank", introduce: "",},
                    {name: "", url: "", targets: "_blank", introduce: "",},
                    {name: "", url: "", targets: "_blank", introduce: "",},

                    {name: "xshell", url: "https://www.xshell.com/zh/free-for-home-school/", targets: "_blank", introduce: "",},
                    {name: "百度统计", url: "https://tongji.baidu.com/", targets: "_blank", introduce: "",},
                    {name: "", url: "", targets: "_blank", introduce: "",},

                    {name: "", url: "", targets: "_blank", introduce: "",},
                    {name: "", url: "", targets: "_blank", introduce: "",},
                    {name: "", url: "", targets: "_blank", introduce: "",},

                    {name: "菜鸟正则测试", url: "https://c.runoob.com/front-end/854", targets: "_blank", introduce: "",},
                    {name: "流程图", url: "https://app.diagrams.net/", targets: "_blank", introduce: "",},
                    {name: "cron", url: "https://cron.qqe2.com/", targets: "_blank", introduce: "",},

                    {name: "", url: "", targets: "_blank", introduce: "",},
                    {name: "", url: "", targets: "_blank", introduce: "",},
                    {name: "", url: "", targets: "_blank", introduce: "",},

                    {name: "图片素材", url: "https://pixabay.com/zh/", targets: "_blank", introduce: "",},
                    {name: "wallhaven", url: "https://wallhaven.cc/", targets: "_blank", introduce: "",},
                    {name: "矢量图", url: "https://www.iconfont.cn/", targets: "_blank", introduce: "阿里的矢量图图库",},

                    {name: "FontAwesome", url: "https://fontawesome.com/", targets: "_blank", introduce: "Font Awesome 图标库",},
                    {name: "IconPark", url: "https://iconpark.oceanengine.com/official", targets: "_blank", introduce: "字节跳动官方图标库",},
                    {name: "Remix Icon", url: "http://www.remixicon.com/", targets: "_blank", introduce: "Remix Icon 图标库",},

                    {name: "", url: "", targets: "_blank", introduce: "",},
                    {name: "", url: "", targets: "_blank", introduce: "",},
                    {name: "", url: "", targets: "_blank", introduce: "",},

                    {name: "颜色选取", url: "https://color.uisdc.com/pick.html", targets: "_blank", introduce: "",},
                    {name: "WebGradients", url: "https://webgradients.com/", targets: "_blank", introduce: "css渐变色",},
                    {name: "coolors", url: "https://coolors.co/", targets: "_blank", introduce: "",},

                    {name: "colorhunt", url: "https://colorhunt.co/", targets: "_blank", introduce: "",},
                    {name: "中国色", url: "http://zhongguose.com/", targets: "_blank", introduce: "",},
                    {name: "中国色彩网", url: "https://www.cncolor.cn/", targets: "_blank", introduce: "",},

                    {name: "", url: "", targets: "_blank", introduce: "",},
                    {name: "", url: "", targets: "_blank", introduce: "",},
                    {name: "", url: "", targets: "_blank", introduce: "",},

                    {name: "PPT模板", url: "https://ppt.sotary.com/web/wxapp/index.html", targets: "_blank", introduce: "",},
                    {name: "PDF转换", url: "https://www.pdfpai.com/", targets: "_blank", introduce: "",},
                    {name: "秘塔写作猫", url: "https://xiezuocat.com/#/", targets: "_blank", introduce: "论文降重",},

                    {name: "调音", url: "https://vocalremover.org/ch/", targets: "_blank", introduce: "对声音的一些处理",},
                    {name: "在线PS", url: "https://www.uupoop.com/#/", targets: "_blank", introduce: "",},
                    {name: "aconvert", url: "https://www.aconvert.com/cn/", targets: "_blank", introduce: "多种文件格式相互转换",},

                    {name: "音乐解锁", url: "https://demo.unlock-music.dev/", targets: "_blank", introduce: "",},
                    {name: "在线svg", url: "http://www.zuohaotu.com/svg/", targets: "_blank", introduce: "在线svg制作",},
                    {name: "", url: "", targets: "_blank", introduce: "",},

                    {name: "", url: "", targets: "_blank", introduce: "",},
                    {name: "", url: "", targets: "_blank", introduce: "",},
                    {name: "", url: "", targets: "_blank", introduce: "",},

                    {name: "JetBrains", url: "https://crustwebsites.net/ipfs/bafybeiatyghkzrrtodzt3stm652rkrjxndg4hq2ublfdmifk7plg5k5brq/", targets: "_blank", introduce: "JetBrains的激活码",},
                    {name: "爱激活", url: "https://www.ajihuo.com/", targets: "_blank", introduce: "",},
                    {name: "积微成著", url: "https://www.jiweichengzhu.com/", targets: "_blank", introduce: "",},

                    {name: "异常教程", url: "https://exception.site/", targets: "_blank", introduce: "",},
                    {name: "", url: "", targets: "_blank", introduce: "",},
                    {name: "", url: "", targets: "_blank", introduce: "",},

                    {name: "", url: "", targets: "_blank", introduce: "",},
                    {name: "", url: "", targets: "_blank", introduce: "",},
                    {name: "", url: "", targets: "_blank", introduce: "",},

                    {name: "奇迹秀", url: "https://www.qijishow.com/", targets: "_blank", introduce: "",},
                    {name: "宝塔", url: "https://www.bt.cn/new/index.html", targets: "_blank", introduce: "",},
                    {name: "Rutracker", url: "http://rutracker.in/", targets: "_blank", introduce: "俄罗斯的盗版资源",},

                    {name: "", url: "", targets: "_blank", introduce: "",},
                    {name: "", url: "", targets: "_blank", introduce: "",},
                    {name: "", url: "", targets: "_blank", introduce: "",},

                    {name: "工具1", url: "https://xiaomark.com/tool", targets: "_blank", introduce: "",},
                    {name: "工具2", url: "https://tooltt.com/", targets: "_blank", introduce: "",},
                    {name: "工具3", url: "https://www.toolfk.com/", targets: "_blank", introduce: "",},

                    {name: "工具4", url: "https://www.toolmao.com/#term-102", targets: "_blank", introduce: "",},
                    {name: "工具5", url: "https://ujuji.com/", targets: "_blank", introduce: "",},
                    {name: "", url: "", targets: "_blank", introduce: "",},

                    {name: "", url: "", targets: "_blank", introduce: "",},
                    {name: "", url: "", targets: "_blank", introduce: "",},
                    {name: "", url: "", targets: "_blank", introduce: "",},

                    {name: "tinypng", url: "https://tinypng.com/", targets: "_blank", introduce: "在线压缩图片",},
                    {name: "下载b站视频", url: "https://xbeibeix.com/api/bilibili/", targets: "_blank", introduce: "",},
                    {name: "稿定抠图", url: "https://koutu.gaoding.com/", targets: "_blank", introduce: "在线AI抠图",},

                    {name: "草料", url: "https://cli.im/", targets: "_blank", introduce: "草料二维码生成器",},
                    {name: "扒网站", url: "https://bazhan.wang/", targets: "_blank", introduce: "在线扒站工具",},
                    {name: "", url: "", targets: "_blank", introduce: "",},

                    {name: "", url: "", targets: "_blank", introduce: "",},
                    {name: "", url: "", targets: "_blank", introduce: "",},
                    {name: "", url: "", targets: "_blank", introduce: "",},

                    {name: "评语生成器", url: "https://class.acagrid.com/pc/comment", targets: "_blank", introduce: "",},
                    {name: "字数统计", url: "https://www.eteste.com/", targets: "_blank", introduce: "",},
                    {name: "魔方还原", url: "https://rubiks-cube-solver.com/zh/", targets: "_blank", introduce: "",},


                    {name: "", url: "", targets: "_blank", introduce: "",},
                    {name: "", url: "", targets: "_blank", introduce: "",},
                    {name: "", url: "", targets: "_blank", introduce: "",},

                    {name: "果核", url: "https://www.ghxi.com/", targets: "_blank", introduce: "",},
                    {name: "MSDN", url: "https://msdn.itellyou.cn/", targets: "_blank", introduce: "",},
                    {name: "", url: "", targets: "_blank", introduce: "",},

                    {name: "梯子", url: "https://arr003.network/download/", targets: "_blank", introduce: "",},
                    {name: "梯子", url: "https://ayden.lanzouw.com/iHfh30967kud", targets: "_blank", introduce: "",},
                    {name: "", url: "", targets: "_blank", introduce: "",},

                    {name: "", url: "", targets: "_blank", introduce: "",},
                    {name: "", url: "", targets: "_blank", introduce: "",},
                    {name: "", url: "", targets: "_blank", introduce: "",},

                    {name: "github加速器", url: "https://github.com/dotnetcore/FastGithub", targets: "_blank", introduce: "",},
                    {name: "", url: "", targets: "_blank", introduce: "",},
                    {name: "", url: "", targets: "_blank", introduce: "",},

                    {name: "", url: "", targets: "_blank", introduce: "",},
                    {name: "", url: "", targets: "_blank", introduce: "",},
                    {name: "", url: "", targets: "_blank", introduce: "",},

                    {name: "清华镜像站", url: "https://mirrors.tuna.tsinghua.edu.cn/", targets: "_blank", introduce: "",},
                    {name: "华为镜像站", url: "https://mirrors.huaweicloud.com/home", targets: "_blank", introduce: "",},
                    {name: "腾讯镜像站", url: "https://mirrors.cloud.tencent.com/", targets: "_blank", introduce: "",},

                ],
            },
            {
                title: "娱乐",
                url_body_color: "#414141",
                content: [
                    {name: "爱奇艺", url: "https://www.iqiyi.com/", targets: "_blank", introduce: "",},
                    {name: "腾讯视频", url: "https://v.qq.com/", targets: "_blank", introduce: "",},
                    {name: "优酷视频", url: "https://www.youku.com/", targets: "_blank", introduce: "",},

                    {name: "芒果视频", url: "https://www.mgtv.com/", targets: "_blank", introduce: "",},
                    {name: "咪咕视频", url: "https://www.migu.cn/index.html", targets: "_blank", introduce: "",},
                    {name: "", url: "", targets: "_blank", introduce: "",},

                    {name: "", url: "", targets: "_blank", introduce: "",},
                    {name: "", url: "", targets: "_blank", introduce: "",},
                    {name: "", url: "", targets: "_blank", introduce: "",},

                    {name: "片库", url: "https://www.btnull.org/", targets: "_blank", introduce: "",},
                    {name: "耐看点播", url: "https://www.nkvod.cc", targets: "_blank", introduce: "",},
                    {name: "555电影", url: "http://www.5ying.fun/", targets: "_blank", introduce: "",},

                    {name: "茶杯狐", url: "https://cupfox.app/", targets: "_blank", introduce: "",},
                    {name: "低端影视", url: "https://ddrk.me/tag/recommend/", targets: "_blank", introduce: "",},
                    {name: "奇粹影视", url: "http://www.blssv.com/", targets: "_blank", introduce: "",},

                    {name: "", url: "", targets: "_blank", introduce: "",},
                    {name: "", url: "", targets: "_blank", introduce: "",},
                    {name: "", url: "", targets: "_blank", introduce: "",},

                    {name: "斗鱼", url: "https://www.douyu.com/", targets: "_blank", introduce: "",},
                    {name: "虎牙", url: "https://www.huya.com/", targets: "_blank", introduce: "",},
                    {name: "抖音", url: "https://www.douyin.com/?enter=guide", targets: "_blank", introduce: "",},

                    {name: "", url: "", targets: "_blank", introduce: "",},
                    {name: "", url: "", targets: "_blank", introduce: "",},
                    {name: "", url: "", targets: "_blank", introduce: "",},

                    {name: "网易云音乐", url: "https://music.163.com/", targets: "_blank", introduce: "",},
                    {name: "qq音乐", url: "https://y.qq.com/", targets: "_blank", introduce: "",},
                    {name: "酷狗音乐", url: "https://www.kugou.com/", targets: "_blank", introduce: "",},

                    {name: "", url: "", targets: "_blank", introduce: "",},
                    {name: "", url: "", targets: "_blank", introduce: "",},
                    {name: "", url: "", targets: "_blank", introduce: "",},

                    {name: "漫画", url: "https://www.cnanjie.com/", targets: "_blank", introduce: "",},
                    {name: "", url: "", targets: "_blank", introduce: "",},
                    {name: "", url: "", targets: "_blank", introduce: "",},

                    {name: "", url: "", targets: "_blank", introduce: "",},
                    {name: "", url: "", targets: "_blank", introduce: "",},
                    {name: "", url: "", targets: "_blank", introduce: "",},

                    {name: "打发时间", url: "https://theuselessweb.com/", targets: "_blank", introduce: "一个可以发呆的小网站 会随机蹦出一些奇奇怪怪的网站",},
                    {name: "打字", url: "https://barneyzhao.gitee.io/typing-cn/#/", targets: "_blank", introduce: "",},
                    {name: "字符画", url: "http://patorjk.com/software/taag/#p=display&f=Graffiti&t=welcome%20to%202048%20", targets: "_blank", introduce: "字母生成字符画",},

                    {name: "摸鱼神器", url: "https://fakeupdate.net/", targets: "_blank", introduce: "假装windows升级界面",},
                    {name: "小霸王游戏机", url: "https://www.yikm.net/", targets: "_blank", introduce: "童年的怀旧小游戏",},
                    {name: "游戏机", url: "http://lab.mkblog.cn/FCGames/#/", targets: "_blank", introduce: "童年的怀旧小游戏",},

                    {name: "扫雷", url: "http://www.minesweeper.cn/", targets: "_blank", introduce: "",},
                    {name: "2048", url: "https://2048game.com/", targets: "_blank", introduce: "",},
                    {name: "俄罗斯方块", url: "https://www.goodoldtetris.com/", targets: "_blank", introduce: "",},

                    {name: "表情包制作", url: "https://sorry.xuty.tk/wangjingze/", targets: "_blank", introduce: "童年的怀旧小游戏",},
                    {name: "三阶魔方", url: "https://uploadfiles.nowcoder.com/files/xiaosha/index.html", targets: "_blank", introduce: "",},
                    {name: "", url: "", targets: "_blank", introduce: "",},
                ],
            },
            {
                title: "灵感",
                url_body_color: "#414141",
                content: [
                    {name: "NV资源网", url: "https://noisevip.cn/", targets: "_blank", introduce: "",},
                    {name: "Halo", url: "https://halo.run/", targets: "_blank", introduce: "一款现代化的开源博客/CMS系统",},
                    {name: "hexo", url: "https://hexo.io/zh-cn/", targets: "_blank", introduce: "快速、简洁且高效的博客框架",},

                    {name: "Vue资源精选", url: "http://vue.awesometiny.com/", targets: "_blank", introduce: "前端组件库资源",},
                    {name: "wordpress", url: "https://cn.wordpress.org/", targets: "_blank", introduce: "WordPress是一款能让您建立出色网站、博客或应用程序的开源软件",},
                    {name: "", url: "", targets: "_blank", introduce: "",},

                    {name: "", url: "", targets: "_blank", introduce: "",},
                    {name: "", url: "", targets: "_blank", introduce: "",},
                    {name: "", url: "", targets: "_blank", introduce: "",},

                    {name: "花瓣", url: "https://huaban.com/", targets: "_blank", introduce: "",},
                    {name: "站酷", url: "https://www.zcool.com.cn/", targets: "_blank", introduce: "",},
                    {name: "osrc", url: "https://docs.osrc.com/", targets: "_blank", introduce: "",},

                    {name: "", url: "", targets: "_blank", introduce: "",},
                    {name: "", url: "", targets: "_blank", introduce: "",},
                    {name: "", url: "", targets: "_blank", introduce: "",},

                    {name: "公众号测试", url: "https://mp.weixin.qq.com/debug/cgi-bin/sandbox?t=sandbox/login", targets: "_blank", introduce: "",},
                    {name: "企业微信", url: "https://work.weixin.qq.com/wework_admin/loginpage_wx?redirect_uri=https%3A%2F%2Fwork.weixin.qq.com%2Fwework_admin%2Fframe#index", targets: "_blank", introduce: "",},
                    {name: "微信官网", url: "https://weixin.qq.com/", targets: "_blank", introduce: "",},

                    {name: "微信网页版", url: "https://wx.qq.com/", targets: "_blank", introduce: "",},
                    {name: "", url: "", targets: "_blank", introduce: "",},
                    {name: "", url: "", targets: "_blank", introduce: "",},

                    {name: "", url: "", targets: "_blank", introduce: "",},
                    {name: "", url: "", targets: "_blank", introduce: "",},
                    {name: "", url: "", targets: "_blank", introduce: "",},

                    {name: "hydro", url: "https://hydro.js.org/", targets: "_blank", introduce: "",},
                    {name: "青岛", url: "https://opensource.qduoj.com/#/", targets: "_blank", introduce: "",},
                    {name: "hoj", url: "https://docs.hdoi.cn/", targets: "_blank", introduce: "",},

                    {name: "hustoj", url: "https://zhblue.github.io/hustoj/#/", targets: "_blank", introduce: "",},
                    {name: "", url: "", targets: "_blank", introduce: "",},
                    {name: "", url: "", targets: "_blank", introduce: "",},

                    {name: "", url: "", targets: "_blank", introduce: "",},
                    {name: "", url: "", targets: "_blank", introduce: "",},
                    {name: "", url: "", targets: "_blank", introduce: "",},

                    {name: "若依", url: "http://doc.ruoyi.vip/ruoyi/", targets: "_blank", introduce: "",},
                    {name: "", url: "", targets: "_blank", introduce: "",},
                    {name: "", url: "", targets: "_blank", introduce: "",},

                    {name: "", url: "", targets: "_blank", introduce: "",},
                    {name: "", url: "", targets: "_blank", introduce: "",},
                    {name: "", url: "", targets: "_blank", introduce: "",},

                    {name: "简历", url: "https://www.51386.com/", targets: "_blank", introduce: "简历模板",},
                    {name: "简历", url: "https://www.gerenjianli.com/", targets: "_blank", introduce: "简历模板",},
                    {name: "", url: "", targets: "_blank", introduce: "",},
                ]
            },
        ],

    },


    getters: {},

    mutations: {},

    actions: {},

    modules: {},

})
