import { Display } from "react-7-segment-display";
function BombCounter({ remainingBombCount }) {
  return (
    <div height={"78px"}>
      <Display
        value={parseInt(remainingBombCount)}
        height={40}
        count={3}
        backgroundColor="black"
      />
    </div>
  );
}

export { BombCounter };
