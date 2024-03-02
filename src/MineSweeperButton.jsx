import PropTypes from "prop-types";

function MineSweeperButton({ newGame, buttonState, width, height, bombCount }) {
  return (
    <button onClick={() => newGame(width, height, bombCount)}>
      <img
        width={40}
        height={40}
        src={`/images/MinesweeperButton${parseInt(buttonState)}.svg`}
      />
    </button>
  );
}

MineSweeperButton.propTypes = {
  newGame: PropTypes.func.isRequired,
  buttonState: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  bombCount: PropTypes.number.isRequired,
};

export { MineSweeperButton };
