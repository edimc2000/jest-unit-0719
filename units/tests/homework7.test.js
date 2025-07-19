const { 
  hasUpperCase, 
  noDigit, 
  noVowel
} = require('../units/homework7');

let givens = []
let expected = []

test('Task 1: has upper case', () => {
  givens = ['javascript', 'John', '$125.0', '']
  expected = [false, true, false, false]

  for (const [index, value] of givens.entries()) {
    // console.log(`Index: ${index}, Value: ${value}`)
    expect(hasUpperCase(value)).toBe(expected[index])
  }
})

test('Task 2: no digit', () => {
  givens = ['', 'Javascript', '123Hello', '123Hello World149','2009MapleQA2005']
  expected =  ['', 'Javascript', 'Hello', 'Hello World','MapleQA']

  for (const [index, value] of givens.entries()) {
    console.log(`Index: ${index}, Value: ${value}`)
    expect(noDigit(value)).toBe(expected[index])
  }
})

test('Task 3: no vowel', () => {
  givens = ['MapleQA', 'AEOxyz', 'Javascript','', '$125.00']
  expected =  ['MplQ', 'xyz', 'Jvscrpt','','$125.00']

  for (const [index, value] of givens.entries()) {
    console.log(`Index: ${index}, Value: ${value}`)
    expect(noVowel(value)).toBe(expected[index])
  }
})
