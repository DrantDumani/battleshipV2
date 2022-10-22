// the game loop is supposed to create and return an object.
// It has a state, which can either be 'setup', 'playing' or 'game over'
// From setup, players can begin the game. When a player's ships have all sunk, the game is over

import createGameBoard from "../src/gameBoard";
import createPlayer from "../src/player";
import createShip from "../src/ships";
import initGameLoop from "../src/gameLoop";

// the game object contains two players with their own boards. Each player makes a move on the enemy board
// I guess it would like kind of like this:
// p1 makes the first turn
// game is CPU played only. Screw that noise

// gameState = 'setup'
// getGameState = () => gameState
// switchState(): cycle through the three game states
// playerObj = {name: p1}
// p2Obj = {name: p2}
// taketurn
//  p1 attacks p2's board
//  attack is a miss. p2 makes a turn
//      OR
//  attack is a hit. game checks to see if its over. if it is, p1 wins. if not, p2 makes a turn
//      p2, the computer, makes a turn. game checks to see if its over

// instead of running redundant tests, try running tests that exclusively work for the gameLoop

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
