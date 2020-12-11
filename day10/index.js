const {
  product,
  over,
  add,
  map,
  pipe,
  sortAscending,
  reduce
} = require('../helpers.js')
const input = require('./input.js')

// implementation helpers
const diffWithPrevious = (x, i, arr) => (i === 0 ? +x : x - arr[i - 1])
const countDifferences = (acc, x) => over(x, add(1))(acc)

const INITIAL_COUNTS = { 1: 0, 3: 1 }

const solvePart1 = pipe(
  sortAscending,
  map(diffWithPrevious),
  reduce(countDifferences)(INITIAL_COUNTS),
  Object.values,
  reduce(product)(1)
)

// TODO
const solvePart2 = () => {}

console.log('solution for part 1:', solvePart1(input))
// console.log('solution for part 2:', solvePart2(input))

module.exports = { solvePart1, solvePart2 }
