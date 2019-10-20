var btnbuy = document.querySelector(".write-letter");
var modalconnection = document.querySelector(".connection");
var closeconnection = document.querySelector(".close-letter");

var form = modalconnection.querySelector(".connection-form");
var uname = modalconnection.querySelector("[name=unique-name]");
var email = modalconnection.querySelector("[name=email]");
var vtext = modalconnection.querySelector("[name=text]");

var isStorageSupport = true;
var storageuname = "";
var storageemail = "";

try {
  storageuname = localStorage.getItem("uname");
  storageemail = localStorage.getItem("email");
  }
catch (err) {
  isStorageSupport = false;
}

btnbuy.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalconnection.classList.add("show");
  uname.focus();
  if (isStorageSupport) {
    if (storageuname) {
      uname.value = storageuname;
      email.focus();
      if (storageemail) {
        email.value = storageemail;
        vtext.focus();
      }
    }
  }
});

form.addEventListener("submit", function (evt) {   
  if (!uname.value || !email.value || !vtext.value) {
    evt.preventDefault();
    modalconnection.classList.remove("modal-error");
    modalconnection.offsetWidth = modalconnection.offsetWidth;
    modalconnection.classList.add("modal-error");
    if (!vtext.value) {
      vtext.focus();
    }
    if (!email.value) {
      email.focus();
    }
    if (!uname.value) {
      uname.focus();
    }
  } else {
    if (isStorageSupport) {
      localStorage.setItem("uname", uname.value);
      localStorage.setItem("email", email.value);
    }
  }
});

closeconnection.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalconnection.classList.remove("show");
  modalconnection.classList.remove("modal-error");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (modalconnection.classList.contains("show")) {
      evt.preventDefault();
      modalconnection.classList.remove("show");
      modalconnection.classList.remove("modal-error");
    }
  }
});