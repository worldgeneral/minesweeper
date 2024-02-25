import { GameGrid } from "./GameGrid";
import { GameMenu } from "./GameMenu";
import { gridLayout, cellReveal, chording } from "./gameLogic";
import { useState, useEffect } from "react";

function MineSweeper() {
  const [width, setWidth] = useState(9);
  const [height, setHeight] = useState(9);
  const [bombCount, setBombCount] = useState(10);
  const [tileClickState, setTileClickState] = useState(() => []);
  const [flagCellState, setFlagCellState] = useState(() => []);
  const [gameOver, setGameOver] = useState(false);
  const [gameWin, setGameWin] = useState(false);
  const [gameInPlay, setGameInPlay] = useState(false);
  const [buttonState, setButtonState] = useState(0);
  const [timePast, setTimePast] = useState(0);
  const [clock, setClock] = useState(null);
  const [chordingState, setChordingState] = useState(() => []);
  const [remainingBombCount, setRemainingBombCount] = useState(
    parseInt(bombCount)
  );
  const [gameGrid, setGameGrid] = useState(
    gridLayout(width, height, bombCount)
  );

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
  }, [gameInPlay]);

  useEffect(() => {
    if (gameOver || gameWin) {
      clearInterval(clock);
    }
  }, [gameOver, clock]);

  useEffect(() => {
    if (tileClickState.length + bombCount === width * height && !gameOver) {
      setButtonState(() => 1);
      setGameWin(true);
      clearInterval(clock);
    }
  });

  function resetGame(width, height, bombCount) {
    setGameGrid(gridLayout(width, height, bombCount));
    setTileClickState(() => []);
    setGameOver(false);
    setFlagCellState(() => []);
    setGameWin(false);
    setButtonState(() => 0);
    setRemainingBombCount(() => bombCount);
    setGameInPlay(false);
    setTimePast(() => 0);
    clearInterval(clock);
    setClock(null);
    setChordingState(() => []);
  }

  function revealCells(tile) {
    const cells = cellReveal(width, height, gameGrid, tile, tileClickState);
    setTileClickState((preValue) => {
      return [...preValue, ...cells];
    });
  }

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
        setGameOver={setGameOver}
        tileClickState={tileClickState}
        setTileClickState={setTileClickState}
        flagCellState={flagCellState}
        setFlagCellState={setFlagCellState}
        revealCells={revealCells}
        setButtonState={setButtonState}
        displayValue={displayValue}
        setGameInPlay={setGameInPlay}
        handleChording={handleChording}
        chordingState={chordingState}
        setChordingState={setChordingState}
      />
      <button
        onClick={() =>
          console.log(tileClickState.filter((e, i, a) => a.indexOf(e) !== i))
        }
      >
        duplicate num
      </button>
      <button onClick={() => console.log(tileClickState)}></button>
    </>
  );
}

export { MineSweeper };
