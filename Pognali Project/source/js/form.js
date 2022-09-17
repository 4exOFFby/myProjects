let headerMenu = document.querySelector('.main-header');
let headerMenuToggle = document.querySelector('.main-header__menu');
let countriesSelect = document.querySelector('.popup-countries');
let countriesSelectToggle = document.querySelector('.plans-algoritm__input-countries--choisen');
let scrollMenu = document.querySelector('.scroll-wrapper');
let sticky = scrollMenu.offsetTop;
let innerPadding = document.querySelector('.main-header--inner');

headerMenu.classList.remove('main-header--nojs');


headerMenuToggle.addEventListener('click', function () {
  if (headerMenu.classList.contains('main-header--close')) {
    headerMenu.classList.remove('main-header--close');
    headerMenu.classList.add('main-header--open');
    headerMenu.classList.add('scroll-menu__open');
  } else {
    headerMenu.classList.add('main-header--close');
    headerMenu.classList.remove('main-header--open');
    headerMenu.classList.remove('scroll-menu__open');
  }
});

countriesSelectToggle.addEventListener('click', function () {

  if (countriesSelect.classList.contains('popup-countries--close')) {
    countriesSelect.classList.remove('popup-countries--close');
    countriesSelect.classList.add('popup-countries--open');
    countriesSelectToggle.classList.add('plans-algoritm__input-countries--active');
  } else {
    countriesSelect.classList.add('popup-countries--close');
    countriesSelectToggle.classList.remove('plans-algoritm__input-countries--active');
  }
});

window.onscroll = function()
{myFunction()};

function myFunction() {
  if (window.scrollY >= sticky) {
    scrollMenu.classList.add('scroll-menu__open');
    innerPadding.classList.add('main-header--scroll-menu-form');
    headerMenu.classList.add('main-header--scroll-menu-open');

  } else {
    scrollMenu.classList.remove('scroll-menu__open');
    innerPadding.classList.remove('main-header--scroll-menu-form');
    headerMenu.classList.remove('main-header--scroll-menu-open');
  }
}
