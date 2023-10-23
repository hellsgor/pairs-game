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

// константы текста блока сообщений
export const DEFEAT_TEXT = 'К сожалению, вы открыли не все карточки. В следующий раз повезёт';
export const WIN_TEXT = 'Победа! Вы открыли все карточки';
export const MESSAGE_BLOCK_HEADING = 'Партия завершена';
export const WIN_ICON = '🎉';
export const DEFEAT_ICON = '😢';

// константы размера игрового поля
export const DEFAULT_PLAYING_FIELD_SIZE = 4;
export const MIN_PLAYING_FIELD_SIZE = 2;
export const MAX_PLAYING_FIELD_SIZE = 10;

// константы времени
export const DEFAULT_ROUND_DURATION = 1;

// elements IDs
export const MENU_ID = 'menu';
export const FIELD_SIZE_COUNTER_ID = 'field-size-counter';
export const FIELD_SIZE_COUNTER_INCREASE_BUTTON_ID = 'field-size-counter-increase-button';
export const FIELD_SIZE_COUNTER_DECREASE_BUTTON_ID = 'field-size-counter-decrease-button';
export const PLAYING_FIELD_ID = 'playing-field';
export const START_BUTTON_ID = 'start-button';
export const END_BUTTON_ID = 'end-button';
export const START_MENU_ID = 'start-menu';
export const MENU_CONTROLS_ID = 'menu-controls';
export const MENU_MESSAGE_ID = 'menu-message';
export const ACCORDION_COMPONENT_ID = 'accordion';
export const ACCORDION_SUMMERY_ID = 'accordion__summary';
export const ACCORDION_DETAILS_ID = 'accordion__details';
export const MENU_TIMER_ID = 'menu-timer';
export const SIZE_INPUT_ID = 'size-input';

// errors texts
export const ODD_FIELD_SIZE_ERROR_TEXT = 'Размер стороны поля должен быть чётным';
export const ARRAY_LENGTH_DO_NOT_MATCH = ' Длинна массива слотов и длинна массива чисел не совпадают';

// svg
export const ARROW_SVG = '<svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" fill="none" viewBox="0 0 24 24"><path fill="#0F0F0F" d="M5.707 9.71a1 1 0 0 0 0 1.415l4.892 4.887a2 2 0 0 0 2.828 0l4.89-4.89a1 1 0 1 0-1.414-1.415l-4.185 4.186a1 1 0 0 1-1.415 0L7.121 9.71a1 1 0 0 0-1.414 0Z"/></svg>';
