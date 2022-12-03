// Read file
const fs = require('fs')
const path = require('path')
const input = (inputPath) => fs.readFileSync(path.join(__dirname, inputPath), 'utf8').trim()

// Rock, paper, scissors
// A - Player 1 Rock - Value 1
// B - Player 1 Paper - Value 2
// C - Player 1 Scissors - Value 3
// X - Player 2 Rock - Value 1
// Y - Player 2 Paper - Value 2
// Z - Player 2 Scissors - Value 3
const playerChoice = {
  A: 'ROCK',
  B: 'PAPER',
  C: 'SCISSORS',
  X: 'ROCK',
  Y: 'PAPER',
  Z: 'SCISSORS'
}

const playerChoicePoints = (playerChoose) => {
  switch (playerChoose) {
    case 'A':
    case 'X':
    case 'ROCK':
      return 1
    case 'B':
    case 'Y':
    case 'PAPER':
      return 2
    case 'C':
    case 'Z':
    case 'SCISSORS':
      return 3
  }
}
// paper, scissors, rock logic
const playRun = (player1Choice, player2Choice) => {
  if (player1Choice === player2Choice) {
    return 'TIE'
  } else if (player1Choice === 'ROCK' && player2Choice === 'SCISSORS') {
    return 'PLAYER 1'
  } else if (player1Choice === 'SCISSORS' && player2Choice === 'PAPER') {
    return 'PLAYER 1'
  } else if (player1Choice === 'PAPER' && player2Choice === 'ROCK') {
    return 'PLAYER 1'
  } else {
    return 'PLAYER 2'
  }
}
// Play result
const playResults = {
  X: 'LOSE',
  Y: 'TIE',
  Z: 'WIN'
}
// Play strategy
const playStrategy = (player1Choice, playResult) => {
  if (playResults[playResult] === 'WIN') {
    switch (player1Choice) {
      case 'ROCK':
        return playerChoice.Y
      case 'PAPER':
        return playerChoice.Z
      case 'SCISSORS':
        return playerChoice.X
    }
  } else if (playResults[playResult] === 'TIE') {
    return player1Choice
  } else {
    switch (player1Choice) {
      case 'ROCK':
        return playerChoice.Z
      case 'PAPER':
        return playerChoice.X
      case 'SCISSORS':
        return playerChoice.Y
    }
  }
}

// Points
// 0 if player lose
// 3 if player draw
// 6 if player win

const part1 = (inputPath) => {
  const plays = input(inputPath).split('\n')

  // Play each play and return result and points
  const result = plays.reduce((acc, play) => {
    const [player1Choice, player2Choice] = play.split(' ')
    const player1Points = playerChoicePoints(player1Choice)
    const player2Points = playerChoicePoints(player2Choice)
    const winner = playRun(playerChoice[player1Choice], playerChoice[player2Choice])
    const points = winner === 'TIE' ? 3 : winner === 'PLAYER 2' ? 6 : 0
    acc.push({
      player1Choice: playerChoice[player1Choice],
      player2Choice: playerChoice[player2Choice],
      player1Points,
      player2Points,
      winner,
      points
    })
    return acc
  }, [])

  // Sum points assuming that you are player 2
  return result.reduce((acc, play) => acc + play.points + play.player2Points, 0)
}

console.log(part1('inputs/day_02.txt'))

const part2 = (inputPath) => {
  const plays = input(inputPath).split('\n')

  // Play each play and return result and points
  const result = plays.reduce((acc, play) => {
    const [player1Choice, playResult] = play.split(' ')
    const player2Choice = playStrategy(playerChoice[player1Choice], playResult)
    const player1Points = playerChoicePoints(player1Choice)
    const player2Points = playerChoicePoints(player2Choice)
    const points = playResults[playResult] === 'TIE' ? 3 : playResults[playResult] === 'WIN' ? 6 : 0
    acc.push({
      player1Choice: playerChoice[player1Choice],
      player2Choice: playerChoice[player2Choice],
      player1Points,
      player2Points,
      points
    })

    return acc
  }, [])

  return result.reduce((acc, play) => acc + play.points + play.player2Points, 0)
}


console.log(part2('inputs/day_02.txt'))

module.exports = {
  part1,
  part2
}
