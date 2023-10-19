import {
  DEFEAT_ICON,
  DEFEAT_TEXT,
  MENU_MESSAGE_ID,
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
}
