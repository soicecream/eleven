window.onload = function () {
  // // 不足双位补0函数
  // function fmt(num) {
  //   if (num < 10) {
  //     newnum = "0" + num;
  //     return newnum;
  //   } else {
  //     return num;
  //   }
  // }
  const clock = document.getElementById("clock");
  // 时间格式化显示(不足双位补0)
  const fmt = (t) => (t < 10 ? `0${t}` : t);
  // 时钟函数
  function myTime() {
    const time = new Date();
    // // const hh = fmt(time.getHours());
    // 通过三元表达式来对不足双位数的时间进行补0
    // const hh = time.getHours() < 10 ? "0" + time.getHours() : time.getHours();
    // const mm =
    //   time.getMinutes() < 10 ? "0" + time.getMinutes() : time.getMinutes();
    // const ss =
    //   time.getSeconds() < 10 ? "0" + time.getSeconds() : time.getSeconds();
    // console.log(hh + ":" + mm + ":" + ss);
    // console.log(typeof hh);
    const { h, m, s } = {
      h: fmt(time.getHours()),
      m: fmt(time.getMinutes()),
      s: fmt(time.getSeconds()),
    };
    // document.getElementById("clock").innerText = hh + ":" + mm + ":" + ss;
    clock.innerText = h + ":" + m + ":" + s;
  }

  // 循环刷新时间
  setInterval(myTime, 1000);
};
