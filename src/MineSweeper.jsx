import { GameGrid } from "./GameGrid";
import { GameMenu } from "./GameMenu";
import { gridLayout, cellReveal } from "./gameLogic";
import { useState, useEffect } from "react";
import { tileState, flagState } from "./react-minesweeper";

function MineSweeper() {
  const [width, setWidth] = useState(9);
  const [height, setHeight] = useState(9);
  const [bombCount, setBombCount] = useState(10);

  const [gameOver, setGameOver] = useState(false);
  const [gameGrid, setGameGrid] = useState(
    gridLayout(width, height, bombCount)
  );
  const [tileClickState, setTileClickState] = useState(tileState());
  const [flagCellState, setFlagCellState] = useState(flagState());
  const [gameWin, setGameWin] = useState(false);

  function resetGame(width, height, bombCount) {
    setGameGrid(gridLayout(width, height, bombCount));
    setTileClickState(tileState());
    setGameOver(false);
    setFlagCellState(flagState());
    setGameWin(false);
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
      />
      <GameGrid
        grid={gameGrid}
        width={width}
        height={height}
        gameOver={gameOver}
        setGameOver={setGameOver}
        tileClickState={tileClickState}
        setTileClickState={setTileClickState}
        flagCellState={flagCellState}
        setFlagCellState={setFlagCellState}
        revealCells={revealCells}
      />
    </>
  );
}

export { MineSweeper };
