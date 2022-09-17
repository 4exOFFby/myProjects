
var button_catalog = document.querySelector('.navigation_catalog_link_popover');
var popover_catalog = document.querySelector('.popover_catalog_list');
var button_basket = document.querySelector('.navigation_link_basket');
var popover_basket = document.querySelector('.popover_basket');
var button_delivery = document.querySelector('.delivery_link');
var delivery_card = document.querySelector('.delivery_card');
var button_garanty = document.querySelector('.garanty_link');
var garanty_card = document.querySelector('.garanty_card');
var button_credit = document.querySelector('.credit_link');
var credit_card = document.querySelector('.credit_card');
var modal_delivery = document.querySelector('.modal_close');
var button_modal = document.querySelector('.delivery_article_description');
var button_modal_close = document.querySelector('.close_button');





button_catalog.addEventListener('click', function() {
  popover_catalog.classList.toggle('popover_catalog_off');
});

button_basket.addEventListener('click', function() {
  popover_basket.classList.toggle('popover_basket_off');
});

button_delivery.addEventListener('click', function() {
  button_delivery.classList.remove('services_link_current');
  button_garanty.classList.remove('services_link_current');
  button_credit.classList.remove('services_link_current');
  button_delivery.classList.add('services_link_current');
  garanty_card.classList.add('delivery_description_none');
  credit_card.classList.add('delivery_description_none');
  delivery_card.classList.remove('delivery_description_none');
});

button_garanty.addEventListener('click', function() {
  button_delivery.classList.remove('services_link_current');
  button_garanty.classList.remove('services_link_current');
  button_credit.classList.remove('services_link_current');
  button_garanty.classList.add('services_link_current');
  credit_card.classList.add('delivery_description_none');
  delivery_card.classList.add('delivery_description_none');
  garanty_card.classList.remove('delivery_description_none');
});

button_credit.addEventListener('click', function() {
  button_delivery.classList.remove('services_link_current');
  button_garanty.classList.remove('services_link_current');
  button_credit.classList.remove('services_link_current');
  button_credit.classList.add('services_link_current');
  delivery_card.classList.add('delivery_description_none');
  garanty_card.classList.add('delivery_description_none');
  credit_card.classList.remove('delivery_description_none');
});

button_modal.addEventListener('click', function() {
  modal_delivery.classList.toggle('modal_close')
});

button_modal_close.addEventListener('click', function() {
  modal_delivery.classList.toggle('modal_close')
});


const slider_button_next = document.querySelector('.slider_button_next');
const slider_button_prev = document.querySelector('.slider_button_previos');
// находим все изображения с классом .img
const slides_all = document.querySelectorAll('.slider_off');
// счетчик начинается с 1 т.к. текущее изображение с i = 0 сейчас показано
let i = 1;

slider_button_next.addEventListener('click', () => {
  // количество всех изображений
  const imgCount = slides_all.length;
  if (i == imgCount) {
    i = 0;
  }
  // изображение, которое отображается в данный момент
  const slides_current = document.querySelector('.slider_on');
  // скрыть текущее изображение
  slides_current.classList.remove('slider_on');
  // показать следующее изображение
  slides_all[i].classList.add('slider_on');
  // увеличить счетчик

  i++;

});

slider_button_prev.addEventListener('click', () => {
  // количество всех изображений
  const imgCount = slides_all.length;
  if (i == imgCount) {
    i = 0;
  }
  // изображение, которое отображается в данный момент
  const slides_current = document.querySelector('.slider_on');
  // скрыть текущее изображение
  slides_current.classList.remove('slider_on');
  // показать следующее изображение
  slides_all[i].classList.add('slider_on');
  // увеличить счетчик

  i++;

});


