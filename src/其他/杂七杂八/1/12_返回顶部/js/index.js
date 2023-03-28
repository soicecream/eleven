const musicList = document.querySelector(".musicList")
// 处理播放量
function playCount(num) {
  return num <= 100000000
    ? num >= 10000 && num < 100000000
      ? num.toString().slice(0, -4) + "." + num.toString().slice(-4, -3) + "万"
      : num
    : num.toString().slice(0, -8) + "." + num.toString().slice(-8, -7) + "亿"
}
// 发送fetch请求
fetch("assets/musicData.json")
  .then((result) => result.json())
  .then((result) => {
    console.log(result)
    result.data.forEach((item) => {
      const li = document.createElement("li")
      li.innerHTML = `
      <div class="img">
            <!--<img class="bgImg" src="assets/img/loading.gif" data-src="${
              item["cover_url_medium"]
            }" alt=""> -->
            <img class="bgImg" src="${item["cover_url_medium"]}" alt="">
            <div class="mask"><img src="assets/img/play.png" alt=""></div>
          </div>
          <div class="title" title="${item["title"]}">${item["title"]}</div>
          <div class="playCount">播放量:${playCount(item["access_num"])}</div>
      `
      musicList.appendChild(li)
    })
  })
