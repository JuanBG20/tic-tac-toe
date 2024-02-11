import ResetButton from "./ResetButton";

const WinnerModal = ({ winner, resetGame }) => {
  if (winner === null) return;

  return (
    <div className="winner">
      <div className="container">
        <span>
          {winner === false ? "¡VUELVE A INTENTARLO!" : "¡FELICITACIONES!"}
        </span>
        <span>{winner === false ? "EMPATE" : `EL GANADOR ES ${winner}`}</span>

        <ResetButton resetGame={resetGame}>Volver a jugar</ResetButton>
      </div>
    </div>
  );
};

export default WinnerModal;
