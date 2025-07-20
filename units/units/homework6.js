// Task 1
const noSpace = string => string.replace(/\s/g,"");
//ron

// Task 2
const replaceFirstLast = str => str.trim().length < 2 ? "" : str.slice(-1) + str.slice(1, -1) + str[0];
// jjj
/* Task 3
Requirement:
Write a function named hasVowel() which takes a string argument and 
returns true if the string has a vowel, returns false if the string doesn’t 
contain any vowel letter.
 NOTE: Vowels are = a, e, o, u, i.
 NOTE: Ignore upper/lower cases.
Examples:
 hasVowel("")             -> false
 hasVowel("Javascript")   -> true
 hasVowel("Tech Global")  -> true
 hasVowel("1234")         -> false
 hasVowel("ABC")          -> true
*/


// Task 3
const hasVowel = str => [...str.toLowerCase()].filter(c => 'aeiou'.includes(c)).length > 0;

console.log(`hasVowel("") -> ${hasVowel("")}`);
console.log(`hasVowel("Javascript") -> ${hasVowel("Javascript")}`);
console.log(`hasVowel("Tech Global") -> ${hasVowel("Tech Global")}`);
console.log(`hasVowel("1234") -> ${hasVowel("1234")}`);
console.log(`hasVowel("ABC") -> ${hasVowel("ABC")}`);

/* Task 4
Requirement:
 Write a function named checkAge() which takes a number argument to be 
 considered as the yearOfBirth and returns a message below based on the given year.
 If the age is less than 16, then print "AGE IS NOT ALLOWED”"
 If the age is 16 or more, then print "AGE IS ALLOWED"
 If the age is more than 120 or a future year, print "AGE IS NOT VALID"
 NOTE: Consider someone born in 2013 is 10 years old as of 2023.
Examples:
 checkAge(2015) -> "AGE IS NOT ALLOWED"
 checkAge(2007) -> "AGE IS ALLOWED"
 checkAge(2050) -> "AGE IS NOT VALID"
 checkAge(1920) -> "AGE IS ALLOWED"
 checkAge(1800) -> "AGE IS NOT VALID"
*/
console.log('--- Task 4 ---'); 
const checkAge = yearOfBirth => 2025 - yearOfBirth > 120 || 2025 - yearOfBirth < 0 ? "AGE IS NOT VALID" : 2025 - yearOfBirth >= 16 ? "AGE IS ALLOWED" : "AGE IS NOT ALLOWED";

console.log(`checkAge(2015) -> ${checkAge(2015)}`);
console.log(`checkAge(2007) -> ${checkAge(2007)}`);
console.log(`checkAge(2050) -> ${checkAge(2050)}`);
console.log(`checkAge(1920) -> ${checkAge(1920)}`);
console.log(`checkAge(1800) -> ${checkAge(1800)}`);

/* Task 5
Requirement:
 Write a function named averageOfEdges() which takes three number arguments 
 and will return average of min and max numbers​.
Examples:
 averageOfEdges(0, 0, 0)     -> 0
 averageOfEdges(0, 0, 6)     -> 3
 averageOfEdges(-2, -2, 10)  -> 4
 averageOfEdges(-3, 15, -3)  -> 6
 averageOfEdges(10, 13, 20)  -> 15
*/
console.log('--- Task 5 ---'); 
const averageOfEdges = (x, y, z) => (Math.min(x, y, z) + Math.max(x, y, z)) / 2;

console.log(`averageOfEdges(0, 0, 0) -> ${averageOfEdges(0, 0, 0)}`);
console.log(`averageOfEdges(0, 0, 6) -> ${averageOfEdges(0, 0, 6)}`);
console.log(`averageOfEdges(-2, -2, 10) -> ${averageOfEdges(-2, -2, 10)}`);
console.log(`averageOfEdges(-3, 15, -3) -> ${averageOfEdges(-3, 15, -3)}`);
console.log(`averageOfEdges(10, 13, 20) -> ${averageOfEdges(10, 13, 20)}`);

/* Task 6
Requirement:
 Write a function named noA() which takes an array of strings as argument and 
 will return a new array with all elements starting with "A" or "a" replaced with "###".
Examples:
 noA(["javascript", "hello", "123", "xyz"]) 	->  ["javascript", "hello", "123", "xyz"]
 noA(["apple", "123", "ABC", "javascript"]) 	->  ["###", "123", "###", "javascript"]
 noA(["apple", "abc", "ABC", "Alex", "A"]) 	    -> ["###", "###", "###", "###", "###"]
*/
console.log('--- Task 6 ---'); 
const noA = arr => arr.map(str => str[0]?.toLowerCase() === "a" ? "###" : str);

console.log(`noA(["javascript", "hello", "123", "xyz"]) -> [${noA(["javascript", "hello", "123", "xyz"])}]`);
console.log(`noA(["apple", "123", "ABC", "javascript"]) -> [${noA(["apple", "123", "ABC", "javascript"])}]`);
console.log(`["apple", "abc", "ABC", "Alex", "A"]) -> [${noA(["apple", "abc", "ABC", "Alex", "A"])}]`);

