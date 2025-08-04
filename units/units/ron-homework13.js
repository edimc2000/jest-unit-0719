
/* Task 1 
Requirement:
 Write a function named countVC() which takes a string argument and returns an object with the 
 count of vowels and consonants.
Examples:
 countVC("Hello")       -> {vowels: 2, consonants: 3}
 countVC("Programming") ​-> {vowels: 3, consonants: 8}
 countVC("123AbC")      -> {vowels: 1, consonants: 2}
 countVC("123!@#xyz")​   -> {vowels: 0, consonants: 3}
 countVC("")            -> {vowels: 0, consonants: 0}

*/
const countVC = str => {
    const word = {
        vowels: 0,
        consonants: 0
    }

    const vowels = 'aeiou';

    for (const c of str.toLowerCase()) {
        if (/[a-z]/.test(c)) {
            vowels.includes(c) ? word.vowels++ : word.consonants++; 
        }     
    }
    return word;
}

// Task 2
const countChars = str => {
    const word = {
        letters: 0,
        numbers: 0,
        specials: 0,
    }

    for (const c of str) {
        if (/[a-zA-Z]/.test(c)) {
            word.letters++;
        } else if (/[0-9]/.test(c)) {
            word.numbers++;
        } else if (c !== ' ') {
            word.specials++;
        }
    }

    for (const key in word) {
        if (word[key] === 0) delete word[key];
    }

    return word;
}

// Task 3
const maxOccurrences = str => {
    const word = str.replace(/ /g, '');
    if (!word) return '';

    const counts = {};
    for (const c of word) {
        counts[c] = (counts[c] || 0) + 1;
    }

    let maxChar  = '', maxCount = 0;

    for (const c of word) {

        if (counts[c] > maxCount) {
            maxCount = counts[c];
            maxChar = c;
        }
    }

    return maxChar;
};


// Task 4
const starOut = str => {
    let word = '';

    for (let i = 0; i < str.length; i++) {
        if (
            str[i] === '*' ||
            str[i-1] === '*' ||
            str[i+1] === '*' 
        ) continue;
        word += str[i];
    }
    
    return word;
}





/* Task 5
Requirement:
Write a function named romanToInt() which takes a string roman numeral as its arguments and return 
the roman numeral converted to the number. A roman numeral is a set of symbols that add up to a number. 
CXII -> 100+10+1+1 -> 112
NOTE: 
 Symbol       Value
 I            1
 V            5
 X            10
 L            50
 C            100
 D            500
 M            1000
Examples:
romanToInt("I")               -> 1
romanToInt("IV")              -> 4
romanToInt("CXII")            -> 112
romanToInt("MMM")             -> 3000
romanToInt("MMMDCCCLXXXVIII") -> 3888
romanToInt("MDCLXVI")         ​-> 1666
*/
const romanToInt = roman => {
    const values = {
        I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000
    };

    let total = 0;
    for (let i = 0; i < roman.length; i++) {
        const current = values[roman[i]];
        const next = values[roman[i+1]];

        if (next > current) {
            total += (next - current);
            i++;
        } else {
            total += current;
        }
    }

    return total;
}

module.exports = {
    countVC,
    countChars,
    maxOccurrences,
    starOut,
    romanToInt
}