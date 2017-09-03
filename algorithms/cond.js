const double = x => x * 2
const half = x => x / 2
const id = x => x
const T = () => true
const gt = n => x => x > n
const lt = n => x => x < n

const cond = (conds, x) => {
  console.log(conds.filter(cond => cond[0](cond[1])))
}

console.log(
  cond(
  [ [gt(10), half]
  , [lt(10), double]
  , [T, id]
  ], 10)
)
