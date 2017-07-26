const assert = require('assert')
const BigSorting = require('./bigsorting')

let output = [
    1,
    3,
    3,
    5,
    6,
    10,
    31415926535897932384626433832795
];

let input = [
    6,
    31415926535897932384626433832795,
    1,
    3,
    10,
    3,
    5
];

describe('Big Sorting', () => {
    it('Sort Array', () => {
        const result = BigSorting.sort(input)
        assert.deepEqual(result,  output)
    })
})


