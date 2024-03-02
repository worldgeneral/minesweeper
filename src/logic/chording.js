import { cellReveal } from "./cellReveal";
import { nearTileChecks } from "./nearTileChecks";

function chording(tile, grid, tileState, flagState, width, height) {
  const reveal = [];
  const currentCell = tile;
  const tiles = chordingTiles(currentCell, width, height, grid, flagState);
  // chording tiles
  //[[tileValue],[tileID],[flag]]
  const correctFlags = correctFlagsCheck(tiles, grid, tile);

  if (correctFlags) {
    // returns the reveal array to minesweeper
    const correctTiles = flagsCorrect(tiles, tileState);
    const chordingTiles = chordingCellReveal(
      width,
      height,
      grid,
      tile,
      tileState,
      correctTiles
    );
    chordingTiles.forEach((tile) => reveal.push(tile));
    return reveal;
  } else if (correctFlags === false) {
    // returns incorrect reveal array to minesweeper
    const incorrectTiles = flagsInCorrect(tiles, tileState, flagState);
    incorrectTiles.forEach((tile) => reveal.push(tile));
    return incorrectTiles;
  }
  // returns cell array to minesweeper for not enough flags around cell
  const belowTile = flagsBelowTile(tiles, tileState, flagState);
  belowTile.forEach((tile) => reveal.push(tile));
  return reveal;
}

function chordingTiles(currentCell, width, height, grid, flagState) {
  const aboveLeft = currentCell - width - 1;
  const above = currentCell - width;
  const aboveRight = currentCell - width + 1;
  const left = currentCell - 1;
  const right = currentCell + 1;
  const belowLeft = currentCell + width - 1;
  const below = currentCell + width;
  const belowRight = currentCell + width + 1;
  const totalTiles = width * height;
  const chordingGrid = [];

  if (nearTileChecks.isAboveLeft({ currentCell, width, height, totalTiles })) {
    chordingGrid.push(tileCheck(grid, flagState, aboveLeft));
  }
  if (nearTileChecks.isAbove({ currentCell, width, height, totalTiles })) {
    chordingGrid.push(tileCheck(grid, flagState, above));
  }
  if (nearTileChecks.isAboveRight({ currentCell, width, height, totalTiles })) {
    chordingGrid.push(tileCheck(grid, flagState, aboveRight));
  }
  if (nearTileChecks.isLeft({ currentCell, width, height, totalTiles })) {
    chordingGrid.push(tileCheck(grid, flagState, left));
  }
  if (nearTileChecks.isRight({ currentCell, width, height, totalTiles })) {
    chordingGrid.push(tileCheck(grid, flagState, right));
  }
  if (nearTileChecks.isBelowLeft({ currentCell, width, height, totalTiles })) {
    chordingGrid.push(tileCheck(grid, flagState, belowLeft));
  }
  if (nearTileChecks.isBelow({ currentCell, width, height, totalTiles })) {
    chordingGrid.push(tileCheck(grid, flagState, below));
  }
  if (nearTileChecks.isBelowRight({ currentCell, width, height, totalTiles })) {
    chordingGrid.push(tileCheck(grid, flagState, belowRight));
  }
  return chordingGrid;
}

function tileCheck(grid, flagState, position) {
  const tiles = [];
  //tile value
  tiles.push(grid[position]);
  //tile id
  tiles.push(position);
  if (flagState.includes(position)) {
    // flag id
    tiles.push(position);
  }
  return tiles;
}

function correctFlagsCheck(tiles, grid, tile) {
  let correctFlag = true;
  let flagCount = 0;

  tiles.forEach((tile) => {
    if (tile[2]) {
      flagCount++;
    }
  });

  for (let i = 0; i < tiles.length; i++) {
    if (tiles[i][0] === -1 && correctFlag === true) {
      correctFlag = (tiles[i][2] && grid[tile]) === flagCount;
    }
  }
  if (grid[tile] !== flagCount) {
    correctFlag = null;
  }
  return correctFlag;
}

function flagsCorrect(tiles, tileState) {
  const reveal = [];
  reveal.push("correct");
  for (let i = 0; i < tiles.length; i++) {
    if (!tileState.includes(tiles[i][1]) && tiles[i][0] >= 0) {
      reveal.push(tiles[i][1]);
    }
  }
  return reveal;
}

function flagsInCorrect(tiles, tileState, flagState) {
  const reveal = [];
  reveal.push("!correct");
  for (let i = 0; i < tiles.length; i++) {
    if (!tileState.includes(tiles[i][1]) && !flagState.includes(tiles[i][1])) {
      reveal.push(tiles[i][1]);
    }
  }
  return reveal;
}

function flagsBelowTile(tiles, tileState, flagState) {
  const reveal = [];
  reveal.push("!flags");
  for (let i = 0; i < tiles.length; i++) {
    if (!tileState.includes(tiles[i][1]) && !flagState.includes(tiles[i][1])) {
      reveal.push(tiles[i][1]);
    }
  }
  return reveal;
}

function chordingCellReveal(
  width,
  height,
  grid,
  tile,
  tileState,
  chordingCells
) {
  const reveal = chordingCells;
  const revealTiles = [];
  reveal.forEach((index) => {
    if (grid[index] === 0) {
      cellReveal(width, height, grid, tile, tileState).forEach((tile) => {
        revealTiles.push(tile);
      });
    }
  });
  revealTiles.forEach((index) => {
    if (!tileState.includes(index) && !reveal.includes(index)) {
      reveal.push(index);
    }
  });
  return reveal;
}
export { chording };
