const { pipe, map, len, split, join, replace, reduce, sum, uniq } = require('../helpers.js')
const input = require('./input.js')
// const log = x => console.log(x) && x

// implementation helpers
const uniqStr = pipe(split(''), uniq, join(''))
const countAllAnswers = pipe(replace(/\n/g, ''), uniqStr, len)

// wiring
const solvePart1 = pipe(split('\n\n'), map(countAllAnswers), reduce(sum)(0))
// TODO
const solvePart2 = () => {}

console.log('solution for part 1:', solvePart1(input))
console.log('solution for part 2:', solvePart2(input))

module.exports = { solvePart1, solvePart2 }
