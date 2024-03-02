import { useState } from "react";
import PropTypes from "prop-types";

function GridSizeForm({ newGame }) {
  const [formData, setFormData] = useState({
    width: 9,
    height: 9,
    bombCount: 10,
  });

  const handleChange = (evt) => {
    const changedField = evt.target.name;
    const newValue = evt.target.value;
    setFormData((currData) => {
      currData[changedField] = newValue;
      return { ...currData };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    newGame(formData.width, formData.height, formData.bombCount);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="number"
        placeholder="9"
        value={formData.width}
        onChange={handleChange}
        id="widthInput"
        name="width"
      />
      <input
        type="number"
        placeholder="9"
        value={formData.height}
        onChange={handleChange}
        id="heightInput"
        name="height"
      />
      <input
        type="number"
        placeholder="10"
        value={formData.bombCount}
        onChange={handleChange}
        id="bombCountInput"
        name="bombCount"
      />
      <button>Play</button>
    </form>
  );
}

GridSizeForm.propTypes = {
  newGame: PropTypes.func.isRequired,
};

export { GridSizeForm };
