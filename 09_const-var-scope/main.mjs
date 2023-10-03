import {shuffle} from './scripts/shuffle.mjs';
import {createNumbersArray} from './scripts/create-number-array.mjs';

const numbersArray = shuffle(createNumbersArray(4));
console.log(numbersArray);

// Этап 3. Используйте две созданные функции для создания массива перемешанными номерами. На основе этого массива вы можете создать DOM-элементы карточек. У каждой карточки будет свой номер из массива произвольных чисел. Вы также можете создать для этого специальную функцию. count - количество пар.
// function startGame(count) {}
