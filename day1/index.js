const input = require('./input.js')

// not optimized
const solvePart1 = (numbers = []) =>
  numbers.filter(i => input.find(j => i + j === 2020)).reduce((i, j) => i * j, 1)

// I hadn't write one in JS for ~5 years, and here's three of them!
const solvePart2 = (numbers = []) => {
  for (const i of numbers) {
    for (const j of numbers) {
      for (const k of numbers) {
        if (i + j + k === 2020) return i * j * k
      }
    }
  }
}

console.log('solution for part 1:', solvePart1(input))
console.log('solution for part 2:', solvePart2(input))
