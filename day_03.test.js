const day_03 = require('./day_03')

test('Day 3 part 1', () => {
  expect(day_03.part1('inputs/day_03_test.txt')).toBe(157)
})

test('Day 3 part 2', () => {
  expect(day_03.part2('inputs/day_03_test.txt')).toBe(70)
})
