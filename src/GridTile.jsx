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

  if (tile === -1 && gameOver === true && gameWin === false) {
    if (tileClickState[tileClickState.length - 1] === parseInt(id)) {
      return (
        <img
          width={"20px"}
          height={"20px"}
          src="/images/MinesweeperClickedBomb.svg"
          alt=""
        />
      );
    } else {
      return (
        <img
          width={"20px"}
          height={"20px"}
          src="/images/MinesweeperBomb.svg"
          alt=""
        />
      );
    }
  }
  if (chordingState.includes(parseInt(id))) {
    return (
      <img width={"20px"} height={"20px"} src="/images/Minesweeper0.svg" />
    );
  }

  if (
    flagCellState.includes(parseInt(id)) ||
    (gameWin === true && tile === -1)
  ) {
    return (
      <img
        onContextMenu={handleRightClick}
        width={"20px"}
        height={"20px"}
        src="/images/MinesweeperFlag.svg"
        alt=""
      />
    );
  }
  if (tileClickState.includes(parseInt(id))) {
    return (
      <img
        onClick={() => handleChording(parseInt(id))}
        width={"20px"}
        height={"20px"}
        src={`/images/Minesweeper${tile}.svg`}
      />
    );
  } else {
    return (
      <img
        onClick={() => handleClick()}
        onContextMenu={handleRightClick}
        width={"20px"}
        height={"20px"}
        src="/images/MinesweeperUnopened.svg"
        alt=""
      />
    );
  }
}

export { GridTile };
