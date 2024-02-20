import { Display } from "react-7-segment-display";

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

export { TimePastDisplay };
