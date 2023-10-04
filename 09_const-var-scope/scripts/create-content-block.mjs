import {createElement} from "./create-element.mjs";

/**
 * Функция для генерации текстового блока с заголовком и абзацами.
 *
 * @param {(string | string[])} blockClassName - класс который присвоится всему блоку;
 * @param {number} titleLevel - уровень заголовка блока;
 * @param {string} titleText - текст заголовка блока;
 * @param {string[]} paragraphs - массив текстов абзацев. Порядок важен;
 *
 * @return {HTMLDivElement} - блок с заголовком и абзацами пронумерованными в классах.
 */

export function createContentBlock(
  blockClassName,
  titleLevel,
  titleText,
  paragraphs
) {
  const contentBlock = createElement('div', blockClassName);

  const title = createElement(
    `h${titleLevel}`,
    `${blockClassName}-title`,
    titleText);
  contentBlock.append(title);

  paragraphs.forEach((p, idx) => {
    contentBlock.append(createElement(
      'p',
      [`${blockClassName}-paragraph-${idx + 1}`, 'menu__paragraph'],
      p));
  })

  return contentBlock;
}
