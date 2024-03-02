const position = {
  left: function ({ currentCell, width }) {
    return currentCell - 1;
  },
  right: function ({ currentCell, width }) {
    return currentCell + 1;
  },
  above: function ({ currentCell, width }) {
    return currentCell - width;
  },
  below: function ({ currentCell, width }) {
    return currentCell + width;
  },
  aboveLeft: function ({ currentCell, width }) {
    return currentCell - width - 1;
  },
  aboveRight: function ({ currentCell, width }) {
    return currentCell - width + 1;
  },
  belowLeft: function ({ currentCell, width }) {
    return currentCell + width - 1;
  },
  belowRight: function ({ currentCell, width }) {
    return currentCell + width + 1;
  },
};

export { position };
