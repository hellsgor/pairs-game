export function shuffle(mustBeShuffleArray) {
  for (let i = mustBeShuffleArray.length - 1; i > 0; i--) {
    const temp = mustBeShuffleArray[i];
    const random = Math.floor(Math.random() * (i + 1));
    mustBeShuffleArray[i] = mustBeShuffleArray[random];
    mustBeShuffleArray[random] = temp;
  }
  return mustBeShuffleArray;
}
