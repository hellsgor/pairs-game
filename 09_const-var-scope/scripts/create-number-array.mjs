export function createNumbersArray(fieldSize) {
  const cardsValues = [];
  for (let i = 1; i <= fieldSize ** 2 / 2; i++) {
    cardsValues.push(i);
    cardsValues.push(i);
  }
  return cardsValues;
}
