const day_07 = require('./day_07')

test('day 7 part 1', () => {
  expect(day_07.part1('./inputs/day_07_test.txt')).toBe(95437)
})

test('day 7 part 2', () => {
  expect(day_07.part2('./inputs/day_07_test.txt')).toBe(24933642)
})
