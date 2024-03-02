import { useState } from "react";
import PropTypes from "prop-types";

function GridSizeForm({ newGame }) {
  const [formData, setFormData] = useState({
    width: 9,
    height: 9,
    bombCount: 10,
  });

  const handleChange = (event) => {
    setFormData((currData) => {
      return {
        ...currData,
        [event.target.name]: parseInt(event.target.value, 10),
      };
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
        name="width"
      />
      <input
        type="number"
        placeholder="9"
        value={formData.height}
        onChange={handleChange}
        name="height"
      />
      <input
        type="number"
        placeholder="10"
        value={formData.bombCount}
        onChange={handleChange}
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
