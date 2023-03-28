const $hr = $("#hr")
const $mn = $("#mn")
const $sc = $("#sc")
const deg = 6

setInterval(() => {
  let day = new Date()
  let hh = day.getHours() * 30
  let mm = day.getMinutes() * deg
  let ss = day.getSeconds() * deg
  $hr.css({ transform: `rotateZ(${hh + mm / 12}deg)` })
  $mn.css({ transform: `rotateZ(${mm}deg)` })
  $sc.css({ transform: `rotateZ(${ss}deg)` })
}, 1000)
