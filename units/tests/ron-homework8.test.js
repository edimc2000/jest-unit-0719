const {
  hasLowerCase,
  noZero,
  numberAndSquare,
  containsValue,
  reverseSentence,
  removeStringSpecialsDigits,
  removeArraySpecialsDigits,
  getCommons,
  noXInVariables,
} = require('../units/ron-homework8');

let givens = [];
let expected = [];

test('Task 1: has upper case', () => {
  givens = ["", "JAVASCRIPT", "hello", "125$", "  a "];
  expected = [false, false, true, false, true];
   
  for (const [index, element] of givens.entries()) expect(hasLowerCase(element)).toBe(expected[index]);
})

test('Task 2 no zero:', () => {
  givens = [[1], [1, 1, 10], [0, 1, 10], [0, 0, 0], [10, 100, 0]];
  expected = [[1], [1, 1, 10], [1, 10], [], [10, 100]];

  for (const [index, element] of givens.entries()) expect(noZero(element)).toStrictEqual(expected[index]);
})

test('Task 3 number and square', () => {
  givens = [[1, 2, 3], [0, 3, -6], [1, 4], [0, 0, 0], [0, 1, -10]];
  expected = [[[1, 1], [2, 4], [3, 9]], [[0, 0], [3, 9], [-6, 36]], [[1,1], [4, 16]], [[0, 0], [0, 0], [0, 0]], [[0, 0], [1, 1], [-10, 100]]];

  for (const [index, element] of givens.entries()) expect(numberAndSquare(element)).toStrictEqual(expected[index]);
})

test('Task 4 contains value', () => {
  givens = [
    [["abc", "foo", "javascript"], "hello"],
    [["abc", "def", "123"], "Abc"],
    [["abc", "def", "123", "Javascript", "Hello"], "123"]
  ];
  expected = [false, false, true];

  for (const [index, element] of givens.entries()) expect(containsValue(...element)).toBe(expected[index]);
})

test('Task 5 reverse sentence', () => {
  givens = ["Hello", "Javascript is fun", "This is a sentence"];
  expected = ["There is not enough words!", "Fun is javascript", "Sentence a is this"];

  for (const [index, element] of givens.entries()) expect(reverseSentence(element)).toBe(expected[index]);
})

test('Task 6 remove string specials digits', () => {
  givens = ["123Javascript #%$is fun", "Cypress", "Automation123#$%"];
  expected = ["Javascript is fun", "Cypress", "Automation"];

  for (const [index, element] of givens.entries()) expect(removeStringSpecialsDigits(element)).toBe(expected[index]);
})

test('Task 7 remove array specials digits', () => {
  givens = [["123Javascript", "#$%is", "fun"], ["Cypress", "123$%", "###"], ["Automation", "123#$%tool"]];
  expected = [["Javascript", "is", "fun"], ["Cypress", "", ""], ["Automation", "tool"]];

  for (const [index, element] of givens.entries()) expect(removeArraySpecialsDigits(element)).toStrictEqual(expected[index]);
})

test('Task 8 get commons', () => {
  givens = [[["Javascript", "is", "fun"], ["abc", "xyz", "123"]], [["Javascript", "is", "fun"], ["Javascript", "C#", "Python"]], [["Javascript", "C#", "C#"], ["Python", "C#", "C++"]]];
  expected = [[], ["Javascript"], ["C#"]];

  for (const [index, element] of givens.entries()) expect(getCommons(...element)).toStrictEqual(expected[index]);
})

<<<<<<< HEAD
=======
//test 9
>>>>>>> e0b38bd5292e47323af9279114ef35857db02536
test('Task 9 no x in variables', () => {
  givens = [["abc", 123, "#$%"], ["xyz", 123, "#$%"], ["x", 123, "#$%"], ["xyXyxy", "Xx", "ABC"]];
  expected = [["abc", 123, "#$%"], ["yz", 123, "#$%"], [123, "#$%"], ["yyy", "ABC"]];

  for (const [index, element] of givens.entries()) expect(noXInVariables(element)).toStrictEqual(expected[index]);
})