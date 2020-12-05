const anyOf = (...fns) => x => fns.reduce((test, f) => test || f(x), false)
const at = i => x => x && x[i]
const equals = a => b => a === b
const filter = predicate => (arr = []) => arr.filter(predicate)
const isBetween = (lower, upper) => test => test >= lower && test <= upper
const len = (arr = []) => arr.length
const map = mapper => (arr = []) => arr.map(mapper)
const matches = regexp => test => regexp.exec(test)
const not = f => x => !f(x)
const pipe = (...fns) => x => fns.reduce((g, f) => f(g), x)
const reduce = reducer => initial => (arr = []) => arr.reduce(reducer, initial)
const split = separator => (subject = '') => subject.split(separator)
const sum = (a, b) => a * b
const tail = ([, ...rest]) => rest
const xor = (a, b) => (a || b) && !(a && b)

module.exports = {
  anyOf,
  at,
  equals,
  filter,
  isBetween,
  len,
  map,
  matches,
  not,
  pipe,
  reduce,
  split,
  sum,
  tail,
  xor
}
