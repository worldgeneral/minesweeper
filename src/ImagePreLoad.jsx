import { useState } from "react";
import { MineSweeper } from "./MineSweeper";

function ImagePreLoad() {
  const images = [
    "/images/Minesweeper0.svg",
    "/images/Minesweeper1.svg",
    "/images/Minesweeper2.svg",
    "/images/Minesweeper3.svg",
    "/images/Minesweeper4.svg",
    "/images/Minesweeper5.svg",
    "/images/Minesweeper6.svg",
    "/images/Minesweeper7.svg",
    "/images/Minesweeper8.svg",
    "/images/MinesweeperBlank.svg",
    "/images/MinesweeperBomb.svg",
    "/images/MinesweeperButton0.svg",
    "/images/MinesweeperButton1.svg",
    "/images/MinesweeperButton2.svg",
    "/images/MinesweeperButton3.svg",
    "/images/MinesweeperClickedBomb.svg",
    "/images/MinesweeperFlag.svg",
    "/images/MinesweeperQuestion.svg",
    "/images/MinesweeperUnopened.svg",
  ];

  return images.map((image) => (
    <img key={image} width={0} height={0} src={image} />
  ));
}

export { ImagePreLoad };
