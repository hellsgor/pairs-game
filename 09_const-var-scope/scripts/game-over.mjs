import {MENU_TIMER_ID} from "./consts/index.js";

export function gameOver(event, menuTimerInterval, menuTimerElement, slots) {
  let foundedSlots;
  let foundedMenuTimerElement;

  if (event) {
    event.preventDefault();
  }

  if (menuTimerInterval && menuTimerElement) {
    clearInterval(menuTimerInterval.mainTimer);
    clearInterval(menuTimerInterval.separatorTimer);
    foundedMenuTimerElement = menuTimerElement;
  } else {
    foundedMenuTimerElement = document.getElementById(MENU_TIMER_ID);
    console.log(foundedMenuTimerElement);
  }
  console.log(1)
  foundedMenuTimerElement.querySelector('.timer__separator')
    .classList.remove('timer__separator_darken');
  foundedMenuTimerElement.querySelector('.timer__minutes').textContent = '00';
  foundedMenuTimerElement.querySelector('.timer__seconds').textContent = '00';
  console.log(2);

  if (slots) {
    foundedSlots = slots;
  } else {
    foundedSlots = Array.from(document.getElementsByClassName('card__slot'));
  }
  foundedSlots.forEach((slot) => {
    slot.innerHTML = '';
    slot.classList.add('card__slot_empty');
  })
}
