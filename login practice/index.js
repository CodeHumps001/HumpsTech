const logExpand = document.querySelector(".log");
const signExpand = document.querySelector(".sign");
const logCont = document.querySelector(".log1");
const signCont = document.querySelector(".sign1");
const signField = document.querySelector(".f1");
const logField = document.querySelector(".f2");

logExpand.addEventListener("click", function () {
  logCont.classList.add("expand");
  signField.classList.toggle("hidden");
  logField.classList.toggle("hidden");
});
signExpand.addEventListener("click", function () {
  logCont.classList.remove("expand");
  signField.classList.toggle("hidden");
  logField.classList.toggle("hidden");
});
