import {shuffle} from "./shuffle.mjs";
import {createNumbersArray} from "./create-number-array.mjs";
import {
  ARRAY_LENGTH_DO_NOT_MATCH,
  DEFAULT_PLAYING_FIELD_SIZE,
  FIELD_SIZE_COUNTER_ID,
  ODD_FIELD_SIZE_ERROR_TEXT
} from "./consts/index.js";
import {createCard} from "./create-card.mjs";

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


  if (slots.length === numberArray.length) {
    slots.forEach((slot, idx) => {
      slot.innerHTML = '';
      slot.classList.remove('card__slot_empty');
      createCard(slot, numberArray[idx]);
    })
  } else {
    console.error(ARRAY_LENGTH_DO_NOT_MATCH);
  }
}
