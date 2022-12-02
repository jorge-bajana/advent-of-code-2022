const day_01 = require('./day_01')

test('part 1', () => {
  expect(day_01.part1('inputs/day_01_test.txt')).toBe(24000)
})

test('part 2', () => {
  expect(day_01.part2('inputs/day_01_test.txt')).toBe(45000)
})
