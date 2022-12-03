const readFile = require('./fileReader')
const lowerCaseValues = 'abcdefghijklmnopqrstuvwxyz'
const upperCaseValues = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

const part1 = (inputPath) => {
  const input = readFile(inputPath).split('\n')

  const inputResults = input.map((line) => {
    // Split string half way
    const half = Math.floor(line.length / 2)
    const firstHalf = line.slice(0, half)
    const secondHalf = line.slice(half)

    // Search repeated character between the two halves
    const repeatedCharacter = firstHalf.split('').find((char, index) => {
      return secondHalf.includes(char)
    })

    // Get character index on lowerCaseValues
    const isLowerCase = lowerCaseValues.indexOf(repeatedCharacter)
    return isLowerCase > -1 ? isLowerCase + 1 : upperCaseValues.indexOf(repeatedCharacter) + 1 + lowerCaseValues.length
  })

  return inputResults.reduce((acc, number) => acc + number, 0)
}

console.log(part1('inputs/day_03.txt'))

const part2 = (inputPath) => {
  const input = readFile(inputPath).split('\n')

  // Group input in array of 3
  const inputGrouped = input.reduce((acc, line, index) => {
    const groupIndex = Math.floor(index / 3)
    if (!acc[groupIndex]) acc[groupIndex] = []
    acc[groupIndex].push(line)
    return acc
  }, [])

  const inputResults = inputGrouped.map((group) => {
    // Search repeated character between the tree lines
    const repeatedCharacter = group[0].split('').find((char, index) => {
      return group[1].includes(char) && group[2].includes(char) && char
    })
    // Get character index on lowerCaseValues
    const isLowerCase = lowerCaseValues.indexOf(repeatedCharacter)
    return isLowerCase > -1 ? isLowerCase + 1 : upperCaseValues.indexOf(repeatedCharacter) + 1 + lowerCaseValues.length
  })

  return inputResults.reduce((acc, number) => acc + number, 0)
}


console.log(part2('inputs/day_03.txt'))

module.exports = {
  part1,
  part2
}
