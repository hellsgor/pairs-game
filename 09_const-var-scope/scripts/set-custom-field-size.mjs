import {
  DEFAULT_PLAYING_FIELD_SIZE,
  MAX_PLAYING_FIELD_SIZE,
  MIN_PLAYING_FIELD_SIZE
} from "./consts/index.js";

export function setCustomFieldSize(event) {
  event.preventDefault();

  const counter = event.target.parentElement
    .querySelector('.size-counter__counter');
  const counterNum = (counter.dataset && counter.dataset.counterNumber)
    ? Number(counter.dataset.counterNumber)
    : DEFAULT_PLAYING_FIELD_SIZE;

  if (event.target.classList.contains('size-counter__increase')) {
    counterNum + 2 <= MAX_PLAYING_FIELD_SIZE
      ? (() => {
        let increaseCounterNum = counterNum + 2;
        counter.dataset.counterNumber = increaseCounterNum.toString();
        counter.innerText = `${increaseCounterNum} x ${increaseCounterNum}`;
        event.target.parentElement
          .querySelector('.size-counter__decrease')
          .removeAttribute('disabled');
        if (increaseCounterNum < MAX_PLAYING_FIELD_SIZE) {
          event.target.removeAttribute('disabled');
        } else {
          event.target.setAttribute('disabled', true);
        }
      })()
      : (() => {
        event.target.setAttribute('disabled', true);
      })()
  } else {
    counterNum - 2 >= MIN_PLAYING_FIELD_SIZE
      ? (() => {
        let decreaseCounterNum = counterNum - 2;
        counter.dataset.counterNumber = decreaseCounterNum.toString();
        counter.innerText = `${decreaseCounterNum} x ${decreaseCounterNum}`;
        event.target.parentElement
          .querySelector('.size-counter__increase')
          .removeAttribute('disabled');
        if (decreaseCounterNum > MIN_PLAYING_FIELD_SIZE) {
          event.target.removeAttribute('disabled');
        } else {
          event.target.setAttribute('disabled', true);
        }
      })()
      : (() => {
        event.target.setAttribute('disabled', true);
      })()
  }
}
