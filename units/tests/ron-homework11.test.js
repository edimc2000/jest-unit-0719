const {
    countPalindrome,
    sum,
    nthChars,
    canFormString,
    isAnagram,
    count,
    sumDigitsDouble,
    countOccurence
} = require('../units/ron-homework11');

let givens = [];
let expected = [];

test('Task 1: Count Palindrome', () => {
    givens = [
        'Mom and Dad',
        'See you at noon',
        'Kayak races attracts racecar drivers',
        '',
        'No palindrome here'
    ];
    expected = [2, 1, 2, 0, 0];

    for (const [index, element] of givens.entries()) expect(countPalindrome(element)).toBe(expected[index]);
})

test('Task 2: Sum per boolean', () => {
    givens = [
        [[1, 5, 10], true],
        [[3, 7, 2, 5, 10], false],
        [[-1, 1, -2, 2], true],
        [[0, -1, 15, 1], false],
        [[1, 2, 3, 4, -4], true]
    ];
    expected = [11, 12, -3, 0, 0];

    for (const [index, element] of givens.entries()) expect(sum(...element)).toBe(expected[index]);
})

test('Task 3: Returning every nth characters', () => {
    givens = [
        ['Java', 2],
        ['JavaScript', 5],
        ['Java', 3],
        ['Hi', 4],
        ['0123456789', 2]
    ];
    expected = ['aa', 'St', 'v', '', '13579'];

    for (const [index, element] of givens.entries()) expect(nthChars(...element)).toBe(expected[index]); 
})

test('Task 4: Can form string', () => {
    givens = [
        ['Hello', 'Hi'],
        ['programming', 'gaming'],
        ['halogen', 'hello'],
        ['CONVERSATION', 'voices rant on'],
        ['12', '123']
    ];
    expected = [false, true, false, true, false];

    for (const [index, element] of givens.entries()) expect(canFormString(...element)).toBe(expected[index]);
})

test('Task 5: Is Anagram?', () => {
    givens = [
        ['Apple', 'Peach'],
        ['listen', 'silent'],
        ['astronomer', 'moon starer'],
        ['CINEMA', 'iceman'],
        ['123', '1234']
    ];
    expected = [false, true, true, true, false];

    for (const [index, element] of givens.entries()) expect(isAnagram(...element)).toBe(expected[index]);
})

test('Task 6: Count per boolean', () => {
    givens = [
        [[1, 51, 10], true],
        [[3, 7, 2, 5, 10], false],
        [[-1, 1, -2, 2], true],
        [[0, -1, 15, 1], false],
        [[1, 2, 3, 4, -4], true]
    ];
    expected = [1, 3, 2, 3, 3];

    for (const [index, element] of givens.entries()) expect(count(...element)).toBe(expected[index]);
})

test('Task 7: Sum digits then doubles', () => {
    givens = [
        'Javascript',
        '23abc45',
        'Hi-23',
        'ab12',
        'n0numh3r3'
    ];
    expected = [-1, 28, 10, 6, 12];

    for (const [index, element] of givens.entries()) expect(sumDigitsDouble(element)).toBe(expected[index]);
})

test('Task 8: Counting Occurences', () => {
    givens = [
        ['Javascript', 'Java'],
        ['Hello', 'World'],
        ['Can I can a can', 'anc'],
        ['Hello', 'l'],
        ['IT conversations', 'IT']
    ];
    expected = [1, 0, 3, 2, 2];

    for (const [index, element] of givens.entries()) expect(countOccurence(...element)).toBe(expected[index]);
})
