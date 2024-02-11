import { TURNS, BOARD } from "../constants";

export const resetGame = (setActualTurn, setBoard, setWinner) => {
  setActualTurn(TURNS.X);
  setBoard(BOARD);
  setWinner(null);

  window.localStorage.removeItem("board");
  window.localStorage.removeItem("turn");
};