/* Task 7
Requirement:
 Write a function named no3and5() which takes an array of integer numbers as argument and 
 will return a new array with elements replaced by conditions below.
 If element can be divided by 5, replace it with 99​
 If element can be divided by 3, replace it with 100​
 If element can be divided by both 3 and 5, replace it with 101
Examples:
 no3and5([7, 4, 11, 23, 17])        -> [7, 4, 11, 23, 17]
 no3and5([3, 4, 5, 6])              -> [100, 4, 99, 100]
 no3and5([10, 11, 12, 13, 14, 15]) 	-> [99, 11, 100, 13, 14, 101]
*/
console.log('--- Task 7 ---'); 
const no3and5 = arr => [...arr].map(x => x % 5 === 0 && x % 3 === 0 ? 101 : x % 5 === 0 ? 99 : x % 3 === 0 ? 100 : x);

console.log(`no3and5([7, 4, 11, 23, 17]) -> [${no3and5([7, 4, 11, 23, 17])}]`);
console.log(`no3and5([3, 4, 5, 6]) -> [${no3and5([3, 4, 5, 6])}]`);
console.log(`no3and5([10, 11, 12, 13, 14, 15]) -> [${no3and5([10, 11, 12, 13, 14, 15])}]`);

/* Task 8
Requirement:
 Write a function named countPrimes() which takes an array of integer numbers 
 as argument and will return the number of the prime numbers in the given array.
 NOTE: Prime number is a number that can be divided only by 1 and itself​.
 NOTE: Negative numbers cannot be prime​.
 Examples: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37 etc.​
NOTE: Smallest prime number is 2.
Examples:
 countPrimes([-10, -3, 0, 1])      -> 0
 countPrimes([7, 4, 11, 23, 17])   -> 4
 countPrimes([41, 53, 19, 47, 67]) -> 5
*/
console.log('--- Task 8 ---'); 
const isPrime = num => {
    if (num < 2) return false;
    for (let i = 2; i * i <= num;i++) {
        if (num % i === 0) return false;
    }
    return true;
}

const countPrimes = arrNum => arrNum.filter(isPrime).length;

console.log(`countPrimes([-10, -3, 0, 1]) -> ${countPrimes([-10, -3, 0, 1])}`);
console.log(`countPrimes([7, 4, 11, 23, 17]) -> ${countPrimes([7, 4, 11, 23, 17])}`);
console.log(`countPrimes([41, 53, 19, 47, 67]) -> ${countPrimes([41, 53, 19, 47, 67])}`);


/* Task 9
Requirement:
 Write a function named removeDuplicates() which takes an array argument and 
 returns a new array with all the duplicates removed.
Examples:
 removeDuplicates([10, 20, 35, 20, 35, 60, 70, 60])          -> [10, 20, 35, 60, 70]
 removeDuplicates([1, 2, 5, 2, 3])                           -> [1, 2, 5, 3]
 removeDuplicates([0, -1, -2, -2, -1])                       -> [0, -1, -2]
 removeDuplicates(["abc", "xyz", "123", "ab", "abc", "ABC"]) -> ["abc", "xyz", "123", "ab", "ABC"]
 removeDuplicates(["1", "2", "3", "2", "3"])                 -> ["1", "2", "3"]
*/
console.log('--- Task 9 ---'); 
const removeDuplicates = arrNum => arrNum.filter((num, i) => arrNum.indexOf(num) === i).join(", ");

console.log(`removeDuplicates([10, 20, 35, 20, 35, 60, 70, 60]) -> [${removeDuplicates([10, 20, 35, 20, 35, 60, 70, 60])}]`);
console.log(`removeDuplicates([1, 2, 5, 2, 3]) -> [${removeDuplicates([1, 2, 5, 2, 3])}]`);
console.log(`removeDuplicates([0, -1, -2, -2, -1]) -> [${removeDuplicates([0, -1, -2, -2, -1])}]`);
console.log(`removeDuplicates(["abc", "xyz", "123", "ab", "abc", "ABC"]) -> [${removeDuplicates(["abc", "xyz", "123", "ab", "abc", "ABC"])}]`);
console.log(`removeDuplicates(["1", "2", "3", "2", "3"]) -> [${removeDuplicates(["1", "2", "3", "2", "3"])}]`);

/* Task 10
Requirement: 
 Write a method named isDateFormatValid() that takes a string as an argument and 
 returns true if the given date is valid or returns false otherwise.
 Expected Format: nn/nn/nnnn
 So, it must be presented as <2digits>/<2digits>/<4digits>
Examples:
 isDateFormatValid("")             -> false
 isDateFormatValid("15/30/2020")   -> false
 isDateFormatValid("10-30-2020 ")  -> false
 isDateFormatValid("10.30.2020")   -> false
 isDateFormatValid("5/30/2020")    -> false
 isDateFormatValid("05/30/2020 ")  -> true
 isDateFormatValid("10/2/2020")    -> false
 isDateFormatValid("10/02/2020 ")  -> true

*/
console.log('--- Task 10 ---'); 
const isDateFormatValid = dateStr => {
    const dateParts = dateStr.trim().split("/");
    if (dateParts.length !== 3) return false;

    const [month, day, year] = dateParts;
    if (month.length !== 2 || day.length !== 2 || year.length !== 4) return false;

    return true;
}

