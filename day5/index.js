const { add, find, map, max, pipe, replace, sortAscending } = require('../helpers.js')
const input = require('./input.js')

// implementation helpers
const nextIdIsMissing = (x, _, arr) => !arr.includes(x + 1) // meh

// It is actually a binary representation
const getSeatId = pipe(replace(/F|L/g, 0), replace(/B|R/g, 1), binary => parseInt(binary, 2))

// wiring
const solvePart1 = pipe(map(getSeatId), max)
const solvePart2 = pipe(map(getSeatId), sortAscending, find(nextIdIsMissing), add(1))

console.log('solution for part 1:', solvePart1(input))
console.log('solution for part 2:', solvePart2(input))

module.exports = { solvePart1, solvePart2, getSeatId }
