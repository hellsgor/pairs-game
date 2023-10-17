import {createElement} from './create-element.mjs';
import {createContentBlock} from "./create-content-block.mjs";
import * as CONSTS from './consts/index.js';
import {
  ACCORDION_COMPONENT_ID,
  ACCORDION_DETAILS_ID,
  ACCORDION_SUMMERY_ID
} from './consts/index.js';

export function createMenuTextContent() {
  // ----- добавление контента в панель с текстом (menu) ------ начало
  const menuTextContent = createElement('div', 'menu__text-content');
  const menuRules = createElement('div', ['menu__rules', ACCORDION_COMPONENT_ID, 'accordion_collapsed']);
  const menuRulesSummary = createElement('div', ACCORDION_SUMMERY_ID);
  const menuRulesHeading = createElement('span', ['menu__text-content-heading', 'heading-2'], 'Правила игры');
  const menuText = createElement('div', ACCORDION_DETAILS_ID);
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

  menuRules.setAttribute('id', ACCORDION_COMPONENT_ID);
  menuRulesSummary.setAttribute('id', ACCORDION_SUMMERY_ID);
  menuText.setAttribute('id', ACCORDION_DETAILS_ID);

  // ----- добавление контента в панель с текстом ------ начало
  menuTextContent.append(createElement('p', ['menu__title', 'heading-1'], CONSTS.GAME_TITLE));
  menuTextContent.append(createElement('p', 'menu__description', CONSTS.GAME_DESCRIPTION));
  menuRulesSummary.append(menuRulesHeading);
  menuText.append(menuTextStart);
  menuText.append(menuTextGameProgress);
  menuText.append(menuTextEnd);
  menuRules.append(menuRulesSummary);
  menuRules.append(menuText);
  menuTextContent.append(menuRules);
  // ----- добавление контента в панель с текстом ------ конец

  return menuTextContent;
}
