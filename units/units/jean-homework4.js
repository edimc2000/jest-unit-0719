/* TASK 1
Requirement:
Write a program that outputs all the numbers that are divisible by 7 starting from 1 to 100 (both inclusive).
Expected Output: 7 14 21  ... 91 98
*/
console.log('\n--- TASK 1 ---');

let i = 1;
function divisibleBy7(i) {
  let task1Result = [];
  for (i = 1; i <= 100; i++) {
    if (i % 7 === 0)
      task1Result.push(i);
  }
  return task1Result.join(" ");
}
console.log(divisibleBy7(i));


/* TASK 2
Requirement:
Write a program that outputs all the numbers that are divisible by both 2 and 3 starting from 1 to 50 (both inclusive).
Expected Output: 6 12 18 ... 36 42 48
*/
console.log('\n--- TASK 2 ---');

let divisibleBy2And3 = [];

for (let i = 1; i <= 50; i++) {
  if (i % 2 === 0 && i % 3 === 0)
    divisibleBy2And3.push(i);
}

console.log(divisibleBy2And3.join(" "));

/* TASK 3
Requirement:
Write a program that outputs all the numbers that are divisible by 5 starting from 100 to 50 (both inclusive).
Expected Output: 100 95 90 85 ... 60 55 50
*/
console.log('\n--- TASK 3 ---');

let by5 = [];

for (let i = 100; i >= 50; i--) {
  by5.push(i);
}

let by5Result = by5.filter(function (number) {
  return number % 5 === 0;
});

console.log(by5Result.join(" "));

/* TASK 4
Requirement:
Write a program that outputs the squares of all numbers starting from 0 to 7 (both inclusive).
NOTE: Use loop!!!
Expected Output:
The square of 0 is =  0
The square of 1 is =  1
The square of 2 is =  4
The square of 3 is =  9
The square of 4 is =  16
The square of 5 is =  25
The square of 6 is =  36
The square of 7 is =  49
*/
console.log('\n--- TASK 4 ---');

for (let i = 0; i <= 7; i++) {
  const square = i ** 2
  console.log(`The square of ${i} is = ${square}`);
}

/* TASK 5
Requirement:
Write a program that finds sum of the numbers starting from 1 to 10 (both inclusive).
Calculation => 1+2+3+4+5+6+7+8+9+10
NOTE: Use loop!!!
Expected Output:
55*/
console.log('\n--- TASK 5 ---');

let sum = 0;
for (let i = 0; i <= 10; i++) {
  sum += i;
}

console.log(sum);

/* TASK 6
Requirement:
Write a program generates a random number between 1 and 10 (both inclusive).
And find the factorial of the number.
Mathematically, the factorial of a non-negative integer n is defined as:
n! = n × (n-1) × (n-2) × ... × 2 × 1
For example:
5! = 5 × 4 × 3 × 2 × 1 = 120
4! = 4 × 3 × 2 × 1 = 24
0! (by convention) is defined as 1.
*/
console.log('\n--- TASK 6 ---');

