import {gameOver} from "../game-over.mjs";

export function startTimer(
  timer,
  minutes,
  seconds,
  separator = undefined,
  gameMustBeOver = undefined) {
  const separatorBlink = separator
    ? setInterval(() => {
      separator.classList.toggle('timer__separator_darken');
    }, 500)
    : undefined;

  const thisTimer = setInterval(() => {
    if (+seconds.textContent === 0 && +minutes.textContent >= 1) {
      seconds.textContent = '60';
      --minutes.textContent;
    }

    if (minutes.textContent < 10 && minutes.textContent.length < 2) {
      let temp = minutes.textContent;
      minutes.textContent = `0${temp}`;
    }

    --seconds.textContent;

    if (seconds.textContent < 10) {
      let temp = seconds.textContent;
      seconds.textContent = `0${temp}`;
    }
  }, 1000);

  const constantCheck = setInterval(() => {
    if (+minutes.textContent === 0 && +seconds.textContent === 0) {
      clearInterval(thisTimer);
      clearInterval(separatorBlink);
      clearInterval(constantCheck);
      gameOver(undefined, undefined);
    }
    if (timer.dataset.gameIsOverFromGameMove) {
      clearInterval(thisTimer);
      clearInterval(separatorBlink);
      clearInterval(constantCheck);
    }
  }, 50);

  return {
    mainTimer: thisTimer,
    separatorTimer: separatorBlink,
  }
}
