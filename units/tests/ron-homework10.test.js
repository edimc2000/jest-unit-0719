const {
    calculateTotalPrice1,
    calculateTotalPrice2,
    nthWord,
    isArmstrong,
    reverseNumber,
    doubleOrTriple,
    splitString
} = require('../units/ron-homework10');

let givens = [];
let expected = [];

test('Task 1: Calculate total price', () => {
    given = [
        {Apple: 3, Mango: 1},
        {Apple: 2, Pineapple: 1, Orange: 3},
        {Apple: 0, Mango: 0, Orange: 0},
        {Apple: 1, Pineapple:1, Orange: 0, Mango: 1}
    ];
    expected = [10.99, 19.12, 0, 12.24];

    for (const [index, element] of given.entries()) expect(calculateTotalPrice1(element)).toBe(expected[index]);
});

test('Task 2: Calculate total price with discount', () => {
    givens = [
        {Apple: 3, Mango: 5},
        {Apple: 4, Mango: 8, Orange: 3},
        {Apple: 0, Pineapple: 0, Orange: 0},
        {Apple: 4, Pineapple: 1, Orange: 1, Mango: 3}
    ];
    expected = [24.96, 45.81, 0, 29.51];

    for (const [index, element] of givens.entries()) expect(calculateTotalPrice2(element)).toBe(expected[index]);
});

test('Task 3: Returning nth word in a string', () => {
    givens = [
        ["I like programming languages", 2],
        ["QA stands for Quality Assurance", 4],
        ["Hello World", 3],
        ["Javascript", 1],
        ["", 1]
    ];
    expected = ["like", "Quality", "", "Javascript", ""];

    for (const [index, element] of givens.entries()) expect(nthWord(...element)).toBe(expected[index]);
});

test('Task 4: Is Armstrong?', () => {
    givens = [153, 123, 1634, 153, 1111];
    expected = [true, false, true, true, false];

    for (const [index, element] of givens.entries()) expect(isArmstrong(element)).toBe(expected[index]);
});

test('Task 5: Reversed number', () => {
    givens = [371, 123, 12, 0, 111];
    expected = [173, 321, 21, 0, 111];

    for (const [index, element] of givens.entries()) expect(reverseNumber(element)).toBe(expected[index]);
});

test('Task 6: Double or Tripple?', () => {
    givens = [
        [[1, 5, 10], true],
        [[3, 7, 2], false],
        [[-1, -2], true],
        [[0], false],
        [[-1, 0, 1], true]
    ];
    expected = [
        [2, 10, 20],
        [9, 21, 6],
        [-2, -4],
        [0],
        [-2, 0, 2]
    ];

    for (const [index, element] of givens.entries()) expect(doubleOrTriple(...element)).toStrictEqual(expected[index]);
});

test('Task 7: Split by given number', () => {
    givens = [
        ["JavaScript", 5],
        ["Java", 2],
        ["Automation", 3],
        ["Hello", 6],
        ["12", 1]
    ];
    expected = ["JavaS cript", "Ja va", "", "", "1 2"];

    for (const [index, element] of givens.entries()) expect(splitString(...element)).toBe(expected[index]);
})

