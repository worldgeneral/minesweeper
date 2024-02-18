import { useState } from "react";

function GridSizeForm({ gridSettings }) {
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

    gridSettings(
      parseInt(formData.width, 10),
      parseInt(formData.height, 10),
      parseInt(formData.bombCount, 10)
    );
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

export { GridSizeForm };
