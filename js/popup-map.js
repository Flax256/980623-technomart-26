var img = document.querySelector(".img-map");
var large = document.querySelector(".large-map");
var close = document.querySelector(".close-map");
img.addEventListener("click", function (evt) {
  evt.preventDefault();
  large.classList.add("show");
});
close.addEventListener("click", function (evt) {
  evt.preventDefault();
  large.classList.remove("show");
});