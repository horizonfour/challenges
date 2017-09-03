const s = require('./solution')

test('get n times', () => {
  expect(s.getN(8)).toEqual(2)
  expect(s.getN(12)).toEqual(3)
  expect(s.getN(4)).toEqual(1)
})

test('get balance', () => {
  expect(s.getBalance('GAAATAAA')).toEqual({G: 1, T: 1, A: 6})
  expect(s.getBalance('AAGTGCCT')).toEqual({G: 2, T: 2, A: 2, C:2})
  expect(s.getBalance('GACT')).toEqual({G: 1, T: 1, A: 1, C:1})
})

test('get balance comparison', () => {
  expect(s.getBalanceComparison(2)(2)).toEqual(0)
  expect(s.getBalanceComparison(2)(3)).toEqual(1)
  expect(s.getBalanceComparison(2)(1)).toEqual(-1)

})

test('all balanced', () => {
  expect(s.allBalanced({A: 0, B: 0})).toEqual(true)
  expect(s.allBalanced({A: 1, B: 0})).toEqual(false)
  expect(s.allBalanced({A: 1, B: -1})).toEqual(false)
  expect(s.allBalanced({A: 0, B: -1, C: 0})).toEqual(false)
})

test('get missing letter', () => {
  expect(s.getMissingLetter({A: 4, G: -1, T: -1})).toEqual({A: 4, G: -1, T: -1, C: -2})
})

test('get substring', () => {
  expect(s.getSubstring({A: 4, G: -1, G: -1, }, 'GAAATAAA')).toEqual('AAATA')
})

test('get substring size', () => {
  expect(s.getSubstringSize(true)).toEqual(true)
})
