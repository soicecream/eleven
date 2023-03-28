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
