const test = require('ava')
const { solvePart1, solvePart2 } = require('./index.js')

test('Part 1: it should find all bags that can contain a shiny gold bag eventually', t => {
  // GIVEN
  const input = `light red bags contain 1 bright white bag, 2 muted yellow bags.
dark orange bags contain 3 bright white bags, 4 muted yellow bags.
bright white bags contain 1 shiny gold bag.
muted yellow bags contain 2 shiny gold bags, 9 faded blue bags.
shiny gold bags contain 1 dark olive bag, 2 vibrant plum bags.
dark olive bags contain 3 faded blue bags, 4 dotted black bags.
vibrant plum bags contain 5 faded blue bags, 6 dotted black bags.
faded blue bags contain no other bags.
dotted black bags contain no other bags.`.split('\n')

  const expected = 4

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
