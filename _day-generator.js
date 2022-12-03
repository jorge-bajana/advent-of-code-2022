const exec = require('child_process').exec

// Create a new day file in root and inputs folder by given filename
const createDayFile = (day) => {
  const path = `./day_${day}.js`
  const path_test = `./day_${day}.test.js`
  const day_input = `./inputs/day_${day}.txt`
  const day_test_input = `./inputs/day_${day}_test.txt`
  const command = `touch ${path} ${path_test} ${day_input} ${day_test_input}`
  exec(command, (err, stdout, stderr) => {
    if (err) {
      console.log(err)
    }
  })
}

// Get the day number from the command line
const day = process.argv[2]
if (day) {
  createDayFile(day)
}
