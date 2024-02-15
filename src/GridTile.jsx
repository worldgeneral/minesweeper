import { useState } from "react";

//import { onClickTile } from "./gameLogic";

function GridTile({
  tile,
  id,
  gameOver,
  setGameOver,
  tileClickState,
  setFlagCellState,
  flagCellState,
}) {
  const [tileState, setTileState] = useState(tileClickState[id]);
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
      console.log(flagCellState);
      return;
    }
    if (flagCellState.includes(parseInt(id)) === false) {
      flagCellState.push(parseInt(id));
      console.log(flagCellState);
      return;
    }
  }

  function handleClick(val) {
    if (tile === -1 && gameOver === false) {
      return (
        setGameOver(true), tileClickState.splice(val, 1, true), setTileState()
      );
    }

    if (gameOver === false) {
      tileClickState.splice(val, 1, true);
      setTileState();
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

  if (tileClickState[id] === false) {
    return (
      <div onClick={() => handleClick(id)} onContextMenu={handleRightClick}>
        <img
          width={"20px"}
          height={"20px"}
          src="/images/unopenedSquare.png"
          alt=""
        />
      </div>
    );
  }
  return <div>{tile}</div>;
}

export { GridTile };
