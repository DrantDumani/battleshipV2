import "./style.scss";
import { renderGameBoard, renderShips } from "./DOMMethods";
import createShip from "./ships";
import createGameBoard from "./gameBoard";

const container = document.querySelector(".player1-board");
const testBoard = createGameBoard();
// testBoard.randomize([5, 4, 3, 3, 2], createShip);
testBoard.placeShip(createShip, 3, 10, "vertical");

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

function handleDragAndDrop(e) {
  const { clientX: oldX, clientY: oldY } = e;
  e.dataTransfer.setData("text/plain", e.target.id);

  const dragEnd = (event) => {
    const ship = event.target;
    const shipRect = ship.getBoundingClientRect();
    const { left, top } = shipRect;
    const newX = left + event.clientX - oldX;
    const newY = top + event.clientY - oldY;
    const newShipIndex = document.elementFromPoint(newX, newY).dataset.index;
    if (!newShipIndex) {
      return false;
      // handle user feedback on them being unable to drag the ship off the board.
      // otherwise, pass it to the function and see if the index is valid
    }
  };

  e.target.addEventListener("dragend", dragEnd, { once: true });
}

const ships = document.querySelectorAll(".ships");
ships.forEach((ship) => {
  ship.addEventListener("dragstart", handleDragAndDrop);
});
