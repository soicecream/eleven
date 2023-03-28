// 声明变量
// let a;
// let b,c,d;
// let e=200;
// let f=361,g="hello javascript",h=[];

// 1.变量值不能重复
// let star = "罗志祥"
// let star = "时间刺客"
// Uncaught SyntaxError: Identifier 'star' has already been declared

// 2.块级作用域 全局,函数,eval
// if else while for
// {
//     let girl = "周扬青"
// }
// console.log(girl)
// index.js:16 Uncaught ReferenceError: girl is not defined

// 3.不存在变量提升
// console.log(song);
// var song="恋爱达人"
// // undefined
// console.log(text);
// let text="时间管理大师"
// Uncaught ReferenceError: Cannot access 'text' before initialization

// 4.不影响作用域
{
    let school = "尚硅谷"
    function fn(){
        console.log(school);
    }
    fn()
}
// 尚硅谷