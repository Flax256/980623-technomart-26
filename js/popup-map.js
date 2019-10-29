var mapLink = document.querySelector(".contacts-img");
var modallarge = document.querySelector(".large-map");
var close = document.querySelector(".close-map");
mapLink.addEventListener("click", function (evt) {
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
