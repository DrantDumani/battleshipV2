import createGameBoard from "../src/gameBoard";
import createPlayer from "../src/player";
import createShip from "../src/ships";
import initGameLoop from "../src/gameLoop";

test("Calling the start function changes the game's state from 'setup' to 'playing'", () => {
  const gameObj = initGameLoop(createGameBoard, createShip, createPlayer);
  expect(gameObj.getGameState()).toBe("setup");
  gameObj.startGame();
  expect(gameObj.getGameState()).toBe("playing");
});

test("Players can make attacks on their opponent's board", () => {
  const gameObj = initGameLoop(createGameBoard, createShip, createPlayer);
  const p2Board = gameObj.p2Board;
  const boardSpy = jest.spyOn(p2Board, "receiveAttack");
  const index = 4;
  gameObj.takeP1Turn(index);
  expect(boardSpy).toBeCalledWith(index);
});
