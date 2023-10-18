export function startTimer(timer, minutes, seconds, separator = undefined) {
  const separatorBlink = separator
    ? setInterval(() => {
      separator.classList.toggle('timer__separator_darken');
    }, 500)
    : undefined;

  console.log(separator);
  console.log(separatorBlink);

  const menuTimer = setInterval(() => {
    if (+seconds.textContent === 0 && +minutes.textContent >= 1) {
      seconds.textContent = '60';
      --minutes.textContent;
    }

    --seconds.textContent;

    if (seconds.textContent < 10) {
      let temp = seconds.textContent;
      seconds.textContent = `0${temp}`;
    }

    if (+minutes.textContent === 0 && +seconds.textContent === 0) {
      clearInterval(menuTimer);
      clearInterval(separatorBlink)
    }
  }, 1000);
}
