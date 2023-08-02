const { Knight } = require("./Knight")

export const createBoard = () => {
    let board = null

    // Generates a 2d 8x8 board and sets the value to false
    const newBoard = () => {
        // Sets the board to null
        board = []
        // Creates a 8x8 2D array
        for(let i = 0; i < 8; i++){
            board.push([])
            board[i].push(new Array(8))
        
            for(let j = 0; j < 8; j++) {
              board[i][j] = false
            }
          }
    }

    const isInside = (x, y) => {
      if(x >= 0 && x <= 7 && y >= 0 && y <= 7) {
        return true
      } else return false
    }

    const knightMoves = (start, end) => {
      if(isInside(start[0], start[1]) === false) return console.log('Not inside the board')

      if(isInside(end[0], end[1]) === false) return console.log('Not inside the board')
      // Creates a new board
      newBoard()

      const xMove = [-2, -1, 1, 2, -2, -1, 1, 2]
      const yMove = [-1, -2, -2, -1, 1, 2, 2, 1]

      let queue = []
      let currentKnight = null
      let x
      let y
  
      queue.push(Knight(start[0], start[1], 0))
  
      while(queue.length != 0) {
        currentKnight = queue.shift()
        // If current night x and y equals endpoint x and y return distance and moves array
        if(currentKnight.x === end[0] && currentKnight.y === end[1]) {
          // current copys currentKnight
          let current = currentKnight
          let moves = []
          // While current.path does not equal to null
          while(current.path != null) {
            // Sets current knight positions to currentX and currentY
            let currentX = current.x
            let currentY = current.y
            // Puts current knights cordinates onto the beginning of the array since the currentKnight cordinates is based on
            // the last move then the following move it made before
            moves.unshift([currentX, currentY])
            // sets current to the last path
            current = current.path
          }
          // Adds the startPoint in the beginning of the moves array
          moves.unshift(start)
          return console.log(`You made it in ${currentKnight.distance} moves!`, `, Here's your path:`), moves.map(e => console.log(e))
        }
  
        // Loop through the y and x moves
        for(let i = 0; i < 8; i++) {
          x = currentKnight.x + xMove[i]
          y = currentKnight.y + yMove[i]
          // If x and y is inside and board placement is false
          if(isInside(x, y) && !board[x][y]) {
            // put current position as true
            board[x][y] = true
            // Push the Knight node with the current direction
            queue.push(Knight(x,y, currentKnight.distance + 1, currentKnight))
          }
        }
      }
    }
    return {
      knightMoves
    }
}