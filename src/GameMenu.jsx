import { BombCounter } from "./BombCounter";
import { GridSizeForm } from "./GridSizeForm";
import { MineSweeperButton } from "./MineSweeperButton";
import { TimePastDisplay } from "./TimePastDisplay";
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
  function gridSettings(gridWidth, gridHeight, gridBombCount) {
    setWidth(() => gridWidth);
    setHeight(() => gridHeight);
    setBombCount(() => gridBombCount);
    resetGame(gridWidth, gridHeight, gridBombCount);
  }

  return (
    <>
      <div>
        <button onClick={() => gridSettings(9, 9, 10)}>Beginner</button>
        <button onClick={() => gridSettings(16, 16, 40)}> Intermediate</button>
        <button onClick={() => gridSettings(32, 16, 99)}>Expert</button>
        <GridSizeForm gridSettings={gridSettings} />
      </div>
      <div style={{ display: "flex" }}>
        <BombCounter remainingBombCount={remainingBombCount} />
        <MineSweeperButton
          gridSettings={gridSettings}
          buttonState={buttonState}
          width={width}
          height={height}
          bombCount={bombCount}
        />
        <TimePastDisplay timePast={timePast} />
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
