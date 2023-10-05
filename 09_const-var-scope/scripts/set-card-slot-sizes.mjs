import {DEFAULT_PLAYING_FIELD_SIZE} from "./consts/index.js";

export function setCardSlotSizes(playingFieldSize = 0) {
  const cards = document.querySelectorAll('.card');
  const size = playingFieldSize ? playingFieldSize : DEFAULT_PLAYING_FIELD_SIZE;

  const fieldStyle = window.getComputedStyle(document.querySelector('.playing-field'));
  const paddings = parseInt(fieldStyle.padding) * 2;
  const borders = parseInt(fieldStyle.borderWidth) * 2;
  const gap = parseInt(fieldStyle.gap) * (size - 1);
  const fieldNetHeight = parseInt(fieldStyle.height) - paddings - borders - gap;
  const fieldNetWidth = parseInt(fieldStyle.width) - paddings - borders - gap;

  const cardHeight = Math.floor(fieldNetHeight / size);
  const cardWidth = Math.floor(fieldNetWidth / size);

  for (let card of cards) {
    card.style.height = cardHeight + 'px';
    card.style.width = cardWidth + 'px';

    const cardSlot = card.querySelector('.card__slot');
    cardSlot.style.height = cardHeight + 'px';
    cardSlot.style.width = cardHeight + 'px';
  }
}
