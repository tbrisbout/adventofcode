const test = require('ava')
const { solvePart1, solvePart2 } = require('./index.js')

const sample = `abc

a
b
c

ab
ac

a
a
a
a

b`

test('Part 1: It should return the sum of all summed answers', t => {
  // GIVEN
  const input = sample
  const expected = 11

  // WHEN
  const actual = solvePart1(input)

  // THEN
  t.is(actual, expected)
})

test('Part 2: It should return the sum of all agreed answers', t => {
  // GIVEN
  const input = sample
  const expected = 6

  // WHEN
  const actual = solvePart2(input)

  // THEN
  t.is(actual, expected)
})
