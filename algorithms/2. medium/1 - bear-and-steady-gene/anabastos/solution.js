const R = require('ramda')

const processData = input => composed(getStringInput)

const getNInput = input => parseInt(R.split('\n')(input)[0], 10)
const getStringInput = input => R.split('\n')(input)[1]

const getN= R.divide(R.__, 4)

const getBalance = s => R.reduce((acc, letter) =>  R.ifElse(
    R.has(letter),
    R.over(R.lensProp(letter), R.inc),
    R.assoc(letter, 1),
  )(acc), [])(R.split('')(s))

// map obj checking if its balanced?
const getBalanceComparison = n => R.cond([
  [R.lt(n),     x => R.mathMod(x, n)],
  [R.gt(n),     x => R.negate(R.mathMod(x, n))],
  [R.equals(n), R.always(0)]
])

const isBalanced = R.equals(0)
const allBalanced = R.all(isBalanced)(R.values)

const getSubstring = s => false
const getSubstringSize = i => false

const composed = R.compose(
  getSubstringSize,
  getSubstring,
  getBalanceComparison,
  getBalance,
)


module.exports = {getN, getBalance, getBalanceComparison, allBalanced, getSubstring, getSubstringSize}
