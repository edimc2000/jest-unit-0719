const noSpace = require('../units/noSpace');

test('no spaces', () => {
  expect(noSpace('')).toBe('')
  expect(noSpace("Javascript")).toBe('Javascript')
  expect(noSpace("    Hello   ")).toBe('Hello')
  expect(noSpace(" Hello World  ")).toBe('HelloWorld')
  expect(noSpace("Maple Q A")).toBe('MapleQA')

});