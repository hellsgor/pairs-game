export function startTimer(timer, minutes, seconds, separator = undefined) {
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

    if (+minutes.textContent === 0 && +seconds.textContent === 0) {
      clearInterval(thisTimer);
      clearInterval(separatorBlink)
    }
  }, 1000);

  return {
    mainTimer: thisTimer,
    separatorTimer: separatorBlink,
  }
}
