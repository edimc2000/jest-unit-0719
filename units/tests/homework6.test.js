const {
  noSpace,
  replaceFirstLast
} = require('../units/homework6');

let givens = []
let expected = []

test('Task 1: no space', () => {
  givens = ['', 'Javascript', '   Hello   ', ' Hello       World   ', 'Maple Leaf']
  expected = ['', 'Javascript', 'Hello', 'HelloWorld', 'MapleLeaf']

  for (const [index, value] of givens.entries()) {
    // console.log(`Index: ${index}, Value: ${value}`)
    expect(noSpace(value)).toBe(expected[index])
  }
})

test('Task 2: replace first and last', () => {
  givens = ['', 'Hello', 'A',  ' A ', 'Maple Leaf']
  expected = ['', 'oellH', '', '', 'faple LeaM']

  for (const [index, value] of givens.entries()) {
    // console.log(`Index: ${index}, Value: ${value}`)
    expect(replaceFirstLast(value)).toBe(expected[index])
  }
})
