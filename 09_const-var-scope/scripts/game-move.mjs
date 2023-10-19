import {gameOver} from "./game-over.mjs";

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
      }))
    }

    window.setTimeout(() => {
      if (allSlots.every((slot) =>
        slot.classList.contains('card__slot_guessed'))) {
        gameOver(undefined, undefined, undefined, allSlots);
      }

      allSlots.forEach((slot) => {
        slot.classList.remove('card__slot_compare');

        if (!(slot.classList.contains('card__slot_guessed'))) {
          slot.classList.remove('card__slot_rotate');
          slot.classList.remove('card__slot_not-react');
        }
      })
    }, 500);

    comparedCards.forEach((comparedCard) => {
      delete comparedCard.dataset.compared;
    })
  }
}
