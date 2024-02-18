function GameMenu({ resetGame, setWidth, setHeight, setBombCount }) {
  function gridSettings(gridWidth, gridHeight, gridBombCount) {
    setWidth(() => gridWidth);
    setHeight(() => gridHeight);
    setBombCount(() => gridBombCount);
    resetGame(gridWidth, gridHeight, gridBombCount);
  }
  return (
    <>
      <div></div>
      <button onClick={() => resetGame()}>reset</button>
      <div>
        <button onClick={() => gridSettings(9, 9, 10)}>Beginner</button>
        <button onClick={() => gridSettings(16, 16, 40)}> Intermediate</button>
        <button onClick={() => gridSettings(32, 16, 99)}>Expert</button>
      </div>
    </>
  );
}
export { GameMenu };
