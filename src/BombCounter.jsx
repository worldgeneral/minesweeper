import { Display } from "react-7-segment-display";
import "./BombCounter.css";
function BombCounter({ remainingBombCount }) {
  return (
    <Display
      value={parseInt(remainingBombCount)}
      height={40}
      count={3}
      backgroundColor="black"
    />
  );
}

export { BombCounter };
