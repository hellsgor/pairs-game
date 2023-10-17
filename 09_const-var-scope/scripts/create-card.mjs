import {createElement} from "./create-element.mjs";
import {gameMove} from "./game-move.mjs";

export function createCard(slot, number) {
  const numberElement = createElement('span', 'card__number', number);
  const cardFront = createElement(
    'div',
    ['card__exactly-card', 'card__exactly-card_front', 'card__exactly-card_hidden']
  );
  cardFront.append(numberElement);
  slot.append(createElement(
    'div',
    ['card__exactly-card', 'card__exactly-card_back']
  ));
  slot.append(cardFront);
  slot.addEventListener('click', (event) => gameMove(event));
}
