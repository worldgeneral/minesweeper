function gridLayout(width, height, totalBombCount) {
  const grid = [];
  const totalTiles = width * height;
  const bombArray = hasBomb(totalBombCount, totalTiles);
  let currentCell = 0;

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

function cellReveal(width, height, grid, tile, tileClickState) {
  const toLookAt = [];
  const reveal = [];

  const totalTiles = width * height;

  let currentCell = 0;
  let toLookAtIndex = 0;

  reveal.push(parseInt(tile));
  toLookAt.push(parseInt(tile));
  while (toLookAt.length > toLookAtIndex) {
    currentCell = toLookAt[toLookAtIndex];
    const isLeft =
      currentCell > currentCell - 1 &&
      currentCell !==
        Math.floor(currentCell / (totalTiles / height) + 1) * width - width;
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

    if (
      isLeft &&
      grid[currentCell - 1] >= 0 &&
      reveal.includes(currentCell - 1) === false &&
      tileClickState.includes(currentCell - 1) === false
    ) {
      reveal.push(currentCell - 1);
      if (grid[currentCell - 1] === 0) {
        toLookAt.push(currentCell - 1);
      }
    }
    if (
      isRight &&
      grid[currentCell + 1] >= 0 &&
      reveal.includes(currentCell + 1) === false &&
      tileClickState.includes(currentCell + 1) === false
    ) {
      reveal.push(currentCell + 1);
      if (grid[currentCell + 1] === 0) {
        toLookAt.push(currentCell + 1);
      }
    }
    if (
      isAbove &&
      grid[currentCell - width] >= 0 &&
      reveal.includes(currentCell - width) === false &&
      tileClickState.includes(currentCell - width) === false
    ) {
      reveal.push(currentCell - width);
      if (grid[currentCell - width] === 0) {
        toLookAt.push(currentCell - width);
      }
    }
    if (
      isBelow &&
      grid[currentCell + width] >= 0 &&
      reveal.includes(currentCell + width) === false &&
      tileClickState.includes(currentCell + width) === false
    ) {
      reveal.push(currentCell + width);
      if (grid[currentCell + width] === 0) {
        toLookAt.push(currentCell + width);
      }
    }
    if (
      isAboveLeft &&
      grid[currentCell - width - 1] >= 0 &&
      reveal.includes(currentCell - width - 1) === false &&
      tileClickState.includes(currentCell - width - 1) === false
    ) {
      reveal.push(currentCell - width - 1);
      if (grid[currentCell - width - 1] === 0) {
        toLookAt.push(currentCell - width - 1);
      }
    }
    if (
      isAboveRight &&
      grid[currentCell - width + 1] >= 0 &&
      reveal.includes(currentCell - width + 1) === false &&
      tileClickState.includes(currentCell - width + 1) === false
    ) {
      reveal.push(currentCell - width + 1);
      if (grid[currentCell - width + 1] === 0) {
        toLookAt.push(currentCell - width + 1);
      }
    }
    if (
      isBelowLeft &&
      grid[currentCell + width - 1] >= 0 &&
      reveal.includes(currentCell + width - 1) === false &&
      tileClickState.includes(currentCell + width - 1) === false
    ) {
      reveal.push(currentCell + width - 1);
      if (grid[currentCell + width - 1] === 0) {
        toLookAt.push(currentCell + width - 1);
      }
    }
    if (
      isBelowRight &&
      grid[currentCell + width + 1] >= 0 &&
      reveal.includes(currentCell + width + 1) === false &&
      tileClickState.includes(currentCell + width + 1) === false
    ) {
      reveal.push(currentCell + width + 1);
      if (grid[currentCell + width + 1] === 0) {
        toLookAt.push(currentCell + width + 1);
      }
    }

    toLookAtIndex++;
  }
  return reveal;
}

function chording(tile, grid, tileState, flagState, width, height) {
  const reveal = [];
  const tiles = [];
  const tileID = [];
  let correctFlag = true;
  const currentCell = tile;
  const totalTiles = width * height;

  const flaggedBombs = [];

  const isLeft =
    currentCell > currentCell - 1 &&
    currentCell !==
      Math.floor(currentCell / (totalTiles / height) + 1) * width - width;
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

  if (isAboveLeft === true) {
    tiles.push(grid[currentCell - width - 1]);
    tileID.push(currentCell - width - 1);
    if (flagState.includes(currentCell - width - 1)) {
      flaggedBombs.push(currentCell - width - 1);
    }
  }
  if (isAbove) {
    tiles.push(grid[currentCell - width]);
    tileID.push(currentCell - width);
    if (flagState.includes(currentCell - width)) {
      flaggedBombs.push(currentCell - width);
    }
  }
  if (isAboveRight === true) {
    tiles.push(grid[currentCell - width + 1]);
    tileID.push(currentCell - width + 1);
    if (flagState.includes(currentCell - width + 1)) {
      flaggedBombs.push(currentCell - width + 1);
    }
  }
  if (isLeft === true) {
    tiles.push(grid[currentCell - 1]);
    tileID.push(currentCell - 1);
    if (flagState.includes(currentCell - 1)) {
      flaggedBombs.push(currentCell - 1);
    }
  }
  if (isRight === true) {
    tiles.push(grid[currentCell + 1]);
    tileID.push(currentCell + 1);
    if (flagState.includes(currentCell + 1)) {
      flaggedBombs.push(currentCell + 1);
    }
  }
  if (isBelowLeft === true) {
    tiles.push(grid[currentCell + width - 1]);
    tileID.push(currentCell + width - 1);
    if (flagState.includes(currentCell + width - 1)) {
      flaggedBombs.push(currentCell + width - 1);
    }
  }
  if (isBelow === true) {
    tiles.push(grid[currentCell + width]);
    tileID.push(currentCell + width);
    if (flagState.includes(currentCell + width)) {
      flaggedBombs.push(currentCell + width);
    }
  }
  if (isBelowRight === true) {
    tiles.push(grid[currentCell + width + 1]);
    tileID.push(currentCell + width + 1);
    if (flagState.includes(currentCell + width + 1)) {
      flaggedBombs.push(currentCell + width + 1);
    }
  }

  for (let i = 0; i < tiles.length; i++) {
    if (tiles[i] === -1 && correctFlag === true) {
      if (flaggedBombs.includes(tileID[i])) {
        correctFlag = true;
      } else {
        correctFlag = false;
      }
    }
  }

  if (correctFlag) {
    reveal.push("correct");
    for (let i = 0; i < tiles.length; i++) {
      if (!tileState.includes(tileID[i]) && tiles[i] >= 0) {
        reveal.push(tileID[i]);
      }
    }
    return reveal;
  } else if (!correctFlag && flaggedBombs.length === grid[tile]) {
    reveal.push("!correct");
    for (let i = 0; i < tiles.length; i++) {
      if (!tileState.includes(tileID[i]) && !flagState.includes(tileID[i])) {
        reveal.push(tileID[i]);
      }
    }
    return reveal;
  } else if (flaggedBombs.length !== tile) {
    reveal.push("!flags");
    for (let i = 0; i < tiles.length; i++) {
      if (!tileState.includes(tileID[i]) && !flagState.includes(tileID[i])) {
        reveal.push(tileID[i]);
      }
    }
    return reveal;
  }
}
export { gridLayout, cellReveal, chording };
