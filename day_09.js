const readFile = require('./fileReader')
const part1 = (inputFile) => {
  const instructions = readFile(inputFile).split('\n')
  const headPoint = { x: 0, y: 0 }
  const tailPoint = { x: 0, y: 0 }
  const tailFootSteps = [{ x: 0, y: 0 }]

  const move = (direction, steps) => {
    let i = 0
    while (i < steps) {
      switch (direction) {
        case 'R':
          headPoint.x += 1
          break
        case 'U':
          headPoint.y += 1
          break
        case 'L':
          headPoint.x -= 1
          break
        case 'D':
          headPoint.y -= 1
          break
      }

      if (Math.abs(headPoint.x - tailPoint.x) > 1 || Math.abs(headPoint.y - tailPoint.y) > 1) {
        if (headPoint.x > tailPoint.x) {
          tailPoint.x += 1
          }
        if (headPoint.x < tailPoint.x) {
          tailPoint.x -= 1
          }
        if (headPoint.y > tailPoint.y) {
          tailPoint.y += 1
          }
        if (headPoint.y < tailPoint.y) {
          tailPoint.y -= 1
          }
        // Add tailPoint to tailFootSteps
        tailFootSteps.push({ x: tailPoint.x, y: tailPoint.y })
      }
      i++
    }
  }

  instructions.map(instruction => {
    const direction = instruction[0]
    const steps = parseInt(instruction.slice(1))
    move(direction, steps)
  })

  const uniqueFootSteps = tailFootSteps.filter((point, index, self) =>
    index === self.findIndex((t) => (
      t.x === point.x && t.y === point.y
    ))
  )

  return uniqueFootSteps.length
}

console.log(part1('./inputs/day_09.txt'))

const part2 = (inputFile) => {
  const instructions = readFile(inputFile).split('\n')
  const knots = [...Array(10)].map((_, i) => ({
    x: 0,
    y: 0
  }))
  const tailKnotFootSteps = [{ x: 0, y: 0 }]

  const move = (direction, steps) => {
    let i = 0
    while (i < steps) {
      switch (direction) {
        case 'R':
          knots[0].x++
          break
        case 'U':
          knots[0].y++
          break
        case 'L':
          knots[0].x--
          break
        case 'D':
          knots[0].y--
          break
      }

      for (let i = 1; i < knots.length; i++) {
        const knot = knots[i]
        const previousKnot = knots[i - 1]

        if (Math.abs(knot.x - previousKnot.x) > 1 || Math.abs(knot.y - previousKnot.y) > 1) {
          if (previousKnot.x > knot.x) {
            knot.x++
          }
          if (previousKnot.x < knot.x) {
            knot.x--
          }
          if (previousKnot.y > knot.y) {
            knot.y++
          }
          if (previousKnot.y < knot.y) {
            knot.y--
          }
        }
      }

      tailKnotFootSteps.push({ x: knots[knots.length - 1].x, y: knots[knots.length - 1].y })
      i++
    }
  }

  instructions.map(instruction => {
    const direction = instruction[0]
    const steps = parseInt(instruction.slice(1))
    move(direction, steps)
  })

  const uniqueFootSteps = tailKnotFootSteps.filter((point, index, self) =>
      index === self.findIndex((t) => (
        t.x === point.x && t.y === point.y
      ))
  )

  return uniqueFootSteps.length
}

console.log(part2('./inputs/day_09.txt'))

module.exports = {
  part1,
  part2
}
