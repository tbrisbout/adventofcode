const {
  equals,
  find,
  map,
  max,
  min,
  not,
  pipe,
  reduce,
  slice,
  sum
} = require('../helpers.js')
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

const sumEquals = invalid => j =>
  pipe(slice(0, j + 1), reduce(sum)(0), equals(invalid))

const findWeakness = ([arr, invalid]) =>
  arr.reduce((acc, _, lower) => {
    if (acc) return acc

    const lowerSubset = arr.slice(lower)

    const upper = lowerSubset.findIndex((x, j) =>
      sumEquals(invalid)(j)(lowerSubset)
    )

    if (upper > 0) {
      const subset = lowerSubset.slice(0, upper + 1)

      return min(subset) + max(subset)
    }

    return null
  }, null)

const solvePart2 = preamble =>
  pipe(
    map(Number),
    arr => [arr, solvePart1(preamble)(arr)],
    ([arr, invalid]) => [
      slice(0, arr.findIndex(equals(invalid)))(arr),
      invalid
    ],
    findWeakness
  )

const PREAMBLE = 25
console.log('solution for part 1:', solvePart1(PREAMBLE)(input))
console.log('solution for part 2:', solvePart2(PREAMBLE)(input))

module.exports = { solvePart1, solvePart2 }
