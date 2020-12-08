const { add, append, map, over, pipe, split } = require('../helpers.js')
const input = require('./input.js')

// implementation helpers
const increment = offset => over('accumulator', add(offset))
const register = state => over('visited', append(state.line))(state)
const isLooping = ({ visited, line }) => visited.includes(line)

// program logic
const jmp = (offset = 1) => over('line', add(offset))
const acc = arg => pipe(increment(arg), jmp())
const nop = () => jmp() // explicitly discard argument

const OPS = { acc, nop, jmp }

const exec = ([op, arg]) => pipe(register, OPS[op](Number(arg)))

const run = state => program =>
  isLooping(state)
    ? state.accumulator
    : run(exec(program[state.line])(state))(program)

const INITIAL_STATE = {
  accumulator: 0,
  line: 0,
  visited: []
}

const parse = map(split(' '))
const solvePart1 = pipe(parse, run(INITIAL_STATE))

// TODO
const solvePart2 = () => {}

console.log('solution for part 1:', solvePart1(input))
console.log('solution for part 2:', solvePart2(input))

module.exports = { solvePart1, solvePart2 }
