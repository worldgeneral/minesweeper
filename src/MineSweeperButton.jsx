import PropTypes from "prop-types";

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

MineSweeperButton.propTypes = {
  gridSettings: PropTypes.func.isRequired,
  buttonState: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  bombCount: PropTypes.number.isRequired,
};

export { MineSweeperButton };
