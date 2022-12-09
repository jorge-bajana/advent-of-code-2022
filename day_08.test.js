const day_08 = require('./day_08')

test('Day 08 part 1', () => {
  expect(day_08.part1('./inputs/day_08_test.txt')).toBe(21)
})
test('Day 08 part 2', () => {
  expect(day_08.part2('./inputs/day_08_test.txt')).toBe(8)
})
