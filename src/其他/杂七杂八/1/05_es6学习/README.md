## 1. let的声明以及声明特性

### 1.1 声明变量
```js
// let关键字使用示例：
let a; // 单个声明
let b,c,d; // 批量声明
let e = 100; // 单个声明并赋值
let f = 521, g = 'iloveyou', h = []; // 批量声明并赋值
```
### 1.2.声明特性

#### 1.2.1 变量值不能重复声明
```js
// 1. 不允许重复声明；
let star = "罗志祥"
let star = "时间刺客"
// 输出: Uncaught SyntaxError: Identifier 'star' has already been declared
```

#### 1.2.2 块级作用域 全局,函数,eval
```js
// 2. 块儿级作用域（局部变量）；
{
    let girl = "周扬青"
}
console.log(girl)
// 输出: Uncaught ReferenceError: girl is not defined
```
#### 1.2.3 不存在变量提升
使用var的时候:
```js
console.log(song);
var song="恋爱达人"
// 输出: undefined
```
使用let的时候:
```js
console.log(text);
let text="时间管理大师"
// 输出: Uncaught ReferenceError: Cannot access 'text' before initialization
```

#### 1.2.4 不影响作用域
```js
{
    let school = "尚硅谷"
    function fn(){
        console.log(school);
    }
    fn()
}
// 输出:尚硅谷
```

### 1.3 实践练习

外链js文件时,需要首先执行Window.load

页面中的所有元素（包括图片、flash）等都加载完毕后，才能执行；

示例:

```js
window.onload = function () {
  // 获取div元素对象
  let items = document.getElementsByClassName("item");
  console.log(items);
  // 遍历并绑定事件
  for (let i = 0; i < items.length; i++) {
    items[i].onclick = function () {
      // 修改当前元素的背景颜色
      // this.style.background = 'pink';
      items[i].style.background = "pink";
    };
    console.log(i);
  }
};
```

## 2. const 声明常量以及特点

### 2.1 特性

-   一定要赋初始值
-   一般常量使用大写(编程规范)
-   常量的值不能被修改
-   块级作用域(同let)
-   对于数组和对象的元素修改,不算做对常量的修改

## 3. 变量的解构赋值

### 什么是解构赋值：

从数组和对象中提取值，对变量进行赋值，这被称为解构赋值；

### 3.1 数组的解构

```js
const F4 = ["大哥","二哥","三哥","四哥"];
let [a,b,c,d] = F4;
// 这就相当于我们声明4个变量a,b,c,d，其值分别对应"大哥","二哥","三哥","四哥"
console.log(a + b + c + d); // 大哥二哥三哥四哥
```

### 3.2 对象的解构

```js
const F3 = {
	name : "大哥",
	age : 22,
	sex : "男",
	xiaopin : function(){ // 常用
    	console.log("我会演小品！");
	}
}
let {name,age,sex,xiaopin} = F3; // 注意解构对象这里用的是{}
console.log(name + age + sex + xiaopin); // 大哥22男
xiaopin(); // 此方法可以正常调用
```

## 4. 模板字符串

### 概述:

