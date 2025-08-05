const {
    findMedian,
    calculateFactorial,
    calculateGCD,
    calculateLCM
} = require('../units/ron-homework17');

let givens = [];
let expected = [];

test('Task 1: Find Median', () => {
    givens = [
        [[1, 3], [2]],
        [[1, 2], [3, 4]],
        [[4], [3]],
        [[4], []],
        [[0], [0, 1]]
    ];
    expected = [2, 2.5, 3.5, 4, 0];

    for (const [index, element] of givens.entries()) expect(findMedian(...element)).toBe(expected[index]);
})

test('Task 2: Calculate factorial', () => {
    givens = [0, 1, 5, 6, 10, 4];
    expected = [1, 1, 120, 720, 3628800, 24];

    for (const [index, element] of givens.entries()) expect(calculateFactorial(element)).toBe(expected[index]);
})

test('Task 3: Calculate Greatest common denominator', () => {
    givens = [
        [8, 12],
        [17, 5],
        [48, 18],
        [0, 5],
        [21, 14],
        [60, 48]
    ];
    expected = [4, 1, 6, 5, 7, 12];

    for (const [index, element] of givens.entries()) expect(calculateGCD(...element)).toBe(expected[index]);
})

test('Task 4: Calculat Least common denominator', () => {
    givens = [
        [8, 12],
        [17, 5],
        [48, 18],
        [0, 5],
        [21, 14],
        [60, 48]
    ];
    expected = [24, 85, 144, 0, 42, 240];

    for (const [index, element] of givens.entries()) expect(calculateLCM(...element)).toBe(expected[index]);
})