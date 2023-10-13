import {createElement} from "./create-element.mjs";

export function createCard(slot, number) {
  slot.append(createElement(
    'div',
    ['card__exactly-card', 'card__exactly-card_back']
  ));
  slot.append(createElement(
    'div',
    ['card__exactly-card', 'card__exactly-card_front', 'card__exactly-card_hidden']
  ));
  slot.addEventListener('click', () => {
    console.log('click to card');
  })
}
