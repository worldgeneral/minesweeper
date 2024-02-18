import { GridSizeForm } from "./GridSizeForm";

function GameMenu({
  resetGame,
  setWidth,
  setHeight,
  setBombCount,
  width,
  height,
  bombCount,
}) {
  function gridSettings(gridWidth, gridHeight, gridBombCount) {
    setWidth(() => gridWidth);
    setHeight(() => gridHeight);
    setBombCount(() => gridBombCount);
    resetGame(gridWidth, gridHeight, gridBombCount);
  }
  return (
    <>
      <div></div>
      <button onClick={() => resetGame(width, height, bombCount)}>reset</button>
      <div>
        <button onClick={() => gridSettings(9, 9, 10)}>Beginner</button>
        <button onClick={() => gridSettings(16, 16, 40)}> Intermediate</button>
        <button onClick={() => gridSettings(32, 16, 99)}>Expert</button>
        <GridSizeForm gridSettings={gridSettings} />
      </div>
    </>
  );
}
export { GameMenu };
