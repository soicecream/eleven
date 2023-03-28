# 故障艺术数字时钟
## 页面构成

Html+Sass+Vue+dayjs(第三方Js)+googleFont(第三方字体)+css动画 构成

![6](https://gitee.com/Rt_hum/drawing-bed/raw/master/imgs/1627105106.gif)

## 技术亮点

### Vue方面:

使用了生命周期函数mounted来刷新DOM元素(时间流动),

Vue完成模板解析并把初始的真实DOM放入页面之后(挂在完毕),调用mounted()

```html
<script>
    Vue.config.productionTip = false
    const app = new Vue({
        el: "#clock",
        data() {
            return {
                time: dayjs().format('HH:mm:ss')
            }
        },
        mounted() {
            setInterval(() => {
                this.time = dayjs().format('HH:mm:ss')
            }, 1000);
        },
    })

</script>
```

### dayjs:

一个轻量的处理时间和日期的JavaScript库，本次处理时间显示格式(补0)

```js
dayjs().format('HH:mm:ss')
```

### Sass:

> `sass`是最早的`css`预处理语言，有比`less`更为强大的功能。
>
> `sass`从第三代开始，放弃了缩进式风格，并且完全向下兼容普通的`css`代码，这一代的`sass`也被称为`scss`。

**注意编写的文件格式后缀名为scss**

> @for 指令可以在限制的范围内重复输出格式，每次按要求（变量的值）对输出结果做出变动。
>
> 这个指令包含两种格式：@for $var from <start> through <end>，或者 @for $var from <start> to <end>，区别在于 through 与 to 的含义：
>
> 当使用 through 时，条件范围包含 <start> 与 <end> 的值，而使用 to 时条件范围只包含 <start> 的值不包含 <end> 的值
>
> 另外，$var 可以是任何变量，比如 $i；<start> 和 <end> 必须是整数值。

```scss
@keyframes glitch-1 {
  @for $i from 0 through 20 {
    // 使用 <percentage> 的值可以插值为动画。
    #{percentage($i*(1/20))} {
      clip: rect(random(100) + px, 500px, random(100) + px, 0);
    }
  }
}
```

### flex:

简单的垂直水平居中样式:

```css
body {
  background-color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
```

### 伪元素的使用:

> 伪类和伪元素的根本区别在于：**它们是否创造了新的元素。**
>
> **注意：**
> 伪类只能使用“:”
> 而伪元素**既可以使用“:”，也可以使用“::”**
>
> :after/::after和:before/::before的异同?
>
> :before和::before写法**是等效的**; :after和::after写法**是等效的**
>
> 在H5开发中**建议使用::before/::after比较好**

```css
#clock p {
  color: #fff;
  font-family: "Black Ops One";
  font-size: 6em;
  // 设置字符之间的空白。
  letter-spacing: 2px;
  position: relative;
}
#clock p::before,
#clock p::after {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
}
```

上述代码中使用了父相子绝来对生成的伪元素进行定位, **attr()函数返回所选元素的属性值。**(本次返回刷新的时间)

### css动画:

animation 属性是一个简写属性，用于设置六个动画属性:

| 值                                                                                                 | 描述                                     |
| :------------------------------------------------------------------------------------------------- | :--------------------------------------- |
| *[animation-name](https://www.w3school.com.cn/cssref/pr_animation-name.asp)*                       | 规定需要绑定到选择器的 keyframe 名称。。 |
| *[animation-duration](https://www.w3school.com.cn/cssref/pr_animation-duration.asp)*               | 规定完成动画所花费的时间，以秒或毫秒计。 |
| *[animation-timing-function](https://www.w3school.com.cn/cssref/pr_animation-timing-function.asp)* | 规定动画的速度曲线。                     |
| *[animation-delay](https://www.w3school.com.cn/cssref/pr_animation-delay.asp)*                     | 规定在动画开始之前的延迟。               |
| *[animation-iteration-count](https://www.w3school.com.cn/cssref/pr_animation-iteration-count.asp)* | 规定动画应该播放的次数。                 |
| *[animation-direction](https://www.w3school.com.cn/cssref/pr_animation-direction.asp)*             | 规定是否应该轮流反向播放动画。           |

```scss
#clock p::before {
  // left使数字左右位移
  left: 2px;
  text-shadow: -3px 0 0 #27c0c8;
  animation: glitch-1 2s ease infinite;
}
@keyframes glitch-1 {
  @for $i from 0 through 20 {
    #{percentage($i*(1/20))} {
      clip: rect(random(100) + px, 500px, random(100) + px, 0);
    }
  }
}
```

### CSS clip 裁剪

clip 属性剪裁绝对定位元素。

> 剪裁图像
>
> ```css
> img
>   {
>   position:absolute;
>   clip:rect(0px,60px,200px,0px);
>   }
> ```

这个属性用于定义一个剪裁矩形。对于一个绝对定义元素，在这个矩形内的内容才可见。出了这个剪裁区域的内容会根据 overflow 的值来处理。剪裁区域可能比元素的内容区大，也可能比内容区小。

