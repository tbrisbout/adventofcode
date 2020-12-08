const test = require('ava')
const { solvePart1, solvePart2 } = require('./index.js')

const sample = `nop +0
acc +1
jmp +4
acc +3
jmp -3
acc -99
acc +1
jmp -4
acc +6`

test('Part 1: it should print the accumulator value before any second execution', t => {
  // GIVEN
  const input = sample.split('\n')
  const expected = 5

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
