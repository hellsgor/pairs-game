export const GAME_TITLE = 'Пары';
export const HIDDEN_TITLE = 'Игра в пары';
export const GAME_DESCRIPTION = 'Вам предстоит сыграть в простую игру для тренировки памяти - Пары.';

// константы текстового контента меню
export const RULES_TEXT_START_TITLE = 'Начало игры';
export const RULES_TEXT_START_TEXT = 'На странице выводится поле, например, 4 × 4, из карточек. Каждая карточка содержит цифру. Пользователь не видит цифры — карточки расположены рубашкой вверх. На поле строго по две карточки с одинаковой цифрой, чтобы они могли образовать пару. Карточки расположены в случайном порядке.';
export const RULES_TEXT_GAME_PROGRESS_TITLE = 'Ход игры';
export const RULES_TEXT_GAME_PROGRESS_TEXT = 'Игрок может нажать на любую карточку. После нажатия карточка открывается. Далее игрок может открыть вторую карточку. Если открытые карточки содержат одинаковую цифру, они остаются открытыми до конца игры. Если вторая карточка содержит отличную от первой цифру, обе карточки закрываются.';
export const RULES_TEXT_END_TITLE = 'Конец игры';
export const RULES_TEXT_END_TEXT = 'Как только игрок открыл все пары на поле, игра считается завершённой.';

// константы размера игрового поля
export const DEFAULT_PLAYING_FIELD_SIZE = 4;
export const MIN_PLAYING_FIELD_SIZE = 2;
export const MAX_PLAYING_FIELD_SIZE = 6;

// elements IDs
export const FIELD_SIZE_COUNTER_ID = 'field-size-counter';
export const FIELD_SIZE_COUNTER_INCREASE_BUTTON_ID = 'field-size-counter-increase-button';
export const FIELD_SIZE_COUNTER_DECREASE_BUTTON_ID = 'field-size-counter-decrease-button';
export const PLAYING_FIELD_ID = 'playing-field';
export const START_BUTTON_ID = 'start-button';
export const START_MENU_ID = 'start-menu';
export const MENU_CONTROLS_ID = 'menu-controls';

// errors texts
export const ODD_FIELD_SIZE_ERROR_TEXT = 'Размер стороны поля должен быть чётным';
export const ARRAY_LENGTH_DO_NOT_MATCH = ' Длинна массива слотов и длинна массива чисел не совпадают';
