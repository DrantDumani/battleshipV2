import createPlayer from "../src/player";
import createGameBoard from "../src/gameBoard";
import createShip from "../src/ships";

test("CPUs can make random attacks on the opponent's board and will not repeat moves.", () => {
  const cpuPlayer = createPlayer("CPU");
  const testBoard = createGameBoard();
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

  for (let turn = 0; turn < 7; turn++) {
    testBoard.receiveAttack(testCPU.attack(testBoard));
  }
  expect(ship.isSunk()).toBe(true);
});