function generateRandomNum(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function numFactorial(n) {
  let result = 1;
  const numbersForString = [];

  if (n === 0) {
    return { result: 1, calculationString: "1" };
  }

  for (let i = 1; i <= n; i++) {
    result = result * i;
    numbersForString.push(i);
  }

  numbersForString.reverse();
  const calculationString = numbersForString.join(' × ');

  return { result, calculationString };
}

const task6randomNum = generateRandomNum(1, 10);
const { result, calculationString } = numFactorial(task6randomNum);
console.log(`${task6randomNum}! = ${calculationString} = ${result}`);

console.log(`For example:`);
const fiveFactorial = numFactorial(5);
console.log(`5! = ${fiveFactorial.calculationString} = ${fiveFactorial.result}`);

const fourFactorial = numFactorial(4);
console.log(`4! = ${fourFactorial.calculationString} = ${fourFactorial.result}`);

const zeroFactorial = numFactorial(0);
console.log(`0! = ${zeroFactorial.calculationString} = ${zeroFactorial.result}`);

/* TASK 7
Requirement:
Write a program generates a random number between 1 and 100 (both inclusive).
Keep generating a new number till you get a number that is divisible by 5.
The program should also count how many attempts it takes to generate such a number.
Eventually, print the random number divisible by 5 with the number of attempts as below.
Expected Output:The random number is {randomNumber} and it took {attempts} attempt/s to generate it.
*/
console.log('\n--- TASK 7 ---');
let attempts = 0;
let task7GenerateNum;

do {
  attempts++;

  task7GenerateNum = Math.ceil(Math.random() * 100);

} while (task7GenerateNum % 5 !== 0);

console.log(`The random number is ${task7GenerateNum} and it took ${attempts} attempt/s to generate it.`);

/* TASK 8
Requirement:
-Create an array that stores countries below.
Germany, Argentina, Ukraine, Romania
THEN:
-Output the entire array
-Ouput the entire array sorted lexicographically
Expected Result:
['Germany', 'Argentina', 'Ukraine', 'Romania' ]
[ 'Argentina', 'Germany', 'Romania', 'Ukraine' ]*/
console.log('\n--- TASK 8 ---');

let country = ["Germany", "Argentina", "Ukraine", "Romania"];
console.log(country);
console.log(country.sort());

/* TASK 9
Requirement:
-Create a String array that stores cartoon dogs below
Scooby Doo, Snoopy, Blue, Pluto, Dino, Sparky
THEN:
-Output the entire array
-Then, check if the array has Pluto element
  if it has Pluto, then output true
  if it does not have Pluto, output false
Expected Result:
[ 'Scooby Doo', 'Snoopy', 'Blue', 'Pluto', 'Dino', 'Sparky' ]
true*/
console.log('\n--- TASK 9 ---');

let cartoonDogs = ["Scooby Doo", "Snoopy", "Blue", "Pluto", "Dino", "Sparky"]
console.log(cartoonDogs);
console.log(cartoonDogs.includes("Pluto"));

/* TASK 10
Requirement:
-Create an array that stores cartoon cats below.
Garfield, Tom, Sylvester, Azrael
THEN:
-Output the entire array sorted lexicographically
-Then, check if the array has both Garfield and Felix
  if it has both, then output true
  if it does not have both, output false
Expected Result:
[ 'Azrael', 'Garfield', 'Sylvester', 'Tom' ]
false*/
console.log('\n--- TASK 10 ---');
let cartoonCats = ["Garfield", "Tom", "Sylvester", "Azrael"]
console.log(cartoonCats.sort());

if (cartoonCats.includes("Garfield") && cartoonCats.includes("Felix")) {
  console.log(true);
} else {
  console.log(false);
}

/* TASK 11 (improved using methods)
Requirement:
-Create an array that stores numbers below
10.5, 20.75, 70, 80, 15.75
THEN:
-Output the entire array
-Ouput each element
Expected Result:
[ 10.5, 20.75, 70, 80, 15.75 ]
10.5
20.75
70
80
15.75
*/
console.log('\n--- TASK 11 ---');
let numbersArray = [10.5, 20.75, 70, 80, 15.75]
console.log(numbersArray);

for (let i = 0; i < numbersArray.length; i++) {
  console.log(numbersArray[i]);
}

/* TASK 12
Requirement:
-Create an array that stores objects below.
Pen, notebook, Book, paper, bag, pencil, Ruler
THEN:
-Output the entire array.
-Output how many elements starts with 'B' or 'P', ignoring cases.
-Output how many elements has 'book' or 'pen' partial strings, ignoring cases.
Expected Result:
  ['Pen', 'notebook', 'Book', 'paper', 'bag', 'pencil', 'Ruler' ]
Elements starting with 'B' or 'P' = 5
Elements having 'book' or 'pen' = 4
*/
console.log('\n--- TASK 12 ---');
let objectsArray = ["Pen", "notebook", "Book", "paper", "bag", "pencil", "Ruler"]
console.log(objectsArray);

let count = 0;
objectsArray.forEach(obj => {
  if (obj.toUpperCase().startsWith("B") || obj.toUpperCase().startsWith("P")) {
    count += 1;
  }
});
console.log("Elements starting with `B` or `P`=", count);

let wordCount = 0
objectsArray.forEach(obj => {
  if (obj.toLowerCase().includes("book") || obj.toLowerCase().includes("pen")) {
    wordCount += 1;
  }
})
console.log("Elements having 'book' or 'pen' =", wordCount);

/* TASK 13
Requirement:
-Create an array that stores numbers below.
3, 5, 7, 10, 0, 20, 17, 10, 23, 56, 78
THEN:
-Output the entire array
-Output how many elements are more than 10
-Output how many elements are less than 10
-Output how many elements are 10
Expected Result:
[ 3, 5, 7, 10, 0, 20, 17, 10, 23, 56, 78 ]
Elements that are more than 10 = 5
Elements that are less than 10 = 4
Elements that are 10 = 2
*/
console.log('\n--- TASK 13 ---');
let task13Array = [3, 5, 7, 10, 0, 20, 17, 10, 23, 56, 78];

const countMoreThan10 = task13Array.filter(num => num > 10).length;
const countLessThan10 = task13Array.filter(num => num < 10).length;
const countEqualsTo10 = task13Array.filter(num => num === 10).length;

console.log(task13Array);
console.log(`Elements that are more than 10 = ${countMoreThan10}`);
console.log(`Elements that are less than 10 = ${countLessThan10}`);
console.log(`Elements that are 10 = ${countEqualsTo10}`);

/* TASK 14
Requirement:
-Create 2 arrays that stores numbers below.
First array-> 		[ 5, 8, 13, 1, 2 ]
Second array -> 	[ 9, 3, 67, 1, 0 ]
THEN:
-Output both arrays
–Then, create a new array that will take the greatest value of same index from first 2 arrays and output the third array as well.
Expected Result:
1st array is =  [ 5, 8, 13, 1, 2 ]
2nd array is = [ 9, 3, 67, 1, 0 ]
3rd array is =  [ 9, 8, 67, 1, 2 ]
*/
console.log('\n--- TASK 14 ---');
let firstArray = [5, 8, 13, 1, 2];
let secondArray = [9, 3, 67, 1, 0];
let thirdArray = [];

console.log(`1st array is =`, firstArray);
console.log(`2nd array is =`, secondArray);

for (let i = 0; firstArray.length > i; i++) {
  const greatestValue = Math.max(firstArray[i], secondArray[i]);
  thirdArray.push(greatestValue);
}
console.log(`3rd array is =`, thirdArray);

/* TASK 15
Requirement:
Write a function named as firstDuplicate() which takes an array argument and
returns the first duplicated number in the array when invoked.
NOTE: Make your code dynamic that works for any array and return -1 if there are no duplicates in the array.
For two elements to be considered as duplicated, value and data types of the elements must be same.
Examples:
firstDuplicate([ 3, 7, 10, 0, 3, 10 ])		-> 3
firstDuplicate([ 5, 7, 7, 0, 5, 10 ])		-> 5
firstDuplicate([ 5, '5', 3, 7, 4 ])		-> -1
firstDuplicate([ 123, 'abc', '123', 3, 'abc' ])	-> 'abc'
firstDuplicate([ 1, 2, 3])			-> -1
firstDuplicate([ 'foo', 'abc', '123', 'bar’ ]) 	-> -1
*/
console.log('\n--- TASK 15 ---');
function firstDuplicate(arr) {
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    if (arr.indexOf(item) !== i) {
      return item;
    }
  }
  return -1;
}

