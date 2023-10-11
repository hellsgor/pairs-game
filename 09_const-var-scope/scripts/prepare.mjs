import {createElement} from "./create-element.mjs";
import {HIDDEN_TITLE, PLAYING_FIELD_ID} from "./consts/index.js";
import {setCardSlotSizes} from "./set-cards-size.mjs";
import {createSlots} from "./create-slots.mjs";
import {createMenuTextContent} from './create-menu-text-content.mjs';
import {createSizeCounter} from "./create-size-counter.mjs";

export function prepare(fieldSize) {
  const body = document.querySelector('body');
  const container = createElement('div', 'container');
  const menu = createElement('div', 'menu');
  const playingField = createElement('div', 'playing-field');
  const controls = createElement('div', 'menu__controls');
  const sizeCounter = createSizeCounter();
  const startButton = createElement('button', ['menu__start-button', 'button', 'button_primary', 'button_big'], 'Начать игру');
  const menuTextContent = createMenuTextContent();

  body.classList.add('body-background');
  body.classList.add('body-custom');

  startButton.setAttribute('id', 'start-button');
  playingField.setAttribute('id', PLAYING_FIELD_ID);

  menu.append(createElement('h1', 'visually-hidden', HIDDEN_TITLE));
  menu.append(menuTextContent);
  menu.append(sizeCounter);
  menu.append(startButton);
  menu.append(controls);

  container.append(menu);
  container.append(playingField);
  body.append(container);

  createSlots(fieldSize);
  setCardSlotSizes(fieldSize);
}
