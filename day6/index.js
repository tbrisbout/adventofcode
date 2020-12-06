const { head, filter, includes, pipe, map, len, split, join, replace, reduce, sum, uniq } = require('../helpers.js')
const input = require('./input.js')

// implementation helpers
const uniqStr = pipe(split(''), uniq, join(''))
const isInAll = answers => answer => answers.every(includes(answer))

// business logic
const countAllAnswers = pipe(replace(/\n/g, ''), uniqStr, len)

const getAgreedAnswers = answers => pipe(head, filter(isInAll(answers)))(answers)

const countAgreedAnswers = pipe(split('\n'), map(split('')), getAgreedAnswers, len)

// wiring
const solver = strategy => pipe(split('\n\n'), map(strategy), reduce(sum)(0))

const solvePart1 = solver(countAllAnswers)
const solvePart2 = solver(countAgreedAnswers)

console.log('solution for part 1:', solvePart1(input))
console.log('solution for part 2:', solvePart2(input))

module.exports = { solvePart1, solvePart2 }
