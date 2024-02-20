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
      }
      setTileClickState((preValue) => {
        return [...preValue, parseInt(id)];
      });
    }
  }

  if (tile === -1 && gameOver === true) {
    return (
      <div width={"20px"} height={"20px"}>
        <img
          width={"20px"}
          height={"20px"}
          src="/images/MinesweeperBomb.svg"
          alt=""
        />
      </div>
    );
  }

  if (flagCellState.includes(parseInt(id))) {
    return (
      <div onContextMenu={handleRightClick}>
        <img
          width={"20px"}
          height={"20px"}
          src="/images/MinesweeperFlag.svg"
          alt=""
        />
      </div>
    );
  }
  if (tileClickState.includes(parseInt(id))) {
    return (
      <div>
        <img
          width={"20px"}
          height={"20px"}
          src={`/images/Minesweeper${tile}.svg`}
        />
      </div>
    );
  } else {
    return (
      <div onClick={() => handleClick()} onContextMenu={handleRightClick}>
        <img
          width={"20px"}
          height={"20px"}
          src="/images/MinesweeperUnopened.svg"
          alt=""
        />
      </div>
    );
  }
}

export { GridTile };
