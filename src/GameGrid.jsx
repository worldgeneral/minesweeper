import { GridTile } from "./GridTile";
import { useState } from "react";
// let gameOver = false;
// function clickedBomb() {
//   gameOver = true;
// }

function GameGrid({
  grid,
  width,
  height,
  gameOver,
  setGameOver,
  tileClickState,
  setTileClickState,
  flagCellState,
  setFlagCellState,
  revealCells,
}) {
  return (
    <div
      className="board"
      style={{
        "--columns": width,
        "--rows": height,
      }}
    >
      {grid.map((tile, index) => (
        <GridTile
          tile={tile}
          id={`${index}`}
          key={`${index}`}
          gameOver={gameOver}
          setGameOver={setGameOver}
          tileClickState={tileClickState}
          setTileClickState={setTileClickState}
          flagCellState={flagCellState}
          setFlagCellState={setFlagCellState}
          revealCells={revealCells}
        />
      ))}
    </div>
  );
}
export { GameGrid };
