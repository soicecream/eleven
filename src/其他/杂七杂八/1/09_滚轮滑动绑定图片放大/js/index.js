window.onload = function () {
  const zz = document.querySelector(".zz")
  const ul = document.querySelector("ul")
  ul.onwheel = (event) => {
    if (event.wheelDelta > 0) {
      zz.style.top = zz.offsetTop - 30 + "px"
      zz.style.left = zz.offsetLeft - 30 + "px"
    } else {
      zz.style.top = zz.offsetTop + 30 + "px"
      zz.style.left = zz.offsetLeft + 30 + "px"
    }
  }
}
