
## 1. overflow-x 
裁剪 div 元素中内容的左/右边缘 - 如果溢出元素的内容区域的话
| 值         | 描述                                   |
| :--------- | :------------------------------------- |
| visible    | 不裁剪内容，可能会显示在内容框之外。   |
| hidden     | 裁剪内容 - 不提供滚动机制。            |
| scroll     | 裁剪内容 - 提供滚动机制。              |
| auto       | 如果溢出框，则应该提供滚动机制。       |
| no-display | 如果内容不适合内容框，则删除整个框。   |
| no-content | 如果内容不适合内容框，则隐藏整个内容。 |

## 2. box-sizing 
定义了浏览器该如何计算一个元素的总宽度和总高度。
| 值          | 描述                                                         |
| :---------- | :----------------------------------------------------------- |
| content-box | 是默认值。如果你设置一个元素的宽为100px，那么这个元素的内容区会有100px 宽，并且任何边框和内边距的宽度都会被增加到最后绘制出来的元素宽度中。 |
| border-box  | 告诉浏览器：你想要设置的边框和内边距的值是包含在width内的。也就是说，如果你将一个元素的width设为100px，那么这100px会包含它的border和padding，内容区的实际宽度是width减去(border + padding)的值。大多数情况下，这使得我们更容易地设定一个元素的宽高。 |

## 3. font-weight
设置文本的粗细。
| 值                      | 描述                                                        |
| :---------------------- | :---------------------------------------------------------- |
| normal                  | 默认值。定义标准的字符。                                    |
| bold                    | 定义粗体字符。                                              |
| bolder                  | 定义更粗的字符。                                            |
| lighter                 | 定义更细的字符。                                            |
| 100\|200\|...\|800\|900 | 定义由粗到细的字符。400 等同于 normal，而 700 等同于 bold。 |

## 4. linear-gradient
创建一个表示两种或多种颜色线性渐变的图片

**注:** 由于`gradient`数据类型系`image`的子数据类型，`gradient`只能被用于`image`可以使用的地方。因此，`linear-gradient()` 并不适用于`background-color`以及类似的使用 `color`数据类型的属性中。

```css
.grad {
  background-color: #F07575; /* 不支持渐变的浏览器回退方案 */
  background-image: -webkit-linear-gradient(top, hsl(0, 80%, 70%), #bada55); /* 支持 Chrome 25 and Safari 6, iOS 6.1, Android 4.3 */
  background-image:    -moz-linear-gradient(top, hsl(0, 80%, 70%), #bada55); /* 支持 Firefox (3.6 to 15) */
  background-image:      -o-linear-gradient(top, hsl(0, 80%, 70%), #bada55); /* 支持旧 Opera (11.1 to 12.0) */
  background-image:         linear-gradient(to bottom, hsl(0, 80%, 70%), #bada55); /* 标准语法; 需要最新版本 */
}
```