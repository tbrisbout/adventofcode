const { anyOf, at, equals, filter, isBetween, len, map, matches, not, pipe, split } = require('../helpers.js')
const input = require('./input.js')

// implementation helpers
const toObjectWithFields = pipe(split(/\s/), map(split(':')), Object.fromEntries)
const parseInput = pipe(split('\n\n'), map(toObjectWithFields))
const sizeWithUnit = unit => pipe(matches(new RegExp(`(\\d+)${unit}`)), at(1), Number)

// business logic
const hasAllFieldsExceptCid = pipe(Object.keys, filter(not(equals('cid'))), len, equals(7))

const RULES_BY_FIELD = {
  byr: pipe(Number, isBetween(1920, 2002)),
  iyr: pipe(Number, isBetween(2010, 2020)),
  eyr: pipe(Number, isBetween(2020, 2030)),
  hgt: anyOf(
    pipe(sizeWithUnit('cm'), isBetween(150, 193)),
    pipe(sizeWithUnit('in'), isBetween(59, 76))
  ),
  hcl: matches(/^#[0-9a-f]{6}$/),
  ecl: matches(/^(amb|blu|brn|gry|grn|hzl|oth)$/),
  pid: matches(/^\d{9}$/)
  // skipping cid because it is not required
}

const checkRulesForAllFields = passport =>
  Object.entries(RULES_BY_FIELD).every(([key, predicate]) => passport[key] && predicate(passport[key]))

// wiring
const passportCheck = strategy => pipe(parseInput, filter(strategy), len)

const solvePart1 = passportCheck(hasAllFieldsExceptCid)
const solvePart2 = passportCheck(checkRulesForAllFields)

console.log('solution for part 1:', solvePart1(input))
console.log('solution for part 2:', solvePart2(input))

module.exports = { solvePart1, solvePart2 }
