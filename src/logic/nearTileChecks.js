const nearTileChecks = {
  isLeft: ({ currentCell, width, height, totalTiles }) =>
    currentCell > currentCell - 1 &&
    currentCell !== Math.floor(currentCell / (totalTiles / height)) * width,
  isRight: ({ currentCell, width, height, totalTiles }) =>
    currentCell + 1 <
      width * (Math.floor(currentCell / (totalTiles / height)) + 1) &&
    currentCell !==
      Math.floor(currentCell / (totalTiles / height) + 1) * width - 1,
  isAbove: ({ currentCell, width }) => currentCell - width >= 0,
  isBelow: ({ currentCell, width, totalTiles }) =>
    currentCell + width < totalTiles,
  isAboveLeft: (values) =>
    nearTileChecks.isAbove(values) && nearTileChecks.isLeft(values),
  isAboveRight: (values) =>
    nearTileChecks.isAbove(values) && nearTileChecks.isRight(values),
  isBelowLeft: (values) =>
    nearTileChecks.isBelow(values) && nearTileChecks.isLeft(values),
  isBelowRight: (values) =>
    nearTileChecks.isBelow(values) && nearTileChecks.isRight(values),
};

export { nearTileChecks };
