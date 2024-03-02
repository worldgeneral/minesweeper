import { Display } from "react-7-segment-display";
import PropTypes from "prop-types";

function TimePastDisplay({ timePast }) {
  return (
    <Display
      value={`${parseInt(timePast)}`}
      height={40}
      count={3}
      backgroundColor="black"
    />
  );
}

TimePastDisplay.propTypes = {
  timePast: PropTypes.number.isRequired,
};

export { TimePastDisplay };
