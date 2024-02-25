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
  setChordingState,
  gameInPlay,
  generateGrid,
}) {
  if (!gameInPlay) {
    return (
      <div
        className="game-grid"
        style={{
          "--columns": width,
          "--rows": height,
        }}
      >
        {grid.map((tile, index) => (
          <button
            key={`${index}`}
            onClick={() => {
              setGameInPlay(true);
              generateGrid(index);
              setTileClickState([index]);
            }}
            className="tile-button game-grid"
            style={{
              "--columns": width,
              "--rows": height,
            }}
          ></button>
        ))}
      </div>
    );
  } else {
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
            setChordingState={setChordingState}
            gameInPlay={gameInPlay}
            generateGrid={generateGrid}
          />
        ))}
      </div>
    );
  }
}
export { GameGrid };
// return grid.map((tile, index) => {
//   <button
//     key={`${index}`}
//     onClick={() => {
//       setGameInPlay(true);
//       generateGrid(parseInt(id));
//     }}
//     className="tile-button game-grid"
//     style={{
//       "--columns": width,
//       "--rows": height,
//     }}
//   ></button>;
// });
