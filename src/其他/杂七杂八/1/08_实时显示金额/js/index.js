window.onload = function () {
  setInterval(function () {
    // 获取各个input标签对象
    let count = parseFloat(document.querySelector("#count").value);
    let price = parseFloat(document.querySelector("#price").value);
    let total = document.querySelector("#total");
    // 如果得到的值为有效值(非0),则返回计算结果 如果不是 则返回0.00
    if (count * price) {
      total.value = (count * price).toFixed(2);
    } else {
      total.value = 0.0;
    }
    console.log(count, price, total);
  }, 100);
};
