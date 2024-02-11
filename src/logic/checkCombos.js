import { COMBOS } from "../constants";
import confetti from "canvas-confetti";

export const checkCombos = (boardToCheck) => {
  for (const combo of COMBOS) {
    const [a, b, c] = combo;

    if (
      boardToCheck[a] &&
      boardToCheck[a] === boardToCheck[b] &&
      boardToCheck[a] === boardToCheck[c]
    ) {
      confetti();
      return boardToCheck[a];
    }
  }

  return null;
};
