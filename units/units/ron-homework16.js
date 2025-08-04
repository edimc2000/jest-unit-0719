// Task 1
const toInitials = str => str.split(/\s+/).map(word => word[0].toUpperCase() + '.').join(' ');

// Task 2
const hasNumbers = str => /\d/.test(str);

// Task 3
const elementLength = arr => arr.map(word => word.length);

// Task 4
const isArraySumEvenOrOdd = numArr => numArr.reduce((total, num) => total + num, 0 ) % 2 === 0 ? 'even' : 'odd';

// Task 5
const reverse = str => str.split('').reverse().join('');

// Task 6
const reveerseWords = str => str.split(' ').map(word => word.split('').reverse().join('')).join(' ');

module.exports = {
    toInitials,
    hasNumbers,
    elementLength,
    isArraySumEvenOrOdd,
    reverse,
    reveerseWords
}
