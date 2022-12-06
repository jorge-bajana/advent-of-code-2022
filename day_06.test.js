const day_06 = require('./day_06')

test('Day 6 part 1', () => {
  expect(day_06.part1('./inputs/day_06_test.txt')).toBe(7)
})

test('Day 6 part 2', () => {
  expect(day_06.part2('./inputs/day_06_test.txt')).toBe(19)
})
