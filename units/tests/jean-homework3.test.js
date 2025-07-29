const {
  randomNumAverageCalculation,
  numbersMatching,
  hasA,
  doubleOrTripleWord,
  firstWord,
  lastWord,
  firstLastWord,
  startVowel,
  swap4,
  swapFirstLastWord
} = require('../units/jean-homework3');

let givens = []
let expected = []

test(`task1: averageOfThreeNumbers`, () => {
  givens = [[50, 50, 50], [49, 49, 49]]
  expected = [true, false]

  for (const [index, value] of givens.entries()) {
    //console.log(`Index: ${index}, Value: ${value}`)
    expect(randomNumAverageCalculation(...value) >= 50).toBe(expected[index])
  }
})

test(`task2: matchTheNumbers`, () => {
  givens = [[3, 3, 3], [1, 2, 3], [1, 3, 3], [1, 1, 2]]
  expected = [`TRIPLE MATCH`, `NO MATCH`, `DOUBLE MATCH`, `DOUBLE MATCH`]

  for (const [index, value] of givens.entries()) {
    //console.log(`Index: ${index}, Value: ${value}`)
    expect(numbersMatching(...value)).toBe(expected[index])
  }
})

test(`task3: stringHasA`, () => {
  givens = ["Tech", "Global", "", "Apple"]
  expected = [false, true, false, true]

  for (const [index, value] of givens.entries()) {
    //console.log(`Index: ${index}, Value: ${value}`)
    expect(hasA(value)).toBe(expected[index])
  }
})

test(`task4: doubleOrTripleTheWord`, () => {
  givens = ["Tech", "Apple", "", " ", "1", "22"]
  expected = ["TechTechTech", "AppleApple", `""`, "  ", "11", "222222"]

  for (const [index, value] of givens.entries()) {
    //console.log(`Index: ${index}, Value: ${value}`)
    expect(doubleOrTripleWord(value)).toBe(expected[index])
  }
})

test(`task5: returnTheFirstWord`, () => {
  givens = ["Hello World", "I like JavaScript", "Hello", "", " "]
  expected = ["Hello", "I", "Hello", `""`, `""`]

  for (const [index, value] of givens.entries()) {
    //console.log(`Index: ${index}, Value: ${value}`)
    expect(firstWord(value)).toBe(expected[index])
  }
})

test(`task6: returnTheLastWord`, () => {
  givens = ["Hello World", "I  like JavaScript", "Hello", "", " "]
  expected = ["World", "JavaScript", "Hello", `""`, `""`]

  for (const[index, value] of givens.entries()){
    //console.log(`Index: ${index}, Value: ${value}`)
    expect(lastWord(value)).toBe(expected[index])
  }
})

test(`task7: returnTheFirstAndLastWords`, () => {
  givens = ["Hello World", "I  like JavaScript", "Hello", "", " "]
  expected = ["HelloWorld", "IJavaScript", "HelloHello", `""`, `""`]

  for (const[index, value] of givens.entries()){
    //console.log(`Index: ${index}, Value: ${value}`)
    expect(firstLastWord(value)).toBe(expected[index])
  }
})

test(`task8: stringStartsWithVowel`, () => {
  givens = ["Hello", "Apple", "orange", "", " ", "123"]
  expected = [false, true, true, false, false, false]

  for (const[index, value] of givens.entries()){
    //console.log(`Index: ${index}, Value: ${value}`)
    expect(startVowel(value)).toBe(expected[index])
  }
})

test(`task9: swapTheFirstAndLast4Characters`, () => {
  givens = ["abc", "JavaScript", "TechGlobal", "", "  ", "Apple"]
  expected = [`""`, "riptScJava", "obalGlTech", `""`, `""`, `""`]

  for (const[index, value] of givens.entries()){
    //console.log(`Index: ${index}, Value: ${value}`)
    expect(swap4(value)).toBe(expected[index])
  }
})

test(`task10: swapTheFirstAndLastWord`, () => {
  givens = ["Hello World", "I like JavaScript", "foo bar foo bar", "", "Hello", "Hello "]
  expected = ["World Hello", "JavaScript like I", "bar bar foo foo", `""`, `""`, `""`]
 
  for (const[index, value] of givens.entries()){
    //console.log(`Index: ${index}, Value: ${value}`)
    expect(swapFirstLastWord(value)).toBe(expected[index])
  }
})
