import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {

        text: {


            // 所有背景图片的位置
            all_img_text: "" +
                "https://www.giaott.com/images/2022/08/25/dPToG.jpg\n" +
                "https://www.giaott.com/images/2022/08/25/dPeyw.png\n" +
                "https://www.giaott.com/images/2022/08/25/dPugf.jpg\n" +
                "https://www.giaott.com/images/2022/08/25/dP5Ny.jpg\n" +
                "https://www.giaott.com/images/2022/08/25/dPMHA.jpg\n" +
                "https://www.giaott.com/images/2022/08/25/dPr1w.jpg\n" +
                "https://www.giaott.com/images/2022/08/25/dPKFi.jpg\n" +
                "https://www.giaott.com/images/2022/08/25/dPyr7.jpg\n" +
                "https://www.giaott.com/images/2022/08/25/dPoqm.jpg\n" +
                "https://www.giaott.com/images/2022/08/25/dP01u.jpg\n" +
                "https://www.giaott.com/images/2022/08/25/dPRuM.jpg\n" +
                "https://www.giaott.com/images/2022/08/25/dPw7t.jpg\n" +
                "https://www.giaott.com/images/2022/08/25/dPhcZ.jpg\n" +
                "https://www.giaott.com/images/2022/08/25/dPXu9.jpg\n" +
                "https://www.giaott.com/images/2022/08/25/dPG0V.jpg\n" +
                "https://www.giaott.com/images/2022/08/25/dPFHh.jpg\n" +
                "https://www.giaott.com/images/2022/08/25/dPWG4.jpg\n" +
                "https://www.giaott.com/images/2022/08/25/dP8rW.jpg\n" +
                "https://www.giaott.com/images/2022/08/25/dPDN6.jpg\n" +
                "https://www.giaott.com/images/2022/08/25/dPm5d.jpg\n" +
                "https://www.giaott.com/images/2022/08/25/dPbL5.jpg\n" +
                "https://www.giaott.com/images/2022/08/25/dPg2R.jpg\n" +
                "https://www.giaott.com/images/2022/08/25/dPk0s.jpg\n" +
                "https://www.giaott.com/images/2022/08/25/dP6vp.jpg\n" +
                "https://www.giaott.com/images/2022/08/25/dPncc.jpg\n" +
                "https://www.giaott.com/images/2022/08/25/dP3GQ.jpg\n" +
                "https://www.giaott.com/images/2022/08/25/dPiy1.jpg\n" +
                "https://www.giaott.com/images/2022/08/25/dPSLS.jpg\n" +
                "https://www.giaott.com/images/2022/08/25/dPl50.jpg\n" +
                "https://www.giaott.com/images/2022/08/25/dP9kP.jpg\n" +
                "https://www.giaott.com/images/2022/08/25/dPNHY.jpg",

            // 日志的文本
            Journal_text: "\n" +
                "路飞\n" +
                "战舰由我击沉，你们别碍事\n" +
                "{}{}{}\n" +
                "海贼王\n" +
                "海上的外行人逞什么强 这里可轮不到你们出场 海上是海贼的天下\n" +
                "{}{}{}\n" +
                "小哪吒\n" +
                "我是小妖怪 逍遥又自在 杀人不眨眼\n" +
                "吃人不放盐 一口七八个\n" +
                "肚子要撑破 茅房去拉屎 想起忘带纸\n" +
                "{}{}{}\n" +
                "小哪吒\n" +
                "你放屁，别人的看法都是狗屁。你是谁只有你自己说了才算，这是爹教我的道理\n" +
                "{}{}{}\n" +
                "自信点\n" +
                "镜子很脏的时候 你并不会以为是自己脸脏\n" +
                "那为什么别人说出糟糕的话时 你要觉得糟糕的是自己呢\n" +
                "{}{}{}\n" +
                "哦豁\n" +
                "不管怎么样 吃才是人生真谛 吃好睡美 才是正确的人生态度\n" +
                "{}{}{}\n" +
                "花园宝宝晚安语\n" +
                "小鸟在枝头唱着美妙的歌 小点点们该睡觉喽\n" +
                "晚安小点点 晚安汤姆布利柏 晚安唔西迪西 晚安玛卡巴卡 晚安依古比古 晚安呼哈哈 晚安叮叮车 晚安飞飞鱼 晚安小朋友们\n" +
                "{}{}{}\n" +
                "欸\n" +
                "月亮很亮 亮也没用 没用夜亮\n" +
                "{}{}{}\n" +
                "积极\n" +
                "理想，不知道从什么时候开始，变成了一个会被嘲笑的词。\n" +
                "似乎谈论理想就是贩卖情怀，可理想本来就不应该是功利的。\n" +
                "正如 \"试试\" 这正是对待理想的态度，缓慢而坚定的推进。\n" +
                "无论结果，不问前程。\n" +
                "你有没有一件喜欢到，一定要去做的事。\n" +
                "如果有，那就去试试。\n" +
                "趁我们正年轻，还有资格挥霍；趁我们正年轻，还能浪费点时间。\n" +
                "理想主义不一定能战胜一切。\n" +
                "但你必须上战场，这是我们最重要的资本。\n" +
                "{}{}{}\n" +
                "emo\n" +
                "其实今晚月色真的很美 但我却无法留存...\n" +
                "{}{}{}\n" +
                "冷笑话\n" +
                "你在煎蛋？ 你在放火\n" +
                "{}{}{}\n" +
                "积极\n" +
                "慢慢走 沿途有风景 背后有阳光\n" +
                "{}{}{}\n" +
                "事实\n" +
                "时光会把你雕刻成你应有的样子\n" +
                "{}{}{}\n" +
                "emo\n" +
                "见过，盼过，藏过，想过\n" +
                "{}{}{}\n" +
                "积极\n" +
                "外界的声音都是参考 你不开心就不要参考。\n" +
                "{}{}{}\n" +
                "每日一句\n" +
                "罗翔老师的一段话：\n" +
                "人为什么要过愚人节嘛？人过愚人节不是为了愚弄别人，是接受别人的愚弄，要承认你是愚蠢的，要承认你是有限的。你要时刻提醒你，不要让你的整个一生，成为一场愚人的游戏啊！\n" +
                "{}{}{}\n" +
                "积极\n" +
                "人生路上，很多时候看不清未来，回不到过去。\n" +
                "那么，就别让时间在眺望未来中流逝，莫让年华在回忆过去中沧桑，把握今天，开心享受每一天。\n" +
                "{}{}{}\n" +
                "每日一句\n" +
                "内心再强大一点，就不会听风是雨，知道的事再多一点，就不会人云亦云。\n" +
                "{}{}{}\n" +
                "emm\n" +
                "虽然我长的不行 但如果你说你喜欢我 那我收拾收拾也还行\n" +
                "虽然我经济条件不行 但如果你说你想和我有个家 我拼了命的也得行\n" +
                "虽然我不能保证不惹你生气 但我能保证绝对会忠诚于你 会给你安全感，陪你一起走完余生的路！\n" +
                "这是专门写给你的，也不知道这次你是否能看见\n" +
                "{}{}{}\n" +
                "积极\n" +
                "希望我们都能够做到，不仅仰望星空，心中有梦。且以快乐为舟，活在当下。\n" +
                "{}{}{}\n" +
                "加油\n" +
                "失败的只是事 不是我们人\n" +
                "{}{}{}\n" +
                "加油\n" +
                "不要为了迎合所有人，把自己过得这么累，费尽心思让所有人都开心，你会忘了自己该怎么笑。\n" +
                "{}{}{}\n" +
                "emo\n" +
                "明天和意外永远不知道那个会先到来，珍惜当下\n" +
                "{}{}{}\n" +
                "哲理\n" +
                "怕什么 game over了还可以重头再来\n" +
                "{}{}{}\n" +
                "积极\n" +
                "想得太多会毁了你。若无其事，才是最好的报复。何必向不值得的人证明什么，生活得更好，是为了自己。\n" +
                "{}{}{}\n" +
                "嘿嘿\n" +
                "我理解的三观一致，并不是想法，行为，生活保持一致。\n" +
                "而是你一本正经，也还是愿意听我胡说八道，我素来传统，但依然能欣赏你的特立独行。\n" +
                "{}{}{}\n" +
                "欸\n" +
                "如果我也能成为你害怕失去的人就好了\n" +
                "{}{}{}\n" +
                "事实\n" +
                "我们经常在正确的事情和容易的事情之间做选择\n" +
                "{}{}{}\n" +
                "emo\n" +
                "你现在所以为的明天 我可以的侥幸 永远是你人生中最大的败笔\n" +
                "人生不是游戏 不是game over就可以重头来过的副本 过去了就是过去了 回不来...\n" +
                "{}{}{}\n" +
                "欸\n" +
                "我在路边看到一朵花，想去摘下来拥有，可是想了想，这么好看的花，我应该不配拥有。就像我喜欢你，只敢藏在心里，仅此而已。\n" +
                "{}{}{}\n" +
                "清醒\n" +
                "命运不公 你觉得 能咋办呀 还不是要负重前行\n" +
                "诶 加油吧\n" +
                "{}{}{}\n" +
                "清醒\n" +
                "天赋在于清北，成绩在于努力\n" +
                "{}{}{}\n" +
                "积极\n" +
                "不必借光而行，你我亦是星辰。\n" +
                "{}{}{}\n" +
                "积极\n" +
                "自律 温柔 上进 不说脏话 游戏无瘾 打扮自己 彬彬有礼 成熟稳重 理解关怀 不计较\n" +
                "这是我真在学的\n" +
                "{}{}{}\n" +
                "徐志摩\n" +
                "你见或者不见我 我就在那里 不悲不喜\n" +
                "你念或者不念我 情就在那里 不来不去\n" +
                "你爱或者不爱我 爱就在那里 不增不减\n" +
                "你跟或者不跟 我的手就在你手里 不舍不弃\n" +
                "来我怀里 或者 让我住进你的心里\n" +
                "默默相爱 寂静欢喜\n" +
                "{}{}{}\n" +
                "积极\n" +
                "希望你每个昨天今天明天都很快乐。\n" +
                "{}{}{}\n" +
                "积极\n" +
                "小太阳很忙，小云朵想吃糖。\n" +
                "{}{}{}\n" +
                "emo\n" +
                "我不问花样 你在那即可\n" +
                "我不去赏花 你那样就好\n" +
                "{}{}{}\n" +
                "吴孟达\n" +
                "你患得患失 太在意从前 又太担心将来\n" +
                "有句话说得好 昨天是段历史 明天是个谜团\n" +
                "而今天是天赐的礼物 想珍惜礼物那样珍惜今天\n" +
                "{}{}{}\n" +
                "欸\n" +
                "清欢不渡 白茶不予\n" +
                "{}{}{}\n" +
                "积极\n" +
                "路还长 温柔的事一定会发生。\n",

            // 绕口令的文本
            tongue_twister_text: "\n" +
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
                "郎恋娘来娘念郎，念娘恋娘念郎恋郎，念恋娘郎。",
        },

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
                    {
                        title: "atc Problems",
                        url: "https://kenkoooo.com/atcoder/#/table/",
                        description: "abc的题目统计",
                    },

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
