const prompt = require('prompt-sync')()

const weightArr = []
let question = 'y'

while (question === 'y') {
    console.log(`Item number ${weightArr.length + 1}: `)
    let weight = prompt('Enter weight (greater than 0): ')

    while (!(weight>0)) {
        let weightAskLoop = prompt('Enter weight (greater than 0): ')
        weight = weightAskLoop
    }
    weightArr.push(weight)

    let more = prompt('more? (y/n): ')
    if (more.toLowerCase() === 'n') { break }
}

console.log(`Average weight = ${weightArr.reduce((sum, e) => sum + Number(e), 0) / weightArr.length} kg `); 