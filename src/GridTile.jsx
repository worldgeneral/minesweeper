import { useState } from "react";

//import { onClickTile } from "./gameLogic";

function GridTile({
  tile,
  id,
  gameOver,
  setGameOver,
  tileClickState,
  setTileClickState,
  flagCellState,
  setFlagCellState,
  revealCells,
}) {
  const handleRightClick = (event) => {
    if (gameOver === false) {
      flagCell();

      event.preventDefault();
    }
  };

  function flagCell() {
    if (flagCellState.includes(parseInt(id)) === true) {
      let newState = [];
      newState.push(
        flagCellState.splice(flagCellState.indexOf(parseInt(id), 1))
      );
      setFlagCellState(() => newState);

      return;
    }
    if (flagCellState.includes(parseInt(id)) === false) {
      setFlagCellState((preValue) => {
        return [...preValue, parseInt(id)];
      });
    }
  }

  function handleClick() {
    if (tile === -1 && gameOver === false) {
      return (
        setGameOver(true),
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
