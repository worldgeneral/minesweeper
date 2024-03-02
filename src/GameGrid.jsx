import { GridTile } from "./GridTile";
import "./GameGrid.css";
import PropTypes from "prop-types";

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
          id={index}
          key={index}
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
GameGrid.propTypes = {
  grid: PropTypes.array.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  gameOver: PropTypes.bool.isRequired,
  gameWin: PropTypes.bool.isRequired,
  tileClickState: PropTypes.array.isRequired,
  flagCellState: PropTypes.array.isRequired,
  handleChording: PropTypes.func.isRequired,
  chordingState: PropTypes.array.isRequired,
  setChordingState: PropTypes.func.isRequired,
  handleRightClick: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired,
  setButtonState: PropTypes.func.isRequired,
};

export { GameGrid };
