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

  useEffect(() => {
    if (tileClickState.length + bombCount === width * height) {
      setGameWin(true);
      setGameOver(true);
      setButtonState(() => 1);
    }
  });

  const [gameGrid, setGameGrid] = useState(
    gridLayout(width, height, bombCount)
  );

  function resetGame(width, height, bombCount) {
    setGameGrid(gridLayout(width, height, bombCount));
    setTileClickState(() => []);
    setGameOver(false);
    setFlagCellState(() => []);
    setGameWin(false);
    setButtonState(() => 0);
  }
  function revealCells(tile) {
    const cells = cellReveal(width, height, gameGrid, tile);

    setTileClickState((preValue) => {
      return [...preValue, ...cells];
    });
  }

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
      />
    </>
  );
}

export { MineSweeper };
