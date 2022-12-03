// Read file
const fs = require('fs')
const path = require('path')
const readFile = (inputPath) => fs.readFileSync(path.join(__dirname, inputPath), 'utf8').trim()

module.exports = readFile
