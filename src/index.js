import "./style.scss";
import { renderGameBoard, renderShips } from "./DOMMethods";
import createShip from "./ships";
import createGameBoard from "./gameBoard";

const container = document.querySelector(".player1-board");
const testBoard = createGameBoard();
testBoard.randomize([5, 4, 3, 3, 2], createShip);
// testBoard.placeShip(createShip, 5, 41, "vertical");
// testBoard.placeShip(createShip, 5, 32, "vertical");

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
