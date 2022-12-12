const buttons = document.querySelectorAll('.tub-button-list__button');
const tabLists = document.querySelectorAll('.tub-list');


const subscriberTubHandler = () => {
  if (buttons.length > 0 || tabLists.length > 0) {
    buttons.forEach((button, index) => {
      button.addEventListener('click', () => {
        for (button of buttons) {
          button.classList.remove('btn--tub-active');
        }
        for (let tabList of tabLists) {
          tabList.classList.remove('tub-list--active');
        }
        buttons[index].classList.add('btn--tub-active');
        tabLists[index].classList.add('tub-list--active');
      });
    });
  }
};

export {subscriberTubHandler};
