import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {

    // 标题上日期的颜色
    top_header_time_color: "",

    // 是否进入到了追踪纸飞机页面
    paper_plane_vie: false,

    // 页头的显示多页面
    show_show_top_title_vis: false,

    // 拾忆的url
    ShiYi_eleven_url: [
      {
        title: "搜索",
        url_body_color: "#414141",
        content: [
          { name: "百度", url: "https://www.baidu.com/", targets: "_blank", introduce: "百度一下,你就知道", },
          { name: "微博", url: "https://www.weibo.com/", targets: "_blank", introduce: "随时随地发现新鲜事", },
          { name: "知乎", url: "https://www.zhihu.com/", targets: "_blank", introduce: "中文互联网高质量的问答社区和创作者聚集的原创内容平台", },

          { name: "B站", url: "https://www.bilibili.com/", targets: "_blank", introduce: "哔哩哔哩 (゜-゜)つロ 干杯~", },
          { name: "", url: "", targets: "_blank", introduce: "", },
          { name: "", url: "", targets: "_blank", introduce: "", },

          { name: "", url: "", targets: "_blank", introduce: "", },
          { name: "", url: "", targets: "_blank", introduce: "", },
          { name: "", url: "", targets: "_blank", introduce: "", },

          { name: "qq邮箱", url: "https://mail.qq.com/", targets: "_blank", introduce: "", },
          { name: "网易邮箱", url: "https://mail.163.com/", targets: "_blank", introduce: "", },
          { name: "", url: "", targets: "_blank", introduce: "", },

          { name: "", url: "", targets: "_blank", introduce: "", },
          { name: "", url: "", targets: "_blank", introduce: "", },
          { name: "", url: "", targets: "_blank", introduce: "", },

          { name: "CSDN", url: "https://www.csdn.net/", targets: "_blank", introduce: "全球知名中文IT技术交流平台", },
          { name: "博客云", url: "https://www.cnblogs.com/", targets: "_blank", introduce: "一个面向开发者的知识分享社区", },
          { name: "", url: "", targets: "_blank", introduce: "", },

          { name: "", url: "", targets: "_blank", introduce: "", },
          { name: "", url: "", targets: "_blank", introduce: "", },
          { name: "", url: "", targets: "_blank", introduce: "", },

          { name: "逗逼拯救世界", url: "https://www.dbbqb.com/", targets: "_blank", introduce: "表情包搜索", },

        ],
      },
      {
        title: "追剧",
        url_body_color: "#414141",
        content: [
          { name: "爱奇艺", url: "https://www.iqiyi.com/", targets: "_blank", introduce: "", },
          { name: "腾讯视频", url: "https://v.qq.com/", targets: "_blank", introduce: "", },
          { name: "优酷视频", url: "https://www.youku.com/", targets: "_blank", introduce: "", },

          { name: "芒果视频", url: "https://www.mgtv.com/", targets: "_blank", introduce: "", },
          { name: "咪咕视频", url: "https://www.migu.cn/index.html", targets: "_blank", introduce: "", },
          { name: "", url: "", targets: "_blank", introduce: "", },

          { name: "", url: "", targets: "_blank", introduce: "", },
          { name: "", url: "", targets: "_blank", introduce: "", },
          { name: "", url: "", targets: "_blank", introduce: "", },

          { name: "片库", url: "https://www.btnull.org/", targets: "_blank", introduce: "", },
          { name: "耐看点播", url: "https://www.nkvod.cc", targets: "_blank", introduce: "", },
          { name: "555电影", url: "http://www.5ying.fun/", targets: "_blank", introduce: "", },

          { name: "茶杯狐", url: "https://cupfox.app/", targets: "_blank", introduce: "", },
          { name: "低端影视", url: "https://ddrk.me/tag/recommend/", targets: "_blank", introduce: "", },
          { name: "奇粹影视", url: "http://www.blssv.com/", targets: "_blank", introduce: "", },

        ],
      },
      {
        title: "学习",
        url_body_color: "#414141",
        content: [
          { name: "学习通", url: "https://passport2.chaoxing.com/login?fid=&newversion=true&refer=https%3A%2F%2Fi.chaoxing.com", targets: "_blank", introduce: "", },
          { name: "懒人Excel", url: "https://www.lanrenexcel.com/", targets: "_blank", introduce: "学习Excel 我也不知道好还是不好",  },
          { name: "", url: "", targets: "_blank", introduce: "", },

          { name: "", url: "", targets: "_blank", introduce: "", },
          { name: "", url: "", targets: "_blank", introduce: "", },
          { name: "", url: "", targets: "_blank", introduce: "", },

          { name: "教务系统", url: "http://58.244.173.36/netjw/", targets: "_blank", introduce: "", },
          { name: "奇迹秀", url: "https://www.qijishow.com/", targets: "_blank", introduce: "", },
        ],
      },
      {
        title: "工具",
        url_body_color: "#414141",
        content: [
          { name: "百度翻译", url: "http://fanyi.baidu.com/", targets: "_blank", introduce: "", },
          { name: "有道词典", url: "http://fanyi.youdao.com/", targets: "_blank", introduce: "", },
          { name: "谷歌翻译", url: "https://translate.google.cn/", targets: "_blank", introduce: "", },

          { name: "搜狗翻译", url: "https://fanyi.sogou.com/text", targets: "_blank", introduce: "", },
          { name: "DeepL", url: "https://www.deepl.com/translator", targets: "_blank", introduce: "全世界最准确的翻译", },
          { name: "", url: "", targets: "_blank", introduce: "", },

          { name: "", url: "", targets: "_blank", introduce: "", },
          { name: "", url: "", targets: "_blank", introduce: "", },
          { name: "", url: "", targets: "_blank", introduce: "", },

          { name: "PPT模板", url: "https://ppt.sotary.com/web/wxapp/index.html", targets: "_blank", introduce: "", },
          { name: "PDF转换", url: "https://www.pdfpai.com/", targets: "_blank", introduce: "", },
          { name: "调音", url: "https://vocalremover.org/ch/", targets: "_blank", introduce: "对声音的一些处理", },

          { name: "流程图", url: "https://app.diagrams.net/", targets: "_blank", introduce: "", },
          { name: "论文降重", url: "https://xiezuocat.com/#/", targets: "_blank", introduce: "", },
          { name: "矢量图", url: "https://www.iconfont.cn/", targets: "_blank", introduce: "阿里的矢量图图库", },

          { name: "在线PS", url: "https://www.uupoop.com/#/", targets: "_blank", introduce: "", },
          { name: "", url: "", targets: "_blank", introduce: "", },
          { name: "", url: "", targets: "_blank", introduce: "", },

          { name: "", url: "", targets: "_blank", introduce: "", },
          { name: "", url: "", targets: "_blank", introduce: "", },
          { name: "", url: "", targets: "_blank", introduce: "", },

          { name: "工具1", url: "https://xiaomark.com/tool", targets: "_blank", introduce: "", },
          { name: "工具2", url: "https://tooltt.com/", targets: "_blank", introduce: "", },
          { name: "工具3", url: "https://www.toolfk.com/", targets: "_blank", introduce: "", },

          { name: "工具4", url: "https://www.toolmao.com/#term-102", targets: "_blank", introduce: "", },
          { name: "工具5", url: "https://ujuji.com/", targets: "_blank", introduce: "", },
          { name: "", url: "", targets: "_blank", introduce: "", },

          { name: "", url: "", targets: "_blank", introduce: "", },
          { name: "", url: "", targets: "_blank", introduce: "", },
          { name: "", url: "", targets: "_blank", introduce: "", },

          { name: "评语生成器", url: "https://class.acagrid.com/pc/comment", targets: "_blank", introduce: "", },
          { name: "字数统计", url: "https://www.eteste.com/", targets: "_blank", introduce: "", },
          { name: "魔方还原", url: "https://rubiks-cube-solver.com/zh/", targets: "_blank", introduce: "", },
        ],
      },
      {
        title: "娱乐",
        url_body_color: "#414141",
        content: [
          { name: "斗鱼", url: "https://www.douyu.com/", targets: "_blank", introduce: "", },
          { name: "虎牙", url: "https://www.huya.com/", targets: "_blank", introduce: "", },
          { name: "抖音", url: "https://www.douyin.com/?enter=guide", targets: "_blank", introduce: "", },

          { name: "", url: "", targets: "_blank", introduce: "", },
          { name: "", url: "", targets: "_blank", introduce: "", },
          { name: "", url: "", targets: "_blank", introduce: "", },

          { name: "网易云音乐", url: "https://music.163.com/", targets: "_blank", introduce: "", },
          { name: "qq音乐", url: "https://y.qq.com/", targets: "_blank", introduce: "", },
          { name: "酷狗音乐", url: "https://www.kugou.com/", targets: "_blank", introduce: "", },

          { name: "", url: "", targets: "_blank", introduce: "", },
          { name: "", url: "", targets: "_blank", introduce: "", },
          { name: "", url: "", targets: "_blank", introduce: "", },

          { name: "漫画", url: "https://www.cnanjie.com/", targets: "_blank", introduce: "", },
          { name: "", url: "", targets: "_blank", introduce: "", },
          { name: "", url: "", targets: "_blank", introduce: "", },

          { name: "", url: "", targets: "_blank", introduce: "", },
          { name: "", url: "", targets: "_blank", introduce: "", },
          { name: "", url: "", targets: "_blank", introduce: "", },

          { name: "打发时间", url: "https://theuselessweb.com/", targets: "_blank", introduce: "一个可以发呆的小网站 会随机蹦出一些奇奇怪怪的网站", },
          { name: "打字", url: "https://barneyzhao.gitee.io/typing-cn/#/", targets: "_blank", introduce: "", },
          { name: "字符画", url: "http://patorjk.com/software/taag/#p=display&f=Graffiti&t=welcome%20to%202048%20", targets: "_blank", introduce: "字母生成字符画", },

          { name: "摸鱼神器", url: "https://fakeupdate.net/", targets: "_blank", introduce: "假装windows升级界面", },
          { name: "小霸王游戏机", url: "https://www.yikm.net/", targets: "_blank", introduce: "童年的怀旧小游戏", },
          { name: "游戏机", url: "http://lab.mkblog.cn/FCGames/#/", targets: "_blank", introduce: "童年的怀旧小游戏", },

          { name: "扫雷", url: "http://www.minesweeper.cn/", targets: "_blank", introduce: "", },
          { name: "2048", url: "https://2048game.com/", targets: "_blank", introduce: "", },
          { name: "俄罗斯方块", url: "https://www.goodoldtetris.com/", targets: "_blank", introduce: "", },

          { name: "表情包制作", url: "https://sorry.xuty.tk/wangjingze/", targets: "_blank", introduce: "童年的怀旧小游戏", },
          { name: "三阶魔方", url: "https://uploadfiles.nowcoder.com/files/xiaosha/index.html", targets: "_blank", introduce: "", },
          { name: "", url: "", targets: "_blank", introduce: "", },
        ],
      },
      {
        title: "插件",
        url_body_color: "#414141",
        content: [
          { name: "油猴", url: "https://www.tampermonkey.net/", targets: "_blank", introduce: "油猴Tampermonkey", },
          { name: "", url: "", targets: "_blank", introduce: "", },
          { name: "", url: "", targets: "_blank", introduce: "", },

          { name: "视频会员1", url: "https://greasyfork.org/zh-CN/scripts/418804-%E8%A7%A3%E9%94%81b%E7%AB%99%E5%A4%A7%E4%BC%9A%E5%91%98%E7%95%AA%E5%89%A7-b%E7%AB%99%E8%A7%86%E9%A2%91%E8%A7%A3%E6%9E%90%E4%B8%8B%E8%BD%BD-%E5%85%A8%E7%BD%91vip%E8%A7%86%E9%A2%91%E5%85%8D%E8%B4%B9%E7%A0%B4%E8%A7%A3%E5%8E%BB%E5%B9%BF%E5%91%8A-%E5%85%A8%E7%BD%91%E9%9F%B3%E4%B9%90%E7%9B%B4%E6%8E%A5%E4%B8%8B%E8%BD%BD-%E6%B2%B9%E7%AE%A1-facebook%E7%AD%89%E5%9B%BD%E5%A4%96%E8%A7%86%E9%A2%91%E8%A7%A3%E6%9E%90%E4%B8%8B%E8%BD%BD-%E7%BD%91%E7%9B%98%E6%90%9C%E7%B4%A2%E5%BC%95%E6%93%8E%E7%A0%B4%E8%A7%A3%E6%97%A0%E9%99%90%E4%B8%8B%E8%BD%BD%E7%AD%89", targets: "_blank", introduce: "", },
          { name: "视频会员2", url: "https://greasyfork.org/zh-CN/scripts/370634-%E6%87%92%E4%BA%BA%E4%B8%93%E7%94%A8-%E5%85%A8%E7%BD%91vip%E8%A7%86%E9%A2%91%E5%85%8D%E8%B4%B9%E7%A0%B4%E8%A7%A3%E5%8E%BB%E5%B9%BF%E5%91%8A-%E5%85%A8%E7%BD%91%E9%9F%B3%E4%B9%90%E7%9B%B4%E6%8E%A5%E4%B8%8B%E8%BD%BD-%E7%9F%A5%E4%B9%8E%E5%A2%9E%E5%BC%BA-%E7%9F%AD%E8%A7%86%E9%A2%91%E6%97%A0%E6%B0%B4%E5%8D%B0%E4%B8%8B%E8%BD%BD-%E7%99%BE%E5%BA%A6%E7%BD%91%E7%9B%98%E7%9B%B4%E6%8E%A5%E4%B8%8B%E8%BD%BD%E7%AD%89%E5%A4%9A%E5%8A%9F%E8%83%BD%E5%B7%A5%E5%85%B7%E7%AE%B1-%E5%8A%9F%E8%83%BD%E5%8F%AF%E7%8B%AC%E7%AB%8B%E5%BC%80%E5%85%B3-%E9%95%BF%E6%9C%9F%E6%9B%B4%E6%96%B0-%E6%94%BE%E5%BF%83%E4%BD%BF%E7%94%A8-v5-4", targets: "_blank", introduce: "", },
        ]
      },
    ],

    // 水木加贝的url
    eleven_url: [
      {
        title: "搜索",
        url_body_color: "#414141",
        content: [
          { name: "百度", url: "https://www.baidu.com/", targets: "_blank", introduce: "百度一下,你就知道", },
          { name: "微博", url: "https://www.weibo.com/", targets: "_blank", introduce: "随时随地发现新鲜事", },
          { name: "知乎", url: "https://www.zhihu.com/", targets: "_blank", introduce: "中文互联网高质量的问答社区和创作者聚集的原创内容平台", },

          { name: "B站", url: "https://www.bilibili.com/", targets: "_blank", introduce: "哔哩哔哩 (゜-゜)つロ 干杯~", },
          { name: "", url: "", targets: "_blank", introduce: "", },
          { name: "", url: "", targets: "_blank", introduce: "", },

          { name: "", url: "", targets: "_blank", introduce: "", },
          { name: "", url: "", targets: "_blank", introduce: "", },
          { name: "", url: "", targets: "_blank", introduce: "", },

          { name: "CSDN", url: "https://www.csdn.net/", targets: "_blank", introduce: "全球知名中文IT技术交流平台", },
          { name: "博客云", url: "https://www.cnblogs.com/", targets: "_blank", introduce: "一个面向开发者的知识分享社区", },
          { name: "掘金", url: "https://juejin.cn/", targets: "_blank", introduce: "代码不止,掘金不停", },

          { name: "Gitee", url: "https://gitee.com/", targets: "_blank", introduce: "", },
          { name: "GitHub", url: "https://github.com/", targets: "_blank", introduce: "", },
          { name: "菜鸟助手", url: "https://www.runoob.com/", targets: "_blank", introduce: "", },

          { name: "开源中国", url: "https://www.oschina.net/", targets: "_blank", introduce: "", },
          { name: "", url: "", targets: "_blank", introduce: "", },
          { name: "", url: "", targets: "_blank", introduce: "", },

          { name: "", url: "", targets: "_blank", introduce: "", },
          { name: "", url: "", targets: "_blank", introduce: "", },
          { name: "", url: "", targets: "_blank", introduce: "", },

          { name: "qq邮箱", url: "https://mail.qq.com/", targets: "_blank", introduce: "", },
          { name: "网易邮箱", url: "https://mail.163.com/", targets: "_blank", introduce: "", },
          { name: "", url: "", targets: "_blank", introduce: "", },

          { name: "", url: "", targets: "_blank", introduce: "", },
          { name: "", url: "", targets: "_blank", introduce: "", },
          { name: "", url: "", targets: "_blank", introduce: "", },

          { name: "LaTeX公式", url: "https://www.cnblogs.com/1024th/p/11623258.html", targets: "_blank", introduce: "", },
          { name: "在线LaTeX", url: "https://www.latexlive.com/", targets: "_blank", introduce: "", },
          { name: "VPN", url: "https://newvpn.zime.edu.cn/login/login.html", targets: "_blank", introduce: "", },

          { name: "", url: "", targets: "_blank", introduce: "", },
          { name: "", url: "", targets: "_blank", introduce: "", },
          { name: "", url: "", targets: "_blank", introduce: "", },


          { name: "ICPC", url: "https://icpc.global/", targets: "_blank", introduce: "", },
          { name: "CCPC", url: "https://ccpc.io/", targets: "_blank", introduce: "", },
          { name: "", url: "", targets: "_blank", introduce: "", },

          { name: "", url: "", targets: "_blank", introduce: "", },
          { name: "", url: "", targets: "_blank", introduce: "", },
          { name: "", url: "", targets: "_blank", introduce: "", },

          { name: "逗逼拯救世界", url: "https://www.dbbqb.com/", targets: "_blank", introduce: "表情包搜索", },

        ],
      },
      {
        title: "oj",
        url_body_color: "#414141",
        content: [
          { name: "牛客", url: "https://ac.nowcoder.com/acm/home", targets: "_blank", introduce: "", },
          { name: "洛谷", url: "https://www.luogu.com.cn/problem/list", targets: "_blank", introduce: "", },
          { name: "PTA", url: "https://pintia.cn/", targets: "_blank", introduce: "", },

          { name: "力扣", url: "https://leetcode.cn/", targets: "_blank", introduce: "", },
          { name: "AcWing", url: "https://www.acwing.com/", targets: "_blank", introduce: "", },
          { name: "", url: "", targets: "_blank", introduce: "", },

          { name: "", url: "", targets: "_blank", introduce: "", },
          { name: "", url: "", targets: "_blank", introduce: "", },
          { name: "", url: "", targets: "_blank", introduce: "", },

          { name: "蓝桥", url: "https://www.lanqiao.cn/", targets: "_blank", introduce: "", },
          { name: "hdu1", url: "http://acm.hdu.edu.cn", targets: "_blank", introduce: "", },
          { name: "hdu2", url: "http://acm.dingbacode.com", targets: "_blank", introduce: "", },

          { name: "zoj", url: "http://zoj.pintia.cn", targets: "_blank", introduce: "", },
          { name: "poj", url: "http://poj.org/", targets: "_blank", introduce: "", },
          { name: "", url: "", targets: "_blank", introduce: "", },

          { name: "", url: "", targets: "_blank", introduce: "", },
          { name: "", url: "", targets: "_blank", introduce: "", },
          { name: "", url: "", targets: "_blank", introduce: "", },

          { name: "Codeforces", url: "https://codeforces.com/", targets: "_blank", introduce: "", },
          { name: "CodeChef", url: "https://www.codechef.com/", targets: "_blank", introduce: "", },
          { name: "AtCoder", url: "https://www.codechef.com/", targets: "_blank", introduce: "", },

          { name: "VJudge", url: "https://vjudge.net/", targets: "_blank", introduce: "", },
          { name: "做题统计", url: "https://ojhunt.com/", targets: "_blank", introduce: "", },
          { name: "CFTracker", url: "https://cftracker.netlify.app/contests", targets: "_blank", introduce: "", },

          { name: "", url: "", targets: "_blank", introduce: "", },
          { name: "", url: "", targets: "_blank", introduce: "", },
          { name: "", url: "", targets: "_blank", introduce: "", },

          { name: "ZIME2020", url: "https://acm.521207.xyz/", targets: "_blank", introduce: "", },
          { name: "ZIME2021", url: "http://106.53.134.113/loginpage.php", targets: "_blank", introduce: "", },
          { name: "乐清", url: "http://51xinao.com/loginpage.php", targets: "_blank", introduce: "", },

          { name: "信奥", url: "http://ybt.ssoier.cn:8088/index.php", targets: "_blank", introduce: "", },
          { name: "USACO", url: "http://www.usaco.org/index.php", targets: "_blank", introduce: "", },
          { name: "OpenJudge", url: "http://openjudge.cn/", targets: "_blank", introduce: "北大的", },

          { name: "", url: "", targets: "_blank", introduce: "", },
          { name: "", url: "", targets: "_blank", introduce: "", },
          { name: "", url: "", targets: "_blank", introduce: "", },

          { name: "郑州轻工业", url: "http://acm.zzuli.edu.cn/", targets: "_blank", introduce: "", },
          { name: "东方博宜", url: "https://oj.czos.cn/", targets: "_blank", introduce: "", },
          { name: "51nod", url: "https://www.51nod.com/", targets: "_blank", introduce: "", },

          { name: "N诺", url: "https://noobdream.com/DreamJudge/Contest/index_judge/", targets: "_blank", introduce: "", },
          { name: "NOI", url: "http://noi-test.zzstep.com/", targets: "_blank", introduce: "", },
          { name: "吉首", url: "http://www.jsuacm.cn/", targets: "_blank", introduce: "", },

          { name: "台州学院", url: "http://www.tzcoder.cn/acmhome/welcome.do?method=index", targets: "_blank", introduce: "", },
          { name: "Libre OJ", url: "https://loj.ac/", targets: "_blank", introduce: "", },
          { name: "华东师范", url: "https://acm.ecnu.edu.cn/", targets: "_blank", introduce: "", },

          { name: "hydro", url: "https://oj.undefined.moe/", targets: "_blank", introduce: "", },
          { name: "UOJ", url: "https://uoj.ac/", targets: "_blank", introduce: "", },
          { name: "CSG", url: "https://cpc.csgrandeur.cn/", targets: "_blank", introduce: "", },

          { name: "学军", url: "https://xjoi.net/", targets: "_blank", introduce: "", },
          { name: "北京交通", url: "https://citel.bjtu.edu.cn/acm/", targets: "_blank", introduce: "", },
          { name: "福建工程", url: "http://120.78.128.11/index.jsp", targets: "_blank", introduce: "", },

          { name: "北京化工", url: "https://buctcoder.com/", targets: "_blank", introduce: "", },
          { name: "华南理工", url: "https://scut.online/", targets: "_blank", introduce: "", },

        ],
      },
      {
        title: "学习",
        url_body_color: "#414141",
        content: [
          { name: "学习通", url: "https://passport2.chaoxing.com/login?fid=&newversion=true&refer=https%3A%2F%2Fi.chaoxing.com", targets: "_blank", introduce: "", },
          { name: "懒人Excel", url: "https://www.lanrenexcel.com/", targets: "_blank", introduce: "学习Excel 我也不知道好还是不好",  },
          { name: "OI Wiki", url: "https://oi-wiki.org/", targets: "_blank", introduce: "编程知识整合站点", },

          { name: "律法", url: "https://flk.npc.gov.cn/", targets: "_blank", introduce: "国家法律法规", },
          { name: "", url: "", targets: "_blank", introduce: "", },
          { name: "", url: "", targets: "_blank", introduce: "", },

          { name: "", url: "", targets: "_blank", introduce: "", },
          { name: "", url: "", targets: "_blank", introduce: "", },
          { name: "", url: "", targets: "_blank", introduce: "", },

          { name: "可视化编程", url: "https://visualgo.net/zh", targets: "_blank", introduce: "", },
          { name: "希赛", url: "https://wangxiao.xisaiwang.com/tiku2/list-zt132.html", targets: "_blank", introduce: "软考", },
          { name: "W3school", url: "https://www.w3school.com.cn/", targets: "_blank", introduce: "Web", },

          { name: "Lay-ui", url: "https://www.layuiweb.com/", targets: "_blank", introduce: "开源模块化前端UI框架", },
          { name: "QuickRef.ME", url: "https://quickref.me/", targets: "_blank", introduce: "", },
          { name: "ECHARTS", url: "https://echarts.apache.org/zh/index.html", targets: "_blank", introduce: "一个基于 JavaScript 的开源可视化图表库", },

          { name: "", url: "", targets: "_blank", introduce: "", },
          { name: "", url: "", targets: "_blank", introduce: "", },
          { name: "", url: "", targets: "_blank", introduce: "", },

          { name: "Vue.js", url: "https://cn.vuejs.org/index.html", targets: "_blank", introduce: "", },
          { name: "MyBatis-P", url: "https://baomidou.com/", targets: "_blank", introduce: "Spring Boot", },
          { name: "VuePress", url: "https://www.vuepress.cn/", targets: "_blank", introduce: "Vue 驱动的静态网站生成器", },

          { name: "Element-ui2", url: "https://element.eleme.io/#/zh-CN", targets: "_blank", introduce: "基于 Vue2 的 UI 组件库和前端解决方案", },
          { name: "Element-ui3", url: "https://element-plus.gitee.io/zh-CN/", targets: "_blank", introduce: "基于 Vue3 的 UI 组件库和前端解决方案", },
          { name: "Ant Design", url: "https://2x.antdv.com/components/overview-cn", targets: "_blank", introduce: "蚂蚁金服UI组件库", },

          { name: "View Design", url: "https://www.iviewui.com/", targets: "_blank", introduce: "基于 Vue3 的 UI 组件库和前端解决方案", },

          { name: "typecho", url: "http://typecho.org/", targets: "_blank", introduce: "", },
          { name: "Gridea", url: "https://gridea.dev/", targets: "_blank", introduce: "Gridea 是一个静态博客写作客户端，帮助你更容易地构建并管理博客或任何静态站点。", },
          { name: "zblogcn", url: "https://www.zblogcn.com/", targets: "_blank", introduce: "", },

          { name: "hugo", url: "https://gohugo.io/", targets: "_blank", introduce: "Hugo 是最流行的开源静态站点生成器之一", },
        ],
      },
      {
        title: "工具",
        url_body_color: "#414141",
        content: [
          { name: "百度翻译", url: "http://fanyi.baidu.com/", targets: "_blank", introduce: "", },
          { name: "有道词典", url: "http://fanyi.youdao.com/", targets: "_blank", introduce: "", },
          { name: "谷歌翻译", url: "https://translate.google.cn/", targets: "_blank", introduce: "", },

          { name: "搜狗翻译", url: "https://fanyi.sogou.com/text", targets: "_blank", introduce: "", },
          { name: "DeepL", url: "https://www.deepl.com/translator", targets: "_blank", introduce: "全世界最准确的翻译", },
          { name: "可视化正则", url: "https://regexr.com/", targets: "_blank", introduce: "可视化验证正则表达式", },

          { name: "", url: "", targets: "_blank", introduce: "", },
          { name: "", url: "", targets: "_blank", introduce: "", },
          { name: "", url: "", targets: "_blank", introduce: "", },

          { name: "写代码1", url: "https://paste.ubuntu.com/", targets: "_blank", introduce: "", },
          { name: "写代码2", url: "https://ideone.com/", targets: "_blank", introduce: "", },
          { name: "写代码3", url: "https://paste.centos.org/", targets: "_blank", introduce: "", },

          { name: "代码对比1", url: "https://tool.lu/diff/", targets: "_blank", introduce: "", },
          { name: "代码对比2", url: "https://www.diffchecker.com/diff", targets: "_blank", introduce: "", },
          { name: "代码对比3", url: "https://csacademy.com/app/diffing_tool/", targets: "_blank", introduce: "", },

          { name: "数列", url: "http://oeis.org/hints.html", targets: "_blank", introduce: "", },
          { name: "函数画图", url: "https://www.desmos.com/calculator?lang=zh-CN", targets: "_blank", introduce: "", },
          { name: "图论画图", url: "https://csacademy.com/app/graph_editor/", targets: "_blank", introduce: "", },

          { name: "", url: "", targets: "_blank", introduce: "", },
          { name: "", url: "", targets: "_blank", introduce: "", },
          { name: "", url: "", targets: "_blank", introduce: "", },

          { name: "看榜", url: "https://board.xcpcio.com/", targets: "_blank", introduce: "", },
          { name: "在线运行", url: "https://www.dooccn.com/", targets: "_blank", introduce: "", },
          { name: "作业部落", url: "https://www.zybuluo.com/mdeditor#2272516", targets: "_blank", introduce: "", },

          { name: "图床1", url: "https://www.wailian.work/", targets: "_blank", introduce: "", },
          { name: "图床2", url: "https://www.giaott.com/", targets: "_blank", introduce: "", },
          { name: "留言本", url: "https://note.ms/nyco", targets: "_blank", introduce: "", },


          { name: "", url: "", targets: "_blank", introduce: "", },
          { name: "", url: "", targets: "_blank", introduce: "", },
          { name: "", url: "", targets: "_blank", introduce: "", },


          { name: "图片素材", url: "https://pixabay.com/zh/", targets: "_blank", introduce: "", },
          { name: "wallhaven", url: "https://wallhaven.cc/", targets: "_blank",  introduce: "", },
          { name: "矢量图", url: "https://www.iconfont.cn/", targets: "_blank", introduce: "阿里的矢量图图库", },

          { name: "FontAwesome", url: "https://fontawesome.com/", targets: "_blank", introduce: "Font Awesome 图标库", },
          { name: "IconPark", url: "https://iconpark.oceanengine.com/official", targets: "_blank", introduce: "字节跳动官方图标库", },
          { name: "", url: "", targets: "_blank", introduce: "", },

          { name: "菜鸟正则测试", url: "https://c.runoob.com/front-end/854", targets: "_blank", introduce: "", },
          { name: "流程图", url: "https://app.diagrams.net/", targets: "_blank", introduce: "", },
          { name: "", url: "", targets: "_blank", introduce: "", },

          { name: "", url: "", targets: "_blank", introduce: "", },
          { name: "", url: "", targets: "_blank", introduce: "", },
          { name: "", url: "", targets: "_blank", introduce: "", },

          { name: "PPT模板", url: "https://ppt.sotary.com/web/wxapp/index.html", targets: "_blank", introduce: "", },
          { name: "PDF转换", url: "https://www.pdfpai.com/", targets: "_blank", introduce: "", },
          { name: "秘塔写作猫", url: "https://xiezuocat.com/#/", targets: "_blank", introduce: "论文降重", },

          { name: "颜色选取", url: "https://color.uisdc.com/pick.html", targets: "_blank", introduce: "", },
          { name: "调音", url: "https://vocalremover.org/ch/", targets: "_blank", introduce: "对声音的一些处理", },
          { name: "在线PS", url: "https://www.uupoop.com/#/", targets: "_blank", introduce: "", },

          { name: "aconvert", url: "https://www.aconvert.com/cn/", targets: "_blank", introduce: "多种文件格式相互转换", },
          { name: "Iconfont", url: "https://www.iconfont.cn/", targets: "_blank", introduce: "阿里巴巴矢量图标库", },
          { name: "Remix Icon", url: "http://www.remixicon.com/", targets: "_blank", introduce: "Remix Icon 图标库", },

          { name: "WebGradients", url: "https://webgradients.com/", targets: "_blank", introduce: "css渐变色", },
          { name: "", url: "", targets: "_blank", introduce: "", },
          { name: "", url: "", targets: "_blank", introduce: "", },

          { name: "", url: "", targets: "_blank", introduce: "", },
          { name: "", url: "", targets: "_blank", introduce: "", },
          { name: "", url: "", targets: "_blank", introduce: "", },

          { name: "奇迹秀", url: "https://www.qijishow.com/", targets: "_blank", introduce: "", },
          { name: "宝塔", url: "https://www.bt.cn/new/index.html", targets: "_blank", introduce: "", },
          { name: "Rutracker", url: "http://rutracker.in/", targets: "_blank", introduce: "俄罗斯的盗版资源", },

          { name: "", url: "", targets: "_blank", introduce: "", },
          { name: "", url: "", targets: "_blank", introduce: "", },
          { name: "", url: "", targets: "_blank", introduce: "", },

          { name: "工具1", url: "https://xiaomark.com/tool", targets: "_blank", introduce: "", },
          { name: "工具2", url: "https://tooltt.com/", targets: "_blank", introduce: "", },
          { name: "工具3", url: "https://www.toolfk.com/", targets: "_blank", introduce: "", },

          { name: "工具4", url: "https://www.toolmao.com/#term-102", targets: "_blank", introduce: "", },
          { name: "工具5", url: "https://ujuji.com/", targets: "_blank", introduce: "", },
          { name: "", url: "", targets: "_blank", introduce: "", },

          { name: "", url: "", targets: "_blank", introduce: "", },
          { name: "", url: "", targets: "_blank", introduce: "", },
          { name: "", url: "", targets: "_blank", introduce: "", },

          { name: "tinypng", url: "https://tinypng.com/", targets: "_blank", introduce: "在线压缩图片", },
          { name: "下载b站视频", url: "https://xbeibeix.com/api/bilibili/", targets: "_blank", introduce: "", },
          { name: "稿定抠图", url: "https://koutu.gaoding.com/", targets: "_blank", introduce: "在线AI抠图", },

          { name: "草料", url: "https://cli.im/", targets: "_blank", introduce: "草料二维码生成器", },
          { name: "扒网站", url: "https://bazhan.wang/", targets: "_blank", introduce: "在线扒站工具", },
          { name: "", url: "", targets: "_blank", introduce: "", },

          { name: "", url: "", targets: "_blank", introduce: "", },
          { name: "", url: "", targets: "_blank", introduce: "", },
          { name: "", url: "", targets: "_blank", introduce: "", },

          { name: "评语生成器", url: "https://class.acagrid.com/pc/comment", targets: "_blank", introduce: "", },
          { name: "字数统计", url: "https://www.eteste.com/", targets: "_blank", introduce: "", },
          { name: "魔方还原", url: "https://rubiks-cube-solver.com/zh/", targets: "_blank", introduce: "", },


          { name: "", url: "", targets: "_blank", introduce: "", },
          { name: "", url: "", targets: "_blank", introduce: "", },
          { name: "", url: "", targets: "_blank", introduce: "", },

          { name: "果核", url: "https://www.ghxi.com/", targets: "_blank", introduce: "", },
          { name: "MSDN", url: "https://msdn.itellyou.cn/", targets: "_blank", introduce: "", },
          { name: "梯子", url: "https://arr003.network/download/", targets: "_blank", introduce: "", },

          { name: "", url: "", targets: "_blank", introduce: "", },
          { name: "", url: "", targets: "_blank", introduce: "", },
          { name: "", url: "", targets: "_blank", introduce: "", },

          { name: "清华镜像站", url: "https://mirrors.tuna.tsinghua.edu.cn/", targets: "_blank", introduce: "", },
          { name: "华为镜像站", url: "https://mirrors.huaweicloud.com/home", targets: "_blank", introduce: "", },
          { name: "腾讯镜像站", url: "https://mirrors.cloud.tencent.com/", targets: "_blank", introduce: "", },

        ],
      },
      {
        title: "娱乐",
        url_body_color: "#414141",
        content: [
          { name: "爱奇艺", url: "https://www.iqiyi.com/", targets: "_blank", introduce: "", },
          { name: "腾讯视频", url: "https://v.qq.com/", targets: "_blank", introduce: "", },
          { name: "优酷视频", url: "https://www.youku.com/", targets: "_blank", introduce: "", },

          { name: "芒果视频", url: "https://www.mgtv.com/", targets: "_blank", introduce: "", },
          { name: "咪咕视频", url: "https://www.migu.cn/index.html", targets: "_blank", introduce: "", },
          { name: "", url: "", targets: "_blank", introduce: "", },

          { name: "", url: "", targets: "_blank", introduce: "", },
          { name: "", url: "", targets: "_blank", introduce: "", },
          { name: "", url: "", targets: "_blank", introduce: "", },

          { name: "片库", url: "https://www.btnull.org/", targets: "_blank", introduce: "", },
          { name: "耐看点播", url: "https://www.nkvod.cc", targets: "_blank", introduce: "", },
          { name: "555电影", url: "http://www.5ying.fun/", targets: "_blank", introduce: "", },

          { name: "茶杯狐", url: "https://cupfox.app/", targets: "_blank", introduce: "", },
          { name: "低端影视", url: "https://ddrk.me/tag/recommend/", targets: "_blank", introduce: "", },
          { name: "奇粹影视", url: "http://www.blssv.com/", targets: "_blank", introduce: "", },

          { name: "", url: "", targets: "_blank", introduce: "", },
          { name: "", url: "", targets: "_blank", introduce: "", },
          { name: "", url: "", targets: "_blank", introduce: "", },

          { name: "斗鱼", url: "https://www.douyu.com/", targets: "_blank", introduce: "", },
          { name: "虎牙", url: "https://www.huya.com/", targets: "_blank", introduce: "", },
          { name: "抖音", url: "https://www.douyin.com/?enter=guide", targets: "_blank", introduce: "", },

          { name: "", url: "", targets: "_blank", introduce: "", },
          { name: "", url: "", targets: "_blank", introduce: "", },
          { name: "", url: "", targets: "_blank", introduce: "", },

          { name: "网易云音乐", url: "https://music.163.com/", targets: "_blank", introduce: "", },
          { name: "qq音乐", url: "https://y.qq.com/", targets: "_blank", introduce: "", },
          { name: "酷狗音乐", url: "https://www.kugou.com/", targets: "_blank", introduce: "", },

          { name: "", url: "", targets: "_blank", introduce: "", },
          { name: "", url: "", targets: "_blank", introduce: "", },
          { name: "", url: "", targets: "_blank", introduce: "", },

          { name: "漫画", url: "https://www.cnanjie.com/", targets: "_blank", introduce: "", },
          { name: "", url: "", targets: "_blank", introduce: "", },
          { name: "", url: "", targets: "_blank", introduce: "", },

          { name: "", url: "", targets: "_blank", introduce: "", },
          { name: "", url: "", targets: "_blank", introduce: "", },
          { name: "", url: "", targets: "_blank", introduce: "", },

          { name: "打发时间", url: "https://theuselessweb.com/", targets: "_blank", introduce: "一个可以发呆的小网站 会随机蹦出一些奇奇怪怪的网站", },
          { name: "打字", url: "https://barneyzhao.gitee.io/typing-cn/#/", targets: "_blank", introduce: "", },
          { name: "字符画", url: "http://patorjk.com/software/taag/#p=display&f=Graffiti&t=welcome%20to%202048%20", targets: "_blank", introduce: "字母生成字符画", },

          { name: "摸鱼神器", url: "https://fakeupdate.net/", targets: "_blank", introduce: "假装windows升级界面", },
          { name: "小霸王游戏机", url: "https://www.yikm.net/", targets: "_blank", introduce: "童年的怀旧小游戏", },
          { name: "游戏机", url: "http://lab.mkblog.cn/FCGames/#/", targets: "_blank", introduce: "童年的怀旧小游戏", },

          { name: "扫雷", url: "http://www.minesweeper.cn/", targets: "_blank", introduce: "", },
          { name: "2048", url: "https://2048game.com/", targets: "_blank", introduce: "", },
          { name: "俄罗斯方块", url: "https://www.goodoldtetris.com/", targets: "_blank", introduce: "", },

          {name: "表情包制作", url: "https://sorry.xuty.tk/wangjingze/", targets: "_blank", introduce: "童年的怀旧小游戏", },
          { name: "三阶魔方", url: "https://uploadfiles.nowcoder.com/files/xiaosha/index.html", targets: "_blank", introduce: "", },
          { name: "", url: "", targets: "_blank", introduce: "", },
        ],
      },
      {
        title: "灵感",
        url_body_color: "#414141",
        content: [
          { name: "NV资源网", url: "https://noisevip.cn/", targets: "_blank", introduce: "", },
          { name: "Halo", url: "https://halo.run/", targets: "_blank", introduce: "一款现代化的开源博客/CMS系统", },
          { name: "hexo", url: "https://hexo.io/zh-cn/", targets: "_blank", introduce: "快速、简洁且高效的博客框架", },

          { name: "Vue资源精选", url: "http://vue.awesometiny.com/", targets: "_blank", introduce: "前端组件库资源", },
          { name: "wordpress", url: "https://cn.wordpress.org/", targets: "_blank", introduce: "WordPress是一款能让您建立出色网站、博客或应用程序的开源软件", },


        ]
      },
    ],

    //所有text
    text: {
      background_img_text:
          "https://www.giaott.com/images/2022/07/01/a701.jpg\n" +
          "https://www.giaott.com/images/2022/07/01/ajHR.png\n" +
          "https://www.giaott.com/images/2022/07/01/a2r5.jpg\n" +
          "https://www.giaott.com/images/2022/07/01/a116.jpg\n" +
          "https://www.giaott.com/images/2022/07/01/VtcV.jpg\n" +
          "https://www.giaott.com/images/2022/07/01/VY79.jpg\n" +
          "https://www.giaott.com/images/2022/07/01/VuN4.jpg\n" +
          "https://www.giaott.com/images/2022/07/01/VS4u.jpg\n" +
          "https://www.giaott.com/images/2022/07/01/V9uZ.jpg\n" +
          "https://www.giaott.com/images/2022/07/01/VkFG.jpg\n" +
          "https://www.giaott.com/images/2022/07/01/VNpt.jpg\n" +
          "https://www.giaott.com/images/2022/07/01/VJ1y.jpg\n" +
          "https://www.giaott.com/images/2022/07/01/V3nm.jpg\n" +
          "https://www.giaott.com/images/2022/07/01/VioA.jpg\n" +
          "https://www.giaott.com/images/2022/07/01/Vg7M.jpg\n" +
          "https://www.giaott.com/images/2022/07/01/VnJi.jpg\n" +
          "https://www.giaott.com/images/2022/07/01/Vmq7.jpg\n" +
          "https://www.giaott.com/images/2022/07/01/Vb4w.jpg\n" +
          "https://www.giaott.com/images/2022/07/01/VDlN.jpg\n" +
          "https://www.giaott.com/images/2022/07/01/VGFf.jpg\n" +
          "https://www.giaott.com/images/2022/07/01/VFp0.jpg\n" +
          "https://www.giaott.com/images/2022/07/01/VXzS.jpg\n" +
          "https://www.giaott.com/images/2022/07/01/VWnP.jpg\n" +
          "https://www.giaott.com/images/2022/07/01/V8Ms.jpg\n" +
          "https://www.giaott.com/images/2022/07/01/V0jY.jpg\n" +
          "https://www.giaott.com/images/2022/07/01/VhJp.jpg\n" +
          "https://www.giaott.com/images/2022/07/01/VThQ.jpg\n" +
          "https://www.giaott.com/images/2022/07/01/Vw41.jpg\n" +
          "https://www.giaott.com/images/2022/07/01/V5lR.jpg\n" +
          "https://www.giaott.com/images/2022/07/01/Vosc.jpg",

      tongue_twister_text:
          "葡萄皮儿\n" +
          "吃葡萄不吐葡萄皮儿，不吃葡萄倒吐葡萄皮儿\n" +
          "{}{}{}\n" +
          "八百标兵\n" +
          "八百标兵奔北坡，炮兵并排北边跑。\n" +
          "炮兵怕把标兵碰，标兵怕碰炮兵炮。\n" +
          "{}{}{}\n" +
          "炮兵和步兵\n" +
          "炮兵攻打八面坡，炮兵排排炮弹齐发射。\n" +
          "步兵逼近八面坡，歼敌八千八百八十多。\n" +
          "{}{}{}\n" +
          "黑化肥\n" +
          "黑化肥发灰，灰化肥发黑。\n" +
          "黑化肥发灰会挥发，灰化肥挥发会发黑。\n" +
          "黑化肥挥发发灰会花飞，灰化肥挥发发黑会飞花。\n" +
          "黑灰化肥会挥发发灰黑讳为花飞，灰黑化肥会挥发发黑灰为讳飞花。\n" +
          "黑灰化肥灰会挥发发灰黑讳为黑灰花会飞，灰黑化肥黑会挥发发黑灰为讳飞花化为灰。\n" +
          "黑化黑灰化肥灰会挥发发灰黑讳为黑灰花会回飞，灰化灰黑化肥灰会挥发发黑灰为讳飞花回化为灰。\n" +
          "{}{}{}\n" +
          "缝凤凰\n" +
          "粉红女发奋缝飞凤，女粉红反缝方法繁。\n" +
          "飞凤仿佛发放芬芳，方法非凡反复防范。\n" +
          "反缝方法仿佛飞凤，反复翻缝飞凤奋发。\n" +
          "{}{}{}\n" +
          "四和十\n" +
          "四是四，十是十；\n" +
          "十四是十四，四十是四十；\n" +
          "别把四十说“细席”，别把十四说“适时”。\n" +
          "要想说好四和十，全靠舌头和牙齿。\n" +
          "要想说对四，舌头碰牙齿；\n" +
          "要想说对十，舌头别伸直。\n" +
          "认真学，常练习，十四、四十、四十四。\n" +
          "{}{}{}\n" +
          "板凳与扁担\n" +
          "板凳宽，扁担长。\n" +
          "扁担没有板凳宽，\n" +
          "板凳没有扁担长。\n" +
          "扁担要绑在板凳上，\n" +
          "板凳不让扁担绑在板凳上，\n" +
          "扁担偏要扁担绑在板凳上。\n" +
          "板凳偏不让扁担绑在板凳上。\n" +
          "你说最后扁担到底绑没绑在板凳上。\n" +
          "{}{}{}\n" +
          "喇嘛和哑巴\n" +
          "打南边来了个喇嘛，手里提拉着五斤鳎目。\n" +
          "打北边来了个哑巴，腰里别着个喇叭。\n" +
          "南边提拉着鳎目的喇嘛要拿鳎目换北边别喇叭哑巴的喇叭。\n" +
          "哑巴不愿意拿喇叭换喇嘛的鳎目，喇嘛非要换别喇叭哑巴的喇叭。\n" +
          "喇嘛抡起鳎目抽了别喇叭哑巴一鳎目，哑巴摘下喇叭打了提拉着鳎目的喇嘛一喇叭。\n" +
          "也不知是提拉着鳎目的喇嘛抽了别喇叭哑巴一鳎目，还是别喇叭哑巴打了提拉着鳎目的喇嘛一喇叭。\n" +
          "喇嘛回家炖鳎目，哑巴嘀嘀哒哒吹喇叭。\n" +
          "{}{}{}\n" +
          "数枣\n" +
          "出东门，过大桥，大桥底下一树枣。\n" +
          "拿着杆子去打枣，青的多，红的少。\n" +
          "一个枣，两个枣，三个枣，四个枣，五个枣，六个枣，七个枣，八个枣，九个枣，十个枣。\n" +
          "十个枣，九个枣，八个枣，七个枣，六个枣，五个枣，四个枣，三个枣，两个枣，一个枣。\n" +
          "这是一个绕口令，一口气说完才算好。\n" +
          "{}{}{}\n" +
          "三月三，小三去登山\n" +
          "三月三，小三去登山。\n" +
          "上山又下山，下山又上山。\n" +
          "登了三次山，跑了三里三。\n" +
          "出了一身汗，湿了三件衫。\n" +
          "小三山上大声喊：“离天只有三尺三！”\n" +
          "{}{}{}\n" +
          "炖冻豆腐\n" +
          "会炖我的炖冻豆腐，来炖我的炖冻豆腐。\n" +
          "不会炖我的炖冻豆腐，就别炖我的炖冻豆腐。\n" +
          "要是混充会炖我的炖冻豆腐，\n" +
          "炖坏了我的炖冻豆腐，\n" +
          "就吃不成我的炖冻豆腐。\n" +
          "{}{}{}\n" +
          "白石塔\n" +
          "白石搭白塔，\n" +
          "白塔白石搭，\n" +
          "搭好白石塔，\n" +
          "石塔白又大。\n" +
          "{}{}{}\n" +
          "狮子和柿子\n" +
          "山前有四十四棵死涩柿子树，山后有四十四只石狮子。\n" +
          "山前的四十四棵死涩柿子树，涩死了山后的四十四只石狮子。\n" +
          "山后的四十四只石狮子，咬死了山前的四十四棵死涩柿子树。\n" +
          "不知是山前的四十四棵死涩柿子树涩死了山后的四十四只石狮子。\n" +
          "还是山后的四十四只石狮子咬死了山前的四十四棵死涩柿子树。\n" +
          "{}{}{}\n" +
          "数狮子\n" +
          "公园有四排石狮子，\n" +
          "每排是十四只大石狮子，\n" +
          "每只大石狮子背上是一只小石狮子，\n" +
          "每只大石狮子脚边是四只小石狮子。\n" +
          "史老师领四十四个学生去数石狮子。\n" +
          "你说共数出多少只大石狮子和多少只小石狮子？\n" +
          "{}{}{}\n" +
          "六十六头牛\n" +
          "六十六岁的陆老头，盖了六十六间楼，买了六十六篓油，养了六十六头牛，栽了六十六棵垂杨柳。\n" +
          "六十六篓油，堆在六十六间楼；六十六头牛，扣在六十六棵垂杨柳。\n" +
          "忽然一阵狂风起，吹倒了六十六间楼，翻倒了六十六篓油，折断了六十六棵垂杨柳，砸死了六十六头牛，急煞了六十六岁的陆老头。\n" +
          "{}{}{}\n" +
          "牛郎恋刘娘\n" +
          "牛郎恋刘娘，刘娘念牛郎。\n" +
          "牛郎年年恋刘娘，刘娘连连念牛郎。\n" +
          "牛郎恋刘娘，刘娘念牛郎，郎恋娘来娘念郎。\n" +
          "郎恋娘来娘念郎，念娘恋娘念郎恋郎，念恋娘郎。"
      ,

      Journal_text:
          "emo\n" +
          "其实今晚月色真的很美 但我却无法留存...\n" +
          "{}{}{}\n" +
          "emo\n" +
          "时间好快  但我却什么也抓不住...\n" +
          "{}{}{}\n" +
          "emo\n" +
          "明明知道这样不好  为啥你还要这样呢?\n" +
          "欸  这该死的惰性\n" +
          "{}{}{}\n" +
          "emo\n" +
          "见过，盼过，藏过，想过\n" +
          "{}{}{}\n" +
          "无聊\n" +
          "阿巴阿巴阿巴\n" +
          "{}{}{}\n" +
          "清醒\n" +
          "罗翔老师的一段话：\n" +
          "人为什么要过愚人节嘛？人过愚人节不是为了愚弄别人，是接受别人的愚弄，要承认你是愚蠢的，要承认你是有限的。你要时刻提醒你，不要让你的整个一生，成为一场愚人的游戏啊！\n" +
          "{}{}{}\n" +
          "emo\n" +
          "明天和意外永远不知道那个会先到来，珍惜当下\n" +
          "{}{}{}\n" +
          "emo\n" +
          "人啊  总得要脚踏实步   做该做的事啊     那些不切实际的事  还是算了吧    爱咋样咋样吧\n" +
          "{}{}{}\n" +
          "emo\n" +
          "你现在所以为的明天 我可以的侥幸 永远是你人生中最大的败笔\n" +
          "人生不是游戏 不是game over就可以重头来过的副本 过去了就是过去了 回不来...\n" +
          "{}{}{}\n" +
          "清醒\n" +
          "命运不公 你觉得 能咋办呀 还不是要负重前行 诶 加油吧\n" +
          "{}{}{}\n" +
          "清醒\n" +
          "天赋在于清北，成绩在于努力\n" +
          "{}{}{}\n" +
          "清醒\n" +
          "自律 温柔 上进 不说脏话 游戏无瘾 打扮自己 彬彬有礼 成熟稳重 理解关怀 不计较\n" +
          "这是我真在学的\n"
      ,
    },


  },


  getters: {

  },
  mutations: {

  },
  actions: {

  },
  modules: {

  }
})
