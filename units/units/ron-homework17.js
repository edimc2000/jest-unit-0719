// Task 1
const findMedian = (...args) => {
    [numArr1, numArr2] = args;

    const combined = [...numArr1, ...numArr2].sort((x, y) => x - y);
    const mid = Math.floor(combined.length / 2);

    if (combined.length === 0) return null;

    return combined.length % 2 === 0 ? (combined[mid - 1] + combined[mid]) / 2 : combined[mid];

}

// Task 2
const calculateFactorial = num => {  
    if (num <= 1) return 1;

    return num * calculateFactorial(num-1);
}

// Task 3
const calculateGCD = (...args) => {
    [x, y] = args;

    while (y !== 0) {
        [x, y] = [y, x % y];
    }
    return x;
}


/* TASK 4
Requirement:
 Write a function named calculateLCM() which takes two numbers as arguments and 
 returns the least common multiple of the two numbers.
 NOTE: LCM is a mathematical concept used to describe the largest number that 
 divides two or more integers without leaving a remainder. In other words, it is 
 the largest number that is a common factor of two or more numbers.
Examples:
 calculateLCM(8, 12) 	-> 24
 calculateLCM(17, 5) 	-> 85
 calculateLCM(48, 18) 	-> 144
 calculateLCM(0, 5) 	-> 0
 calculateLCM(21, 14) 	-> 42
 calculateLCM(60, 48) 	-> 240
*/
const calculateLCM = (x, y) => (x * y) / calculateGCD(x, y);

module.exports = {
    findMedian,
    calculateFactorial,
    calculateGCD,
    calculateLCM
}