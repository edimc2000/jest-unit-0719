// Task 1
const makeNegative = num => num === 0 ? 0 : num < 0 ? num : parseFloat('-'+num);
 
// Task 2
const isSumEvenOrOdd = (...args) => {
    let sum = 0;
    for (const arg of args) {
        sum += arg;
    }

    return sum % 2 === 0 ? 'even' : 'odd';
}

// Task 3
const decimal2 = numArr => numArr.map(num => parseFloat(num.toFixed(2)));

// Task 4
const myPow = (...args) => {
    [x, n] = args;

    let pow = 1;
    if (n === 0) return 1;
    for (let i = 0; i < n; i++) {
        pow *= x;
    }

    return pow;
}

// Task 5
const findLongestWord = str => {
    words = str.trim().split(/\s+/);
    let longestWord = words[0];

    for (const word of words) {
        if (word.length > longestWord.length) longestWord = word;
    }

    return longestWord;
}


module.exports = {
    makeNegative,
    isSumEvenOrOdd,
    decimal2,
    myPow,
    findLongestWord
}