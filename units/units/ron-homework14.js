// Task 1
const repeatingX = str =>  /xx/i.test(str);

// Task 2
const isPerfectSquare = num => Number.isInteger(Math.sqrt(num));

//Task 3
const convertTemperature = (num, temp) => temp === 'Celsius' ? (num * (9/5)) + 32 : (num - 32) * (5/9);

// Task 4
const sumOfEvenNumbers = numArr => numArr.filter(num => num % 2 === 0).reduce((sum, n) => sum += n, 0);

// Task 5
const capsOdds = arr => arr.map((value, index) => index % 2 !== 0 ? value.toUpperCase() : value);

module.exports = {
    repeatingX,
    isPerfectSquare,
    convertTemperature,
    sumOfEvenNumbers,
    capsOdds
}