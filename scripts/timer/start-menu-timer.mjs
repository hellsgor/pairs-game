import {DEFAULT_ROUND_DURATION} from "../consts/index.js";
import {startTimer} from "./startTimer.mjs";

export function startMenuTimer(customDuration = 0, gameMustBeOver) {
  const timer = document.getElementById('menu-timer');
  const minutes = timer.querySelector('.timer__minutes');
  const seconds = timer.querySelector('.timer__seconds');
  const separator = timer.querySelector('.timer__separator');

  delete timer.dataset.gameIsOver;
  minutes.innerText = '00';
  seconds.innerText = '00';

  minutes.textContent = (customDuration && customDuration > 0)
    ? (customDuration < 10 && `${customDuration}`.length < 2)
      ? `0${customDuration}`
      : `${customDuration}`
    : (DEFAULT_ROUND_DURATION < 10 && `${DEFAULT_ROUND_DURATION}`.length < 2) ?
      `0${DEFAULT_ROUND_DURATION}`
      : `0${DEFAULT_ROUND_DURATION}`;

  return startTimer(timer, minutes, seconds, separator, gameMustBeOver);
}
