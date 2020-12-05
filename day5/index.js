const { add, find, head, map, max, pipe, reduce, sortAscending, split, slice } = require('../helpers.js')
const input = require('./input.js')

// implementation helpers
const toSelectorArray = (index, length) => pipe(slice(index, length), split(''))

const lowerHalf = ([lower, upper]) => [lower, upper - Math.floor((upper - lower) / 2)]
const upperHalf = ([lower, upper]) => [lower + Math.ceil((upper - lower) / 2), upper]
const partition = (range, selector) => selector === 'F' || selector === 'L' ? lowerHalf(range) : upperHalf(range)

const nextIdIsMissing = (x, _, arr) => !arr.includes(x + 1) // meh

// business logic
const ROW_RANGE = [0, 127]
const COLUMN_RANGE = [0, 7]

const getRowId = pipe(toSelectorArray(0, 7), reduce(partition)(ROW_RANGE), head)
const getColumnId = pipe(toSelectorArray(-3), reduce(partition)(COLUMN_RANGE), head)

const getSeatId = (pass) => getRowId(pass) * 8 + getColumnId(pass)

// wiring
const solvePart1 = pipe(map(getSeatId), max)
const solvePart2 = pipe(map(getSeatId), sortAscending, find(nextIdIsMissing), add(1))

console.log('solution for part 1:', solvePart1(input))
console.log('solution for part 2:', solvePart2(input))

module.exports = { solvePart1, solvePart2, getSeatId }
