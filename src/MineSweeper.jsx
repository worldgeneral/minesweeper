import { GameGrid } from "./GameGrid";
import { GameMenu } from "./GameMenu";
import { gridLayout, cellReveal } from "./gameLogic";
import { useState, useEffect } from "react";

function MineSweeper() {
  const [width, setWidth] = useState(9);
  const [height, setHeight] = useState(9);
  const [bombCount, setBombCount] = useState(10);
  const [tileClickState, setTileClickState] = useState(() => []);
  const [flagCellState, setFlagCellState] = useState(() => []);
  const [gameOver, setGameOver] = useState(false);
  const [gameWin, setGameWin] = useState(false);
  const [buttonState, setButtonState] = useState(0);
  const [timePasted, setTimePasted] = useState(0);
  const [remainingBombCount, setRemainingBombCount] = useState(
    parseInt(bombCount)
  );
  const [gameGrid, setGameGrid] = useState(
    gridLayout(width, height, bombCount)
  );

  function displayValue(plusOrMinus) {
    if (plusOrMinus === false) {
      return setRemainingBombCount(() => remainingBombCount + 1);
    }
    if (plusOrMinus === true) {
      return setRemainingBombCount(() => remainingBombCount - 1);
    }
  }

  useEffect(() => {
    if (tileClickState.length + bombCount === width * height) {
      setGameWin(true);
      setGameOver(true);
      setButtonState(() => 1);
    }
  });

  function resetGame(width, height, bombCount) {
    setGameGrid(gridLayout(width, height, bombCount));
    setTileClickState(() => []);
    setGameOver(false);
    setFlagCellState(() => []);
    setGameWin(false);
    setButtonState(() => 0);
    setRemainingBombCount(() => bombCount);
  }
  function revealCells(tile) {
    const cells = cellReveal(width, height, gameGrid, tile);

    setTileClickState((preValue) => {
      return [...preValue, ...cells];
    });
  }
  console.log(remainingBombCount);

  return (
    <>
      <GameMenu
        resetGame={resetGame}
        setWidth={setWidth}
        setHeight={setHeight}
        setBombCount={setBombCount}
        width={width}
        height={height}
        bombCount={bombCount}
        gameWin={gameWin}
        gameOver={gameOver}
        buttonState={buttonState}
        setButtonState={setButtonState}
        remainingBombCount={remainingBombCount}
      />
      <GameGrid
        grid={gameGrid}
        width={width}
        height={height}
        gameOver={gameOver}
        gameWin={gameWin}
        setGameOver={setGameOver}
        tileClickState={tileClickState}
        setTileClickState={setTileClickState}
        flagCellState={flagCellState}
        setFlagCellState={setFlagCellState}
        revealCells={revealCells}
        setButtonState={setButtonState}
        displayValue={displayValue}
      />
    </>
  );
}

export { MineSweeper };
