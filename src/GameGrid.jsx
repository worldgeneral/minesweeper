import { GridTile } from "./GridTile";
import { useState } from "react";
// let gameOver = false;
// function clickedBomb() {
//   gameOver = true;
// }

function GameGrid({ grid, width, height, gameOver, setGameOver }) {
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
          key={`${index}`}
          gameOver={gameOver}
          setGameOver={setGameOver}
        />
      ))}
    </div>
  );
}
export { GameGrid };
