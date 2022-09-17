
var button_modal = document.querySelector('.button-submite-contacts');
var modal_feedback = document.querySelector('.modal-container');
var button_modal_close = document.querySelector('.modal-close-button');
var modal_feedback = document.querySelector('.modal-container');
var description_wrapper_murshmallow = document.querySelector('.by-description-wrapper-murshmallow');
var description_wrapper_banana = document.querySelector('.by-description-wrapper-banana');
var description_wrapper_crema = document.querySelector('.by-description-wrapper-crema');
var background_blue = document.querySelector('.page-color-pink');





button_modal.addEventListener('click', function() {
  modal_feedback.classList.toggle('modal-close');
});

button_modal_close.addEventListener('click', function() {
  modal_feedback.classList.toggle('modal-close');
});


// находим кнопку
const slider_button_next = document.querySelector('.slider-button-next');
const slider_button_prev = document.querySelector('.slider-button-prev');
// находим все изображения с классом .img
const slides_all = document.querySelectorAll('.by-online-images-item');
// счетчик начинается с 1 т.к. текущее изображение с i = 0 сейчас показано
let i = 1;

slider_button_next.addEventListener('click', () => {
  // количество всех изображений
  const imgCount = slides_all.length;
  if (i == imgCount) {
    i = 0;
  }
  // изображение, которое отображается в данный момент
  const slides_current = document.querySelector('.by-online-images-item-current');
  // скрыть текущее изображение
  slides_current.classList.remove('by-online-images-item-current');
  // показать следующее изображение
  slides_all[i].classList.add('by-online-images-item-current');
  // увеличить счетчик

  i++;

  background_blue.classList.toggle('background-blue');
  background_blue.classList.toggle('background-gold');
  background_blue.classList.toggle('page-color-pink');

});

slider_button_prev.addEventListener('click', () => {
  // количество всех изображений
  const imgCount = slides_all.length;
  if (i == imgCount) {
    i = 0;
  }
  // изображение, которое отображается в данный момент
  const slides_current = document.querySelector('.by-online-images-item-current');
  // скрыть текущее изображение
  slides_current.classList.remove('by-online-images-item-current');
  // показать следующее изображение
  slides_all[i].classList.add('by-online-images-item-current');
  // увеличить счетчик

  i++;

  background_blue.classList.toggle('background-blue');
  background_blue.classList.toggle('page-color-pink');

});







