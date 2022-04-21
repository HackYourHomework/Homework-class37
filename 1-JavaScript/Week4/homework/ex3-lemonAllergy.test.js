'use strict';

const fruitBasket = [
  'apple',
  'lemon',
  'grapefruit',
  'lemon',
  'banana',
  'watermelon',
  'lemon',
];

// ! Function under test
function sanitizeFruitBasket(fruitBasket, fruitToFilterOut) {
  return fruitBasket.filter((fruit) => fruit !== fruitToFilterOut);
}

// ! Unit tests (using Jest)
describe('sanitizeFruitBasket', () => {
  test('should take two parameters', () => {
    expect(sanitizeFruitBasket).toHaveLength(2);
  });

  test('should not modify the original `fruitBasket` array', () => {
    // Save the original contents of the fruit basket
    const originalFruitBasketContents = [...fruitBasket];
    expect(originalFruitBasketContents).not.toEqual(
      sanitizeFruitBasket(fruitBasket, 'lemon')
    );
  });

  test('should return a new array that does not include the unwanted `lemon`', () => {
    expect(sanitizeFruitBasket(fruitBasket, 'lemon')).not.toContain('lemon');
  });
});
