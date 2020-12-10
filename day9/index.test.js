const test = require('ava')
const { solvePart1, solvePart2 } = require('./index.js')

const sample = `35
20
15
25
47
40
62
55
65
95
102
117
150
182
127
219
299
277
309
576`.split('\n')

test('Part 1: it should find the first number which is not a sum of two of the previous', t => {
  // GIVEN
  const input = sample
  const preamble = 5

  const expected = 127

  // WHEN
  const actual = solvePart1(preamble)(input)

  // THEN
  t.is(actual, expected)
})

test('Part 2: it should sum the two bounds of the contiguous set that sum to the invalid number', t => {
  // GIVEN
  const input = sample
  const preamble = 5

  const expected = 62

  // WHEN
  const actual = solvePart2(preamble)(input)

  // THEN
  t.is(actual, expected)
})
