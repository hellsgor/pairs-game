import {DEFAULT_ROUND_DURATION} from "../consts/index.js";
import {startTimer} from "./startTimer.mjs";

export function startMenuTimer(customDuration = 0) {
  const timer = document.getElementById('menu-timer');
  const minutes = timer.querySelector('.timer__minutes');
  const seconds = timer.querySelector('.timer__seconds');
  const separator = timer.querySelector('.timer__separator');

  minutes.textContent = (customDuration && customDuration > 0)
    ? `${customDuration}`
    : `${DEFAULT_ROUND_DURATION}`;

  startTimer(timer, minutes, seconds, separator);
}
