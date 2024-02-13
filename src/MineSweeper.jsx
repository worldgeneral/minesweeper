import { GameGrid } from "./GameGrid";
import { gridLayout, click } from "./gameLogic";
import { useState, useEffect } from "react";

let width = 10;
let height = 10;
let bombCount = 10;
function MineSweeper() {
  const [gameOver, setGameOver] = useState(false);
  const [gameGrid, setGameGrid] = useState(
    gridLayout(width, height, bombCount)
  );
  return (
    <>
      <GameGrid
        grid={gameGrid}
        width={width}
        height={height}
        gameOver={gameOver}
        setGameOver={setGameOver}
      />
      <button onClick={() => setGameGrid(gridLayout(width, height, bombCount))}>
        reset
      </button>
    </>
  );
}

export { MineSweeper };
