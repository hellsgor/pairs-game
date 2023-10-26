import {prepare} from "./scripts/prepare.mjs";

import {
  DEFAULT_PLAYING_FIELD_SIZE,
  FIELD_SIZE_COUNTER_ID,
  SIZE_INPUT_ID,
  START_BUTTON_ID
} from "./scripts/consts/index.js";
import {setCardSlotSizes} from "./scripts/set-cards-size.mjs";
import {startGame} from "./scripts/game-start.mjs";

document.addEventListener('DOMContentLoaded', () => {
  prepare((DEFAULT_PLAYING_FIELD_SIZE));

  document.getElementById(START_BUTTON_ID)
    .addEventListener('click', (event) =>
      startGame(event));
});

window.addEventListener('resize', () => {
  const fieldSize = document.getElementById(FIELD_SIZE_COUNTER_ID)
    ? +document.getElementById(FIELD_SIZE_COUNTER_ID).dataset.counterNumber
    : +document.getElementById(SIZE_INPUT_ID);
  setCardSlotSizes(fieldSize);
});
