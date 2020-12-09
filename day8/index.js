const {
  add,
  append,
  filter,
  flatMap,
  flatten,
  len,
  map,
  not,
  over,
  pipe,
  reduce,
  split
} = require('../helpers.js')
const input = require('./input.js')

// generic helpers
const replaceAtIndex = operation => arr => index => {
  const copy = [...arr]
  copy[index] = [operation, arr[index][1]]
  return copy
}

const getOpIndexes = program => operation =>
  reduce((indexes, [op], i) => (op === operation ? [...indexes, i] : indexes))(
    []
  )(program)

// implementation helpers
const increment = offset => over('accumulator', add(offset))
const register = state => over('visited', append(state.line))(state)
const isLooping = ({ visited, line }) => visited.includes(line)
const isFinished = ({ line }) => program => line >= len(program)

// program logic
const jmp = (offset = 1) => over('line', add(offset))
const acc = arg => pipe(increment(arg), jmp())
const nop = () => jmp() // explicitly discard argument

const OPS = { acc, nop, jmp }

const exec = ([op, arg]) => pipe(register, OPS[op](Number(arg)))

const run = state => program =>
  isLooping(state) || isFinished(state)(program)
    ? state.accumulator
    : run(exec(program[state.line])(state))(program)

const isInfiniteLoop = state => program =>
  !isFinished(state)(program) &&
  (isLooping(state) ||
    isInfiniteLoop(exec(program[state.line])(state))(program))

const INITIAL_STATE = {
  accumulator: 0,
  line: 0,
  visited: []
}

const parse = map(split(' '))
const solvePart1 = pipe(parse, run(INITIAL_STATE))

const findFix = operation => program =>
  pipe(
    map(replaceAtIndex(operation)(program)),
    filter(not(isInfiniteLoop(INITIAL_STATE))),
    flatten
  )

const otherOp = op => (op === 'jmp' ? 'nop' : 'jmp')

const replaceBug = ops => program =>
  flatMap(op => pipe(getOpIndexes(program), findFix(otherOp(op))(program))(op))(
    ops
  )

const solvePart2 = pipe(parse, replaceBug(['nop', 'jmp']), run(INITIAL_STATE))

console.log('solution for part 1:', solvePart1(input))
console.log('solution for part 2:', solvePart2(input))

module.exports = { solvePart1, solvePart2 }
