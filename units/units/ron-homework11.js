// Task 1
const countPalindrome = str => {
    if (str.length === 0) return 0;
    const words = str.toLowerCase().split(/\s+/);

    let palindromeCount = 0;
    for (const word of words) {   
        if (word === word.split('').reverse().join('')) palindromeCount++; 
    }

    return palindromeCount;
}

// Task 2
const sum = (numArr, even) => {
    let sum = 0;
    for (let i = 0; i < numArr.length; i++) {
        (even && i % 2 === 0) ? sum += numArr[i] : (!even && i % 2 !== 0) ? sum += numArr[i] : 0;
    }
    return sum;
} 

// Task 3
const nthChars = (str, num) => {
    let ch = '';
    for (let i = (num-1); i < str.length; i += num) ch += str[i];
    return ch;
}

// Task 4
const canFormString = (...args) => {
    const [source, target] = args;

    availableChars = source.toLowerCase().replace(/\s+/g, '').split('');
    requiredChars = target.toLowerCase().replace(/\s+/g, '');

    for (const char of requiredChars) {
        const index = availableChars.indexOf(char);
        if (index === -1) return false;
        availableChars.splice(index, 1);
    }
    return true;
}

// Task 5
const isAnagram = (...args) => {
    const [source, target] = args;

    const normalize = str => str.toLowerCase().replace(/\s/g, '').split('').sort().join('');

    return normalize(source) === normalize(target);
}

// Task 6
const count = (...args) => {
    const [numArr, even] = args;
    let count = 0;

    for (let i = 0; i < numArr.length; i++) {
        (even && numArr[i] % 2 === 0) ? count++ : (!even && numArr[i] % 2 !== 0) ? count++ : 0; 
    }
    return count;
}

// Task 7
const sumDigitsDouble = str => {
    const digits = str.match(/\d/g);

    if (!digits) return -1;
    const sum = digits.reduce((total, digit) => total + parseInt(digit), 0);

    return sum * 2;
}

// Task 8
const countOccurence = (...args) => {
    [firstString, secondString] = args;

    const freq = str => str.toLowerCase().replace(/\s/g, '').split('').reduce((map, ch) => {
        map[ch] = (map[ch] || 0) + 1;
        return map;
    }, {});

    const sourceFreq = freq(firstString);
    const targetFreq = freq(secondString);

    return Object.entries(targetFreq).reduce((min, [char, count]) => {
        if (!sourceFreq[char]) return 0;
        return Math.min(min, Math.floor(sourceFreq[char] / count));
    }, Infinity)

}

module.exports = {
    countPalindrome,
    sum,
    nthChars,
    canFormString,
    isAnagram,
    count,
    sumDigitsDouble,
    countOccurence
}