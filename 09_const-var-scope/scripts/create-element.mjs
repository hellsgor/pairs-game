import {pluralizer} from "./pluralizer.mjs";

export function createElement(
  tagName,
  className,
  content = '',
  single = '',
  plural = '',
  pluralGreaterThan4 = ''
) {
  const element = document.createElement(tagName);
  element.classList.add(className);

  if (single && plural && pluralGreaterThan4) {
    element.textContent = pluralizer(content, single, plural, pluralGreaterThan4);
  } else {
    element.textContent = content;
  }

  return element;
}
