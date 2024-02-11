import { TURNS } from "../constants";

const TurnVisualizer = ({ actualTurn }) => {
  return (
    <div className="turn-visualizer">
      <span
        className={actualTurn === TURNS.X ? "square actual-turn" : "square"}
      >
        {TURNS.X}
      </span>
      <span
        className={actualTurn === TURNS.O ? "square actual-turn" : "square"}
      >
        {TURNS.O}
      </span>
    </div>
  );
};

export default TurnVisualizer;
