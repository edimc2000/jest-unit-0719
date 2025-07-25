//@ts-check
console.log(`<--Task 01-->`);

let startNumb = 1;
let endNumb = 100;
let firstNum = Math.floor(Math.random() * (endNumb + startNumb - 1)) + startNumb;
let seconNum = Math.floor(Math.random() * (endNumb + startNumb - 1)) + startNumb;
let thirdNum = Math.floor(Math.random() * (endNumb + startNumb - 1)) + startNumb;
let sumOfNum = (firstNum + seconNum + thirdNum) / 3;

console.log(sumOfNum);
if (sumOfNum >= 50) {
    console.log(true);
} else if (sumOfNum < 50) {
    console.log(false);
}

console.log(`<--Task 02-->`);
let start1 = 1;
let end1 = 3;

let firstNum1 = Math.floor(Math.random() * (end1 + start1 - 1)) + start1;
let seconNum1 = Math.floor(Math.random() * (end1 + start1 - 1)) + start1;
let thirdNum1 = Math.floor(Math.random() * (end1 + start1 - 1)) + start1;

console.log(firstNum1, seconNum1, thirdNum1);
if (firstNum1 == seconNum1 && seconNum1 == thirdNum1 && firstNum1 == thirdNum1) {
    console.log("Triple Match");
} else if (firstNum1 == seconNum1 && seconNum1 != thirdNum1 || firstNum1 == thirdNum1 && seconNum1 != firstNum1 ||
    seconNum1 == thirdNum1 && firstNum1 != seconNum1) {
    console.log("Double Match");
} else if (firstNum1 != seconNum1 && seconNum1 != thirdNum1 && firstNum1 != thirdNum1) {
    console.log("No Match");
} else {
    console.log("Invalid code");
}

console.log(`<--Task 03-->`);

function hasA(word) {
    let lowerWord = word.toLowerCase();
    return {
        hasA: lowerWord.slice().includes("a" || "A")
    }
}
console.log(hasA("Dog"));

console.log(`<--Task 04-->`);
function doubleOrTripleWord(wordLen) {
    return wordLen.trim() + wordLen;
}
console.log(doubleOrTripleWord("Hello "));

console.log(`<--Task 05-->`);

function firstWord(str) {
    return str.trim().split(/\s+/)[0] || '';
}
console.log(firstWord("Hello World"));

console.log(`<--Task 06-->`);
function lastWord(strt1) {
    const words = strt1.trim().split(/\s+/);
    return words.length ? words[words.length - 1] : '';
}
console.log(lastWord("I like javascript"));

console.log(`<--Task 07-->`);
function firstlastWord(str2) {
    const words2 = str2.trim().split(/\s+/);
    if (words2.length === 0 || words2[0] === '') {
        return '';
    }

    const first = words2[0];
    const last = words2[words2.length - 1];
    return first + '' + last;
}
console.log(firstlastWord(`Hello World`));

console.log(`<--Task 08-->`);

function startVowel(vowWord) {
    let vowelWord = vowWord.toLowerCase();
    return {
        startVowel: vowelWord.slice().includes("a" || "e" || "i" || "o" || "u" || "A" || "E" || "I" || "O" || "U")
    }
}
console.log(startVowel("123"));

console.log(`<--Task 9-->`);
function swap4(word) {
    if (word.length < 8) {

        return word;
    }
    const firstFourLetter = word.slice(0, 4);
    const middle = word.slice(4, -4);
    const last4 = word.slice(-4);

    return last4 + middle + firstFourLetter;
}

console.log(swap4("hello world"));

console.log(`<--Task 10-->`);
function swapFirstAndLastWord(str3) {
    const words3 = str3.trim().split(/\s+/);
    if (words3.length < 2) {
        return str3.trim();
    }

    const first1 = words3[0];
    words3[0] = words3[words3.length - 1];
    words3[words3.length - 1] = first1;

    return words3.join('');
}
console.log(swapFirstAndLastWord("foo bar foo bar"));



module.exports = {

    hasA,
    doubleOrTripleWord,
    firstWord,
    lastWord,
  
    startVowel,
    swap4,
  
}
