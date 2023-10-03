export function createNumbersArray(fieldSize) {
  const cardsValues = [];
  for (let i = 1; i <= fieldSize; i++) {
    cardsValues.push(i);
    cardsValues.push(i);
  }
  return cardsValues;
}
