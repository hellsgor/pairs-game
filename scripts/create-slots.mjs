import {PLAYING_FIELD_ID} from "./consts/index.js";

export function createSlots(playingFieldSize) {
  const cardsContainer = document.getElementById(PLAYING_FIELD_ID);

  cardsContainer.innerHTML = '';

  for (let i = 0; i < playingFieldSize ** 2; i++) {

    const card = document.createElement('div');
    card.classList.add('card', 'playing-field__card');

    const cardSlot = document.createElement('div');
    cardSlot.classList.add('card__slot', 'card__slot_empty');

    card.append(cardSlot);

    cardsContainer.append(card);
  }
}
