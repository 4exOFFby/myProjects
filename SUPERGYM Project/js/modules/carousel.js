import Swiper, {Navigation} from 'swiper';


const feedbackSwiper = new Swiper('.feedback-carousel', {
  direction: 'horizontal',
  effect: 'slide',
  speed: 450,
  loop: false,
  watchOverflow: true,

  breakpoints: {

    320: {
      slidesPerView: 1,
      spaceBetween: 0,
    },

    768: {
      slidesPerView: 1,
      spaceBetween: 0,
    },

    1200: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
  },

  modules: [Navigation],

  navigation: {
    nextEl: '.feedback-carousel__button--next',
    prevEl: '.feedback-carousel__button--prev',
  },
});


export {feedbackSwiper};

