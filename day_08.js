const readFile = require('./fileReader')

const part1 = (inputFile) => {
  const input = readFile(inputFile)
  // Perimeter
  const rows = input.split('\n')

  let visibleTrees = 0

  visibleTrees = rows.length * 2 + (rows[0].length - 2) * 2

  for (let i = 1; i < rows.length - 1; i++) {
    for (let j = 1; j < rows[i].length - 1; j++) {
      if (i === 0 || i === rows.length - 1 || j === 0 || j === rows[i].length - 1) {
        continue
      }
      const checkLowerTrees = (i, j, value) => {
        const topValues = []
        let hasTopTreesGreater = false
        for (let k = i - 1; k >= 0; k--) {
          topValues.push(rows[k][j])
        }
        if (Math.max(...topValues) >= value) {
          hasTopTreesGreater = true
        }
        const bottomValues = []
        let hasBottomTreesGreater = false
        for (let k = i + 1; k < rows.length; k++) {
          bottomValues.push(rows[k][j])
        }
        if (Math.max(...bottomValues) >= value) {
          hasBottomTreesGreater = true
        }
        const leftValues = []
        let hasLeftTreesGreater = false
        for (let k = j - 1; k >= 0; k--) {
          leftValues.push(rows[i][k])
        }
        if (Math.max(...leftValues) >= value) {
          hasLeftTreesGreater = true
        }
        const rightValues = []
        let hasRightTreesGreater = false
        for (let k = j + 1; k < rows[i].length; k++) {
          rightValues.push(rows[i][k])
        }
        if (Math.max(...rightValues) >= value) {
          hasRightTreesGreater = true
        }
        return [hasTopTreesGreater, hasBottomTreesGreater, hasLeftTreesGreater, hasRightTreesGreater].some((x) => !x)
      }

      if (checkLowerTrees(i, j, rows[i][j])) {
        visibleTrees++
      }
    }
  }

  return visibleTrees
}

console.log(part1('./inputs/day_08.txt'))

const part2 = (inputFile) => {
  const input = readFile(inputFile)
  // Perimeter
  const rows = input.split('\n').map((x) => x.split('').map((y) => parseInt(y)))

  let maxScore = 0
  const maxScores = []

  for (let i = 0; i < rows.length; i++) {
    for (let j = 0; j < rows[i].length; j++) {
      if (i === 0 || i === rows.length - 1 || j === 0 || j === rows[i].length - 1) {
        continue
      }
      const getTreeScore = (i, j) => {
        let top = 0
        let bottom = 0
        let left = 0
        let right = 0

        for (let k = i - 1; k >= 0; k--) {
          if (rows[k][j] >= rows[i][j]) {
            top++
            break
          }
          top++
        }
        for (let k = i + 1; k < rows.length; k++) {
          if (rows[k][j] >= rows[i][j]) {
            bottom++
            break
          }
          bottom++
        }
        for (let k = j - 1; k >= 0; k--) {
          if (rows[i][k] >= rows[i][j]) {
            left++
            break
          }
          left++
        }
        for (let k = j + 1; k < rows[i].length; k++) {
          if (rows[i][k] >= rows[i][j]) {
            right++
            break
          }
          right++
        }

        return [top, bottom, left, right].reduce((a, b) => a * b, 1)
      }

      const treeScore = getTreeScore(i, j)
      maxScores.push(treeScore)
    }
  }

  return Math.max(...maxScores)
}

console.log(part2('./inputs/day_08.txt'))

module.exports = {
  part1,
  part2
}
