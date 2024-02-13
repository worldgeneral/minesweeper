function gridLayout(width, height, totalBombCount) {
  const grid = [];
  const totalTiles = width * height;
  const bombArray = hasBomb(totalBombCount, totalTiles);
  let currentCell = 0;
  let currentRow = 0;
  for (let cell = 0; cell < totalTiles; cell++) {
    const isLeft =
      currentCell > currentCell - 1 && currentCell !== currentRow * width;
    const isRight =
      currentCell + 1 < width * (currentRow + 1) &&
      currentCell !== currentRow * width - 1;
    const isAbove = currentCell - width >= 0;
    const isBelow = currentCell + width < totalTiles;
    const isAboveLeft = isLeft && isAbove;
    const isAboveRight = isRight && isAbove;
    const isBelowLeft = isLeft && isBelow;
    const isBelowRight = isRight && isBelow;
    let value = 0;

    if (bombArray.includes(currentCell)) {
      grid[currentCell] = -1;
    } else {
      if (isLeft && bombArray.includes(currentCell - 1)) {
        value++;
      }
      if (isRight && bombArray.includes(currentCell + 1)) {
        value++;
      }
      if (isAbove && bombArray.includes(currentCell - width)) {
        value++;
      }
      if (isBelow && bombArray.includes(currentCell + width)) {
        value++;
      }
      if (isAboveLeft && bombArray.includes(currentCell - width - 1)) {
        value++;
      }
      if (isAboveRight && bombArray.includes(currentCell - width + 1)) {
        value++;
      }
      if (isBelowLeft && bombArray.includes(currentCell + width - 1)) {
        value++;
      }
      if (isBelowRight && bombArray.includes(currentCell + width + 1)) {
        value++;
      }
      grid[currentCell] = value;
    }
    if (currentRow === 0) {
      let tempRow = currentRow + 1;
      if (tempRow === width) {
        currentRow++;
      }
    }
    if (currentCell === currentRow * width) {
      currentRow++;
    }
    currentCell++;
  }

  return grid;
}

function randomBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function hasBomb(bombCount, tileCount) {
  const bombs = new Set();

  while (bombs.size < bombCount) {
    bombs.add(randomBetween(0, tileCount - 1));
  }

  return Array.from(bombs.values());
}

export { gridLayout };
