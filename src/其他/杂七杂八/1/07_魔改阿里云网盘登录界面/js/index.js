// window.onload = function () {
let login_opt = document.getElementsByName("login-opt");
let form_bar = document.getElementById("form-bar");
function checkRadio() {
  for (let i = 0; i < login_opt.length; i++) {
    if (login_opt[i].checked) {
      form_bar.style.transform = "translateX(" + -348 * i + "px)";
    }
  }
}
// };
