const position = {
  left: ({ currentCell }) => currentCell - 1,
  right: ({ currentCell }) => currentCell + 1,
  above: ({ currentCell, width }) => currentCell - width,
  below: ({ currentCell, width }) => currentCell + width,
  aboveLeft: ({ currentCell, width }) => currentCell - width - 1,
  aboveRight: ({ currentCell, width }) => currentCell - width + 1,
  belowLeft: ({ currentCell, width }) => currentCell + width - 1,
  belowRight: ({ currentCell, width }) => currentCell + width + 1,
};

export { position };
