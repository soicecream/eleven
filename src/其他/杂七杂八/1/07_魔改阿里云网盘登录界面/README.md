# 魔改动效阿里云盘登录界面

## 1. 页面构成

HTML+CSS+JS

![成品图](https://gitee.com/Rt_hum/drawing-bed/raw/master/imgs/6.gif)

## 2. 技术亮点

### 2.1 CSS相关

#### 2.1.1 label来实现radio和checkbox的样式

**html部分:**

```html
<!-- 选择登录方式部分 -->
<div class="login-header" onclick="checkRadio()">
    <input type="radio" name="login-opt" id="message" checked="checked" />
    <label for="message" class="m-btn">短信登录</label>
    <input type="radio" name="login-opt" id="username" />
    <label for="username" class="u-btn">账号登录</label>
    <input type="radio" name="login-opt" id="qrcode" />
    <label for="qrcode" class="q-btn">扫码登录</label>
</div>
```

**css部分:**

```css
/* 登录头部单选框样式 */
.login-header input[type="radio"] {
  display: none;
}
/* 登录头部label样式 */
.login-header label {
  color: rgba(37, 38, 43, 0.36);
  background: #f5f5f6;
  font-size: 18px;
  flex: 1;
  padding: 14px 16px;
  line-height: 28px;
}
```

#### 2.1.2 checked伪类选择器实现选中效果

**html部分:**

```html
<!-- 选择登录方式部分 -->
<div class="login-header" onclick="checkRadio()">
    <input type="radio" name="login-opt" id="message" checked="checked" />
    <label for="message" class="m-btn">短信登录</label>
    <input type="radio" name="login-opt" id="username" />
    <label for="username" class="u-btn">账号登录</label>
    <input type="radio" name="login-opt" id="qrcode" />
    <label for="qrcode" class="q-btn">扫码登录</label>
</div>
```

**css部分:**

```css
/* 登录头部label选中状态样式 */
#message:checked + .m-btn,
#username:checked + .u-btn,
#qrcode:checked + .q-btn {
  background-color: #fff;
  color: #25262b;
  /* 默认指针,官网样式(意义不明) */
  cursor: default;
}
```

#### 2.1.3 ::after伪元素+border调整实现选中的勾勾

**html部分:**

```html
<form action="" class="m-form">
    ...
	<input type="checkbox" name="" id="sure" />
	<label for="sure" class="tobesure"><p>未注册手机登录时会自动创建新账户,我已阅读并同意<a href="#">服务协议</a>和<a href="#">隐私条款</a></p>
	</label>
    ...
</form>
```

**css部分:**

```css
/* 登陆协议复选框小勾 */
.m-form .tobesure::after {
  content: "";
  position: absolute;
  border-left: 2px solid #fff;
  border-bottom: 2px solid #fff;
  width: 6px;
  height: 3px;
  /* 先定位,再旋转 */
  transform: translate(-50%, -50%) rotate(-45deg);
  top: 50%;
  left: 50%;
}
```

#### 2.1.4 纯CSS实现勾选同意后登录键变为可点, :not(:checked)

**html部分:**

```html
<form action="" class="m-form">
    ...
    <input type="checkbox" name="" id="sure" />
    <label for="sure" class="tobesure"><p>
        未注册手机登录时会自动创建新账户,我已阅读并同意<a href="#">服务协议</a>和<a href="#">隐私条款</a></p>
    </label>
    <button class="login-btn">登录</button>
</form>
```

**css部分:**

```css
/* 登陆协议复选框与登陆按钮联动 */
#sure:not(:checked) ~ .login-btn {
  opacity: 0.5;
  cursor: not-allowed;
}
```

#### 2.1.5 后续兄弟选择器 ~ 

实例：（选取h1元素后的所有，相邻的兄弟元素h2元素）

**HTML部分:**

```html
<div>
    <h1>ssssssssssssssss</h1>
    <h2>emmmmmmmmmm……</h2>
    <p>wwwwwwwwwwww</p>
    <h2>23333333333333333……</h2>
<div>
```

**CSS部分:**

```css
h1~h2{   background: #aaf;   }
```

结果显示:

![img](https://gitee.com/Rt_hum/drawing-bed/raw/master/imgs/1748092-20191006201901628-1300571865.png)

#### 2.1.6 css滑动动效

**html部分:**

```html
<div class="login-body">
    <div id="form-bar">
        <!-- 短信登录表单 -->
        <form action="" class="m-form">
            ...
        </form>
        <!-- 账号登录表单 -->
        <form action="" class="u-form">
            ...
        </form>
        <!-- 扫码登录表单 -->
        <form action="" class="q-form">
            ...
        </form>
    </div>
</div>
```

**css部分:**

```css
/* 表单主体部分 */
.login-body {
  background-color: #fff;
}

/* 设置3个表单布局 */
.login-body #form-bar {
  display: flex;
  /* css3 滑动效果动画 */
  transition: transform 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

/* 登录表单部分 */
.login-body form {
  padding: 22px;
  position: relative;
  /* 设置shrlink 为0 避免子元素挤占空间 */
  flex-shrink: 0;
  width: 100%;
}
```

#### 2.1.7 父元素overflow: hidden;来在子元素上剪出形状

**html部分:**

```html
<div class="login-app">
      <!-- 选择登录方式部分 -->
      <div class="login-header" onclick="checkRadio()">
        ...
      </div>
      <!-- 登录表单部分 -->
      <div class="login-body">
        <div id="form-bar">
          <!-- 短信登录表单 -->
          <form action="" class="m-form">
            ...
          </form>
          <!-- 账号登录表单 -->
          <form action="" class="u-form">
            ...
          </form>
          <!-- 扫码登录表单 -->
          <form action="" class="q-form">
            ...
          </form>
        </div>
      </div>
    </div>
```

**css部分:**

```css
/* 登录外边框 */
.login-app {
  width: 348px;
  /* 修改外边框圆角 */
  border-radius: 12px;
  /* 子元素超出部分隐藏 */
  overflow: hidden;
  margin-bottom: 40px;
}
```

### 2.2 JS相关

#### 2.2.1 js获取input:radio的数据

**html部分:**

```html
<body>
	...
    <div class="login-header" onclick="checkRadio()">
        <input type="radio" name="login-opt" id="message" checked="checked" />
        <label for="message" class="m-btn">短信登录</label>
        <input type="radio" name="login-opt" id="username" />
        <label for="username" class="u-btn">账号登录</label>
        <input type="radio" name="login-opt" id="qrcode" />
        <label for="qrcode" class="q-btn">扫码登录</label>
    </div>
    ...
    <div class="login-body">
        <div id="form-bar">
            <!-- 短信登录表单 -->
            <form action="" class="m-form">
                ...
            </form>
            <!-- 账号登录表单 -->
            <form action="" class="u-form">
                ...
            </form>
            <!-- 扫码登录表单 -->
            <form action="" class="q-form">
                ...
            </form>
        </div>
	</div>
    ...
    <script src="js/index.js"></script>
</body>
```

**JS部分:**

```js
// 获取登录头部所有的input标签
let login_opt = document.getElementsByName("login-opt");
// 获取登录主体框架标签
let form_bar = document.getElementById("form-bar");
function checkRadio() {
  for (let i = 0; i < login_opt.length; i++) {
    // 循环检测哪一个标签被选中
    if (login_opt[i].checked) {
      // 被选中的标签坐标将会被修正为"可见"状态
      form_bar.style.transform = "translateX(" + -348 * i + "px)";
    }
  }
}
```

