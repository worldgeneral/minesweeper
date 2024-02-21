function MineSweeperButton({
  gridSettings,
  buttonState,
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
        <img
          width={"40px"}
          height={"40px"}
          src={`/images/MinesweeperButton${parseInt(buttonState)}.svg`}
        />
      </button>
    </>
  );
}

export { MineSweeperButton };
