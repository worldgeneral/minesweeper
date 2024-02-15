import { useState } from "react";
import { tileState } from "./react-minesweeper";

//import { onClickTile } from "./gameLogic";

function GridTile({
  tile,
  id,
  gameOver,
  setGameOver,
  tileClickState,
  setTileClickState,
}) {
  const [tileState, setTileState] = useState(tileClickState[id]);
  const [rightClickState, setRightClickState] = useState(false);

  const handleRightClick = (event) => {
    if (gameOver === false) {
      event.preventDefault();
      setRightClickState(!rightClickState);
    }
  };
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

  if (rightClickState === true) {
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
