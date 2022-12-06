// Read file
const fs = require('fs')
const path = require('path')
const readFile = (inputPath, trim = true) => {
  const result = fs.readFileSync(path.join(__dirname, inputPath), 'utf8')
  if (trim) return result.trim()
  else return result
}

module.exports = readFile
