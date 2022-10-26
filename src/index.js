import "./style.scss";
import { renderGameBoard, renderShips, draggableShips } from "./DOMMethods";
import createShip from "./ships";
import createGameBoard from "./gameBoard";
import initGameLoop from "./gameLoop";
import createPlayer from "./player";

const gameModule = initGameLoop(createGameBoard, createShip, createPlayer);
gameModule.setupBoards();

function renderPreview() {
  const previewGrid = document.querySelector(".player-preview-grid");
  const gameBoard = gameModule.p1Board;
  renderGameBoard(previewGrid, gameBoard);
  renderShips(previewGrid, gameBoard);
  draggableShips();
  addDragEventToShips();
  addClickEventToShips();
}

function renderGameBoards() {
  const p1BoardDiv = document.querySelector(".player1-board");
  const p2BoardDiv = document.querySelector(".player2-board");
  const { p1Board, p2Board } = gameModule;
  renderGameBoard(p1BoardDiv, p1Board);
  renderShips(p1BoardDiv, p1Board);
  renderGameBoard(p2BoardDiv, p2Board);
}

function handleTileClick(e) {
  const { index } = e.target.dataset;
  const enemyAttackMap = gameModule.p2Board.attackMap;
  const attackedLocations = Object.keys(enemyAttackMap);
  if (attackedLocations.includes(index)) {
    return;
  }
  gameModule.takeP1Turn(index);
  if (gameModule.getGameState() !== "game over") {
    gameModule.takeCPUTurn();
  }
  renderByGameState();
}

function addClickEventToTiles() {
  const enemyTiles = document.querySelectorAll(".player2-board > .game-tile");
  enemyTiles.forEach((tile) => {
    tile.addEventListener("click", handleTileClick);
  });
}

function addDragEventToShips() {
  const ships = document.querySelectorAll(".ships");
  ships.forEach((ship) => {
    ship.addEventListener("dragstart", handleDragAndDrop);
  });
}

function addClickEventToShips() {
  const ships = document.querySelectorAll(".ships");
  ships.forEach((ship) => {
    ship.addEventListener("click", handleShipClick);
  });
}

function displayWinner() {
  const victoryDiv = document.querySelector(".game-over-msg");
  const winner = gameModule.getWinner();
  victoryDiv.textContent = `${winner} has sunken all enemy battleships and won the game!`;
}

function renderByGameState() {
  const gameState = gameModule.getGameState();
  const setupContainer = document.querySelector(".game-setup-container");
  const gameContainer = document.querySelector(".game-ui-container");
  const gameOverContainer = document.querySelector(".game-over-container");
  switch (gameState) {
    case "setup":
      setupContainer.classList.remove("hide");
      gameContainer.classList.add("hide");
      gameOverContainer.classList.add("hide");
      renderPreview();
      break;
    case "playing":
      setupContainer.classList.add("hide");
      gameContainer.classList.remove("hide");
      gameOverContainer.classList.add("hide");
      renderGameBoards();
      addClickEventToTiles();
      break;
    case "game over":
      setupContainer.classList.add("hide");
      gameContainer.classList.remove("hide");
      gameOverContainer.classList.remove("hide");
      renderGameBoards();
      displayWinner();
      break;
  }
}

function handleStartClick() {
  gameModule.startGame();
  renderByGameState();
}

const startBtn = document.querySelector(".begin-game-btn");
startBtn.addEventListener("click", handleStartClick);

function handleRandomizeBtnClick() {
  gameModule.setupBoards();
  renderPreview();
}

const randomBtn = document.querySelector(".randomize-btn");
randomBtn.addEventListener("click", handleRandomizeBtnClick);

function restartGame() {
  gameModule.resetGame();
  renderByGameState();
}

const restartBtn = document.querySelector(".restart-btn");
restartBtn.addEventListener("click", restartGame);

window.addEventListener("load", renderByGameState);

function handleShipClick(e) {
  const board = gameModule.p1Board;
  const shipInfo = gameModule.p1Board.getShipData();
  const index = e.target.dataset.shipIndex;
  const shipObj = shipInfo[index];
  board.swapShipAlign(shipObj);
  renderPreview(gameModule);
}

function handleDragAndDrop(e) {
  const { clientX: oldX, clientY: oldY } = e;
  const gameBoard = gameModule.p1Board;
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
    renderPreview();
  };

  e.target.addEventListener("dragend", dragEnd, { once: true });
}
