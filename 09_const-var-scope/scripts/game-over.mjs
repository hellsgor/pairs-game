import {END_BUTTON_ID} from "./consts/index.js";
import {messageOutput} from "./message/message-output.mjs";

export function gameOver(event, slots) {
  let foundedSlots;

  if (event) {
    event.preventDefault();
  }
  document.getElementById(END_BUTTON_ID)
    .classList.add('visually-hidden');

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

  foundedSlots.forEach((slot) => {
    slot.innerHTML = '';
    slot.classList.remove('card__slot_rotate');
    slot.classList.remove('card__slot_guessed');
    slot.classList.remove('card__slot_compare');
  })
}