const arrayNum = [3, 7, 10, 0, 3, 10];
const array2 = [5, 7, 7, 0, 5, 10];
const array3 = [5, '5', 3, 7, 4];
const array4 = [123, 'abc', '123', 3, 'abc'];
const array5 = [1, 2, 3];
const array6 = ['foo', 'abc', '123', 'bar’'];

console.log(firstDuplicate(arrayNum));
console.log(firstDuplicate(array2));
console.log(firstDuplicate(array3));
console.log(firstDuplicate(array4));
console.log(firstDuplicate(array5));
console.log(firstDuplicate(array6));

/* TASK 16
Requirement:
Write a function named as getDuplicates() which takes an array argument
and returns all the duplicated elements in the array when invoked.
NOTE: Make your code dynamic that works for any array and return empty array
if there are no duplicates in the array. For two elements to be considered as duplicated,
value and data types of the elements must be same.
Examples:
getDuplicates([ 0, -4, -7, 0, 5, 10, 45, -7, 0 ])		-> [ 0, -7 ]
getDuplicates([ 1, 2, 5, 0, 7 ])			-> [ ]
getDuplicates(['A', 'foo', '12’ , 12, 'bar', 'a', 'a', 'foo' ])	-> [ 'foo', 'a’ ]
getDuplicates([ 'foo', '12' , 12, 'bar', 'a' ])		-> [ ]
*/
console.log('\n--- TASK 16 ---');

