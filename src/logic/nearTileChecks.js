const nearTileChecks = {
  isLeft: function ({ currentCell, width, height, totalTiles }) {
    return (
      currentCell > currentCell - 1 &&
      currentCell !== Math.floor(currentCell / (totalTiles / height)) * width
    );
  },

  isRight: function ({ currentCell, width, height, totalTiles }) {
    return (
      currentCell + 1 <
        width * (Math.floor(currentCell / (totalTiles / height)) + 1) &&
      currentCell !==
        Math.floor(currentCell / (totalTiles / height) + 1) * width - 1
    );
  },

  isAbove: function ({ currentCell, width }) {
    return currentCell - width >= 0;
  },

  isBelow: function ({ currentCell, width, totalTiles }) {
    return currentCell + width < totalTiles;
  },

  isAboveLeft: function ({ currentCell, width, height, totalTiles }) {
    return (
      nearTileChecks.isAbove({ currentCell, width, height, totalTiles }) &&
      nearTileChecks.isLeft({ currentCell, width, height, totalTiles })
    );
  },

  isAboveRight: function ({ currentCell, width, height, totalTiles }) {
    return (
      nearTileChecks.isAbove({ currentCell, width, height, totalTiles }) &&
      nearTileChecks.isRight({ currentCell, width, height, totalTiles })
    );
  },

  isBelowLeft: function ({ currentCell, width, height, totalTiles }) {
    return (
      nearTileChecks.isBelow({ currentCell, width, height, totalTiles }) &&
      nearTileChecks.isLeft({ currentCell, width, height, totalTiles })
    );
  },

  isBelowRight: function ({ currentCell, width, height, totalTiles }) {
    return (
      nearTileChecks.isBelow({ currentCell, width, height, totalTiles }) &&
      nearTileChecks.isRight({ currentCell, width, height, totalTiles })
    );
  },
};

export { nearTileChecks };
