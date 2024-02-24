import { GridTile } from "./GridTile";
import "./GameGrid.css";

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
  setGameInPlay,
  handleChording,
  chordingState,
}) {
  return (
    <div
      className="game-grid"
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
          setGameInPlay={setGameInPlay}
          handleChording={handleChording}
          chordingState={chordingState}
        />
      ))}
    </div>
  );
}
export { GameGrid };
