const hasUpperCase = string => /[A-Z]/.test(string)
const noDigit = string => string.trim().split('').filter(char => /[^0-9]/.test(char)).join('')
const noVowel = string => string.trim().split('').filter(char => /[^aeiou]/i.test(char)).join('')

module.exports = {  
    hasUpperCase, 
    noDigit,
    noVowel
}