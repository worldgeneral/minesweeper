import { GridTile } from "./GridTile";

function GameGrid({
  grid,
  width,
  height,
  gameOver,
  gameWin,
  setGameOver,
  tileClickState,
  setTileClickState,
  flagCellState,
  setFlagCellState,
  revealCells,
  setButtonState,
  displayValue,
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
          gameWin={gameWin}
          tileClickState={tileClickState}
          setTileClickState={setTileClickState}
          flagCellState={flagCellState}
          setFlagCellState={setFlagCellState}
          revealCells={revealCells}
          setButtonState={setButtonState}
          displayValue={displayValue}
        />
      ))}
    </div>
  );
}
export { GameGrid };
