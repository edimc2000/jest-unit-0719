const {
    toInitials,
    hasNumbers,
    elementLength,
    isArraySumEvenOrOdd,
    reverse,
    reveerseWords
} = require('../units/ron-homework16');


let givens = [];
let expected = [];

test('Task 1: Full Name Initials', () => {
    givens = [
        'Joe Doe',
        'Alex Reyes',
        'Tom Cruise',
        'Bruce Willis',
        'Ja Le'
    ];
    expected = [
        'J. D.',
        'A. R.',
        'T. C.',
        'B. W.',
        'J. L.'
    ];

    for (const [index, element] of givens.entries()) expect(toInitials(element)).toBe(expected[index]);
})

test('Task 2: Has numbers', () => {
    givens = [
        '',
        'John is 34 years old',
        'Hello 3',
        '125$',
        '   a   ',
        '       ',
        '!@#$%^&*()_+' 
    ];
    expected = [false, true, true, true, false, false, false];

    for (const [index, element] of givens.entries()) expect(hasNumbers(element)).toBe(expected[index]);
})

test('Task 3: Element Length', () => {
    givens = [
        ['Hello', 'World'],
        ['Apple', 'Banana', 'Orange', 'Pear'],
        ['BMW', 'Mercedes', 'Audi'],
        [],
        ['Trampoline', '', 'Tennis', 'Basketball']
    ];
    expected = [
        [5, 5],
        [5, 6, 6, 4],
        [3, 8, 4],
        [],
        [10, 0, 6, 10]
    ];

    for (const [index, element] of givens.entries()) expect(elementLength(element)).toStrictEqual(expected[index]);
})

test('Task 4: Is Sum Even or Odd', () => {
    givens = [
        [],
        [0, -1, -5],
        [7, 1, 8, 1],
        [0, 0],
        [1, 1, 1, 1, 1]
    ];
    expected = ['even', 'even', 'odd', 'even', 'odd'];

    for (const [index, element] of givens.entries()) expect(isArraySumEvenOrOdd(element)).toBe(expected[index]);
})

test('Task 5: String reversed', () => {
    givens = [
        'Hello World',
        'TechGlobal',
        'Basketball is fun',
        '',
        'Apples 456'
    ];
    expected = [
        'dlroW olleH',
        'labolGhceT',
        'nuf si llabteksaB',
        '',
        '654 selppA'
    ];

    for (const [index, element] of givens.entries()) expect(reverse(element)).toBe(expected[index]);
})

test('Task 6: Reversed words', () => {
    givens = [
        'Hello World',
        'TechGlobal',
        'Basketball is fun',
        '',
        'Apples 456'
    ];
    expected = [
        'olleH dlroW',
        'labolGhceT',
        'llabteksaB si nuf',
        '',
        'selppA 654'
    ];
    
    for (const [index, element] of givens.entries()) expect(reveerseWords(element)).toBe(expected[index]); 
})
