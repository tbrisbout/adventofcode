const {
  equals,
  filter,
  isBetween,
  len,
  matches,
  pipe,
  split,
  tail,
  xor
} = require('../helpers.js')
const input = require('./input.js')

// implementation helpers
const parseEntry = pipe(matches(/(\d+)-(\d+) (\w): (\w+)/), tail)
const countOccurences = letter => pipe(split(''), filter(equals(letter)), len)

// password policy strategies
const hasCorrectNumberOfOccurences = ([lower, upper, letter, password]) =>
  pipe(countOccurences(letter), isBetween(lower, upper))(password)

const appearsOnlyOnOneBound = ([lower, upper, letter, password]) =>
  xor(password[lower - 1] === letter, password[upper - 1] === letter)

// wiring
const policyCheck = strategy => pipe(filter(pipe(parseEntry, strategy)), len)

const solvePart1 = policyCheck(hasCorrectNumberOfOccurences)
const solvePart2 = policyCheck(appearsOnlyOnOneBound)

console.log('solution for part 1:', solvePart1(input))
console.log('solution for part 2:', solvePart2(input))
