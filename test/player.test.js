// okay, let's simplify the explanation on how the smarter AI is going to work
// Because I didn't consider what might happen if the CPU hits another ship while it's looking for a ship already
// The CPU won't track last attacks. Instead, it'll look at the board's attack map and see if any ships have been hit.
// If they have and they AREN'T sunk, then it's going to try to "find" the rest of the ship.

import createPlayer from "../src/player";
import createGameBoard from "../src/gameBoard";
import createShip from "../src/ships";

test("CPUs can make random attacks on the opponent's board and will not repeat moves.", () => {
  const cpuPlayer = createPlayer("CPU");
  const testBoard = createGameBoard();
  // const shipInfo = testBoard.getShipData();
  const moves = [];
  for (let i = 0; i < 100; i++) {
    moves.push(cpuPlayer.attack(testBoard));
  }
  const noRepeats = new Set(moves);
  expect(moves.length).not.toBe(0);
  expect(moves.length).toBe(noRepeats.size);
});

test("CPUs can refresh their attack array", () => {
  const cpuPlayer = createPlayer("CPU");
  const testBoard = createGameBoard();
  // const shipInfo = testBoard.getShipData();
  for (let i = 0; i < 100; i++) {
    cpuPlayer.attack(testBoard);
  }
  expect(cpuPlayer.attack(testBoard)).toBeUndefined();
  cpuPlayer.resetCPUAttacks();
  expect(cpuPlayer.attack(testBoard)).toBeDefined();
});

test("CPUs will attempt to sink ships they've already hit", () => {
  const testCPU = createPlayer("CPU");
  const testBoard = createGameBoard();
  testBoard.randomize([5], createShip);
  const shipInfo = testBoard.getShipData();
  const shipLocations = Object.keys(shipInfo);
  const shipIndex = Number(shipLocations[0]);
  const { indices } = shipInfo[shipIndex];
  const { ship } = shipInfo[shipIndex];

  let successfulAttack;
  while (!indices.includes(successfulAttack)) {
    successfulAttack = testCPU.attack(testBoard);
    testBoard.receiveAttack(successfulAttack);
  }

  // A ship of length five should be sunk by the CPU in a maximum of 7 turns once it's been found.
  for (let turn = 0; turn < 7; turn++) {
    testBoard.receiveAttack(testCPU.attack(testBoard));
  }
  expect(ship.isSunk()).toBe(true);
});
