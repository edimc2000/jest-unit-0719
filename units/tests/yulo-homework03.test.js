const {
  isAverage50OrMore,
  numberMatch,
  hasA,
  doubleOrTripleWord,
  firstWord,
  lastWord,
  firstLastWord,
  startVowel,
  swap4,
  swapFirstLastWord
} = require('../units/yulo-homework03');

//Task-1
describe('isAverage50OrMore', () => {
  test.each([
    [[20, 70, 25], false],
    [[65, 80, 90], true]
  ])('(%p) => %p', (input, expected) => {
    expect(isAverage50OrMore(...input)).toBe(expected);
  });
});


//Task-2
describe('numberMatch', () => {
  test.each([
    [[3, 3, 3], 'TRIPLE MATCH'],
    [[1, 3, 3], 'DOUBLE MATCH'],
    [[1, 2, 3], 'NO MATCH'],
    [[1, 1, 2], 'DOUBLE MATCH']
  ])('(%p) => %p', (input, expected) => {
    expect(numberMatch(...input)).toBe(expected);
  });
});


//Task-3
describe('hasA', () => {
  test.each([
    ['Tech', false],
    ['Global', true],
    ['', false],
    ['Apple', true]
  ])('(%p) => %p', (input, expected) => {
    expect(hasA(input)).toBe(expected);
  });
});


//Task-4
describe('doubleOrTripleWord', () => {
  test.each([
    ['Tech', 'TechTechTech'],
    ['Apple', 'AppleApple'],
    ['', ''],
    [' ', ' '],
    ['1', '11'],
    ['22', '222222']
  ])('(%p) => %p', (input, expected) => {
    expect(doubleOrTripleWord(input)).toBe(expected);
  });
});


//Task-5
describe('firstWord', () => {
  test.each([
    ['Hello World', 'Hello'],
    ['I like JavaScript', 'I'],
    ['Hello', 'Hello'],
    ['', ''],
    ['  ', '']
  ])('(%p) => %p', (input, expected) => {
    expect(firstWord(input)).toBe(expected);
  });
});


//Task-6
describe('lastWord', () => {
  test.each([
    ['Hello World', 'World'],
    ['I like JavaScript', 'JavaScript'],
    ['Hello', 'Hello'],
    ['', ''],
    ['  ', '']
  ])('(%p) => %p', (input, expected) => {
    expect(lastWord(input)).toBe(expected);
  });
});


//Task-7
describe('firstLastWord', () => {
  test.each([
    ['Hello World', 'HelloWorld'],
    ['I like JavaScript', 'IJavaScript'],
    ['Hello', 'Hello'],
    ['', ''],
    ['  ', '']
  ])('(%p) => %p', (input, expected) => {
    expect(firstLastWord(input)).toBe(expected);
  });
});


//Task-8
describe('startVowel', () => {
  test.each([
    ['Hello', false],
    ['Apple', true],
    ['orange', true],
    ['', false],
    ['  ', false],
    ['123', false]
  ])('(%p) => %p', (input, expected) => {
    expect(startVowel(input)).toBe(expected);
  });
});


//Task-9
describe('swap4', () => {
  test.each([
    ['abc', ''],
    ['JavaScript', 'riptScJava'],
    ['TechGlobal', 'obalGlTech'],
    ['', ''],
    ['  ', ''],
    ['Apple', '']
  ])('(%p) => %p', (input, expected) => {
    expect(swap4(input)).toBe(expected);
  });
});


//Task-10
describe('swapFirstLastWord', () => {
  test.each([
    ['Hello World', 'World Hello'],
    ['I like JavaScript', 'JavaScript like I'],
    ['foo bar foo bar', 'bar bar foo foo'],
    ['', ''],
    ['  ', ''],
    ['Hello', ''],
    ['Hello ', '']
  ])('(%p) => %p', (input, expected) => {
    expect(swapFirstLastWord(input)).toBe(expected);
  });
});