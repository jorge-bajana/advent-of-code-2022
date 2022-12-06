const fileReader = require('./fileReader')
const part1 = (inputPath) => {
  const inputParse = fileReader(inputPath)
    .split('\n')
    .map((line) => {
      const parseLine = line
        .split(',')
        .map((item) => {
          const range = item.split('-')
          const numRange = []
          // Print every number in the range
          for (let i = +range[0]; i <= +range[1]; i++) {
            numRange.push(+i)
          }
          return numRange
        })
      // Check if one array contains another array
      const newSet = new Set([...parseLine[0], ...parseLine[1]])
      if (newSet.size === parseLine[0].length || newSet.size === parseLine[1].length) return true
    })
  return inputParse.filter((item) => item).length
}
console.log(part1('./inputs/day_04.txt'))
const part2 = (inputPath) => {
  const inputParse = fileReader(inputPath)
    .split('\n')
    .map((line) => {
      const parseLine = line
        .split(',')
        .map((item) => {
          const range = item.split('-')
          const numRange = []
          // Print every number in the range
          for (let i = +range[0]; i <= +range[1]; i++) {
            numRange.push(+i)
          }
          return numRange
        })
      // Check if one array contains another array
      const newSet = new Set([...parseLine[0], ...parseLine[1]])
      const maxNumRangeLength = parseLine[0].length + parseLine[1].length
      if (newSet.size === maxNumRangeLength) return true
    })
  return inputParse.filter((item) => !item).length
}

console.log(part2('./inputs/day_04.txt'))

module.exports = {
  part1,
  part2
}
