const test = require('ava')
const { solvePart1, solvePart2 } = require('./index.js')

const sample = `light red bags contain 1 bright white bag, 2 muted yellow bags.
dark orange bags contain 3 bright white bags, 4 muted yellow bags.
bright white bags contain 1 shiny gold bag.
muted yellow bags contain 2 shiny gold bags, 9 faded blue bags.
shiny gold bags contain 1 dark olive bag, 2 vibrant plum bags.
dark olive bags contain 3 faded blue bags, 4 dotted black bags.
vibrant plum bags contain 5 faded blue bags, 6 dotted black bags.
faded blue bags contain no other bags.
dotted black bags contain no other bags.`.split('\n')

const sample2 = `shiny gold bags contain 2 dark red bags.
dark red bags contain 2 dark orange bags.
dark orange bags contain 2 dark yellow bags.
dark yellow bags contain 2 dark green bags.
dark green bags contain 2 dark blue bags.
dark blue bags contain 2 dark violet bags.
dark violet bags contain no other bags.`.split('\n')

test('Part 1: it should find all bags that can contain a shiny gold bag eventually', t => {
  // GIVEN
  const input = sample
  const expected = 4

  // WHEN
  const actual = solvePart1(input)

  // THEN
  t.is(actual, expected)
})

const testCases = [
  [sample, 32],
  [sample2, 126]
]

testCases.forEach(([input, expected]) => {
  test(`Part 2: sample should return ${expected}`, t => {
    // WHEN
    const actual = solvePart2(input)

    // THEN
    t.is(actual, expected)
  })
})
