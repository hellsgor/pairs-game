import {shuffle} from './scripts/shuffle.mjs';
import {createNumbersArray} from './scripts/create-number-array.mjs';
import {prepare} from "./scripts/prepare.mjs";

const numbersArray = shuffle(createNumbersArray(4));

document.addEventListener('DOMContentLoaded', () => {
  prepare();
})
