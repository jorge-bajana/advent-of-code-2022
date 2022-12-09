const day_09 = require('./day_09')

test('Day 9 part 1', () => {
  expect(day_09.part1('./inputs/day_09_test.txt')).toBe(13)
})

test('Day 9 part 2', () => {
  expect(day_09.part2('./inputs/day_09_02_test.txt')).toBe(36)
})
