export function createSlots(playingFieldSize) {
  const cardsContainer = document.querySelector('.playing-field');

  for (let i = 0; i < playingFieldSize ** 2; i++) {

    const card = document.createElement('div');
    card.classList.add('card', 'playing-field__card');

    const cardSlot = document.createElement('div');
    cardSlot.classList.add('card__slot', 'card__slot_empty');

    card.append(cardSlot);

    cardsContainer.append(card);
  }
}
