import { useState } from "react";

//import { onClickTile } from "./gameLogic";

function GridTile({ tile, gameOver, setGameOver }) {
  const [tileState, setTileState] = useState(false);
  const [rightClickState, setRightClickState] = useState(false);

  const handleRightClick = (event) => {
    if (gameOver === false) {
      setRightClickState(!rightClickState);
      event.preventDefault();
    }
  };
  function handleClick() {
    if (tile === -1 && gameOver === false) {
      return setGameOver(true), setTileState(true);
    }

    if (gameOver === false) {
      return setTileState(true);
    }
  }

  if (rightClickState === true) {
    return (
      <div onContextMenu={handleRightClick}>
        <img width={"20px"} height={"20px"} src="/images/tileFlag.png" alt="" />
      </div>
    );
  }

  if (tileState === false) {
    return (
      <div onClick={handleClick} onContextMenu={handleRightClick}>
        <img
          width={"20px"}
          height={"20px"}
          src="/images/unopenedSquare.png"
          alt=""
        />
      </div>
    );
  } else {
    if (tile === -1) {
      return (
        <div width={"20px"} height={"20px"}>
          <img width={"20px"} height={"20px"} src="/images/bomb.png" alt="" />
        </div>
      );
    }
    return <div>{tile}</div>;
  }
}

export { GridTile };
