var button_modal_close = document.querySelector('.close-button');
var button_modal_on = document.querySelector('.button-booking-link');
var modal_index = document.querySelector('.modal-container');


button_modal_close.addEventListener('click', function() {
  modal_index.classList.toggle('modal-close');
});

button_modal_on.addEventListener('click', function() {
  modal_index.classList.toggle('modal-close');
});
