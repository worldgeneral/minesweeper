import { GridTile } from "./GridTile";
import "./GameGrid.css";

function GameGrid({
  grid,
  width,
  height,
  gameOver,
  gameWin,
  tileClickState,
  flagCellState,
  handleChording,
  chordingState,
  setChordingState,
  handleRightClick,
  handleClick,
  setButtonState,
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
          gameWin={gameWin}
          tileClickState={tileClickState}
          flagCellState={flagCellState}
          handleChording={handleChording}
          chordingState={chordingState}
          setChordingState={setChordingState}
          handleRightClick={handleRightClick}
          handleClick={handleClick}
          setButtonState={setButtonState}
        />
      ))}
    </div>
  );
}

export { GameGrid };
