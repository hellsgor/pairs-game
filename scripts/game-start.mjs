import {shuffle} from "./shuffle.mjs";
import {createNumbersArray} from "./create-number-array.mjs";
import {
  ARRAY_LENGTH_DO_NOT_MATCH,
  DEFAULT_PLAYING_FIELD_SIZE,
  END_BUTTON_ID,
  FIELD_SIZE_COUNTER_ID,
  MENU_CONTROLS_ID,
  MENU_MESSAGE_ID,
  MENU_TIMER_ID,
  ODD_FIELD_SIZE_ERROR_TEXT,
  SIZE_INPUT_ID,
  START_MENU_ID
} from "./consts/index.js";
import {createCard} from "./create-card.mjs";
import {startMenuTimer} from "./timer/start-menu-timer.mjs";
import {gameOver} from "./game-over.mjs";

export function startGame(event) {
  event.preventDefault();

  const fieldSize = document.getElementById(FIELD_SIZE_COUNTER_ID)
    ? document.getElementById(FIELD_SIZE_COUNTER_ID).dataset && document.getElementById(FIELD_SIZE_COUNTER_ID).dataset.counterNumber
      ? document.getElementById(FIELD_SIZE_COUNTER_ID).dataset.counterNumber % 2 === 0
        ? document.getElementById(FIELD_SIZE_COUNTER_ID).dataset.counterNumber
        : console.error(ODD_FIELD_SIZE_ERROR_TEXT)
      : DEFAULT_PLAYING_FIELD_SIZE
    : document.getElementById(SIZE_INPUT_ID).value;
  const numberArray = shuffle(
    createNumbersArray(fieldSize)
  );
  const slots = document.querySelectorAll('.card__slot');
  const menuTimerElement = document.getElementById(MENU_TIMER_ID);

  delete menuTimerElement.dataset.gameIsOverFromGameMove;

  // const menuTimerInterval = startMenuTimer(undefined);
  startMenuTimer(undefined);


  if (slots.length === numberArray.length) {

    slots.forEach((slot, idx) => {
      slot.innerHTML = '';
      slot.classList.remove('card__slot_empty');
      slot.classList.remove('card__slot_not-react');
      createCard(slot, numberArray[idx]);
    })

    document.getElementById(MENU_MESSAGE_ID)
      .classList.add('visually-hidden');

    document.getElementById(START_MENU_ID)
      .classList.add('visually-hidden');

    document.getElementById(END_BUTTON_ID)
      .classList.remove('visually-hidden');

    document.getElementById(MENU_CONTROLS_ID)
      .classList.remove('visually-hidden');

    document.getElementById(END_BUTTON_ID)
      .addEventListener('click', (event) => {
        menuTimerElement.dataset.gameIsOverFromGameMove = 'true';
        gameOver(event, slots);
      })

    document.querySelector('.menu__rules')
      .classList.add('accordion_collapsed');

  } else {
    console.error(ARRAY_LENGTH_DO_NOT_MATCH);
  }
}