function getDuplicates(array) {
  const duplicateCount = {};
  const duplicateWord = [];

  for (let item of array) {
    duplicateCount[item] = (duplicateCount[item] || 0) + 1;
  }

  for (let item in duplicateCount) {
    if (duplicateCount[item] > 1) {
      duplicateWord.push(item);
    }
  }
  return duplicateWord;
}

const task16Array1 = [0, -4, -7, 0, 5, 10, 45, -7, 0];
const task16Array2 = [1, 2, 5, 0, 7];
const task16Array3 = ['A', 'foo', '12’', 12, 'bar', 'a', 'a', 'foo'];
const task16Array4 = ['foo', '12’', 12, 'bar', 'a'];

console.log(getDuplicates(task16Array1));
console.log(getDuplicates(task16Array2));
console.log(getDuplicates(task16Array3));
console.log(getDuplicates(task16Array4));

/* TASK 17
Requirement:
Write a function named as reverseStringWords()
which takes a string as an argument and
returns string back with each word separately reversed when invoked.
NOTE: Make your code dynamic that works for any string.
Make sure you consider extra spaces before and after words in the given string.
Examples:
reverseStringWords("Hello World") 		-> "olleH dlroW"
reverseStringWords("I like JavaScript") 	-> "I ekil tpircSavaJ"
reverseStringWords("Hello") 		-> "olleH"
reverseStringWords("") 			-> ""
reverseStringWords("    ") 		-> ""
*/
console.log('\n--- TASK 17 ---');

function reverseStringWords(str) {
  const words = str.trim().split(/\s+/);

  const reversedWords = words.map(word => {
    return word.split('').reverse().join('');
  });
  return reversedWords.join(' ');
}

console.log(reverseStringWords("Hello World"));
console.log(reverseStringWords("I like JavaScript"));
console.log(reverseStringWords("Hello"));
console.log(reverseStringWords(""));
console.log(reverseStringWords("    "));

/* TASK 18
Requirement:
Write a function named as getEvens() which takes 2 number arguments and
returns all the even numbers as an array stored from smallest even number
to greatest even number when invoked.
NOTE: Make your code dynamic that works for any numbers and return empty array
if there are no even numbers in the range of given 2 numbers.
Assume you will not be given negative numbers.
Examples:
getEvens(2, 7)	-> [ 2, 4, 6 ]
getEvens(17, 5)	-> [ 6, 8, 10, 12, 14, 16 ]
getEvens(4, 4)	-> [ 4 ]
getEvens(3, 3)	-> [ ]
*/
console.log('\n--- TASK 18 ---');

