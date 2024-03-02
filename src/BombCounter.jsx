import { Display } from "react-7-segment-display";
import "./BombCounter.css";
import PropTypes from "prop-types";

function BombCounter({ remainingBombCount }) {
  return (
    <Display
      value={`${parseInt(remainingBombCount)}`}
      height={40}
      count={3}
      backgroundColor="black"
    />
  );
}

BombCounter.propTypes = {
  remainingBombCount: PropTypes.number.isRequired,
};
export { BombCounter };
