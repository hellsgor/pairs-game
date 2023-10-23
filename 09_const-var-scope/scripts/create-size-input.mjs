import {createElement} from "./create-element.mjs";
import {
  DEFAULT_PLAYING_FIELD_SIZE,
  MAX_PLAYING_FIELD_SIZE,
  MIN_PLAYING_FIELD_SIZE,
  SIZE_INPUT_ID
} from "./consts/index.js";
import {setCustomFieldSize} from "./set-custom-field-size.mjs";

export function createSizeInput() {
  const sizeInputWrapper = createElement('div',
    ['menu__size-input-wrapper', 'size-input']);
  const label = createElement(
    'label',
    ['size-input__label', 'heading-2'],
    'Введите размер стороны поля:');
  const input = createElement('input', 'size-input__input');
  const infoEven = createElement('span', 'size-input__info-item',
    'Сторона поля может быть равна только чётному числу. ');
  const infoMin = createElement('span', 'size-input__info-item',
    `Минимальный размер стороны — ${MIN_PLAYING_FIELD_SIZE}. `);
  const infoMax = createElement('span', 'size-input__info-item',
    `Максимальный размер стороны — ${MAX_PLAYING_FIELD_SIZE}.`);
  const info = createElement(
    'div', ['size-input__info', 'menu__paragraph']
  );

  input.setAttribute('type', 'number');
  input.setAttribute('id', SIZE_INPUT_ID);
  label.setAttribute('for', SIZE_INPUT_ID);

  input.value = DEFAULT_PLAYING_FIELD_SIZE;

  input.addEventListener('change', () => {
    if (input.value > MAX_PLAYING_FIELD_SIZE
      || input.value < MIN_PLAYING_FIELD_SIZE
      || input.value % 2 !== 0) {
      input.value = DEFAULT_PLAYING_FIELD_SIZE;
      info.querySelectorAll('.size-input__info-item_error').forEach((infoItem) =>
        infoItem.classList.remove('size-input__info-item_error'));
    }
    setCustomFieldSize();
  })
  input.addEventListener('input', () => {
    if (input.value % 2 !== 0) {
      infoEven.classList.add('size-input__info-item_error');
    } else if (infoEven.classList.contains('size-input__info-item_error')) {
      infoEven.classList.remove('size-input__info-item_error')
    }
    if (input.value < MIN_PLAYING_FIELD_SIZE) {
      infoMin.classList.add('size-input__info-item_error');
    } else if (infoMin.classList.contains('size-input__info-item_error')) {
      infoMin.classList.remove('size-input__info-item_error')
    }
    if (input.value > MAX_PLAYING_FIELD_SIZE) {
      infoMax.classList.add('size-input__info-item_error');
    } else if (infoMax.classList.contains('size-input__info-item_error')) {
      infoMax.classList.remove('size-input__info-item_error')
    }
  })

  label.append(input);

  info.append(infoEven);
  info.append(infoMin);
  info.append(infoMax);

  sizeInputWrapper.append(label);
  sizeInputWrapper.append(info);

  return sizeInputWrapper;
}
