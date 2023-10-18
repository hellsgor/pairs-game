import {shuffle} from "./shuffle.mjs";
import {createNumbersArray} from "./create-number-array.mjs";
import {
  ARRAY_LENGTH_DO_NOT_MATCH,
  DEFAULT_PLAYING_FIELD_SIZE,
  END_BUTTON_ID,
  FIELD_SIZE_COUNTER_ID,
  MENU_CONTROLS_ID,
  MENU_TIMER_ID,
  ODD_FIELD_SIZE_ERROR_TEXT,
  START_MENU_ID
} from "./consts/index.js";
import {createCard} from "./create-card.mjs";
import {startMenuTimer} from "./timer/start-menu-timer.mjs";
import {gameOver} from "./game-over.mjs";

export function startGame(event) {
  event.preventDefault();

  const fieldSizeCounter = document.getElementById(FIELD_SIZE_COUNTER_ID);
  const numberArray = shuffle(
    createNumbersArray(
      fieldSizeCounter.dataset && fieldSizeCounter.dataset.counterNumber
        ? fieldSizeCounter.dataset.counterNumber % 2 === 0
          ? fieldSizeCounter.dataset.counterNumber
          : console.error(ODD_FIELD_SIZE_ERROR_TEXT)
        : DEFAULT_PLAYING_FIELD_SIZE
    )
  );
  const slots = document.querySelectorAll('.card__slot');
  const menuTimerInterval = startMenuTimer(undefined, true);
  const menuTimerElement = document.getElementById(MENU_TIMER_ID);


  if (slots.length === numberArray.length) {

    slots.forEach((slot, idx) => {
      slot.innerHTML = '';
      slot.classList.remove('card__slot_empty');
      createCard(slot, numberArray[idx]);
    })

    document.getElementById(START_MENU_ID)
      .classList.add('visually-hidden');

    document.getElementById(MENU_CONTROLS_ID)
      .classList.remove('visually-hidden');

    document.getElementById(END_BUTTON_ID)
      .addEventListener('click', () => gameOver(
        event,
        menuTimerInterval,
        menuTimerElement,
        slots,
      ))

    document.querySelector('.menu__rules')
      .classList.add('accordion_collapsed');

  } else {
    console.error(ARRAY_LENGTH_DO_NOT_MATCH);
  }
}
