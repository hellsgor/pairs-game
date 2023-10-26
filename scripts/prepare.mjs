import {createElement} from "./create-element.mjs";
import {
  END_BUTTON_ID,
  HIDDEN_TITLE,
  MENU_CONTROLS_ID,
  MENU_ID,
  MENU_MESSAGE_ID,
  PLAYING_FIELD_ID,
  START_BUTTON_ID,
  START_MENU_ID
} from "./consts/index.js";
import {setCardSlotSizes} from "./set-cards-size.mjs";
import {createSlots} from "./create-slots.mjs";
import {createMenuTextContent} from './create-menu-text-content.mjs';
import {createAccordions} from "./accordion/create-accordion.mjs";
import {createTimer} from "./timer/create-timer.mjs";
import {createMessage} from "./message/create-message.mjs";
import {createSizeInput} from "./create-size-input.mjs";
import {createSizeCounter} from "./create-size-counter.mjs";

export function prepare(fieldSize) {
  const body = document.querySelector('body');
  const container = createElement('div', 'container');
  const menu = createElement('div', 'menu');
  const playingField = createElement('div', 'playing-field');
  const startMenu = createElement('div', 'menu__start-menu');
  const controls = createElement('div', ['menu__controls', 'visually-hidden']);
  const sizeCounter = createSizeCounter();
  const sizeInput = createSizeInput();
  const startButton = createElement('button', ['menu__start-button', 'button', 'button_primary', 'button_big'], 'Начать партию');
  const endButton = createElement('button', ['menu__end-button', 'button', 'button_secondary', 'button_big'], 'Завершить партию');
  const menuTextContent = createMenuTextContent();
  const timer = createTimer();
  const timerBlock = createElement('div', 'menu__timer-block');
  const menuTimerText = createElement('h2', 'menu__timer-text', 'До завершения партии осталось:');
  const messageBlock = createMessage();

  body.classList.add('body-background');
  body.classList.add('body-custom');

  menu.setAttribute('id', MENU_ID);
  startButton.setAttribute('id', START_BUTTON_ID);
  endButton.setAttribute('id', END_BUTTON_ID);
  playingField.setAttribute('id', PLAYING_FIELD_ID);
  startMenu.setAttribute('id', START_MENU_ID);
  controls.setAttribute('id', MENU_CONTROLS_ID);
  messageBlock.setAttribute('id', MENU_MESSAGE_ID);

  messageBlock.classList.add('visually-hidden');
  timer.classList.add('menu__timer');

  timerBlock.append(menuTimerText);
  timerBlock.append(timer);

  controls.append(timerBlock);
  controls.append(endButton);

  startMenu.append(sizeCounter);
  // для использования счётчика
  // или
  // startMenu.append(sizeInput);
  // для использования input (в соответствии с ТЗ)
  // для управления количеством карточек на поле
  startMenu.append(startButton);

  menu.append(createElement('h1', 'visually-hidden', HIDDEN_TITLE));
  menu.append(menuTextContent);
  menu.append(startMenu);
  menu.append(controls);
  menu.append(messageBlock);

  container.append(menu);
  container.append(playingField);
  body.append(container);

  createSlots(fieldSize);
  setCardSlotSizes(fieldSize);
  createAccordions();
}
