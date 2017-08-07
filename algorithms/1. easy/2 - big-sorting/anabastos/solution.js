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

const readLine = () => input.shift()

// Ignore a parte de cima /\ /\ /\

const main = () => divide(divide(makeArray(parseInt(readLine()))))
const makeArray = length => Array.from({length: length}, (v, i) => readLine())
const divide = arr => arr.length == 1 ? arr : compareArrs(divide(leftArr(arr)), divide(rightArr(arr)))
// const compare = (left, right) => left.reduce((acc, itemL, index) => itemL > right[index] ? acc.concat([right[index], itemL]) : acc.concat([itemL, right[index]]), [])
const compareArrs = (left, right) => {
  let result = [], l = 0, r = 0;
    while(l < left.length && r < right.length){
     left[l] < right[r] ? result.push(left[l++]) : result.push(right[r++])
    }
    return result.concat(left.slice(l)).concat(right.slice(r))
}

const ifIndexOver = (index, arr) => index == arr.length
const middle = arr => Math.floor(arr.length/2)
const leftArr = arr => arr.slice(0, middle(arr))
const rightArr = arr => arr.slice(middle(arr))

console.log(main())

module.exports = {main, makeArray, divide, compareArrs, ifIndexOver, middle, leftArr, rightArr}
