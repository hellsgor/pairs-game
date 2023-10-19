import {
  END_BUTTON_ID,
  MENU_ID,
  MENU_TIMER_ID,
  START_MENU_ID
} from "./consts/index.js";
import {messageOutput} from "./message/message-output.mjs";

export function gameOver(event, menuTimerInterval, menuTimerElement, slots) {
  let foundedSlots;
  let foundedMenuTimerElement;

  if (event) {
    event.preventDefault();
  }
  document.getElementById(END_BUTTON_ID)
    .classList.add('visually-hidden');

  if (menuTimerInterval && menuTimerElement) {
    clearInterval(menuTimerInterval.mainTimer);
    clearInterval(menuTimerInterval.separatorTimer);
    foundedMenuTimerElement = menuTimerElement;
  } else {
    foundedMenuTimerElement = document.getElementById(MENU_TIMER_ID);
  }
  foundedMenuTimerElement.querySelector('.timer__separator')
    .classList.remove('timer__separator_darken');
  foundedMenuTimerElement.querySelector('.timer__minutes').textContent = '00';
  foundedMenuTimerElement.querySelector('.timer__seconds').textContent = '00';

  if (slots) {
    foundedSlots = Array.from(slots);
  } else {
    foundedSlots = Array.from(document.getElementsByClassName('card__slot'));
  }
  foundedSlots.forEach((slot) => {
    slot.classList.add('card__slot_not-react');
    delete slot.dataset.compared;
  })

  messageOutput(foundedSlots.every((slot) =>
    slot.classList.contains('card__slot_guessed')));
  document.getElementById(MENU_ID)
    .classList.add('menu_after-game');
  document.getElementById(START_MENU_ID)
    .classList.remove('visually-hidden');

  foundedSlots.forEach((slot) => {
    slot.innerHTML = '';
    slot.classList.remove('card__slot_rotate');
    slot.classList.remove('card__slot_guessed');
    slot.classList.remove('card__slot_compare');
  })
}
