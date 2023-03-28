# 数码时钟主页

## 1. 页面构成

HTML+CSS+JS

## 2. 技术亮点

### 2.1 css相关

#### 2.1.1 谷歌字体

网址:https://fonts.google.com/

![image-20210626212134445](https://gitee.com/Rt_hum/drawing-bed/raw/master/imgs/image-20210626212134445.png)

引用样式非常方便

![引用样式非常方便](https://gitee.com/Rt_hum/drawing-bed/raw/master/imgs/image-20210626212326022.png)

#### 2.1.2 radial-gradient

创建了一个图像，该图像是由从原点发出的两种或者多种颜色之间的逐步过渡组成。它的形状可以是圆形（circle）或椭圆形（ellipse）。

```css
background-image: radial-gradient(circle, red, yellow, green);
```

| 值                             | 描述                                                         |
| :----------------------------- | :----------------------------------------------------------- |
| *shape*                        | 确定圆的类型:ellipse (默认): 指定椭圆形的径向渐变。circle ：指定圆形的径向渐变 |
| *size*                         | 定义渐变的大小，可能值：farthest-corner (默认) : 指定径向渐变的半径长度为从圆心到离圆心最远的角closest-side ：指定径向渐变的半径长度为从圆心到离圆心最近的边closest-corner ： 指定径向渐变的半径长度为从圆心到离圆心最近的角farthest-side ：指定径向渐变的半径长度为从圆心到离圆心最远的边 |
| *position*                     | 定义渐变的位置。可能值：**center**（默认）：设置中间为径向渐变圆心的纵坐标值。**top**：设置顶部为径向渐变圆心的纵坐标值。**bottom**：设置底部为径向渐变圆心的纵坐标值。 |
| *start-color, ..., last-color* | 用于指定渐变的起止颜色。                                     |

#### 2.1.3 text-shadow

向文本设置阴影。

| 值         | 描述                                                         |
| :--------- | :----------------------------------------------------------- |
| *h-shadow* | 必需。水平阴影的位置。允许负值。                             |
| *v-shadow* | 必需。垂直阴影的位置。允许负值。                             |
| *blur*     | 可选。模糊的距离。                                           |
| *color*    | 可选。阴影的颜色。参阅 [CSS 颜色值](https://www.w3school.com.cn/cssref/css_colors_legal.asp)。 |

### 2.2 JS相关

#### 2.2.1 箭头函数

```js
// 不足双位补0函数
function fmt(num) {
    if (num < 10) {
        newnum = "0" + num;
        return newnum;
    } else {
        return num;
    }
}

// 等效于

const fmt = (t) => (t < 10 ? `0${t}` : t);
```

#### 2.2.2 setInterval

可按照指定的周期（以毫秒计）来调用函数或计算表达式。

| 参数     | 描述                                                   |
| :------- | :----------------------------------------------------- |
| code     | 必需。要调用的函数或要执行的代码串。                   |
| millisec | 必须。周期性执行或调用 code 之间的时间间隔，以毫秒计。 |

返回值:

一个可以传递给 Window.clearInterval() 从而取消对 code 的周期性执行的值。

