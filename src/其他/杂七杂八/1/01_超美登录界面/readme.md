# 超美登录界面

## 1. 页面构成

纯 HTML+CSS 样式构成

## 2. 技术亮点

### 2.1 box-shadow:向框添加一个或多个阴影

```css
box-shadow: none;

box-shadow: inset x-offset y-offset blur-radius spread-radius color;
```

| 值           | 描述                                                         |
| :----------- | ------------------------------------------------------------ |
| 阴影类型     | 此参数可选，默认的投影方式是 `外阴影`；如果取其唯一值“inset”,就是将外阴影变成内阴影 |
| X-offset     | 是指 `阴影水平偏移量` ,其值可正可负，正值，则阴影在对象的右边，负值，阴影在对象的左边 |
| Y-offset     | 是指 `阴影的垂直偏移量` ，其值也可以是正负值，正值，阴影在对象的底部，负值时，阴影在对象的顶部 |
| 阴影模糊半径 | 此参数是可选，只能为正值，如果其值为 0 时，表示阴影不具有模糊效果，值越大阴影的边缘就越模糊 |
| 阴影扩展半径 | 此参数可选，其值可为正负值，正值，则整个阴影都延展扩大，反之，则缩小 |
| 阴影颜色     | 此参数可选，不设定任何颜色时，浏览器会取默认色，但各浏览器默认色不一样，特别是在 webkit 内核下的 safari 和 chrome 浏览器将无色，也就是透明，建议不要省略此参数 |

**注: 多层阴影，最内层优先级最高，之后依次降低。使用逗号“，”隔开。**

### 2.2 position: 规定元素的定位类型


| 值       | 描述                                                         |
| -------- | ------------------------------------------------------------ |
| absolute | 生成绝对定位的元素，相对于 static 定位以外的第一个父元素进行定位。元素的位置通过 "left", "top", "right" 以及 "bottom" 属性进行规定。 |
| fixed    | 生成绝对定位的元素，相对于浏览器窗口进行定位。元素的位置通过 "left", "top", "right" 以及 "bottom" 属性进行规定。 |
| relative | 生成相对定位的元素，相对于其正常位置进行定位。因此，"left:20" 会向元素的 LEFT 位置添加 20 像素。 |
| static   | 默认值。没有定位，元素出现在正常的流中（忽略 top, bottom, left, right 或者 z-index 声明）。 |
| inherit  | 规定应该从父元素继承 position 属性的值。                     |

### 2.3 outline:绘制于元素周围的一条线，位于边框边缘的外围
可以设置input元素的边框属性
| 值              | 描述                                                         |
| --------------- | ------------------------------------------------------------ |
| outline-color | 规定边框的颜色。参阅：[outline-color](https://www.runoob.com/cssref/pr-outline-color.html) 中可能的值。 |
| outline-style | 规定边框的样式。参阅：[outline-style](https://www.runoob.com/cssref/pr-outline-style.html) 中可能的值。 |
| outline-width | 规定边框的宽度。参阅：[outline-width](https://www.runoob.com/cssref/pr-outline-width.html) 中可能的值。 |
| inherit         | 规定应该从父元素继承 outline 属性的设置。                    |

### 2.4 required:必需在提交表单之前填写输入字段。 
```html
<form action="demo-form.php">
  Username: <input type="text" name="usrname" required>
  <input type="submit">
</form>
```
required 属性适用于下面的 input 类型：text、search、url、tel、email、password、date pickers、number、checkbox、radio 和 file。

**required 属性是 HTML5 中的新属性。**
