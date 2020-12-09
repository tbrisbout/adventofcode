const add = a => b => a + b
const allOf = (...fns) => x => fns.reduce((test, f) => test && f(x), true)
const anyOf = (...fns) => x => fns.reduce((test, f) => test || f(x), false)
const append = x => (arr = []) => [...arr, x]
const at = i => x => x && x[i]
const defaultTo = a => b => b || a
const equals = a => b => a === b
const find = predicate => (arr = []) => arr.find(predicate)
const filter = predicate => (arr = []) => arr.filter(predicate)
const flatMap = mapper => pipe(map(mapper), flatten)
const flatten = (arr = []) => arr.flat()
const head = ([h]) => h
const includes = test => (arr = []) => arr.includes(test)
const isBetween = (lower, upper) => test => test >= lower && test <= upper
const len = (arr = []) => arr.length
const map = mapper => (arr = []) => arr.map(mapper)
const matches = regexp => test => regexp.exec(test)
const max = arr => Math.max(...arr)
const not = f => x => !f(x)
const over = (field, f) => obj => ({ ...obj, [field]: f(obj[field]) })
const pipe = (...fns) => x => fns.reduce((g, f) => f(g), x)
const reduce = reducer => initial => (arr = []) => arr.reduce(reducer, initial)
const replace = (from, to) => (subject = '') => subject.replace(from, to)
const slice = (index, length) => (subject = '') => subject.slice(index, length)
const some = predicate => (arr = []) => arr.some(predicate)
const split = separator => (subject = '') => subject.split(separator)
const sum = (a, b) => a + b
const substract = (a, b) => a - b
const product = (a, b) => a * b
const tail = ([, ...rest]) => rest
const uniq = arr => [...new Set(arr)]
const xor = (a, b) => (a || b) && !(a && b)
const sortAscending = (arr = []) => arr.sort(substract)
const capture = regexp => pipe(matches(regexp), at(1))
const captureAll = regexp => pipe(matches(regexp), defaultTo([]), tail)

module.exports = {
  add,
  allOf,
  anyOf,
  append,
  at,
  capture,
  captureAll,
  defaultTo,
  equals,
  find,
  filter,
  flatMap,
  flatten,
  head,
  includes,
  isBetween,
  len,
  map,
  matches,
  max,
  not,
  over,
  pipe,
  product,
  reduce,
  replace,
  slice,
  some,
  sortAscending,
  split,
  sum,
  tail,
  uniq,
  xor
}
