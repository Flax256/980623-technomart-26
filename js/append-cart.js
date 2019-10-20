var btnbuy = document.querySelectorAll(".button-buy");
var modalcart = document.querySelector(".append-cart");
var closecart = document.querySelector(".close-cart");
btnbuy.forEach(function(item) {
  item.addEventListener("click", function (evt) {
    evt.preventDefault();
    modalcart.classList.add("show");
  });
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (modalcart.classList.contains("show")) {
      evt.preventDefault();
      modalcart.classList.remove("show");
    }
  }
});

closecart.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalcart.classList.remove("show");
});