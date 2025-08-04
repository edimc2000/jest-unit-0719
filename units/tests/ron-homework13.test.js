const {
    countVC,
    countChars,
    maxOccurrences,
    starOut,
    romanToInt
} = require('../units/ron-homework13');

let givens = [];
let expected = [];

test('Task 1: Count Vowels and Consonants', () => {
    givens = [
        'Hello',
        'Programming',
        '123AbC',
        '123!@#xyz',
        ''
    ];
    expected = [
        {vowels: 2, consonants: 3},
        {vowels: 3, consonants: 8},
        {vowels: 1, consonants: 2},
        {vowels: 0, consonants: 3},
        {vowels: 0, consonants: 0}
    ];

    for (const [index, element] of givens.entries()) expect(countVC(element)).toStrictEqual(expected[index]);
})

test('Task 2: Count characters', () => {
    givens = [
        'Hello',
        'Programming 123',
        '123AbC!@#',
        '0987654321',
        '       ',
        ''
    ];
    expected = [
        {letters: 5},
        {letters: 11, numbers: 3},
        {letters: 3, numbers: 3, specials: 3},
        {numbers: 10},
        {},
        {}
    ];

    for (const [index, element] of givens.entries()) expect(countChars(element)).toStrictEqual(expected[index]);
})

test('Task 3: Max occurrences', () => {
    givens = [
        'Hello',
        'Occurrences',
        '   ab  ',
        '12     3       21',
        '       ',
        ''
    ];
    expected = ['l', 'c', 'a', '1', '', ''];

    for (const [index, element] of givens.entries()) expect(maxOccurrences(element)).toBe(expected[index]); 
})

test('Task 4: Removed by *', () => {
    givens = [
        'ab*cd',
        'ab**cd',
        'xm*sm*sy',
        'abc',
        '***',
        '   ',
        ''
    ];
    expected = [
        'ad',
        'ad',
        'xy',
        'abc',
        '',
        '   ',
        ''
    ];

    for (const [index, element] of givens.entries()) expect(starOut(element)).toBe(expected[index]);
})

test('Task 5: Roman Values', () => {
    givens = [
        'I',
        'IV',
        'CXII',
        'MMM',
        'MMMDCCCLXXXVIII',
        'MDCLXVI',
    ];
    expected = [1, 4, 112, 3000, 3888, 1666];

    for (const [index, element] of givens.entries()) expect(romanToInt(element)).toBe(expected[index]);
})

