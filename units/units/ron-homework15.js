// Task 1
const toCamelCase = str => {
    words = str.trim().split(/\s+/);
    if (words.length === 1) return str.trim();

    return words
        .map((word, index) => {
            word = word.toLowerCase();
            if (index === 0) return word;
            return word[0].toUpperCase() + word.slice(1);
        })
        .join('')
}

// Task 2
const toSnakeCase = str => str.trim().toLowerCase().split(/\s+/).join('_');

// Task 3
const alternatingCases = str => {
    let word = '';
    let letterCount = 0;

    for (const c of str) {
        if (/[a-zA-Z]/.test(c)) {
            word += letterCount % 2 === 0 ? c.toUpperCase() : c.toLowerCase();
            letterCount++;
        } else {
            word += c;
        }
    }
    return word;
}

// Task 4
const isNeutral = (...args) => {
    [firstString, secondString] = args;
    let word = '';

    for (let i = 0; i < firstString.length; i++) {
        if (firstString[i] === secondString[i]) {
            word += firstString[i];
        } else {
            word += '0';
        }
    }

    return word;
}

// Task 5
const isTrueOrFalse = str => {
    let positive = 0; negative = 0;

    str.trim().split(/\s+/).forEach(word => {
        const c = word[0]?.toLowerCase();
        if (c >= 'a' && c <= 'z') (c <= 'm' ? positive++ : negative++);
    })

    return positive >= negative;
}

module.exports = {
    toCamelCase,
    toSnakeCase,
    alternatingCases,
    isNeutral,
    isTrueOrFalse
}