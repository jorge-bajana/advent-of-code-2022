const readFile = require('./fileReader')

function allCharactersDifferent(str) {
  const set = new Set(str)
  return set.size === str.length
}
const part1 = (inputFile) => {
  const input = readFile(inputFile)
  let lastFour = ""
  for (let i = 0; i < input.length; i++) {
    lastFour += input[i]

    if (lastFour.length > 4) {
      lastFour = lastFour.slice(1)
      if (allCharactersDifferent(lastFour)) {
        return i + 1
      }
    }
  }
}
console.log(part1('./inputs/day_06.txt'))

const part2 = (inputFile) => {
  const input = readFile(inputFile)
  let lastFour = ""
  for (let i = 0; i < input.length; i++) {
    lastFour += input[i]

    if (lastFour.length > 14) {
      lastFour = lastFour.slice(1)
      if (allCharactersDifferent(lastFour)) {
        return i + 1
      }
    }
  }
}
console.log(part2('./inputs/day_06.txt'))

module.exports = {
  part1,
  part2
}
