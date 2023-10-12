import {
  DEFAULT_PLAYING_FIELD_SIZE,
  FIELD_SIZE_COUNTER_DECREASE_BUTTON_ID,
  FIELD_SIZE_COUNTER_ID,
  FIELD_SIZE_COUNTER_INCREASE_BUTTON_ID,
  MAX_PLAYING_FIELD_SIZE,
  MIN_PLAYING_FIELD_SIZE
} from "./consts/index.js";
import {createSlots} from "./create-slots.mjs";
import {setCardSlotSizes} from "./set-cards-size.mjs";

export function setCustomFieldSize(event) {
  event.preventDefault();

  const counter = event.target.parentElement
    .querySelector(`#${FIELD_SIZE_COUNTER_ID}`);
  const counterNum = (counter.dataset && counter.dataset.counterNumber)
    ? Number(counter.dataset.counterNumber)
    : DEFAULT_PLAYING_FIELD_SIZE;
  let customFieldSize;

  if (event.target.getAttribute('id') === FIELD_SIZE_COUNTER_INCREASE_BUTTON_ID) {
    counterNum + 2 <= MAX_PLAYING_FIELD_SIZE
      ? (() => {
        let increaseCounterNum = counterNum + 2;
        counter.dataset.counterNumber = increaseCounterNum.toString();
        counter.innerText = `${increaseCounterNum} x ${increaseCounterNum}`;
        customFieldSize = increaseCounterNum;
        event.target.parentElement
          .querySelector(`#${FIELD_SIZE_COUNTER_DECREASE_BUTTON_ID}`)
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
        customFieldSize = decreaseCounterNum;
        event.target.parentElement
          .querySelector(`#${FIELD_SIZE_COUNTER_INCREASE_BUTTON_ID}`)
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

  createSlots(customFieldSize);
  setCardSlotSizes(customFieldSize);
}
