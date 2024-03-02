import "./GridTile.css";
import PropTypes from "prop-types";

function GridTile({
  tile,
  id,
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
  //bomb tile
  if (tile === -1 && gameOver === true && gameWin === false) {
    if (tileClickState[tileClickState.length - 1] === id) {
      return <button className="tile-btn minesweeper-clicked-bomb"></button>;
    }
    return <button className="tile-btn minesweeper-bomb"></button>;
  }
  //chording
  if (chordingState.includes(id)) {
    return <button className="tile-btn tile0"></button>;
  }
  //flagged tile
  if (flagCellState.includes(id) || (gameWin === true && tile === -1)) {
    return (
      <button
        className="tile-btn minesweeper-flag"
        onContextMenu={(event) => {
          event.preventDefault();
          handleRightClick(id);
        }}
      ></button>
    );
  }
  //number tile
  if (tileClickState.includes(id)) {
    return (
      <button
        className={`tile${tile} tile-btn`}
        onMouseDown={(event) => {
          if (event.buttons === 3) {
            if (!gameOver && !gameWin) {
              setButtonState(3);
              handleChording(id);
            }
          }
        }}
        onMouseUp={() => {
          if (!gameOver && !gameWin) {
            setButtonState(0);
            setChordingState([]);
          }
        }}
        onContextMenu={(event) => event.preventDefault()}
      ></button>
    );
  } else {
    //blank tile
    return (
      <button
        className="unopened-tile tile-btn"
        onMouseDown={() => {
          if (!gameOver && !gameWin) {
            setButtonState(3);
          }
        }}
        onClick={() => handleClick(tile, id)}
        onMouseUp={() => {
          if (!gameOver && !gameWin) {
            setButtonState(0);
          }
        }}
        onContextMenu={(event) => {
          event.preventDefault();
          handleRightClick(id);
        }}
      ></button>
    );
  }
}

GridTile.propTypes = {
  tile: PropTypes.number,
  id: PropTypes.number.isRequired,
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

export { GridTile };
