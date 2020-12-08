const { add, append, map, over, pipe, split } = require('../helpers.js')
const input = require('./input.js')

// implementation helpers
const increment = offset => over('accumulator', add(offset))
const register = state => over('visited', append(state.line))(state)

// program logic
const jmp = (offset = 1) => over('line', add(offset))
const acc = arg => pipe(increment(arg), jmp())
const nop = () => jmp() // explicitly discard argument

const OPS = { acc, nop, jmp }

const run = state => program => {
  const { line, visited, accumulator } = state
  if (visited.includes(line)) {
    return accumulator
  }

  const [op, arg] = program[line]
  const nextState = pipe(register, OPS[op](Number(arg)))(state)

  return run(nextState)(program)
}

const INITIAL_STATE = {
  accumulator: 0,
  line: 0,
  visited: []
}

const solvePart1 = pipe(map(split(' ')), run(INITIAL_STATE))

// TODO
const solvePart2 = () => {}

console.log('solution for part 1:', solvePart1(input))
console.log('solution for part 2:', solvePart2(input))

module.exports = { solvePart1, solvePart2 }
