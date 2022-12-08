const readFile = require('./fileReader')

function parseInput (input) {
  let currentPath = ''
  return input.split('\n')
    .reduce((acc, line) => {
      if (line.startsWith('$ cd ')) {
        let path = line.replace('$ cd ', '')
        if (path === '/') {
          path = 'root'
        }
        if (path === '..') {
          currentPath = currentPath.split('/').slice(0, -1).join('/')
          return acc
        } else {
          currentPath = currentPath ? `${currentPath}/${path}` : path
        }
        acc.push({ path: currentPath, files: [], type: 'dir' })
      } else if (line.startsWith('$ ls') || !line.startsWith('$')) {
        if (line.startsWith('$ ls')) {
          return acc
        }
        const [size, name] = line.split(' ')
        const type = size === 'dir' ? 'dir' : 'file'
        acc[acc.length - 1].files.push({ name, type, size: type === 'file' ? parseInt(size) : null })
      }

      return acc
    }, [])
}

function getDirSize (dir, dirs) {
  if (!dir) return 0
  return dir.files.reduce((acc, file) => {
    if (file.type === 'dir') {
      const subDir = dirs.find(d => d.path === `${dir.path}/${file.name}`)
      return acc + getDirSize(subDir, dirs)
    } else {
      return acc + file.size
    }
  }, 0)
}

const part1 = (inputFile) => {
  const MAX_SIZE = 100000
  const input = readFile(inputFile)
  const parsedInput = parseInput(input)
  const pathSizes = parsedInput.map(dir => {
    return {
      path: dir.path,
      size: getDirSize(dir, parsedInput)
    }
  })
  return pathSizes.filter(dir => dir.size < MAX_SIZE).reduce((acc, dir) => {
    return acc + dir.size
  }, 0)
}
console.log(part1('./inputs/day_07.txt'))

const part2 = (inputFile) => {
  const TOTAL_SIZE = 70000000
  const NEEDED_SIZE = 30000000
  const input = readFile(inputFile)
  const parsedInput = parseInput(input)
  const pathSizes = parsedInput.map(dir => {
    return {
      path: dir.path,
      size: getDirSize(dir, parsedInput)
    }
  })
  const occupiedSpace = pathSizes.find(dir => dir.path === 'root')
  const freeSpace = TOTAL_SIZE - occupiedSpace.size
  const neededSpace = NEEDED_SIZE - freeSpace
  return pathSizes.filter(dir => dir.size > neededSpace).sort((a, b) => a.size - b.size)[0].size
}


console.log(part2('./inputs/day_07.txt'))

module.exports = {
  part1,
  part2
}
