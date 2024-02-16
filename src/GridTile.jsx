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
  const [rightClickState, setRightClickState] = useState(false);

  const handleRightClick = (event) => {
    if (gameOver === false) {
      flagCell();
      setRightClickState(!rightClickState);
      event.preventDefault();
    }
  };

  function flagCell() {
    if (flagCellState.includes(parseInt(id)) === true) {
      flagCellState.splice(flagCellState.indexOf(parseInt(id), 1));

      return;
    }
    if (flagCellState.includes(parseInt(id)) === false) {
      flagCellState.push(parseInt(id));

      return;
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
        <img width={"20px"} height={"20px"} src="/images/bomb.png" alt="" />
      </div>
    );
  }

  if (flagCellState.includes(parseInt(id))) {
    return (
      <div onContextMenu={handleRightClick}>
        <img width={"20px"} height={"20px"} src="/images/tileFlag.png" alt="" />
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
          src="/images/unopenedSquare.png"
          alt=""
        />
      </div>
    );
  }
  //return <div>{tile}</div>;
}

export { GridTile };
