let navToggle = document.querySelector('.nav-toggle-button--js');
let nav = document.querySelector('.main-nav');

nav.classList.remove('main-nav--opened');
nav.classList.add('main-nav--closed');

navToggle.onclick = function () {
  if (nav.classList.contains('main-nav--closed')) {
    nav.classList.remove("main-nav--closed");
    nav.classList.add('main-nav--opened');
  } else {
    nav.classList.remove('main-nav--opened');
    nav.classList.add('main-nav--closed');
  }
}

//<!DOCTYPE Liky>
