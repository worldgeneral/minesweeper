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

  let currentCell = 0;
  let toLookAtIndex = 0;

  toLookAt.push(parseInt(tile));
  const isLeft =
    currentCell > currentCell - 1 &&
    currentCell >=
      Math.floor(currentCell / (totalTiles / height) + 1) * width - width;
  const isRight =
    currentCell + 1 <
      width * (Math.floor(currentCell / (totalTiles / height)) + 1) &&
    currentCell !==
      Math.floor(currentCell / (totalTiles / height) + 1) * width - 1;
  const isAbove = currentCell - width >= 0;
  const isBelow = currentCell + width < totalTiles;
  // const isAboveLeft = isLeft && isAbove;
  // const isAboveRight = isRight && isAbove;
  // const isBelowLeft = isLeft && isBelow;
  // const isBelowRight = isRight && isBelow;
  while (toLookAt.length > toLookAtIndex) {
    currentCell = toLookAt[toLookAtIndex];

    if (
      isLeft &&
      grid[currentCell - 1] >= 0 &&
      reveal.includes(currentCell - 1) === false
    ) {
      reveal.push(currentCell - 1);
      if (grid[currentCell - 1] === 0) {
        toLookAt.push(currentCell - 1);
      }
    }
    // if (
    //   isRight &&
    //   grid[currentCell + 1] >= 0 &&
    //   reveal.includes(currentCell + 1) === false
    // ) {
    //   reveal.push(currentCell + 1);
    //   if (grid[currentCell + 1] === 0) {
    //     toLookAt.push(currentCell + 1);
    //   }
    // }
    // if (
    //   isAbove &&
    //   grid[currentCell - width] >= 0 &&
    //   reveal.includes(currentCell - width) === false
    // ) {
    //   reveal.push(currentCell - width);
    //   if (grid[currentCell - width] === 0) {
    //     toLookAt.push(currentCell - width);
    //   }
    // }
    // if (
    //   isBelow &&
    //   grid[currentCell + width] >= 0 &&
    //   reveal.includes(currentCell + width) === false
    // ) {
    //   reveal.push(currentCell + width);
    //   if (grid[currentCell + width] === 0) {
    //     toLookAt.push(currentCell + width);
    //   }
    // }
    // if (
    //   isAboveLeft &&
    //   grid[currentCell - width - 1] >= 0 &&
    //   reveal.includes(currentCell - width - 1) === false
    // ) {
    //   reveal.push(currentCell - width - 1);
    //   if (grid[currentCell - width - 1] === 0) {
    //     toLookAt.push(currentCell - width - 1);
    //   }
    // }
    // if (
    //   isAboveRight &&
    //   grid[currentCell - width + 1] >= 0 &&
    //   reveal.includes(currentCell - width + 1) === false
    // ) {
    //   reveal.push(currentCell - width + 1);
    //   if (grid[currentCell - width + 1] === 0) {
    //     toLookAt.push(currentCell - width + 1);
    //   }
    // }
    // if (
    //   isBelowLeft &&
    //   grid[currentCell + width - 1] >= 0 &&
    //   reveal.includes(currentCell + width - 1) === false
    // ) {
    //   reveal.push(currentCell + width - 1);
    //   if (grid[currentCell + width - 1] === 0) {
    //     toLookAt.push(currentCell + width - 1);
    //   }
    // }
    // if (
    //   isBelowRight &&
    //   grid[currentCell + width + 1] >= 0 &&
    //   reveal.includes(currentCell + width + 1) === false
    // ) {
    //   reveal.push(currentCell + width + 1);
    //   if (grid[currentCell + width + 1] === 0) {
    //     toLookAt.push(currentCell + width + 1);
    //   }
    // }

    toLookAtIndex++;
  }
  return reveal;
}

export { gridLayout, cellReveal };
