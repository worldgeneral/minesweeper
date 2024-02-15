import { GameGrid } from "./GameGrid";
import { gridLayout } from "./gameLogic";
import { useState, useEffect } from "react";
import { tileState } from "./react-minesweeper";

let width = 10;
let height = 10;
let bombCount = 10;
function MineSweeper() {
  const [gameOver, setGameOver] = useState(false);
  const [gameGrid, setGameGrid] = useState(
    gridLayout(width, height, bombCount)
  );
  const [tileClickState, setTileClickState] = useState(tileState(100));

  function resetGame() {
    setGameGrid(gridLayout(width, height, bombCount));
    setTileClickState(tileState(100));
    setGameOver(false);
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
      />
      <button onClick={() => resetGame()}>reset</button>
    </>
  );
}

export { MineSweeper };
