/* Task 1 
Requirement:
 Write a function named fizzBuzz1() which takes a number argument and returns "Fizz" if 
 the given number is divisible by 3, "Buzz" if the number is divisible by 5, and "FizzBuzz" if 
 the number is divisible by both 3 and 5. Otherwise, it will return the number itself.​
Examples:
 fizzBuzz1(0)       -> "FizzBuzz"
 fizzBuzz1(1)       -> 1
 fizzBuzz1(3)       -> "Fizz"
 fizzBuzz1(5)       -> "Buzz"
 fizzBuzz1(30)      -> "FizzBuzz"
 fizzBuzz1(10)      -> "Buzz"
 fizzBuzz1(15)      -> "FizzBuzz"
 fizzBuzz1(-15)     -> "FizzBuzz"
*/
const fizzBuzz1 = num => {
    let result = '';
    if (num % 3 === 0) result += 'Fizz';
    if (num % 5 === 0) result += 'Buzz';
    return result || num;
}


/* Task 2 
Requirement:
Write a function named fizzBuzz2() which takes a number argument and returns and array consist of 
numbers starting from 1 to given number. However, it will return "Fizz" for the numbers divided by 3, "Buzz" 
for the numbers divided by 5, and "FizzBuzz" for the numbers divided both by 3 and 5.
Examples:
 fizzBuzz2(3)   -> [ 1, 2, 'Fizz' ]
 fizzBuzz2(5)   -> [ 1, 2, 'Fizz', 4, 'Buzz' ]
 fizzBuzz2(10)  -> [ 1​, 2​, 'Fizz'​, 4​, 'Buzz'​, 'Fizz'​, 7, 8​, 'Fizz'​, 'Buzz' ]​
 fizzBuzz2(15)  -> [ 1​, 2​, 'Fizz'​, 4​, 'Buzz'​, 'Fizz'​, 7, 8​, 'Fizz'​, 'Buzz', 11, 'Fizz'. 13, 14,  'FizzBuzz' ]​
 fizzBuzz2(2)   -> [ 1, 2 ]
*/
const fizzBuzz2 = num => num;




/* Task 3 
Requirement:
 Write a function named findSumNumbers() which takes a string argument and returns sum
 of the all numbers appears in the string.
Examples:
 findSumNumbers("abc$")             -> 0
 findSumNumbers("a1b4c  6#")        -> 11
 findSumNumbers("ab110c045d")       -> 155
 findSumNumbers("525")              -> 525
 findSumNumbers("3 for 10 dollars") -> 13
*/
const findSumNumbers = str => str;


/* Task 4 
Requirement:
 Write a function named findBiggestNumber() which takes a string argument and returns 
 the biggest number appears in the string.
Examples:
 findBiggestNumber("abc$")              -> 0
 findBiggestNumber("a1b4c  6#")         -> 6
 findBiggestNumber("ab110c045d")        -> 110
 findBiggestNumber("525")               -> 525
 findBiggestNumber("3 for 10 dollars")  -> 10
*/
const findBiggestNumber = str => str;


/* Task 5 
Requirement:
 Write a function named countOccurrencesOfCharacters() which takes a string argument and 
 returns the count of repeated characters in the String.​
 NOTE: If given String is empty, then return empty String.​
 NOTE: It is case sensitive.
Examples:
 countOccurrencesOfCharacters("")        -> ""
 countOccurrencesOfCharacters("abc")     -> "1a1b1c"
 countOccurrencesOfCharacters("abbcca")  -> "1a2b2c1a"
 countOccurrencesOfCharacters("aaAAa")   -> "2a2A1a”
 countOccurrencesOfCharacters("www" )    -> "3w"
*/
const countOccurencesOfCharacters = str => str;



/* Task 6 
Requirement:
 Write a function named fibonacciSeries1() which takes a number n argument and 
 returns the n series of Fibonacci numbers as an array. ​
 REMEMBER: Fibonacci series = 0, 1, 1, 2, 3, 5, 8, 13, 21
Examples:
 fibonacciSeries1(3) -> [0, 1, 1]
 fibonacciSeries1(5) -> [0, 1, 1, 2, 3]
 fibonacciSeries1(7) -> [0, 1, 1, 2, 3, 5, 8]
 fibonacciSeries1(8) -> [0, 1, 1, 2, 3, 5, 8, 13]
 fibonacciSeries1(1) -> [0]
 fibonacciSeries1(2) -> [0, 1]
*/
const fibonacciSeries1 = num => num;


/* Task 7
Requirement:
 Write a function named fibonacciSeries2() which takes a number n argument and returns 
 the nth series of Fibonacci number as a number.
 REMEMBER: Fibonacci series = 0, 1, 1, 2, 3, 5, 8, 13, 21
Examples:
 fibonacciSeries2(2) 	-> 1
 fibonacciSeries2(4) 	-> 2
 fibonacciSeries2(8) 	-> 13
 fibonacciSeries2(9) 	-> 21
 fibonacciSeries2(1) 	-> 0
*/
const fibonacciSeries2 = num => num;


/* Task 8 
Requirement:
 Write a function named findUniques() which takes two array of number arguments and returns the array which has only the unique values from both given arrays.
 NOTE: If both arrays are empty, then return an empty array.​
 NOTE: If one of the array is empty, then return unique values from the other array.
Examples:
 findUniques([], [])                        -> []
 findUniques([], [1, 2, 3, 2])              -> [1, 2, 3]
 findUniques([1, 2, 3, 4], [3, 4, 5, 5])    -> [1, 2, 5]
 findUniques([8, 9], [9, 8, 9])             -> []
 findUniques([-1, -2], [1, 2])              -> [-1, -2, 1, 2]
*/
const findUniques = arr => arr;



/* Task 9
Requirement:
 Write a function named isPowerOf3() which takes a number argument and returns true if given 
 number is equal to 3 power of the X. Otherwise, return false.​
 NOTE: Numbers that are power of 3 = 1, 3, 9, 27, 81, 243….
 NOTE: Ignore negative scenarios.
Examples:
 isPowerOf3(1)   -> true 
 isPowerOf3(2)   -> false
 isPowerOf3(3)   -> true
 isPowerOf3(27)  -> true
 isPowerOf3(100) -> false
 isPowerOf3(81)  -> true
 isPowerOf3(9)   -> true
*/
const isPowerOf3 = true;

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

