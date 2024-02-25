import "./GridTile.css";

function GridTile({
  tile,
  id,
  gameOver,
  setGameOver,
  gameWin,
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
}) {
  const handleRightClick = (event) => {
    if (gameOver === false) {
      flagCell();
      event.preventDefault();
    }
  };

  function flagCell() {
    if (flagCellState.includes(parseInt(id))) {
      setFlagCellState((preValue) => {
        let state = [...preValue];
        state.splice(state.indexOf(parseInt(id)), 1);
        return state;
      });
      displayValue(false);
    } else {
      setFlagCellState((preValue) => {
        return [...preValue, parseInt(id)];
      });
      displayValue(true);
    }
  }

  function handleClick() {
    setGameInPlay(true);
    if (tile === -1 && gameOver === false && gameWin === false) {
      return (
        setGameOver(true),
        setButtonState(() => 2),
        setTileClickState((preValue) => {
          return [...preValue, parseInt(id)];
        })
      );
    }

    if (gameOver === false && tileClickState.includes(parseInt(id)) === false) {
      if (tile === 0) {
        revealCells(id);
      } else {
        setTileClickState((preValue) => {
          return [...preValue, parseInt(id)];
        });
      }
    }
  }

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
        onContextMenu={handleRightClick}
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
        onClick={() => handleClick()}
        onContextMenu={handleRightClick}
      ></button>
    );
  }
}

export { GridTile };
