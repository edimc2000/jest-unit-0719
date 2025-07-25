// Task 1
const noSpace = string => string.replace(/\s/g,"");

// Task 2
const replaceFirstLast = str => str.trim().length < 2 ? "" : str.slice(-1) + str.slice(1, -1) + str[0];

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



module.exports = {
    noSpace, 
    replaceFirstLast


}