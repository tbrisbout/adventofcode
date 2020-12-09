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
acc +6`.split('\n')

test('Part 1: it should print the accumulator value before any second execution', t => {
  // GIVEN
  const input = sample
  const expected = 5

  // WHEN
  const actual = solvePart1(input)

  // THEN
  t.is(actual, expected)
})

test('Part 2: it should replace a nop with a jmp (or vice-versa) to avoid looping and return the accumulator', t => {
  // GIVEN
  const input = sample
  const expected = 8

  // WHEN
  const actual = solvePart2(input)

  // THEN
  t.is(actual, expected)
})
