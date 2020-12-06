const test = require('ava')
const { solvePart1, solvePart2 } = require('./index.js')

test('Part 1: It should return the sum of all summed answers', t => {
  // GIVEN
  const input =
`abc

a
b
c

ab
ac

a
a
a
a

b
`
  const expected = 11

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
