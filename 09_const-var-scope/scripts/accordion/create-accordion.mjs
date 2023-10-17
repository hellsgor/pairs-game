import {
  ACCORDION_COMPONENT_ID,
  ACCORDION_SUMMERY_ID,
  ARROW_SVG
} from "../consts/index.js";
import {createElement} from "../create-element.mjs";

export function createAccordions() {
  const accordionsOnPage = document
    .querySelectorAll(`.${ACCORDION_COMPONENT_ID}`);

  if (!accordionsOnPage.length) {
    return;
  }

  accordionsOnPage.forEach(item => {
    if (item.id === ACCORDION_COMPONENT_ID) {

      const accordionSummary = item.querySelector(`#${ACCORDION_SUMMERY_ID}`);
      const accordionArrowWrapper = createElement('div', 'accordion__arrow');

      accordionArrowWrapper.innerHTML = ARROW_SVG;
      accordionSummary.append(accordionArrowWrapper);

      accordionSummary.addEventListener('click', () => {
        item.classList.toggle('accordion_collapsed');
      })
    } else {
      console.error('no attribute');
    }

  });
}
