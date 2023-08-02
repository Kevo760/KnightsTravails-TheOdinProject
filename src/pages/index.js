import { createBoard } from "@/Board"

export default function Home() {
  const newBoard = createBoard()

  newBoard.knightMoves([0,0],[1,2])
  // You made it in 1 moves! , Here's your path: [0,0] [1,2]

  newBoard.knightMoves([0,0],[3,3])
  // You made it in 2 moves! , Here's your path: [0,0] [1,2] [3,3]

  newBoard.knightMoves([3,3],[0,0])
  // You made it in 2 moves! , Here's your path: [3,3] [1,2] [0,0]

  newBoard.knightMoves([8,8],[0,0])
  // Not inside the board

  newBoard.knightMoves([0,0],[8,8])
  // Not inside the board

  newBoard.knightMoves([1,1],[2,6])
  // You made it in 4 moves! , Here's your path: [1,1] [3,0] [2,2] [1, 4] [2,6]
 

  return (
    <>
    </>
  )
}
