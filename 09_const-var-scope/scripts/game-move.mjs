export function gameMove(event) {
  event.preventDefault();

  const allFronts = Array.from(
    document.getElementsByClassName('card__exactly-card_front'));
  const visibleFronts = allFronts
    .filter((cardFront) =>
      !cardFront.classList.contains('card__slot_guessed'))
    .filter((cardFront) =>
      !cardFront.classList.contains('card__exactly-card_hidden'));

  if (visibleFronts.length < 2) {
    visibleFronts.push(event.target.closest('.card__slot')
      .querySelector('.card__exactly-card_front'));
  }

  visibleFronts.forEach((front) => {
    if (front.classList.contains('card__exactly-card_hidden')) {
      front.classList.remove('card__exactly-card_hidden');

      const slot = front.closest('.card__slot');
      slot.classList.add('card__slot_rotate');
      slot.classList.add('card__slot_not-react');
      slot.classList.add('card__slot_compare');

      slot.querySelector('.card__exactly-card_back')
        .classList.add('card__exactly-card_hidden');
    }
  })

  if (visibleFronts.length === 2) {
    allFronts.forEach((front) =>
      front.closest('.card__slot').classList.add('card__slot_not-react')
    )

    const firstCardNumber = +visibleFronts[0]
      .querySelector('.card__number').textContent;
    const secondCardNumber = +visibleFronts[1]
      .querySelector('.card__number').textContent;

    if (firstCardNumber === secondCardNumber) {
      visibleFronts.forEach((front) => {
        front.classList.add('card__slot_guessed');
      })
    }

    window.setTimeout(() => {
      if (allFronts.every((front) =>
        front.classList.contains('card__slot_guessed'))) {
        console.log('you win');
      }

      allFronts.forEach((front) => {
        const slot = front.closest('.card__slot');
        slot.classList.remove('card__slot_compare');

        if (!front.classList.contains('card__slot_guessed')) {
          front.classList.add('card__exactly-card_hidden');
          slot.classList.remove('card__slot_rotate');
          slot.classList.remove('card__slot_not-react');
          slot.querySelector('.card__exactly-card_back')
            .classList.remove('card__exactly-card_hidden');
        }
      })
    }, 1500);
  }
}
