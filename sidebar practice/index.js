const button1 = document.querySelector(".btn1");
const button2 = document.querySelector(".btn2");
const sidebarContainer = document.querySelector(".side");
const effect = function () {
  button1.classList.toggle("hidden");
  button2.classList.toggle("hidden");
  sidebarContainer.classList.toggle("expand");
};
button1.addEventListener("click", effect);
button2.addEventListener("click", effect);
// button1.addEventListener("click", function () {
//   button1.classList.add("hidden");
//   button2.classList.remove("hidden");
//   sidebarContainer.classList.add("expand");
// });
// button2.addEventListener("click", function () {
//   button1.classList.remove("hidden");
//   button2.classList.add("hidden");
//   sidebarContainer.classList.remove("expand");
// });
