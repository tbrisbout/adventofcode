const {
  equals,
  filter,
  len,
  map,
  pipe,
  product,
  reduce,
  tail
} = require('../helpers.js')
const input = require('./input.js')

// implementation helpers
const moveHorizontally = offset => (line, verticalPosition) =>
  line[(verticalPosition * offset) % line.length]

const moveVertically = offset => filter((_, i) => i % offset === 0)

// wiring
const traverse = ([hOffset, vOffset]) =>
  pipe(
    moveVertically(vOffset),
    map(moveHorizontally(hOffset)),
    tail,
    filter(equals('#')),
    len
  )

const traverseAll = slopes => grid =>
  pipe(
    map(slope => traverse(slope)(grid)),
    reduce(product)(1)
  )(slopes)

const solvePart1 = traverse([3, 1])
const solvePart2 = traverseAll([
  [1, 1],
  [3, 1],
  [5, 1],
  [7, 1],
  [1, 2]
])

console.log('solution for part 1:', solvePart1(input))
console.log('solution for part 2:', solvePart2(input))
