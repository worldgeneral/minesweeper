function MineSweeperButton({
  gridSettings,
  gameWin,
  gameOver,
  buttonState,
  setButtonState,
  width,
  height,
  bombCount,
}) {
  return (
    <>
      <button
        onClick={() => {
          gridSettings(width, height, bombCount);
        }}
      >
        <img src={`/images/MinesweeperButton${parseInt(buttonState)}.svg`} />
      </button>
    </>
  );
}

export { MineSweeperButton };
