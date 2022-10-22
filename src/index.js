import "./style.scss";
import { renderGameBoard, renderShips } from "./DOMMethods";
import createShip from "./ships";
import createGameBoard from "./gameBoard";
import initGameLoop from "./gameLoop";
import createPlayer from "./player";

const gameModule = initGameLoop(createGameBoard, createShip, createPlayer);
gameModule.setupBoards();

function renderPreview(gameObject) {
  const previewGrid = document.querySelector(".player-preview-grid");
  const gameBoard = gameObject.p1Board;
  renderGameBoard(previewGrid, gameBoard);
  renderShips(previewGrid, gameBoard);
  addDragEventToShips();
  addClickEventToShips();
}

function addDragEventToShips() {
  const ships = document.querySelectorAll(".ships");
  ships.forEach((ship) => {
    ship.addEventListener("dragstart", (e) => {
      handleDragAndDrop(e, gameModule);
    });
  });
}

function addClickEventToShips() {
  const ships = document.querySelectorAll(".ships");
  ships.forEach((ship) => {
    ship.addEventListener("click", (e) => {
      handleShipClick(e, gameModule);
    });
  });
}

function renderByGameState(gameObject) {
  console.log(gameObject);
  const gameState = gameObject.getGameState();
  const setupContainer = document.querySelector(".game-setup-container");
  const gameContainer = document.querySelector(".game-ui-container");
  switch (gameState) {
    case "setup":
      setupContainer.classList.remove("hide");
      gameContainer.classList.add("hide");
      renderPreview(gameObject);
      break;
    case "playing":
      setupContainer.classList.add("hide");
      gameContainer.classList.remove("hide");
      break;
  }
}

function handleStartClick(gameObject) {
  gameObject.startGame();
  const gameState = gameObject.getGameState();
  renderByGameState(gameObject);
}

const startBtn = document.querySelector(".begin-game-btn");
startBtn.addEventListener("click", () => {
  handleStartClick(gameModule);
});

function handleRandomizeBtnClick() {
  gameModule.setupBoards();
  renderPreview(gameModule);
}

const randomBtn = document.querySelector(".randomize-btn");
randomBtn.addEventListener("click", handleRandomizeBtnClick);

window.addEventListener("load", () => {
  renderByGameState(gameModule);
});

// const container = document.querySelector(".player1-board");
// const testBoard = createGameBoard();
// testBoard.randomize([5, 4, 3, 3, 2], createShip);

// renderGameBoard(container, testBoard);
// renderShips(container, testBoard);

// document.body.addEventListener("click", (e) => {
//   if (e.target.classList.contains("game-tile")) {
//     const tile = e.target;
//     const index = tile.dataset.index;
//     testBoard.receiveAttack(index);
//     renderGameBoard(container, testBoard);
//   }
// });

function handleShipClick(e, gameObject) {
  const board = gameObject.p1Board;
  const shipInfo = gameObject.p1Board.getShipData();
  const index = e.target.dataset.shipIndex;
  const shipObj = shipInfo[index];
  board.swapShipAlign(shipObj);
  renderPreview(gameModule);
}

function handleDragAndDrop(e, gameObject) {
  const { clientX: oldX, clientY: oldY } = e;
  const gameBoard = gameObject.p1Board;
  const shipData = gameBoard.getShipData();
  const { shipIndex } = e.target.dataset;
  const ship = shipData[shipIndex];

  const dragEnd = (event) => {
    const shipDiv = event.target;
    const shipRect = shipDiv.getBoundingClientRect();
    const { left, top } = shipRect;
    const newX = left + event.clientX - oldX;
    const newY = top + event.clientY - oldY;
    shipDiv.hidden = true;
    const newShipIndex = Number(
      document.elementFromPoint(newX, newY)?.dataset.index
    );
    shipDiv.hidden = false;
    if (isNaN(newShipIndex)) {
      return false;
      // handle user feedback on them being unable to drag the ship off the board.
      // otherwise, pass it to the function and see if the index is valid
    }
    gameBoard.moveShip(ship, newShipIndex);
    renderPreview(gameObject);
  };

  e.target.addEventListener("dragend", dragEnd, { once: true });
}
