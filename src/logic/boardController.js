import { TURNS } from "../constants";
import { checkCombos } from "./checkCombos";

export const boardController = (
  index,
  winner,
  board,
  actualTurn,
  setBoard,
  setActualTurn,
  setWinner
) => {
  if (winner !== null) return;
  if (board[index] === TURNS.X || board[index] === TURNS.O) return;

  const newBoard = [...board];
  newBoard[index] = actualTurn;
  setBoard(newBoard);

  const newTurn = actualTurn === TURNS.X ? TURNS.O : TURNS.X;
  setActualTurn(newTurn);

  window.localStorage.setItem("board", JSON.stringify(newBoard));
  window.localStorage.setItem("turn", newTurn);

  newBoard.every((square) => square !== null)
    ? setWinner(false)
    : setWinner(checkCombos(newBoard));
};
