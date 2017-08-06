const s = require('./solution')

test('make Array', () => {
  expect(s.makeArray(2)).toEqual([8, 31415926535897932384626433832795])
  expect(s.makeArray(5)).toEqual([1, 3, 10, 3, 5])
  expect(s.makeArray(2)).toEqual([7, 11])  
})

test('left array', () => {
  expect(s.leftArr([1, 2, 3, 4, 5, 6])).toEqual([1, 2, 3])
  expect(s.leftArr([1, 2, 3, 4, 5])).toEqual([1, 2])  
  expect(s.leftArr([1])).toEqual([])  
})

test('right array', () => {
  expect(s.rightArr([1, 2, 3, 4, 5, 6])).toEqual([4, 5, 6])
  expect(s.rightArr([1, 2, 3, 4, 5])).toEqual([3, 4, 5])  
  expect(s.rightArr([1])).toEqual([1])  
  expect(s.rightArr([1, 2])).toEqual([2])
})

test('middle index', () => {
  expect(s.middle([1, 2, 3, 4, 5, 6])).toEqual(3)
  expect(s.middle([1, 2, 3, 4, 5])).toEqual(2)  
  expect(s.middle([1])).toEqual(0)  
})

test('compare', () => {
  expect(s.compareArrs([3], [4])).toEqual([3, 4])
  expect(s.compareArrs([3, 6], [2])).toEqual([2, 3, 6])   
  expect(s.compareArrs([], [2])).toEqual([2])  
})

test('divide', () => {
  expect(s.divide([6, 3, 8, 4, 5, 1])).toEqual([1, 3, 4, 5, 6, 8])    
  expect(s.divide([6, 3, 8, 4, 5, 1, 10])).toEqual([1, 3, 4, 5, 6, 8, 10])  
})

