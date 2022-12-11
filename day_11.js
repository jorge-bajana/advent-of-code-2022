const readFile = require('./fileReader')
const part1 = (inputFile) => {
  const ROUNDS = 20
  const monkeys = readFile(inputFile)
    .split('\n\n')
    .map((line) => {
      const lines = line.split('\n')
      const name = lines[0].match(/\d+/)[0]
      const items = lines[1].replace('Starting items: ', '').trim().split(', ').map(x => +x)
      // Parse string to js code
      const operationLine = lines[2].replace('Operation: ', '').trim()
      const operation = {
        symbol: operationLine.match(/(\+|\-|\*|\/)/)[0],
        value: +operationLine.match(/\d+/) ? +operationLine.match(/\d+/)[0] : null
      }
      const divisible = lines[3].match(/\d+/)[0]
      const throwTo = {
        true: +lines[4].match(/\d+/)[0],
        false: +lines[5].match(/\d+/)[0]
      }
      return {
        name,
        items,
        operation,
        divisible,
        throwTo,
        inspects: 0
      }
    })
    .sort((a, b) => a.name - b.name)

  let i = 0
  while (i < ROUNDS) {
    monkeys.forEach((monkey) => {
      const { items, operation, divisible } = monkey
      const _items = [...items]
      // Inspects items
      for (let i = 0; i < _items.length; i++) {
        const item = items.shift()
        // Increase worry level
        const result = operation.value
          ? eval
            .call(null, `${item} ${operation.symbol} ${operation.value}`)
          : eval
            .call(null, `${item} ${operation.symbol} ${item}`)
        const finalResult = Math.floor(result / 3)
        const isDivisible = finalResult % divisible === 0
        const throwTo = monkey.throwTo[isDivisible]
        const monkeyToRef = monkeys.find(m => +throwTo === +m.name)
        monkeyToRef.items.push(finalResult)
        monkey.inspects++
      }
    })
    i++
  }
  return monkeys.map(m => m.inspects).sort((a, b) => b - a).slice(0, 2).reduce((a, b) => a * b)
}

// console.log('Part 1: ', part1('./inputs/day_11.txt'))

const part2 = (inputFile, ROUNDS) => {
  const monkeys = readFile(inputFile)
    .split('\n\n')
    .map((line) => {
      const lines = line.split('\n')
      const name = lines[0].match(/\d+/)[0]
      const items = lines[1].replace('Starting items: ', '').trim().split(', ').map(x => +x)
      // Parse string to js code
      const operationLine = lines[2].replace('Operation: ', '').trim()
      const operation = {
        symbol: operationLine.match(/(\+|\-|\*|\/)/)[0],
        value: +operationLine.match(/\d+/) ? +operationLine.match(/\d+/)[0] : null
      }
      const divisible = lines[3].match(/\d+/)[0]
      const throwTo = {
        true: +lines[4].match(/\d+/)[0],
        false: +lines[5].match(/\d+/)[0]
      }
      return {
        name,
        items,
        operation,
        divisible,
        throwTo,
        inspects: 0
      }
    })
    .sort((a, b) => a.name - b.name)

  const divider = monkeys.map(x => x.divisible).reduce((a, b) => a * b)

  let i = 0
  while (i < ROUNDS) {
    monkeys.forEach((monkey) => {
      const { items, operation, divisible } = monkey
      const _items = [...items]
      // Inspects items
      for (let i = 0; i < _items.length; i++) {
        const item = items.shift()
        // Increase worry level
        const result = operation.value
          ? eval
            .call(null, `${item} ${operation.symbol} ${operation.value}`)
          : eval
            .call(null, `${item} ${operation.symbol} ${item}`)
        const finalResult = Math.floor(result % divider)
        const isDivisible = finalResult % divisible === 0
        const throwTo = monkey.throwTo[isDivisible]
        const monkeyToRef = monkeys.find(m => +throwTo === +m.name)
        monkeyToRef.items.push(finalResult)
        monkey.inspects++
      }
    })
    i++
  }
  return monkeys.map(m => m.inspects).sort((a, b) => b - a).slice(0, 2).reduce((a, b) => a * b)
}

console.log('Part 2: ', part2('./inputs/day_11.txt', 10000))

module.exports = {
  part1,
  part2
}
