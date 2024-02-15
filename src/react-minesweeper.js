export function tileState(length) {
  const tileStateArray = [];
  for (let i = 0; i < length; i++) {
    tileStateArray.push(false);
  }
  //console.log(tileStateArray);
  return tileStateArray;
}
