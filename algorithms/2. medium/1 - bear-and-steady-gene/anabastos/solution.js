const R = require('ramda')

const processData = input => composed(getString(input))

const getString = input => input.split('\n')[1]
const getBalance = s => true
const checkIfItsBalanced = obj => true
const getSubstring = s => true
const getSubstringSize = i => true

const composed = R.compose(
  getSubstringSize
  getSubstring,
  checkIfItsBalanced,
  getBalance
)


module.exports = {getBalance, checkIfItsBalanced, getSubstring, getSubstringSize}
