const day_04 = require('./day_04')

test('Day 4 part 1', () => {
  expect(day_04.part1('./inputs/day_04_test.txt')).toBe(2)
})

test('Day 4 part 2', () => {
  expect(day_04.part2('./inputs/day_04_test.txt')).toBe(4)
})
