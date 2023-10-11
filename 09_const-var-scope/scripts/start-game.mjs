import {shuffle} from "./shuffle.mjs";
import {createNumbersArray} from "./create-number-array.mjs";
import {
  DEFAULT_PLAYING_FIELD_SIZE,
  FIELD_SIZE_COUNTER_ID,
  ODD_FIELD_SIZE_ERROR_TEXT
} from "./consts/index.js";

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
}
