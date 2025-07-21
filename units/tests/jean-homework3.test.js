const {
  randomNumAverageCalculation
} = require('../units/jean-homework3');

let givens = []
let expected = []

test('Task 1: no space', () => {
  givens = [[50, 50, 50]]
  expected = [true]

  for (const [index, value] of givens.entries()) { 
    console.log(`Index: ${index}, Value: ${value}`)
   // expect(randomNumAverageCalculation(givens[index][0], givens[index][1], givens[index][2]) >= 50).toBe(expected[index])
    expect(randomNumAverageCalculation(...value) >= 50).toBe(expected[index])
  }
})