模板字符串（template string）是增强版的字符串，用反引号(`)标识，特点： 字符串中可以出现换行符； 可以使用 ${xxx} 形式引用变量；

```js
// 声明字符串的方法：单引号（''）、双引号（""）、反引号（``）
// 声明
let string = `我也一个字符串哦！`;
console.log(string);
// 特性
// 1、字符串中可以出现换行符
let str =
`<ul>
	<li>大哥</li>
	<li>二哥</li>
	<li>三哥</li>
	<li>四哥</li>
</ul>`;
console.log(str);
// 2、可以使用 ${xxx} 形式引用变量
let s = "大哥";
let out = `${s}是我最大的榜样！`;
console.log(out); //大哥是我最大的榜样!
```

### 应用场景： 

当遇到字符串与变量拼接的情况使用模板字符串；

## 5. 简化对象和函数写法

### 概述： 

ES6 允许在大括号里面，直接写入变量和函数，作为对象的属性和方法。这样的书写更加简洁；

### 示例:

```js
// 变量和函数
let name = "CAT";
let change = function(){
console.log("活着就是为了被撸！");
}
//创建对象
const school = {
// 完整写法
// name:name,
// change:change
// 简化写法
name,
change,
// 声明方法的简化
say(){
console.log("给我变！");
}
}
school.change();
school.say();

```

## 6. 箭头函数

### 概述： 

ES6允许使用箭头（=>）定义函数，箭头函数提供了一种更加简洁的函数书写方式，箭头函数多用于匿 名函数的定义； ### 箭头函数的注意点： 

1.  如果形参只有一个，则小括号可以省略； 

2.  函数体如果只有一条语句，则花括号可以省略，函数的返回值为该条语句的执行结果； 

3.  箭头函数 this 指向声明时所在作用域下 this 的值； 

4.  箭头函数不能作为构造函数实例化； 

5.  不能使用 arguments； 

### 特性：
1.  箭头函数的this是静态的，始终指向函数声明时所在作用域下的this的值； 
2. 不能作为构造实例化对象； 
3. 不能使用 arguments 变量；

### 代码示例:

```js
// ES6允许使用箭头（=>）定义函数
// 传统写法：无参数
var say = function(){
	console.log("hello！");
}
say();
// ES写法2：无参数
let speak = () => console.log("hello 哈哈！");
speak();
// 传统写法：一个参数
var hello = function(name){
	return "hello " + name;
}
console.log(hello("秋刀鱼"));
// ES6箭头函数：一个参数
let hi = name => "hi " + name;
console.log(hi("訾博"));
// 传统写法：多个参数
var sum = function(a,b,c){
return a + b + c;
}
console.log(sum(1,2,3));
// ES6箭头函数：多个参数
let he = (a,b,c) => a + b + c;
console.log(he(1,2,3));
/
// 1. this 是静态的 始终指向函数声明时所在作用域下的this的值
    function getName(){
        console.log(this.name);
    }
    let getName2 = () =>{
        console.log(this.name);
    }
    // 设置 Window 对象name属性
    window.name = '秋刀鱼'
    const school = {
        name : '烤面筋'
    }
    // 调用一
    getName()
    getName2()
    // 调用二
    getName.call(school)
    getName2.call(school)

// 2. 不能作为构造函数实例化对象
    let Person = (nick,age) =>{
        this.nick = nick
        this.age = age
    }
    let me =new Person('青书',13);
    console.log(me);
    // 输出:Uncaught TypeError: Person is not a constructor at window.onload
```

### 实践与应用场景:

**需求一: 鼠标点击元素2秒后,改变背景色**

#### 6.1.1 传统写法

```js
// 传统写法
window.onload=function(){
    // 绑定事件
    let ad = document.getElementById('ad')
    ad.addEventListener("click",function(){
        // 传统写法
        // 定时器 参数一:回调函数 参数二:时间
        setTimeout(function(){
            // 修改背景颜色
            console.log(this);
            // 传统this谁调用指向谁 现在指向Window 但Window没有style属性
            this.style.background='pink'
        },2000)
    })
    // 输出: Uncaught TypeError: Cannot set property 'background' of undefined
}
```

#### 6.1.2 传统写法的解决方案

```js
// 传统写法
window.onload=function(){
    // 绑定事件
    let ad = document.getElementById('ad')
    ad.addEventListener("click",function(){
        // 传统写法
        // 变量名或函数名前加下划线，一般表示“私有”。是约定俗成的开发规范，没有强制限制
        // 保存this的值
        let _this = this;
        // 定时器 参数一:回调函数 参数二:时间
        setTimeout(function(){
            // 修改背景颜色
            console.log(_this);
            _this.style.background='pink'
        },2000)
    })
    // 如果不保存this的值 则报错: Uncaught TypeError: Cannot set property 'background' of undefined
}
```

#### 6.1.3 ES6写法

```js
//ES6写法
window.onload=function(){
    let ad =document.getElementById('ad')
    ad.addEventListener("click",function(){
        // ES6写法
        // 这里的this指向ad
        setTimeout(()=>this.style.background='pink',2000);
    })
```

**需求二: 从数组中返回偶数的元素**

#### 6.2.1 传统写法

```js
// 从数组中返回偶数的元素
window.onload= function(){
    const arr = [1,,6,9,10,100,25]
    // 传统写法
    // filter() 方法创建一个新数组, 其包含通过所提供函数实现的测试的所有元素。 
    const result= arr.filter(function(item){
        if (item % 2 ===0){
            return true;
        }else{
            return false;
        }
    })
    console.log(result); // 输出 [6, 10, 100]
}
```

#### 6.2.2 ES6写法

```js
// 从数组中返回偶数的元素
window.onload= function(){
    const arr = [1,,6,9,10,100,25]
    // ES6 写法
    const result = arr.filter(item=>item%2===0);
    console.log(result); // 输出 [6, 10, 100]
}
```

## 7. ES6中函数参数的默认值

```js
//ES6 允许给函数参数赋值初始值
//1. 形参初始值 具有默认值的参数, 一般位置要靠后(潜规则)
function add(a,b,c=10) {
return a + b + c;
}
let result = add(1,2);
console.log(result); // 13

//2. 与解构赋值结合
// 注意这里参数是一个对象
function connect({host="127.0.0.1", username,password, port}){
console.log(host)
console.log(username)
console.log(password)
console.log(port)
}
connect({
host: 'atguigu.com',
username: 'root',
password: 'root',
port: 3306
})
```

## 8. rest参数

### 概述：
ES6 引入 rest 参数，用于获取函数的实参，用来代替 arguments；

### 示例:

```js
// ES6 引入 rest 参数，用于获取函数的实参，用来代替 arguments；
// ES5获取实参的方式
function data(){
	console.log(arguments);
}
data("大哥","二哥","三哥","四哥");
// ES6的rest参数...args，rest参数必须放在最后面
function data(...args){
	console.log(args); // fliter some every map
}
data("大哥","二哥","三哥","四哥");
```

## 9. 扩展运算符

### 介绍：
... 扩展运算符能将数组转换为逗号分隔的参数序列；
扩展运算符（spread）也是三个点（...）。它好比 rest 参数的逆运算，将一个数组转为用逗号分隔的参数序列，对数组进行解包；

### 示例:

```js
// ... 扩展运算符能将数组转换为逗号分隔的参数序列
//声明一个数组 ...
const tfboys = ['易烊千玺', '王源', '王俊凯'];
// => '易烊千玺','王源','王俊凯'
// 声明一个函数
function chunwan() {
    console.log(arguments);
}
chunwan(...tfboys); // chunwan('易烊千玺','王源','王俊凯')
```

