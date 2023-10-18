import {prepare} from "./scripts/prepare.mjs";

import {
  DEFAULT_PLAYING_FIELD_SIZE as defaultFieldSize,
  START_BUTTON_ID
} from "./scripts/consts/index.js";
import {setCardSlotSizes} from "./scripts/set-cards-size.mjs";
import {startGame} from "./scripts/game-start.mjs";

let customFieldSize = defaultFieldSize;

document.addEventListener('DOMContentLoaded', () => {
  prepare((defaultFieldSize));

  document.getElementById(START_BUTTON_ID)
    .addEventListener('click', (event) =>
      startGame(event));


});

window.addEventListener('resize', () =>
  setCardSlotSizes((customFieldSize)));
