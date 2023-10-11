import {prepare} from "./scripts/prepare.mjs";

import {
  DEFAULT_PLAYING_FIELD_SIZE as defaultFieldSize
} from "./scripts/consts/index.js";
import {setCardSlotSizes} from "./scripts/set-cards-size.mjs";
import {startGame} from "./scripts/start-game.mjs";

let customFieldSize = defaultFieldSize;

document.addEventListener('DOMContentLoaded', () => {
  prepare((defaultFieldSize));
  document.getElementById('start-button')
    .addEventListener('click', (event) =>
      startGame(event));
});

window.addEventListener('resize', () =>
  setCardSlotSizes((customFieldSize)));
