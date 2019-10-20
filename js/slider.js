var slider = document.getElementsByName("toggle");
var btnLeft = document.querySelector(".button-left");
var btnRight = document.querySelector(".button-right");
var slider1 = document.querySelector(".slider-1");
var slider2 = document.querySelector(".slider-2");

btnLeft.addEventListener("click", function (evt) {
  evt.preventDefault();
  slider[0].checked = true;
});

btnRight.addEventListener("click", function (evt) {
  evt.preventDefault();
  slider[1].checked = true;
});