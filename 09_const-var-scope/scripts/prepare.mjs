import {createElement} from "./create-element.mjs";
import {DEFAULT_PLAYING_FIELD_SIZE, HIDDEN_TITLE} from "./consts/index.js";
import {setCardSlotSizes} from "./set-cards-size.mjs";
import {createSlots} from "./create-slots.mjs";
import {createMenuTextContent} from './create-menu-text-content.mjs';

export function prepare() {
  const body = document.querySelector('body');
  const container = createElement('div', 'container');
  const menu = createElement('div', 'menu');
  const playingField = createElement('div', 'playing-field');
  const controls = createElement('div', 'menu__controls');
  const startButton = createElement('button', ['menu__start-button', 'button'], 'Начать игру');
  const menuTextContent = createMenuTextContent();

  body.classList.add('body-background');
  body.classList.add('body-custom');

  startButton.setAttribute('id', 'start-button');

  menu.append(createElement('h1', 'visually-hidden', HIDDEN_TITLE));
  menu.append(menuTextContent);
  menu.append(startButton);
  menu.append(controls);

  container.append(menu);
  container.append(playingField);
  body.append(container);

  createSlots(DEFAULT_PLAYING_FIELD_SIZE);
  setCardSlotSizes();
}
