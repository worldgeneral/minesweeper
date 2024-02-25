import { Display } from "react-7-segment-display";
import { BombCounter } from "./BombCounter";
import { GridSizeForm } from "./GridSizeForm";
import { MineSweeperButton } from "./MineSweeperButton";
import { TimePastDisplay } from "./TimePastDisplay";

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
export { GameMenu };
