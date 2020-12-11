const test = require('ava')
const { solvePart1, solvePart2 } = require('./index.js')

const sample = `16
10
15
5
1
11
7
19
6
12
4`.split('\n')

test('Part 1: it should return the product of 1 jolt and 3 jolt differences', t => {
  // GIVEN
  const input = sample
  const expected = 35

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