console.log(`isDateFormatValid("") -> ${isDateFormatValid("")}`);
console.log(`isDateFormatValid("15/30/2020") -> ${isDateFormatValid("15/30/2020")}`);
console.log(`isDateFormatValid("10-30-2020 ") -> ${isDateFormatValid("10-30-2020 ")}`);
console.log(`isDateFormatValid("10.30.2020") -> ${isDateFormatValid("10.30.2020")}`);
console.log(`isDateFormatValid("5/30/2020") -> ${isDateFormatValid("5/30/2020")}`);
console.log(`isDateFormatValid("05/30/2020 ") -> ${isDateFormatValid("05/30/2020 ")}`);
console.log(`isDateFormatValid("10/2/2020") -> ${isDateFormatValid("10/2/2020")}`);
console.log(`isDateFormatValid("10/02/2020 ") -> ${isDateFormatValid("10/02/2020 ")}`);

/* Task 11
Requirement: 
 Write a method named secondMax() takes an array argument and returns the second max number from the array.
 NOTE: Assume that you will not be given empty array and if the array has only 1 element, it will be returned as second max number.
 NOTE: Be careful when there is multiple max numbers.
Examples:
 secondMax([7, 4, 4, 4, 23, 23, 23]) -> 7
 secondMax([3, 4, 5, 6])             -> 5
 secondMax([10])                     -> 10
*/
console.log('--- Task 11 ---');
const secondMax = arrNum => {
    if (arrNum.length === 1) return arrNum[0];

    let max = 0, secondMax = 0;

    for (let num of arrNum) {

        if (num > max) {
            secondMax = max;
            max = num;
        } else if (num > secondMax &&  num < max) {
            secondMax = num;
        }
    }
    return secondMax;
};

console.log(`secondMax([7, 4, 4, 4, 23, 23, 23]) -> ${secondMax([7, 4, 4, 4, 23, 23, 23])}`);
console.log(`secondMax([3, 4, 5, 6]) -> ${secondMax([3, 4, 5, 6])}`);
console.log(`secondMax([10]) -> ${secondMax([10])}`);

/* Task 12
Requirement: 
 Write a method named secondMin() takes an array argument and returns the second min number from the array.
 NOTE: Assume that you will not be given empty array and if the array has only 1 element, it will be returned as second min number.
 NOTE: Be careful when there is multiple min numbers.
Examples:
 secondMin([7, 4, 4, 4, 23, 23, 23]) -> 7
 secondMin([3, 4, 5, 6])             -> 4
 secondMin([10])                     -> 10

*/
console.log('--- Task 12 ---'); 
const secondMin = arrNum => {
    if (arrNum.length === 1) return arrNum[0];

    let min = Infinity, secondMin = Infinity;

    for (let num of arrNum) {
        if (num < min) {
            secondMin = min
            min = num
        } else if (num < secondMin && num > min) {
            secondMin = num
        }
    }
    return secondMin;
};

console.log(`secondMin([7, 4, 4, 4, 23, 23, 23]) -> ${secondMin([7, 4, 4, 4, 23, 23, 23])}`);
console.log(`secondMin([3, 4, 5, 6]) -> ${secondMin([3, 4, 5, 6])}`);
console.log(`secondMin([10]) -> ${secondMin([10])}`);

/* Task 13
Requirement: 
 Write a method named mostRepeated() takes an array argument and returns the most counted element from the array.
 NOTE: Assume that you will not be given empty array and the count of one element will always be more than the others.
Examples:
 mostRepeated([4, 7, 4, 4, 4, 23, 23, 23])                             -> 4
 mostRepeated(["pen", "pencil", "pen", "123", "abc", "pen", "pencil"]) -> "pen"
 mostRepeated([10])                                                    -> 10
 mostRepeated(["TechGlobal"])                                          -> "TechGlobal"

*/
console.log('--- Task 13 ---'); 
const mostRepeated = arr => {
    const count = arr.reduce((acc, val) => {
        acc[val] = (acc[val] || 0) + 1;
        return acc;
    }, {});

    return Object.keys(count).reduce((a, b) => count[a] > count[b] ? a : b);
};

console.log(`mostRepeated([4, 7, 4, 4, 4, 23, 23, 23])  -> ${mostRepeated([4, 7, 4, 4, 4, 23, 23, 23])}`);
console.log(`mostRepeated(["pen", "pencil", "pen", "123", "abc", "pen", "pencil"])  -> ${mostRepeated(["pen", "pencil", "pen", "123", "abc", "pen", "pencil"])}`);
console.log(`mostRepeated([10])  -> ${mostRepeated([10])}`);
console.log(`mostRepeated(["TechGlobal"])  -> ${mostRepeated(["TechGlobal"])}`);



module.exports = {
    noSpace, 
    replaceFirstLast


}