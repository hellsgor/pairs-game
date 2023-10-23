import {
  DEFEAT_ICON,
  DEFEAT_TEXT,
  MENU_ID,
  MENU_MESSAGE_ID,
  START_MENU_ID,
  WIN_ICON,
  WIN_TEXT
} from "../consts/index.js";

export function messageOutput(gameResult) {
  const messageBlock = document.getElementById(MENU_MESSAGE_ID);

  messageBlock.querySelector('.message__icon')
    .innerHTML = gameResult
    ? WIN_ICON
    : DEFEAT_ICON;
  messageBlock.querySelector('.message__text')
    .innerText = gameResult
    ? WIN_TEXT
    : DEFEAT_TEXT;
  messageBlock.classList.remove('visually-hidden');

  document.getElementById(MENU_ID)
    .classList.add('menu_after-game');
  document.getElementById(START_MENU_ID)
    .classList.remove('visually-hidden');
}
