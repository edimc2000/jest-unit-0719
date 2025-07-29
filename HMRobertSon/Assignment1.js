const prompt = require('prompt-sync')()

const staringBalance = prompt('Enter starting balance: ')
let balance = parseFloat(staringBalance)
let yearsTo100K = 0
let yearsTo1M = 0
let reached100K = false
let currentYear = 0

while (balance < 1000000) {
    balance *= 2
    currentYear++
    if (balance >= 100000 && !reached100K) {
        reached100K = true
        yearsTo100K = currentYear
    }

    if (balance >= 1000000) {
        yearsTo1M = currentYear
        break
    }
}

console.log(`It will take ${yearsTo100K} years to reach $100,000.`)
console.log(`It will take ${yearsTo1M} years to reach $1,000,000.`)
