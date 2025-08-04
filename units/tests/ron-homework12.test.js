const {
    makeNegative,
    isSumEvenOrOdd,
    decimal2,
    myPow,
    findLongestWord
} = require('../units/ron-homework12');

let givens = [];
let expected = [];

test('Task 1: Make Negative', () => {
    givens = [10, -7, 0, 0.45];
    expected = [-10, -7, 0, -0.45];

    for (const [index, element] of givens.entries()) expect(makeNegative(element)).toBe(expected[index]);
})

test('Task 2: Is Sum even or odd?', () => {
    givens = [
        [0, 1, 4],
        [0, -1, -5],
        [0, 0, 0],
        [7, 1, 9],
        [1, 1, 1]
    ];
    expected = ['odd', 'even', 'even', 'odd', 'odd'];

    for (const [index, element] of givens.entries()) expect(isSumEvenOrOdd(...element)).toBe(expected[index]);
})

test('Test 3: Return decimal', () => {
    givens = [
        [94.356, 8.9752],
        [76.62, 128.4, 84],
        [20987, 3.53245, 12.345, 32.9],
        [],
        [4.35623, 8.9742]
    ];
    expected = [
        [94.36, 8.98],
        [76.62, 128.4, 84],
        [20987, 3.53, 12.35, 32.90],
        [],
        [4.36, 8.97]
    ];

    for (const [index, element] of givens.entries()) expect(decimal2(element)).toStrictEqual(expected[index]);
})

test('Task 4: myPow', () => {
    givens = [
        [3, 3],
        [10, 1],
        [100, 0],
        [1, 1],
        [4, 2],
        [0, 0],
        [5, 3]
    ];
    expected = [27, 10, 1, 1, 16, 1, 125];

    for (const [index, element] of givens.entries()) expect(myPow(...element)).toBe(expected[index]);
})

test('Task 5: Find longest word', () => {
    givens = [
        'The quick brown fox jumped over the lazy dog',
        'This is a sample string for testing',
        'One two ten',
        '',
        '       '
    ];
    expected = [
        'jumped',
        'testing',
        'One',
        '',
        ''
    ];

    for (const [index, element] of givens.entries()) expect(findLongestWord(element)).toBe(expected[index]);
})

