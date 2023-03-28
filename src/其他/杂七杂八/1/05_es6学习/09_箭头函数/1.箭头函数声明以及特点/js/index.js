window.onload = function(){
    // 声明一个函数
    let fn1 = function(a,b){
        return a+b;
    }
    // 精简1
    let fn2 = (a,b) =>{
        return a+b
    }
    // 精简2
    let fn3 = (a,b) => a+b

    console.log(fn1(1,2));
    console.log(fn2(1,2));
    console.log(fn3(1,2));

    // 特性
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
    // let Person = (nick,age) =>{
    //     this.nick = nick
    //     this.age = age
    // }
    // let me =new Person('青书',13);
    // console.log(me);
    // 输出:Uncaught TypeError: Person is not a constructor at window.onload

    // 3. 不能使用 arguments 变量
    // arguments 是一个对应于传递给函数的参数的类数组对象
    let fn4 =()=>{
        console.log(arguments);
    };
    fn4(1,2,3);
    let fn5 =function(){
        console.log(arguments);
    }
    fn5(1,2,3)
}