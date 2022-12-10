const readFile = require('./fileReader')
const part1 = (inputFile) => {
  const PERIODS = [20, 60, 100, 140, 180, 220]
  const PERIODS_RESULT = []
  const transformPeriods = (periods) => {
    return periods.replace(/addx/g, 'noop\naddx').replace(/noop/g, 'addx 0').split('\n')
  }
  const input = transformPeriods(readFile(inputFile))
  for (let i = 0; i < PERIODS.length; i++) {
    const period = PERIODS[i]
    PERIODS_RESULT.push(input.slice(0, period-1).reduce((a, b) => a + +b.split(' ')[1], 1))
  }

  return PERIODS_RESULT.map((r, i) => r * PERIODS[i]).reduce((a, b) => a + b)
}

console.log(part1('./inputs/day_10.txt'))



// Create a string of n dots
const dots = (n) => {
  let str = ''
  for (let k = 0; k < n; k++) {
    str += '.'
  }
  return str
}
const part2 = (inputFile) => {
  const PERIODS = [0, 40, 80, 120, 160, 200, 240]
  const PERIODS_RESULT = []
  const transformPeriods = (periods) => {
    return periods.replace(/addx/g, 'noop\naddx').replace(/noop/g, 'addx 0').split('\n')
  }
  const input = transformPeriods(readFile(inputFile))

  let sprite = '###' + dots(40 - 3)
  let value = 0

  for (let i = 1; i <= PERIODS.length; i++) {
    const test = input.slice(PERIODS[i - 1], PERIODS[i]).map((i) => +i.split(' ')[1])
    const res = []
    for (let i = 0; i < test.length; i++) {
      res.push(sprite[i])
      if (test[i] !== 0) {
        value += test[i]
        sprite = dots(value) + '###' + dots(40 - value - 3)
      }
    }
    PERIODS_RESULT.push(res.join(''))
  }

  return PERIODS_RESULT.filter(x => x).join('')
}
console.log(part2('./inputs/day_10.txt'))

module.exports = {
  part1,
  part2
}
