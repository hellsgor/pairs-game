function shuffle(mustBeShuffleArray) {
  for (let i = mustBeShuffleArray.length - 1; i > 0; i--) {
    let temp = mustBeShuffleArray[i];
    let random = Math.floor(Math.random() * (i + 1));
    mustBeShuffleArray[i] = mustBeShuffleArray[random];
    mustBeShuffleArray[random] = temp;
  }
  return mustBeShuffleArray;
}
