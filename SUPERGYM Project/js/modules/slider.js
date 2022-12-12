import Swiper, {Navigation} from 'swiper';

const trainersSwiper = new Swiper('.trainers__slider', {
  direction: 'horizontal',
  effect: 'slide',
  speed: 400,
  loop: true,

  breakpoints: {

    320: {
      slidesPerView: 1,
      spaceBetween: 0,
    },

    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },

    1200: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
  },

  modules: [Navigation],

  navigation: {
    nextEl: '.trainers__slider-button--next',
    prevEl: '.trainers__slider-button--prev',
  },
});

const renderSlidesOrder = () => {
  const duplicateSlides = document.querySelectorAll('.swiper-slide-duplicate .product-card');
  duplicateSlides.forEach((slide) => {
    slide.removeAttribute('tabindex');
  });
};

export {trainersSwiper, renderSlidesOrder};
