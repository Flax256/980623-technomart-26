var img = document.querySelector(".img-map");
var modallarge = document.querySelector(".large-map");
var close = document.querySelector(".close-map");
img.addEventListener("click", function (evt) {
  evt.preventDefault();
  modallarge.classList.add("show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (modallarge.classList.contains("show")) {
      evt.preventDefault();
      modallarge.classList.remove("show");
    }
  }
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  modallarge.classList.remove("show");
});