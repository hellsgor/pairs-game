import {createElement} from "./create-element.mjs";
import {MENU_TIMER_ID} from "./consts/index.js";

export function createTimer() {
  const timer = createElement('div', 'timer');
  const minutes = createElement('span', 'timer__minutes', '00');
  const seconds = createElement('span', 'timer__seconds', '00');
  const separator = createElement('span', 'timer__separator', ':');

  timer.append(minutes);
  timer.append(separator);
  timer.append(seconds);

  timer.setAttribute('id', MENU_TIMER_ID);

  return timer;
}
