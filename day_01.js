// Read file
const fs = require('fs')
const path = require('path')
const input = (inputPath) => fs.readFileSync(path.join(__dirname, inputPath), 'utf8')

// Carry of each elf
const carry = (inputPath) => {
  // Split file into array separated by new line
  const inputArray = input(inputPath).split('\n\n')

// Every block is an elf, so lets add every block of numbers and return an array of numbers
  const sum = inputArray.reduce((acc, block) => {
    // Split block into array separated by new line
    const blockArray = block.split('\n')

    // Add every number in block
    const sum = blockArray.reduce((acc, number) => {
      return !isNaN(+number) ? acc + +number : acc
    }, 0)

    // Add sum to array
    acc.push(sum)
    return acc
  }, [])

  return sum
}

// Part 1
const part1 = (inputPath) => {
  // Carry of each elf
  const sum = carry(inputPath)

// Print max number
  return Math.max(...sum)
}

console.log(part1('inputs/day_01.txt'))

// Part 2
const part2 = (inputPath) => {
  // Carry of each elf
  const sum = carry(inputPath)

  // Sum of top three numbers
  return sum.sort((a, b) => b - a).slice(0, 3).reduce((acc, number) => acc + number, 0)
}

console.log(part2('inputs/day_01.txt'))

module.exports = {
  part1,
  part2
}
