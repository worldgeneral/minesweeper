import { nearTileChecks } from "./nearTileChecks";
import { position } from "./cellPositions";

function cellReveal(width, height, grid, tile, tileClickState) {
  const tilesLookAt = [];
  const reveal = [];
  const totalTiles = width * height;
  let currentCell = 0;
  let toLookAtIndex = 0;

  reveal.push(tile);
  tilesLookAt.push(tile);

  while (tilesLookAt.length > toLookAtIndex) {
    currentCell = tilesLookAt[toLookAtIndex];
    const left = position.left({ currentCell, width });
    const right = position.right({ currentCell, width });
    const above = position.above({ currentCell, width });
    const below = position.below({ currentCell, width });
    const belowRight = position.belowRight({ currentCell, width });
    const belowLeft = position.belowLeft({ currentCell, width });
    const aboveLeft = position.aboveLeft({ currentCell, width });
    const aboveRight = position.aboveRight({ currentCell, width });

    if (
      nearTileChecks.isLeft({ currentCell, width, height, totalTiles }) &&
      tileCheck(grid, left, reveal, tileClickState)
    ) {
      reveal.push(left);
      tilesLookAt.push(toLookAt(grid, left));
    }
    if (
      nearTileChecks.isRight({ currentCell, width, height, totalTiles }) &&
      tileCheck(grid, right, reveal, tileClickState)
    ) {
      reveal.push(right);
      tilesLookAt.push(toLookAt(grid, right));
    }
    if (
      nearTileChecks.isAbove({ currentCell, width, height, totalTiles }) &&
      tileCheck(grid, above, reveal, tileClickState)
    ) {
      reveal.push(above);
      tilesLookAt.push(toLookAt(grid, above));
    }
    if (
      nearTileChecks.isBelow({ currentCell, width, height, totalTiles }) &&
      tileCheck(grid, below, reveal, tileClickState)
    ) {
      reveal.push(below);
      tilesLookAt.push(toLookAt(grid, below));
    }
    if (
      nearTileChecks.isBelowLeft({ currentCell, width, height, totalTiles }) &&
      tileCheck(grid, belowLeft, reveal, tileClickState)
    ) {
      reveal.push(belowLeft);
      tilesLookAt.push(toLookAt(grid, belowLeft));
    }
    if (
      nearTileChecks.isBelowRight({ currentCell, width, height, totalTiles }) &&
      tileCheck(grid, belowRight, reveal, tileClickState)
    ) {
      reveal.push(belowRight);
      tilesLookAt.push(toLookAt(grid, belowRight));
    }
    if (
      nearTileChecks.isAboveLeft({ currentCell, width, height, totalTiles }) &&
      tileCheck(grid, aboveLeft, reveal, tileClickState)
    ) {
      reveal.push(aboveLeft);
      tilesLookAt.push(toLookAt(grid, aboveLeft));
    }
    if (
      nearTileChecks.isAboveRight({ currentCell, width, height, totalTiles }) &&
      tileCheck(grid, aboveRight, reveal, tileClickState)
    ) {
      reveal.push(aboveRight);
      tilesLookAt.push(toLookAt(grid, aboveRight));
    }

    toLookAtIndex++;
  }
  return reveal;
}

function tileCheck(grid, position, reveal, tileClickState) {
  if (
    grid[position] >= 0 &&
    reveal.includes(position) === false &&
    tileClickState.includes(position) === false
  ) {
    return true;
  } else {
    return false;
  }
}
function toLookAt(grid, position) {
  if (grid[position] === 0) {
    return position;
  }
}

export { cellReveal };
