import {createElement} from "./create-element.mjs";
import {
  DEFAULT_PLAYING_FIELD_SIZE,
  FIELD_SIZE_COUNTER_DECREASE_BUTTON_ID,
  FIELD_SIZE_COUNTER_ID,
  FIELD_SIZE_COUNTER_INCREASE_BUTTON_ID
} from "./consts/index.js";
import {setCustomFieldSize} from "./set-custom-field-size.mjs";

export function createSizeCounter() {
  const counterWrapper = createElement('div', ['menu__size-counter', 'size-counter']);
  const counterLabel = createElement('h3', 'size-counter__label', 'Выберите размер поля:');
  const counterControls = createElement('div', 'size-counter__controls');
  const increaseButton = createElement('button', ['size-counter__increase', 'button', 'button_secondary', 'button_round', 'button_small'], '+');
  const decreaseButton = createElement('button', ['size-counter__decrease', 'button', 'button_secondary', 'button_round', 'button_small'], '-');
  const counter = createElement('p', 'size-counter__counter', `${DEFAULT_PLAYING_FIELD_SIZE} x ${DEFAULT_PLAYING_FIELD_SIZE}`);

  counter.setAttribute('id', FIELD_SIZE_COUNTER_ID);
  increaseButton.setAttribute('id', FIELD_SIZE_COUNTER_INCREASE_BUTTON_ID);
  decreaseButton.setAttribute('id', FIELD_SIZE_COUNTER_DECREASE_BUTTON_ID);

  increaseButton.addEventListener('click', (event) => setCustomFieldSize(event));
  decreaseButton.addEventListener('click', (event) => setCustomFieldSize(event));

  counterControls.append(decreaseButton);
  counterControls.append(counter);
  counterControls.append(increaseButton);

  counterWrapper.append(counterLabel);
  counterWrapper.append(counterControls);

  return counterWrapper;
}
