import { SegmentDisplay } from "./SegmentDisplay";
import { GridSizeForm } from "./GridSizeForm";
import { MineSweeperButton } from "./MineSweeperButton";

import PropTypes from "prop-types";

function GameMenu({
  resetGame,
  setWidth,
  setHeight,
  setBombCount,
  width,
  height,
  bombCount,
  buttonState,
  remainingBombCount,
  timePast,
}) {
  function newGame(gridWidth, gridHeight, gridBombCount) {
    setWidth(gridWidth);
    setHeight(gridHeight);
    setBombCount(gridBombCount);
    resetGame(gridWidth, gridHeight, gridBombCount);
  }

  return (
    <>
      <div>
        <button onClick={() => newGame(9, 9, 10)}>Beginner</button>
        <button onClick={() => newGame(16, 16, 40)}> Intermediate</button>
        <button onClick={() => newGame(32, 16, 99)}>Expert</button>
        <GridSizeForm newGame={newGame} />
      </div>
      <div style={{ display: "flex" }}>
        <SegmentDisplay prop={remainingBombCount} />
        <MineSweeperButton
          newGame={newGame}
          buttonState={buttonState}
          width={width}
          height={height}
          bombCount={bombCount}
        />
        <SegmentDisplay prop={timePast} />
      </div>
    </>
  );
}

GameMenu.propTypes = {
  resetGame: PropTypes.func.isRequired,
  setWidth: PropTypes.func.isRequired,
  setHeight: PropTypes.func.isRequired,
  setBombCount: PropTypes.func.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  bombCount: PropTypes.number.isRequired,
  buttonState: PropTypes.number.isRequired,
  remainingBombCount: PropTypes.number.isRequired,
  timePast: PropTypes.number.isRequired,
};
export { GameMenu };
