const hasUpperCase = string => /[A-Z]/.test(string)
const noDigit = string => string.trim().split('').filter(char => /[^0-9]/.test(char)).join('')
const noVowel = string => string.trim().split('').filter(char => /[^aeiou]/i.test(char)).join('')
const no13 = arr => arr.map(element => element === 13 ? 0 : element)
const middleInt = (num1, num2, num3) => [num1, num2, num3].sort((a,b) => a-b)[1]


module.exports = {  
    hasUpperCase, 
    noDigit,
    noVowel, 
    no13, 
    middleInt
}