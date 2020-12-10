const { find, map, not, pipe, slice } = require('../helpers.js')
const input = require('./input.js')

const isValid = number =>
  find((x, _, numbers) => numbers.find(y => x !== y && x + y === number))

const solvePart1 = preamble =>
  pipe(
    map(Number),
    find(
      (number, i, numbers) =>
        i >= preamble &&
        pipe(slice(i - preamble, i), not(isValid(number)))(numbers)
    )
  )

// TODO
const solvePart2 = () => {}

console.log('solution for part 1:', solvePart1(25)(input))
// console.log('solution for part 2:', solvePart2(input))

module.exports = { solvePart1, solvePart2 }
