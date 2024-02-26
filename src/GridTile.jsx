import "./GridTile.css";

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
}) {
  //bomb tile
  if (tile === -1 && gameOver === true && gameWin === false) {
    if (tileClickState[tileClickState.length - 1] === parseInt(id)) {
      return <button className="tile-btn minesweeper-clicked-bomb"></button>;
    } else {
      return <button className="tile-btn minesweeper-bomb"></button>;
    }
  }
  //chording
  if (chordingState.includes(parseInt(id))) {
    return <button className="tile-btn tile0"></button>;
  }
  //flagged tile
  if (
    flagCellState.includes(parseInt(id)) ||
    (gameWin === true && tile === -1)
  ) {
    return (
      <button
        className="tile-btn minesweeper-flag"
        onContextMenu={(event) => {
          event.preventDefault();
          handleRightClick(parseInt(id));
        }}
      ></button>
    );
  }
  //number tile
  if (tileClickState.includes(parseInt(id))) {
    return (
      <button
        className={`tile${tile} tile-btn`}
        onMouseDown={(event) => {
          if (event.buttons === 3) {
            handleChording(parseInt(id));
          }
        }}
        onMouseUp={() => {
          setChordingState([]);
        }}
        onContextMenu={(event) => event.preventDefault()}
      ></button>
    );
  } else {
    //blank tile
    return (
      <button
        className="unopened-tile tile-btn"
        onClick={() => handleClick(tile, parseInt(id))}
        onContextMenu={(event) => {
          event.preventDefault();
          handleRightClick(parseInt(id));
        }}
      ></button>
    );
  }
}

export { GridTile };
