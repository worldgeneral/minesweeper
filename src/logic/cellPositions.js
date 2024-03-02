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

function getPositionalChecks({ currentCell, width }) {
  const values = { currentCell, width };
  return {
    left: position.left(values),
    right: position.right(values),
    above: position.above(values),
    below: position.below(values),
    belowRight: position.belowRight(values),
    belowLeft: position.belowLeft(values),
    aboveLeft: position.aboveLeft(values),
    aboveRight: position.aboveRight(values),
  };
}

export { getPositionalChecks };
