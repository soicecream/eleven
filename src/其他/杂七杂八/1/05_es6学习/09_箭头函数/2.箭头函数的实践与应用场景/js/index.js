// // 传统写法&解决方案
// window.onload=function(){
//     // 绑定事件
//     let ad = document.getElementById('ad')
//     ad.addEventListener("click",function(){
//         // 传统写法
//         // 变量名或函数名前加下划线，一般表示“私有”。是约定俗成的开发规范，没有强制限制
//         // 保存this的值
//         // let _this = this;
//         // 定时器 参数一:回调函数 参数二:时间
//         setTimeout(function(){
//             // 修改背景颜色
//             console.log(this);
//             this.style.background='pink'
//         },2000)
//     })
//     // 如果不保存this的值 则报错: Uncaught TypeError: Cannot set property 'background' of undefined
// }

// // ES6写法
// window.onload=function(){
//     let ad =document.getElementById('ad')
//     ad.addEventListener("click",function(){
//         // ES6写法
//         // 这里的this指向ad
//         setTimeout(()=>this.style.background='pink',2000);
//     })
// }

// 从数组中返回偶数的元素
window.onload = function () {
  const arr = [1, , 6, 9, 10, 100, 25];
  // // 传统写法
  // // filter() 方法创建一个新数组, 其包含通过所提供函数实现的测试的所有元素。
  // const result= arr.filter(function(item){
  //     if (item % 2 ===0){
  //         return true;
  //     }else{
  //         return false;
  //     }
  // })
  // ES6 写法
  const result = arr.filter((item) => item % 2 === 0);
  console.log(result); // 输出 [6, 10, 100]
};
