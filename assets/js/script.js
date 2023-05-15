const showLogin = document.querySelector("#btnLogin");
const showDaftar = document.querySelector("#btnDaftar");
const form = document.querySelectorAll(".form");
const login = document.querySelector("#login");
const daftar = document.querySelector("#daftar");

showDaftar.onclick = () => {
  form[1].classList.add("show");
  form[0].classList.remove("show");
};

showLogin.onclick = () => {
  form[0].classList.add("show");
  form[1].classList.remove("show");
};
