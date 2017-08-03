let input = [8,
31415926535897932384626433832795,
1,
3,
10,
3,
5,
7,
11
]

console.log(input)
const readLine = () => {
  const retorno = input[0]
  input = input.slice(1)
  return retorno
}
const main = () => divide(divide(makeArray(parseInt(readLine()))))
const makeArray = length => Array.from({length: length}, (v, i) => readLine())
const divide = arr => arr.length == 1 ? arr : compare(divide(leftArr(arr)), divide(rightArr(arr)))
const compare = (left, right) => left.reduce((acc, itemL, index) => itemL > right[index] ? acc.concat([right[index], itemL]) : acc.concat([itemL, right[index]]), [])
const ifIndexOver = (index, arr) => index == arr.length
const middle = arr => Math.floor(arr.length/2)
const leftArr = arr => arr.slice(0, middle(arr))
const rightArr = arr => arr.slice(middle(arr))


console.log(main())
