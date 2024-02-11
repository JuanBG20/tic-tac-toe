import { useState } from "react";
import { TURNS, BOARD } from "./constants";
import Board from "./components/Board";
import TurnVisualizer from "./components/TurnVisualizer";
import ResetButton from "./components/ResetButton";
import WinnerModal from "./components/WinnerModal";
import { resetGame } from "./logic/resetGame";
import "./App.css";

function App() {
  const [actualTurn, setActualTurn] = useState(() => {
    const turnFromStorage = window.localStorage.getItem("turn");

    return turnFromStorage ?? TURNS.X;
  });
  const [board, setBoard] = useState(() => {
    const boardFromStorage = window.localStorage.getItem("board");

    return boardFromStorage ? JSON.parse(boardFromStorage) : BOARD;
  });
  const [winner, setWinner] = useState(null);

  return (
    <div className="container">
      <h1>TA TE TI</h1>

      <Board
        board={board}
        winner={winner}
        actualTurn={actualTurn}
        setBoard={setBoard}
        setActualTurn={setActualTurn}
        setWinner={setWinner}
      />
      <TurnVisualizer actualTurn={actualTurn} />
      <ResetButton
        resetGame={() => resetGame(setActualTurn, setBoard, setWinner)}
      >
        Resetear
      </ResetButton>
      <WinnerModal
        winner={winner}
        resetGame={() => resetGame(setActualTurn, setBoard, setWinner)}
      />
    </div>
  );
}

export default App;
