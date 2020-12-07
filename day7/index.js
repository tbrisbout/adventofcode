const {
  allOf,
  anyOf,
  capture,
  filter,
  includes,
  len,
  map,
  pipe,
  reduce,
  some,
  split
} = require('../helpers.js')
const input = require('./input.js')

// implementation helpers
const getParent = capture(/^(\w+ \w+)/)
const getChild = capture(/\d (\w+ \w+) bags?/)
const getChildren = pipe(split(', '), map(getChild), filter(Boolean))

const canContainShiny = dict => bag =>
  allOf(
    len,
    anyOf(includes('shiny gold'), some(canContainShiny(dict)))
  )(dict[bag])

// wiring
const buildDict = reduce((acc, rule) => ({
  ...acc,
  [getParent(rule)]: getChildren(rule)
}))({})

const filterContainers = dict =>
  pipe(Object.keys, filter(canContainShiny(dict)))(dict)

const solvePart1 = pipe(buildDict, filterContainers, len)

// TODO
const solvePart2 = () => {}

console.log('solution for part 1:', solvePart1(input))
console.log('solution for part 2:', solvePart2(input))

module.exports = { solvePart1, solvePart2 }
