function gridLayout(width, height, totalBombCount) {
  const grid = [];
  const totalTiles = width * height;
  const bombArray = hasBomb(totalBombCount, totalTiles);
  let currentCell = 0;
  //let currentRow = 0;
  for (let cell = 0; cell < totalTiles; cell++) {
    const isLeft =
      currentCell > currentCell - 1 &&
      currentCell !== Math.floor(currentCell / (totalTiles / height)) * width;
    const isRight =
      currentCell + 1 <
        width * (Math.floor(currentCell / (totalTiles / height)) + 1) &&
      currentCell !==
        Math.floor(currentCell / (totalTiles / height) + 1) * width - 1;
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

function cellReveal(width, height, grid, tile) {
  const toLookAt = [];
  const reveal = [];

  const totalTiles = width * height;

  let currentTile = 0;
  let toLookAtIndex = 0;

  toLookAt.push(parseInt(tile));
  const isLeft =
    currentTile > currentTile - 1 &&
    currentTile !==
      Math.floor(currentTile / (totalTiles / height) + 1) * width - width - 1;
  const isRight =
    currentTile + 1 <
      width * (Math.floor(currentTile / (totalTiles / height)) + 1) &&
    currentTile !==
      Math.floor(currentTile / (totalTiles / height) + 1) * width - 1;
  const isAbove = currentTile - width >= 0;
  const isBelow = currentTile + width < totalTiles;
  const isAboveLeft = isLeft && isAbove;
  const isAboveRight = isRight && isAbove;
  const isBelowLeft = isLeft && isBelow;
  const isBelowRight = isRight && isBelow;
  while (toLookAt.length > toLookAtIndex) {
    currentTile = toLookAt[toLookAtIndex];

    console.log(reveal);

    if (
      isLeft &&
      grid[currentTile - 1] >= 0 &&
      reveal.includes(currentTile - 1) === false
    ) {
      reveal.push(currentTile - 1);
      if (grid[currentTile - 1] === 0) {
        toLookAt.push(currentTile - 1);
      }
    }
    if (
      isRight &&
      grid[currentTile + 1] >= 0 &&
      reveal.includes(currentTile + 1) === false
    ) {
      reveal.push(currentTile + 1);
      if (grid[currentTile + 1] === 0) {
        toLookAt.push(currentTile + 1);
      }
    }
    if (
      // isAbove &&
      grid[currentTile - width] >= 0 &&
      reveal.includes(currentTile - width) === false
    ) {
      reveal.push(currentTile - width);
      if (grid[currentTile - width] === 0) {
        toLookAt.push(currentTile - width);
      }
    }
    if (
      isBelow &&
      grid[currentTile + width] >= 0 &&
      reveal.includes(currentTile + width) === false
    ) {
      reveal.push(currentTile + width);
      if (grid[currentTile + width] === 0) {
        toLookAt.push(currentTile + width);
      }
    }
    if (
      isAboveLeft &&
      grid[currentTile - width - 1] >= 0 &&
      reveal.includes(currentTile - width - 1) === false
    ) {
      reveal.push(currentTile - width - 1);
      if (grid[currentTile - width - 1] === 0) {
        toLookAt.push(currentTile - width - 1);
      }
    }
    if (
      isAboveRight &&
      grid[currentTile - width + 1] >= 0 &&
      reveal.includes(currentTile - width + 1) === false
    ) {
      reveal.push(currentTile - width + 1);
      if (grid[currentTile - width + 1] === 0) {
        toLookAt.push(currentTile - width + 1);
      }
    }
    if (
      isBelowLeft &&
      grid[currentTile + width - 1] >= 0 &&
      reveal.includes(currentTile + width - 1) === false
    ) {
      reveal.push(currentTile + width - 1);
      if (grid[currentTile + width - 1] === 0) {
        toLookAt.push(currentTile + width - 1);
      }
    }
    if (
      isBelowRight &&
      grid[currentTile + width + 1] >= 0 &&
      reveal.includes(currentTile + width + 1) === false
    ) {
      reveal.push(currentTile + width + 1);
      if (grid[currentTile + width + 1] === 0) {
        toLookAt.push(currentTile + width + 1);
      }
    }

    toLookAtIndex++;
  }
  return reveal;
}

export { gridLayout, cellReveal };
