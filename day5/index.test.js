const test = require('ava')
const { getSeatId, solvePart1, solvePart2 } = require('./index.js')
const { head } = require('../helpers.js')

const testCases = [
  ['FBFBBFFRLR', 357],
  ['BFFFBBFRRR', 567],
  ['FFFBBBFRRR', 119],
  ['BBFFBBFRLL', 820]
]

testCases.forEach(([input, expected]) =>
  test(`given ${input}, getSeatId should return ${expected}`, t => {
    // WHEN
    const actual = getSeatId(input)

    // THEN
    t.is(actual, expected)
  })
)

test('Part 1: it should return the highest id', t => {
  // GIVEN
  const input = testCases.map(head).join('\n')
  const expected = 820

  // WHEN
  const actual = solvePart1(input)

  // THEN
  t.is(actual, expected)
})

test.skip('Part 2: should ...', t => {
  // GIVEN
  const input = ''
  const expected = ''

  // WHEN
  const actual = solvePart2(input)

  // THEN
  t.is(actual, expected)
})
