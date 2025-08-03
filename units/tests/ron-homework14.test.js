const {
    repeatingX,
    isPerfectSquare,
    convertTemperature,
    sumOfEvenNumbers,
    capsOdds
} = require('../units/ron-homework14');

let givens = [];
let expected = [];

test('Task 1: Repeating X', () => {
    givens = [
        'xTechxGlobalx',
        'Hello Xx World',
        'x x',
        '',
        'xxxxx'
    ];
    expected = [false, true, false, false, true];

    for (const [index, element] of givens.entries()) expect(repeatingX(element)).toBe(expected[index]);
})

test('Task 2: Is perfect square', () => {
    givens = [25, 24, 0, 1, -1, 144];
    expected = [true, false, true, true, false, true];

    for (const [index, element] of givens.entries()) expect(isPerfectSquare(element)).toBe(expected[index]);
})

test('Task 3: Convert Temperature', () => {
    givens = [
        [100, 'Celsius'],
        [32, 'Fahrenheit'],
        [0, 'Celsius'],
        [212, 'Fahrenheit'],
        [-40, 'Celsius'],
        [-40, 'Fahrenheit'],
    ];
    expected = [212, 0, 32, 100, -40, -40];

    for (const [index, element] of givens.entries()) expect(convertTemperature(...element)).toBe(expected[index]);
})

test('Task 4: Sum of Even numbers', () => {
    givens = [
        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        [2, 4, 6, 8, 10, 12, 14, 16, 18, 20],
        [1, 3, 5, 7, 9, 11, 13, 15, 17, 19],
        [],
        [1, 2, 3, 4, 5],
        [10, 20, 30, 40, 50]
    ];
    expected = [30, 110, 0, 0, 6, 150];

    for (const [index, element] of givens.entries()) expect(sumOfEvenNumbers(element)).toBe(expected[index]);
})

test('Task 5: Capitalize odd indexes', () => {
    givens = [
        ["Hello", "World"],
        ["Jan", "Feb", "Mar", "Apr"],
        ["Apple", "Banana", "123", "456", "Peach", "Kiwi"],
        [ ],
        ["John !@#$%", "^&*() Doe"]
    ];
    expected = [
        ["Hello", "WORLD"],
        ["Jan", "FEB", "Mar", "APR"],
        ["Apple", "BANANA", "123", "456", "Peach", "KIWI"],
        [ ],
        ["John !@#$%", "^&*() DOE"]
    ];

    for (const [index, element] of givens.entries()) expect(capsOdds(element)).toStrictEqual(expected[index]);
})