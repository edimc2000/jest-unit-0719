//HOMEWORK 3: JS FUNCTION - IF ELSE STATEMENTS

/*TASK 1: Generate 3 random numbers between 1-100. Print true if average of the number is >= 50 else print false
Test data 1: 20, 70, 25             Test data 2: 65, 80, 90
Expected Output 1: false            Expected Output 2: true*/

function randomNumAverageCalculation(num1, num2, num3) {
    return (num1 + num2 + num3) / 3;
}

/*TASK 2: Write a program that generates 3 random numbers between 1 to 3 (1-3 are included)
- if all numbers are different, then print "NO MATCH"
- if any og those 2 numbers are equal, then print "DOUBLE MATCH"
- if all 3 numbers are equal, then print "TRIPLE MATCH"*/

function numbersMatching(num1, num2, num3) {

    if (num1 === num2 && num1 === num3) {
        return `TRIPLE MATCH`;
    } else if (num1 === num2 || num1 === num3 || num2 === num3) {
        return `DOUBLE MATCH`;
    } else {
        return `NO MATCH`;
    }
}

/*TASK 3: write a function which take string word an argument and returns true if string has a character 'a' or 'A' and false otherwise when invoked
Examples:
hasA("Tech")
hasA("Global")
hasA("")
hasA("Apple")*/

function hasA(str) {
    return str.toLowerCase().includes("a");
}


/*TASK 4: Write a function named as doubleOrTripleWord() which takes a string word as an argument and returns the given word back tripled if the string length is even or doubled if the string length is odd when invoked.
Examples:
doubleOrTripleWord("Tech") -> "TechTechTech"
doubleOrTripleWord("Apple") -> "AppleApple"
doubleOrTripleWord("") -> ""
doubleOrTripleWord(" ") ->  " " 
doubleOrTripleWord("1") -> "11"
doubleOrTripleWord("22") -> "222222"*/

function doubleOrTripleWord(str) {
    if (str.length === 0) {
        return `""`;
    } else if (str.length % 2 === 0) {
        return str.repeat(3);
    } else
        return str.repeat(2);
}


/*TASK 5: Write a function named as firstWord() which takes a string word as an argument and returns the first word from the given string when invoked.
Examples:
firstWord("Hello World")
hasA("I like JavaScript")
hasA("Hello")
hasA("")
hasA("  ")
hasA("")*/

function firstWord(str) {
    const givenTrim = str.trim();

    if (givenTrim.length === 0) {
        return `""`;
    }

    const splitTrimStr = givenTrim.split(" ");
    return splitTrimStr[0];
}

/*TASK 6: Write a function named as lastWord() which takes a string word as an argument and returns the last word from the given string when invoked.
NOTE: Return empty string if the given string does not have any word
Examples:
lastWord("Hello World")  -> "World"
lastWord("I like JavaScript") -> "JavaScript"
lastWord("Hello") -> "Hello"
lastWord("") -> ""
lastWord("  ") -> ""*/

function lastWord(str) {
    const trimTheString = str.trim();

    if (trimTheString.length === 0) {
        return `""`;
    }

    const count = trimTheString.split(" ");
    return count[count.length - 1];
}

/*Task 7: Write a function named as firstLastWord() which takes a string word as an argument and returns the first and last words from the given string when invoked.
NOTE: Return empty string if the given string does not have any word
firstLastWord("Hello World") -> "HelloWorld"
firstLastWord("I like JavaScript") -> "IJavaScript"
firstLastWord("Hello") -> "HelloHello"
firstLastWord("") -> ""
firstLastWord(" ") -> ""*/

function firstLastWord(str) {
    const trimmingTheWords = str.trim()

    if (trimmingTheWords.length === 0) {
        return `""`;
    } else {
        const splitTheWords = str.split(" ");
        return splitTheWords[0] + splitTheWords[splitTheWords.length - 1];
    }
}


/*Task 8: Write a function named as startVowel() which takes a string word as an argument and returns true if given string starts with a vowel, and false otherwise when invoked.
NOTE: Vowel letters: a,e,i,o,u,A,E,I,O,U
Examples:
startVowel("Hello World")  -> false
startVowel("I like JavaScript") -> true
startVowel("Hello") -> true
startVowel("") -> false
startVowel("  ") -> false
startVowel("123") -> false*/

function startVowel(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const firstLetter = str.toLowerCase().charAt(0);

    if (vowels.includes(firstLetter)) {
        return true;
    } else {
        return false;
    }
}

/*Task 9: Write a function named as swap4() which takes a string word as an argument and returns the string back with its first and last 4 characters swapped when invoked.
NOTE: Return empty string if the given string does not have 8 or more characters.
Examples:
swap4("abc")  -> ""
startVowel("JavaScript") -> "riptScJava"
startVowel("Hello") -> "obalGlTech"
startVowel("") -> ""
startVowel("  ") -> ""
startVowel("Apple") -> ""*/

function swap4(str) {
    if (str.length < 8) {
        return `""`;
    }

    const first4Letters = str.substring(0, 4);
    const last4Letters = str.substring(str.length - 4);
    const middleLetters = str.substring(4, str.length - 4);
    return last4Letters + middleLetters + first4Letters;
}

/*Task 10: Write a function named as swapFirstLastWord() which takes a string word as an argument and returns the string back with its first and last words swapped when invoked.
NOTE: Return empty string if the given string does not have 2 or more words.
Examples:
swapFirstLastWord("Hello World")  -> "World Hello"
swapFirstLastWord("I like JavaScript") -> "JavaScript like I"
swapFirstLastWord("foo bar foo bar") -> "bar bar foo foo"
swapFirstLastWord("") -> ""
swapFirstLastWord("  ") -> ""
swapFirstLastWord("Hello") -> ""
swapFirstLastWord("Hello ") -> ""*/

function swapFirstLastWord(str) {
    const phrase = str.trim().split(" ").filter(w => w !== "");
    const firstWord = phrase[0];
    const lastWord = phrase[phrase.length - 1];

    if (phrase.length < 2) return `""`;

    phrase[0] = lastWord;
    phrase[phrase.length - 1] = firstWord;

    return phrase.join(" ");
}





module.exports = {
    randomNumAverageCalculation,
    numbersMatching,
    hasA,
    doubleOrTripleWord,
    firstWord,
    lastWord,
    firstLastWord,
    startVowel,
    swap4,
    swapFirstLastWord
}
