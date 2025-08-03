const {
    toCamelCase,
    toSnakeCase,
    alternatingCases,
    isNeutral,
    isTrueOrFalse
} = require('../units/ron-homework15');

let givens = [];
let expected = [];

test('Task 1: To camelCase', () => {
    givens = [
        'first name',
        'last       name',
        '   ZIP CODE',
        'I Learn Java Script',
        'helloWorld'
    ];
    expected = [
        'firstName',
        'lastName',
        'zipCode',
        'iLearnJavaScript',
        'helloWorld'
    ];

    for (const [index, element] of givens.entries()) expect(toCamelCase(element)).toBe(expected[index]);
})

test('Task 2: To snake_case', () => {
    givens = [
        'first name',
        'last   name',
        '   I love Java Script',
        'already_snake_case',
        'hello'
    ];
    expected = [
        'first_name',
        'last_name',
        'i_love_java_script',
        'already_snake_case',
        'hello'
    ];

    for (const [index, element] of givens.entries()) expect(toSnakeCase(element)).toBe(expected[index]);
})

test('Task 3: Alternate case', () => {
    givens = [
        'Hello',
        'basketball',
        'Tech Global',
        '',
        '123!@#aB'
    ];
    expected = [
        'HeLlO',
        'BaSkEtBaLl',
        'TeCh GlObAl',
        '',
        '123!@#Ab'
    ];

    for (const [index, element] of givens.entries()) expect(alternatingCases(element)).toBe(expected[index]);
})

test('Task 4: Is Neutral', () => {
    givens = [
        ['-', '+'],
        ['-+', '-+'],
        ['-++-', '-+-+'],
        ['--++--', '++--++'],
        ['+++', '+++']
    ];
    expected = ['0', '-+', '-+00', '000000', '+++'];

    for (const [index, element] of givens.entries()) expect(isNeutral(...element)).toBe(expected[index]);
})

test('Task 5: Is true or false', () => {
    givens = [
        'A big brown fox caught a bad rabbit',
        'Xylophones can obtain Xenon.',
        'CHOCOLATE MAKES A GREAT SNACK',
        'All FOoD tAsTEs NIcE for someONe',
        'Got stuck in the Traffic'
    ];
    expected = [true, false, true, true, false];
})


