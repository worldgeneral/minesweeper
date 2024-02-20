import { GridSizeForm } from "./GridSizeForm";
import { MineSweeperButton } from "./MineSweeperButton";

function GameMenu({
  resetGame,
  setWidth,
  setHeight,
  setBombCount,
  width,
  height,
  bombCount,
  gameWin,
  gameOver,
  buttonState,
  setButtonState,
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
      <MineSweeperButton
        gridSettings={gridSettings}
        gameWin={gameWin}
        gameOver={gameOver}
        buttonState={buttonState}
        setButtonState={setButtonState}
        width={width}
        height={height}
        bombCount={bombCount}
      />

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
