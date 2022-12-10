const day_10 = require('./day_10')
const readFile = require('./fileReader')

test('Day 10 part 1', () => {
  expect(day_10.part1('./inputs/day_10_test.txt')).toBe(13140)
})

test('Day 10 part 2', () => {
  const result = readFile('./inputs/day_10_test_2.txt').split('\n').join('')
  expect(day_10.part2('./inputs/day_10_test.txt')).toBe(result)
})
