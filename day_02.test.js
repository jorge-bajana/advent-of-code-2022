const day_02 = require('./day_02')

test('Day 2 part 1', () => {
  expect(day_02.part1('inputs/day_02_test.txt')).toBe(15)
})
test('Day 2 part 2', () => {
  expect(day_02.part2('inputs/day_02_test.txt')).toBe(12)
})
