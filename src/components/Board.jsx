import { boardController } from "../logic/boardController";

const Board = ({
  board,
  winner,
  actualTurn,
  setBoard,
  setActualTurn,
  setWinner,
}) => {
  return (
    <div className="board">
      {board.map((content, index) => (
        <span
          onClick={() =>
            boardController(
              index,
              winner,
              board,
              actualTurn,
              setBoard,
              setActualTurn,
              setWinner
            )
          }
          className="square"
          key={index}
        >
          {content}
        </span>
      ))}
    </div>
  );
};

export default Board;
