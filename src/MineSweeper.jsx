import { GameGrid } from "./GameGrid";
import { gridLayout, cellReveal } from "./gameLogic";
import { useState, useEffect } from "react";
import { tileState, flagState } from "./react-minesweeper";

let width = 10;
let height = 10;
let bombCount = 10;
function MineSweeper() {
  const [gameOver, setGameOver] = useState(false);
  const [gameGrid, setGameGrid] = useState(
    gridLayout(width, height, bombCount)
  );
  const [tileClickState, setTileClickState] = useState(tileState());
  const [flagCellState, setFlagCellState] = useState(flagState());
  const [gameWin, setGameWin] = useState(false);

  function resetGame() {
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
      <button onClick={() => resetGame()}>reset</button>
    </>
  );
}

export { MineSweeper };
