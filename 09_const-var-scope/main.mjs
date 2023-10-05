import {shuffle} from './scripts/shuffle.mjs';
import {createNumbersArray} from './scripts/create-number-array.mjs';
import {prepare} from "./scripts/prepare.mjs";

import {
  DEFAULT_PLAYING_FIELD_SIZE as fieldSize
} from "./scripts/consts/index.js";
import {setCardSlotSizes} from "./scripts/set-cards-size.mjs";


const numbersArray = shuffle(createNumbersArray(fieldSize));

document.addEventListener('DOMContentLoaded', () => {
  prepare(fieldSize);
  document.getElementById('start-button')
    .addEventListener('click', (event) => {
      event.preventDefault();
      console.log('start');
    })
})

window.addEventListener('resize', () => setCardSlotSizes(fieldSize));
