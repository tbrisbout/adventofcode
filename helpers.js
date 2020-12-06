const add = a => b => a + b
const anyOf = (...fns) => x => fns.reduce((test, f) => test || f(x), false)
const at = i => x => x && x[i]
const equals = a => b => a === b
const find = predicate => (arr = []) => arr.find(predicate)
const filter = predicate => (arr = []) => arr.filter(predicate)
const head = ([h]) => h
const isBetween = (lower, upper) => test => test >= lower && test <= upper
const join = (separator) => (arr = []) => arr.join(separator)
const len = (arr = []) => arr.length
const map = mapper => (arr = []) => arr.map(mapper)
const matches = regexp => test => regexp.exec(test)
const max = arr => Math.max(...arr)
const not = f => x => !f(x)
const pipe = (...fns) => x => fns.reduce((g, f) => f(g), x)
const reduce = reducer => initial => (arr = []) => arr.reduce(reducer, initial)
const replace = (from, to) => (subject = '') => subject.replace(from, to)
const slice = (index, length) => (subject = '') => subject.slice(index, length)
const split = separator => (subject = '') => subject.split(separator)
const sum = (a, b) => a + b
const substract = (a, b) => a - b
const product = (a, b) => a * b
const tail = ([, ...rest]) => rest
const uniq = arr => [...new Set(arr)]
const xor = (a, b) => (a || b) && !(a && b)
const sortAscending = (arr = []) => arr.sort(substract)

module.exports = {
  add,
  anyOf,
  at,
  equals,
  find,
  filter,
  head,
  isBetween,
  join,
  len,
  map,
  matches,
  max,
  not,
  pipe,
  product,
  reduce,
  replace,
  slice,
  sortAscending,
  split,
  sum,
  tail,
  uniq,
  xor
}
