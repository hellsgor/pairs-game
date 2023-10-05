import {createElement} from './create-element.mjs';
import {createContentBlock} from "./create-content-block.mjs";
import * as CONSTS from './consts/index.js';

export function createMenuTextContent() {
  // ----- добавление контента в панель с текстом (menu) ------ начало
  const menuTextContent = createElement('div', 'menu__text-content');
  const menuTextStart = createContentBlock(
    'menu__text-start',
    3,
    CONSTS.RULES_TEXT_START_TITLE,
    [CONSTS.RULES_TEXT_START_TEXT],
  );
  const menuTextGameProgress = createContentBlock(
    'menu__text-progress',
    3,
    CONSTS.RULES_TEXT_GAME_PROGRESS_TITLE,
    [CONSTS.RULES_TEXT_GAME_PROGRESS_TEXT],
  );
  const menuTextEnd = createContentBlock(
    'manu__text-end',
    3,
    CONSTS.RULES_TEXT_END_TITLE,
    [CONSTS.RULES_TEXT_END_TEXT],
  );
  // ----- добавление контента в панель с текстом (menu) ------ конец

  // ----- добавление контента в панель с текстом ------ начало
  menuTextContent.append(createElement('p', ['menu__title', 'heading-1'], CONSTS.GAME_TITLE));
  menuTextContent.append(createElement('p', 'menu__description', CONSTS.GAME_DESCRIPTION));
  menuTextContent.append(menuTextStart);
  menuTextContent.append(menuTextGameProgress);
  menuTextContent.append(menuTextEnd);
  // ----- добавление контента в панель с текстом ------ конец

  return menuTextContent;
}
