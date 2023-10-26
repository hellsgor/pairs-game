export function pluralizer(startNumber, singular, plural, pluralGreaterThan4) {
  const number = startNumber % 100;
  let persuade;
  if (number >= 11 && number <= 19) {
    persuade = pluralGreaterThan4;
  } else {
    const lastNumber = startNumber % 10;
    switch (lastNumber) {
      case (1):
        persuade = singular;
        break;
      case (2):
      case (3):
      case (4):
        persuade = plural;
        break;
      default:
        persuade = pluralGreaterThan4;
    }
  }
  return `${startNumber} ${persuade} `;
}
