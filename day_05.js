const readFile = require('./fileReader.js')

const inputFormatted = (inputFile) => {
  const input = readFile(inputFile, false)
  const lines = input.split('\n\n')
  const stacks = lines[0]
    .split('\n')
    .slice(0, -1)
    .map(line => line
      .replace(/    /g, '[undefined] ')
      .replace(/ /g, '')
      .split('][')
      .map(x => x.replace(/\[/g, '').replace(/\]/g, ''))
      .filter(crate => crate !== '')
    )
    .reduce((acc, val) => val.map((v, i) => v !== 'undefined' && (acc[i] || []).concat(v)), [])
  const moves = lines[1].split('\n')
    .map(line => {
      const [, repeater, _, from, __, to] = line.split(/\s+/)
      return [Number(repeater), Number(from), Number(to)]
    })
    .slice(0, -1)
  return [stacks, moves]
}
const part1 = (inputFile) => {
  const [stacks, moves] = inputFormatted(inputFile)
  const arrayOfMoves = moves
    .map(([repeater, from, to]) => Array.from({ length: repeater }, () => [from, to]))
    .flat()

  for (const move of arrayOfMoves) {
    const [from, to ] = move
    const item = stacks[from - 1].shift()
    stacks[to - 1].unshift(item)
  }

  return stacks.map(stack => stack[0]).filter(x => x !== 'undefined').join('')
}
console.log(part1('./inputs/day_05.txt'))

const part2 = (inputFile) => {
  const [stacks, moves] = inputFormatted(inputFile)

  for (const move of moves) {
    const [repeater, from, to] = move
    const item = stacks[from - 1].slice(0, repeater)
    for (let i = 0; i < repeater; i++) {
      stacks[from - 1].shift()
    }
    stacks[to - 1].unshift(...item)
  }

  return stacks.map(stack => stack[0]).filter(x => x !== 'undefined').join('')
}

console.log(part2('./inputs/day_05.txt'))

module.exports = {
  part1,
  part2
}
