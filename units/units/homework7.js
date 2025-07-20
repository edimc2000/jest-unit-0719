const hasUpperCase = string => /[A-Z]/.test(string)

const noDigit = string => string.trim().split('').filter(char => /[^0-9]/.test(char)).join('')
const noVowel = string => string.trim().split('').filter(char => /[^aeiou]/i.test(char)).join('')
const no13 = arr => arr.map(element => element === 13 ? 0 : element)
const middleInt = (num1, num2, num3) => [num1, num2, num3].sort((a,b) => a-b)[1]
const sumOfDigits = string => string.split('').reduce((sum, curr) => /[0-9]/.test(curr) ? sum + Number(curr) : sum, 0); 

// t7
const factorial  = num => {
    result = 1; 
    if (num < 2) return result; 
    for (let i = num ; i >= 2; i--){
        result *= i; 
    }
    return result; 
};
const arrFactorial = arr => arr.map(num => factorial(num)); 

// t8
const categorizeCharacters = string => {
    return [
        string.trim().split('').filter(char => /[a-z]/gi.test(char)).join(''),
        string.trim().split('').filter(char => /[0-9]/.test(char)).join(''),
        string.trim().split('').filter(char => /[^0-9a-z]/i.test(char)).join('')
    ]
}

module.exports = {  
    hasUpperCase, 
    noDigit,
    noVowel, 
    no13, 
    middleInt, 
    sumOfDigits, 
    arrFactorial, 
    categorizeCharacters
}