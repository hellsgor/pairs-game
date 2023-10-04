import {pluralizer} from "./pluralizer.mjs";

export function createElement(
  tagName,
  classNames,
  content = '',
  single = '',
  plural = '',
  pluralGreaterThan4 = ''
) {
  const element = document.createElement(tagName);


  if (Array.isArray(classNames)) {
    classNames.forEach(item => {
      element.classList.add(item);
    })
  } else {
    element.classList.add(classNames);
  }


  if (single && plural && pluralGreaterThan4) {
    element.textContent = pluralizer(content, single, plural, pluralGreaterThan4);
  } else {
    element.textContent = content;
  }

  return element;
}
