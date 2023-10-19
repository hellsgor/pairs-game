import {createElement} from "../create-element.mjs";
import {MESSAGE_BLOCK_HEADING, WIN_ICON} from "../consts/index.js";

export function createMessage() {
  const messageHeading = createElement('p', ['message__heading', 'heading-2'], MESSAGE_BLOCK_HEADING);
  const messageIcon = createElement('span', 'message__icon', WIN_ICON);
  const messageText = createElement('p', 'message__text', 'Базовый текст сообщения при его создании');
  const messageWrapper = createElement('div', 'message__wrapper');
  const messageBlock = createElement('div', ['menu__message', 'message']);

  messageWrapper.append(messageHeading);
  messageWrapper.append(messageText);

  messageBlock.append(messageIcon);
  messageBlock.append(messageWrapper);

  return messageBlock;
}
