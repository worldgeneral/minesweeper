import { GameGrid } from "./GameGrid";
import { GameMenu } from "./GameMenu";
import { useState, useEffect, useCallback } from "react";
import { ImagePreLoad } from "./ImagePreLoad";
import { gridLayout, blankGrid } from "./logic/gridLayout";
import { cellReveal } from "./logic/cellReveal";
import { chording } from "./logic/chording";

function MineSweeper() {
  const [width, setWidth] = useState(9);
  const [height, setHeight] = useState(9);
  const [bombCount, setBombCount] = useState(10);
  const [tileClickState, setTileClickState] = useState(() => []);
  const [flagCellState, setFlagCellState] = useState([]);
  const [gameOver, setGameOver] = useState(false);
  const [gameWin, setGameWin] = useState(false);
  const [gameInPlay, setGameInPlay] = useState(false);
  const [buttonState, setButtonState] = useState(0);
  const [timePast, setTimePast] = useState(0);
  const [clock, setClock] = useState(null);
  const [chordingState, setChordingState] = useState([]);
  const [firstClick, setFirstClick] = useState(null);
  const [remainingBombCount, setRemainingBombCount] = useState(
    parseInt(bombCount)
  );
  const [gameGrid, setGameGrid] = useState(() => blankGrid(width, height));

  function generateGrid(tile) {
    setGameGrid(gridLayout(width, height, bombCount, tile));
  }

  function displayValue(plusOrMinus) {
    if (plusOrMinus === false) {
      return setRemainingBombCount(() => remainingBombCount + 1);
    }
    if (plusOrMinus === true) {
      return setRemainingBombCount(() => remainingBombCount - 1);
    }
  }

  useEffect(() => {
    if (gameInPlay && !clock) {
      const clock = setInterval(() => {
        setTimePast((prevTimePast) => prevTimePast + 1);
      }, 1000);
      setClock(clock);
    }
  }, [gameInPlay, clock]);

  useEffect(() => {
    if (gameOver || gameWin) {
      clearInterval(clock);
    }
  }, [gameOver, clock, gameWin]);

  useEffect(() => {
    if (tileClickState.length + bombCount === width * height && !gameOver) {
      setButtonState(() => 1);
      setGameWin(true);
      clearInterval(clock);
    }
  }, [tileClickState, bombCount, width, height, gameOver, clock]);

  function resetGame(width, height, bombCount) {
    setGameGrid(blankGrid(width, height));
    setTileClickState([]);
    setGameOver(false);
    setFlagCellState([]);
    setGameWin(false);
    setButtonState(0);
    setRemainingBombCount(bombCount);
    setGameInPlay(false);
    setTimePast(0);
    clearInterval(clock);
    setClock(null);
    setChordingState([]);
    setFirstClick(null);
  }

  const revealCells = useCallback(
    (tile) => {
      const cells = cellReveal(width, height, gameGrid, tile, tileClickState);
      setTileClickState((preValue) => {
        return [...preValue, ...cells];
      });
    },
    [width, height, gameGrid, tileClickState]
  );
  useEffect(() => {
    if (typeof firstClick === "number" && gameGrid[firstClick] === 0) {
      revealCells(parseInt(firstClick));
    } else {
      if (typeof firstClick === "number")
        setTileClickState((preValue) => {
          return [...preValue, parseInt(firstClick)];
        });
    }
    setFirstClick(null);
  }, [firstClick, gameGrid, revealCells]);

  function handleChording(id) {
    const cells = chording(
      id,
      gameGrid,
      tileClickState,
      flagCellState,
      width,
      height
    );
    if (cells[0] === "!flags") {
      setChordingState(() => cells.slice(1));
    } else if (cells[0] === "correct") {
      setTileClickState((preValue) => {
        return [...preValue, ...cells.slice(1)];
      });
    } else if (cells[0] === "!correct") {
      setTileClickState((preValue) => {
        return [...preValue, ...cells.slice(1)];
      });
      setGameOver(true);
      setButtonState(() => 2);
      return;
    }
  }

  const handleRightClick = (id) => {
    if (gameOver === false) {
      flagCell(id);
    }
  };

  function flagCell(id) {
    if (flagCellState.includes(id)) {
      setFlagCellState((preValue) => {
        let state = [...preValue];
        state.splice(state.indexOf(id), 1);
        return state;
      });
      displayValue(false);
    } else {
      setFlagCellState((preValue) => {
        return [...preValue, id];
      });
      displayValue(true);
    }
  }

  function handleClick(tile, id) {
    if (!gameInPlay) {
      setGameInPlay(true);
      generateGrid(id);
      setFirstClick(id);
    }

    if (tile === -1 && gameOver === false && gameWin === false) {
      return (
        setGameOver(true),
        setButtonState(() => 2),
        setTileClickState((preValue) => {
          return [...preValue, id];
        })
      );
    }

    if (gameOver === false && !tileClickState.includes(id)) {
      if (tile === 0 && gameInPlay) {
        revealCells(id);
      } else if (gameInPlay) {
        setTileClickState((preValue) => {
          return [...preValue, id];
        });
      }
    }
  }

  return (
    <>
      <GameMenu
        resetGame={resetGame}
        setWidth={setWidth}
        setHeight={setHeight}
        setBombCount={setBombCount}
        width={width}
        height={height}
        bombCount={bombCount}
        gameWin={gameWin}
        gameOver={gameOver}
        buttonState={buttonState}
        setButtonState={setButtonState}
        remainingBombCount={remainingBombCount}
        timePast={timePast}
      />
      <GameGrid
        grid={gameGrid}
        width={width}
        height={height}
        gameOver={gameOver}
        gameWin={gameWin}
        tileClickState={tileClickState}
        setTileClickState={setTileClickState}
        flagCellState={flagCellState}
        setGameInPlay={setGameInPlay}
        handleChording={handleChording}
        chordingState={chordingState}
        setChordingState={setChordingState}
        gameInPlay={gameInPlay}
        generateGrid={generateGrid}
        handleRightClick={handleRightClick}
        handleClick={handleClick}
        setButtonState={setButtonState}
      />
      <ImagePreLoad />
    </>
  );
}

export { MineSweeper };
