const day_5 = require('./day_05')

test('Day 5 part 1', () => {
  expect(day_5.part1('./inputs/day_05_test.txt')).toBe('CMZ')
})

test('Day 5 part 2', () => {
  expect(day_5.part2('./inputs/day_05_test.txt')).toBe('MCD')
})
