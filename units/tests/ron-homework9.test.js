    const {
        fizzBuzz1,
        fizzBuzz2,
        findSumNumbers,
        findBiggestNumber,
        countOccurencesOfCharacters,
        fibonacciSeries1,
        fibonacciSeries2,
        findUniques,
        isPowerOf3
    } = require('../units/ron-homework9');

    let givens = [];
    let expected = [];

    test('Task 1: fizz buzz version 1', () =>{
        givens = [0, 1, 3, 5, 30, 10, 15,-15];
        expected = ["FizzBuzz", 1, "Fizz", "Buzz", "FizzBuzz", "Buzz", "FizzBuzz", "FizzBuzz"];

        for (const [index, element] of givens.entries()) expect(fizzBuzz1(element)).toBe(expected[index]);
    })

    // test('Task 2: fizz buzz version 2', () => {
    //     givens = [3, 5, 10, 15, 2];
    //     expected = [
    //         [1, 2, 'Fizz'], [1, 2, 'Fizz', 4, 'Buzz'], [1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz'],
    //         [1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz', 11, 'Fizz', 13, 14, 'FizzBuzz']
    //     ]

    //     for (const [index, element] of givens.entries()) expect(fizzBuzz2(element)).toBe(expected[index]);
    // })

    // test('Task 3: find sum of numbers', () => {
    //     givens = ['abc$', 'a1b4c 6#', 'ab110c045d', '525', '3 for 10 dollars'];
    //     expected = [0, 11, 155, 525, 13];

    //     for (const [index, element] of givens.entries()) expect(findSumNumbers(element)).toBe(expected[index]);
    // })

    // test('Task 4: find biggest number', () => {
    //     givens = ['abc$', 'a1b4c 6#', 'ab110c045d', '525', '3 for 10 dollars'];
    //     expected = [0, 6, 110, 525, 10];

    //     for (const [index, element] of givens.entries()) expect(findBiggestNumber(element)).toBe(expected[index]);
    // })

    // test('Task 5: count occurences of characters', () => {
    //     givens = ['', 'abc', 'abbcca', 'aaAAa', 'www'];
    //     expected = ['', '1a1b1c', '1a2b2c1a', '2a2A1a', '3w'];

    //     for (const [index, element] of givens.entries()) expect(countOccurencesOfCharacters(element)).toBe(expected[index]);
    // })

    // test('Task 6: fibonacci series 1', () => {
    //     givens = [3, 5, 7, 8, 1, 2];
    //     expected = [
    //         [0, 1, 1], [0, 1, 1, 2, 3], [0, 1, 1, 2, 3, 5, 8],
    //         [0, 1, 1, 2, 3, 5, 8, 13], [0], [0, 1]
    //     ];

    //     for (const [index, element] of givens.entries()) expect(fibonacciSeries1(element)).toStrictEqual(expected[index]);
    // })

    // test('Task 7: fibonacci series 2', () => {
    //     givens = [2, 4, 8, 9, 1];
    //     expected = [1, 2, 13, 21, 0];

    //     for (const [index, element] of givens.entries()) expect(fibonacciSeries2(element)).toBe(expected[index]);
    // })

    // test('Test 8: find uniques', () => {
    //     givens = [
    //         [[], []], [[], [1, 2, 3, 2]], [[1, 2, 3, 4], [3, 4, 5, 5]],
    //         [[8, 9], [9, 8, 9]], [[-1, -2], [1, 2]]

    //     ];
    //     expected = [[], [1, 2, 3], [1, 2, 5], [], [-1, -2, 1, 2]];

    //     for (const [index, element] of givens.entries()) expect(findUniques(element)).toBe(expected[index]);
    // })

    // test('Task 9: is power of 3', () => {
    //     const givens1 = [1, 2 , 3, 27, 100, 81, 9];
    //     const expected1 = [true, false, true, true, false, true, true];

    // for (const [index, element] of givens1.entries()) expect(isPowerOf3(element)).toBe(expected1[index]); 
    // })