import {shuffle} from './scripts/shuffle.mjs';
import {createNumbersArray} from './scripts/create-number-array.mjs';
import {prepare} from "./scripts/prepare.mjs";

import {
  DEFAULT_PLAYING_FIELD_SIZE as fieldSize
} from "./scripts/consts/index.js";
import {setCardSlotSizes} from "./scripts/set-card-slot-sizes.mjs";


const numbersArray = shuffle(createNumbersArray(fieldSize));

document.addEventListener('DOMContentLoaded', () => {
  prepare(fieldSize);


})

window.addEventListener('resize', () => setCardSlotSizes(fieldSize));
