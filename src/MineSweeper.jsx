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
      <button onClick={() => setGameGrid(gridLayout(width, height, bombCount))}>
        reset
      </button>
    </>
  );
}

export { MineSweeper };
