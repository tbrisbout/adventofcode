const {
  allOf,
  anyOf,
  capture,
  captureAll,
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

const SHINY_GOLD = 'shiny gold'

// implementation helpers
const getParent = capture(/^(\w+ \w+)/)
const getChild = capture(/\d (\w+ \w+) bags?/)
const listChildren = pipe(split(', '), map(getChild), filter(Boolean))
const getChildWithCounts = captureAll(/(\d) (\w+ \w+) bags?/)
const listWithCounts = pipe(split(', '), map(getChildWithCounts))

const canContainShiny = dict => bag =>
  allOf(
    len,
    anyOf(includes(SHINY_GOLD), some(canContainShiny(dict)))
  )(dict[bag])

const sumBagAndChildren = (acc, [bagCount, childrenCount]) =>
  acc + bagCount + bagCount * childrenCount

const countChildren = bag => dict =>
  !len(dict[bag][0])
    ? 0
    : pipe(
        map(([count, child]) => [Number(count), countChildren(child)(dict)]),
        reduce(sumBagAndChildren)(0)
      )(dict[bag])

const buildDict = childrenGetter =>
  reduce((acc, rule) => ({
    ...acc,
    [getParent(rule)]: childrenGetter(rule)
  }))({})

const filterContainers = dict =>
  pipe(Object.keys, filter(canContainShiny(dict)))(dict)

const solvePart1 = pipe(buildDict(listChildren), filterContainers, len)
const solvePart2 = pipe(buildDict(listWithCounts), countChildren(SHINY_GOLD))

console.log('solution for part 1:', solvePart1(input))
console.log('solution for part 2:', solvePart2(input))

module.exports = { solvePart1, solvePart2 }
