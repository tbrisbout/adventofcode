const {
  equals,
  find,
  findIndex,
  map,
  max,
  min,
  not,
  pipe,
  reduce,
  slice,
  sliceAfter,
  sliceToItem,
  sum,
  Tuple
} = require('../helpers.js')
const input = require('./input.js')

const isValid = number =>
  find((x, _, numbers) => numbers.find(y => x !== y && x + y === number))

const findInvalid = preamble =>
  find(
    (number, i, numbers) =>
      i >= preamble &&
      pipe(slice(i - preamble, i), not(isValid(number)))(numbers)
  )

const sumEquals = invalid => (_, index, arr) =>
  pipe(sliceAfter(index), reduce(sum)(0), equals(invalid))(arr)

const sumMinAndMax = pipe(Tuple.of, Tuple.map(min, max), reduce(sum)(0))

const findWeakness = invalid =>
  reduce(
    (acc, _, lower, arr) =>
      acc ||
      pipe(
        slice(lower),
        Tuple.of,
        Tuple.mapR(findIndex(sumEquals(invalid))),
        ([i, subset]) => i > 0 && pipe(sliceAfter(i), sumMinAndMax)(subset)
      )(arr)
  )()

const solvePart1 = preamble => pipe(map(Number), findInvalid(preamble))

const solvePart2 = preamble =>
  pipe(
    map(Number),
    Tuple.of,
    Tuple.mapL(findInvalid(preamble)),
    Tuple.mapRWithL(sliceToItem),
    Tuple.mapRWithL(findWeakness),
    Tuple.R
  )

const PREAMBLE = 25
console.log('solution for part 1:', solvePart1(PREAMBLE)(input))
console.log('solution for part 2:', solvePart2(PREAMBLE)(input))

module.exports = { solvePart1, solvePart2 }
