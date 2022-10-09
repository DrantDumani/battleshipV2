import "./style.scss";
import { renderGameBoard, renderShips } from "./DOMMethods";
import createShip from "./ships";
import createGameBoard from "./gameBoard";

// console.log(gameTileDimensions);

const container = document.querySelector(".player1-board");
const testBoard = createGameBoard();
testBoard.placeShip(createShip, 5, 10, "vertical");

renderGameBoard(container, testBoard);
renderShips(container, testBoard);

document.body.addEventListener("click", (e) => {
  if (e.target.classList.contains("game-tile")) {
    const tile = e.target;
    const index = tile.dataset.index;
    testBoard.receiveAttack(index);
    renderGameBoard(container, testBoard);
  }
});
