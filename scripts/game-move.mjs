import {gameOver} from "./game-over.mjs";
import {MENU_TIMER_ID} from "./consts/index.js";

export function gameMove(event) {
  event.preventDefault();

  event.target.closest('.card__slot').dataset.compared = 'true';

  const comparedCards = document
    .querySelectorAll('.card__slot[data-compared = true]');

  comparedCards.forEach((card) => {
    if (!card.classList.contains('card__slot_rotate')) {
      card.classList.add('card__slot_rotate');
    }
    if (!card.classList.contains('card__slot_compare')) {
      card.classList.add('card__slot_compare');
    }
  })

  if (comparedCards.length === 2) {

    const allSlots = Array.from(
      document.getElementsByClassName('card__slot'));
    const firstNumber = +comparedCards[0]
      .querySelector('.card__number').textContent;
    const secondNumber = +comparedCards[1]
      .querySelector('.card__number').textContent;

    allSlots.forEach((slot) => {
      slot.classList.add('card__slot_not-react');
    })

    if (firstNumber === secondNumber) {
      comparedCards.forEach(((compareCard) => {
        compareCard.classList.add('card__slot_guessed');
        compareCard.classList.remove('card__slot_compare');
        delete compareCard.dataset.compared;
      }))
    }

    if (allSlots.every((slot) => slot.classList.contains('card__slot_guessed'))) {
      document.getElementById(MENU_TIMER_ID).dataset.gameIsOverFromGameMove = 'true';
      gameOver(undefined, allSlots);
    } else {
      allSlots.forEach((slot) => {
        window.setTimeout(() => {
          if (!slot.classList.contains('card__slot_guessed')) {
            slot.classList.remove('card__slot_rotate');
            slot.classList.remove('card__slot_not-react');
          }
          slot.classList.remove('card__slot_compare');
          delete slot.dataset.compared;
        }, 300);
      })
    }
  }
}
