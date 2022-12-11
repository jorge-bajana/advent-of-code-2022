const day_11 = require('./day_11')

test('Day 11 part 1', () => {
  expect(day_11.part1('./inputs/day_11_test.txt')).toBe(10605)
})

test('Day 11 part 2', () => {
  expect(day_11.part2('./inputs/day_11_test.txt', 10000)).toBe(2713310158)
})
