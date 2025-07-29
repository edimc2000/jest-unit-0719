// Task 1
const fizzBuzz1 = num => {
    let result = '';
    if (num % 3 === 0) result += 'Fizz';
    if (num % 5 === 0) result += 'Buzz';
    return result || num;
}

// Task 2
const fizzBuzz2 = num => { 
    const resultArr = [];

    for (let i = 1; i <= num; i++) {
        let result = ''; // ← reset every loop
        if (i % 3 === 0) result += 'Fizz';
        if (i % 5 === 0) result += 'Buzz';
        resultArr.push(result || i);
    }

    return resultArr;
}

// Task 3
const findSumNumbers = str => {
    const nums = str.match(/\d+/g);
    if (!nums) return 0;

    return nums.map(Number).reduce((x, y) => x + y);
}

// Task 4
const findBiggestNumber = str => {
    const nums = str.match(/\d+/g); // get all number substrings
    if (!nums) return 0;

    return Math.max(...nums.map(Number));
}

// Task 5
const countOccurencesOfCharacters = str => str.replace(/(.)\1*/g, g => `${g.length}${g[0]}`);

// Task 6
const fibonacciSeries1 = num => {
    if (num <= 0) return [];
    if (num === 1) return [0];

    const fib = [0, 1];
    for (let i = 2; i < num; i++) {
        fib.push(fib[i - 1] + fib[i - 2]);
    }

    return fib;
}

// Task 7
const fibonacciSeries2 = n => n === 1 ? 0 : n === 2 ? 1 : fibonacciSeries2(n - 1) + fibonacciSeries2(n - 2);

// Task 8
const findUniques = (arr1, arr2) => {
  const uniques1 = arr1.filter(x => !arr2.includes(x));
  const uniques2 = arr2.filter(x => !arr1.includes(x));
  return [...new Set([...uniques1, ...uniques2])];
}

// Task 9
const isPowerOf3 = num => num < 1 ? false : num === 1 ? true : num % 3 === 0 && isPowerOf3(num / 3);

module.exports = {
    fizzBuzz1,
    fizzBuzz2,
    findSumNumbers,
    findBiggestNumber,
    countOccurencesOfCharacters,
    fibonacciSeries1,
    fibonacciSeries2,
    findUniques,
    isPowerOf3
}