function getEvens(num1, num2) {
  let evenNum = [];
  const min = Math.min(num1, num2);
  const max = Math.max(num1, num2);

  for (let i = min; i <= max; i++) {
    if (i % 2 === 0) {
      evenNum.push(i);
    }
  }
  return evenNum;
}

console.log(getEvens(2, 7));
console.log(getEvens(17, 5));
console.log(getEvens(4, 4));
console.log(getEvens(3, 3));

/* TASK 19
Write a function named as getMultipleOf5() which takes 2 number arguments and
returns all the numbers divisible by 5 as an array stored from first found match
to last found match when invoked.
NOTE: Make your code dynamic that works for any numbers and return empty array
if there are no numbers divisible by 5 in the range of given 2 numbers.
Assume you will not be given negative numbers.
Examples:
getMultipleOf5(3, 17)	-> [ 5, 10, 15]
getMultipleOf5(23, 5)	-> [ 20, 15, 10, 5 ]
getMultipleOf5(5, 5)	-> [ 5 ]
getMultipleOf5(2, 4)	-> [ ]
*/
console.log('\n--- TASK 19 ---');
function getMultipleOf5(num1, num2) {
  const multipleOf5Array = [];

  if (num1 <= num2) {
    for (let i = num1; i <= num2; i++) {
      if (i % 5 === 0) {
        multipleOf5Array.push(i);
      }
    }
  } else {
    for (let i = num1; i >= num2; i--) {
      if (i % 5 === 0) {
        multipleOf5Array.push(i);
      }
    }
  }
  return multipleOf5Array;
}

console.log(getMultipleOf5(3, 17));
console.log(getMultipleOf5(23, 5));
console.log(getMultipleOf5(5, 5));
console.log(getMultipleOf5(2, 4));

/* TASK 20
Requirement:
Write a function named as fizzBuzz() which takes 2 number arguments and
returns a string composed with below requirements when invoked.
 - You need to find all the numbers within the range of given 2 numbers (both inclusive)
   and store them in a string from smallest to greatest number with a ' | ' separator for each number.
 - You will need to convert numbers divisible by 3 to 'Fizz'
 - You will need to convert numbers divisible by 5 to 'Buzz'
 - You will need to convert numbers divisible by both 3 and 5 to 'FizzBuzz’
The rest will stay the same.
NOTE: Make your code dynamic that works for any numbers.
Assume you will not be given negative numbers.
Examples:
fizzBuzz(13, 18)	-> "13 | 14 | FizzBuzz | 16 | 17 | Fizz"
fizzBuzz(12, 5)	-> "Buzz | Fizz | 7 | 8 | Fizz | Buzz | 11 | Fizz"
fizzBuzz(5, 5)	-> "Buzz"
fizzBuzz(9, 6)	-> "Fizz | 7 | 8 | Fizz"
*/

console.log('\n--- TASK 20 ---');
function fizzBuzz(num1, num2) {
  const result = [];
  const start = Math.min(num1, num2); // Determine the smaller number for the start of the range
  const end = Math.max(num1, num2);   // Determine the larger number for the end of the range

  for (let i = start; i <= end; i++) {
    let output = "";
    if (i % 3 === 0 && i % 5 === 0) {
      output = "FizzBuzz";
    } else if (i % 3 === 0) {
      output = "Fizz";
    } else if (i % 5 === 0) {
      output = "Buzz";
    } else {
      output = i.toString();
    }
    result.push(output);
  }

  return result.join(" | ");
}

console.log(fizzBuzz(13, 18));
console.log(fizzBuzz(12, 5));
console.log(fizzBuzz(5, 5));
console.log(fizzBuzz(9, 6));








/*module.exports = {

}*/