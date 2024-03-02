import { nearTileChecks } from "./nearTileChecks";

function gridLayout(width, height, totalBombCount, tile) {
  const grid = [];
  const totalTiles = width * height;
  const bombArray = hasBomb(totalBombCount, totalTiles, tile).slice(1);

  for (let cell = 0; cell < totalTiles; cell++) {
    if (bombArray.includes(cell)) {
      grid[cell] = -1;
    } else {
      grid[cell] = bombCount(bombArray, cell, width, height, totalTiles);
    }
  }

  return grid;
}

function bombCount(bombArray, currentCell, width, height, totalTiles) {
  let value = 0;

  if (
    nearTileChecks.isLeft({ currentCell, width, height, totalTiles }) &&
    bombArray.includes(currentCell - 1)
  ) {
    value++;
  }
  if (
    nearTileChecks.isRight({ currentCell, width, height, totalTiles }) &&
    bombArray.includes(currentCell + 1)
  ) {
    value++;
  }
  if (
    nearTileChecks.isAbove({ currentCell, width, height, totalTiles }) &&
    bombArray.includes(currentCell - width)
  ) {
    value++;
  }
  if (
    nearTileChecks.isBelow({ currentCell, width, height, totalTiles }) &&
    bombArray.includes(currentCell + width)
  ) {
    value++;
  }
  if (
    nearTileChecks.isAboveLeft({ currentCell, width, height, totalTiles }) &&
    bombArray.includes(currentCell - width - 1)
  ) {
    value++;
  }
  if (
    nearTileChecks.isAboveRight({ currentCell, width, height, totalTiles }) &&
    bombArray.includes(currentCell - width + 1)
  ) {
    value++;
  }
  if (
    nearTileChecks.isBelowLeft({ currentCell, width, height, totalTiles }) &&
    bombArray.includes(currentCell + width - 1)
  ) {
    value++;
  }
  if (
    nearTileChecks.isBelowRight({ currentCell, width, height, totalTiles }) &&
    bombArray.includes(currentCell + width + 1)
  ) {
    value++;
  }
  return value;
}

function blankGrid(width, height) {
  return Array.from({ length: width * height }).fill(null);
}

function randomBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function hasBomb(bombCount, tileCount, tile) {
  const bombs = new Set();
  bombs.add(tile);

  while (bombs.size < bombCount + 1) {
    bombs.add(randomBetween(0, tileCount - 1));
  }

  return Array.from(bombs.values());
}

export { gridLayout, blankGrid };
