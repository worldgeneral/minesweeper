import { Display } from "react-7-segment-display";
import "./SegmentDisplay.css";
import PropTypes from "prop-types";

function SegmentDisplay({ prop }) {
  return (
    <Display value={`${prop}`} height={40} count={3} backgroundColor="black" />
  );
}

SegmentDisplay.propTypes = {
  prop: PropTypes.number.isRequired,
};
export { SegmentDisplay };
