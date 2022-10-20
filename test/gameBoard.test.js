// gameboard can place ships somewhere on themselves by receiving an index.
// gameboards can record an alignment for their ships
// Ship placement depends on alignment
// Gameboards return false if you try to place a ship in an illegal spot (overlapping / off the board)

import createShip from "../src/ships";
import createGameBoard from "../src/gameBoard";

test("Gameboard can place ships somewhere on the board", () => {
  const testBoard = createGameBoard();
  const shipInfo = testBoard.getShipData();
  const key1 = 20;
  const key2 = 45;
  const length1 = 5;
  const length2 = 2;
  expect(shipInfo[key1]).toBeUndefined();
  expect(testBoard.placeShip(createShip, length1, key1, "horizontal")).toBe(
    true
  );
  expect(testBoard.placeShip(createShip, length2, key2, "vertical")).toBe(true);
  const exampleShipData = shipInfo[key1];
  const secondShip = shipInfo[key2];
  expect(exampleShipData.alignment).toBe("horizontal");
  expect(exampleShipData.indices).toEqual([20, 21, 22, 23, 24]);
  expect(secondShip.alignment).toBe("vertical");
  expect(secondShip.indices).toEqual([45, 55]);
});

test("Gameboard can receive attacks and determine whether or not the attack hits a ship", () => {
  const testBoard = createGameBoard();
  testBoard.placeShip(createShip, 3, 10, "vertical");
  const index = 10;
  const testShip = testBoard.getShipData()[index].ship;
  const shipSpy = jest.spyOn(testShip, "hit");
  testBoard.receiveAttack(index);
  expect(shipSpy).toBeCalledWith(10);
  testBoard.receiveAttack(15);
  expect(shipSpy).not.toBeCalledWith(15);
  expect(testBoard.attackMap).toEqual({ 10: true, 15: false });
});

test("Gameboard can report whether or not all of its ships have been sunk", () => {
  const testBoard = createGameBoard();
  testBoard.placeShip(createShip, 2, 10, "vertical");
  testBoard.placeShip(createShip, 3, 5, "horizontal");
  expect(testBoard.allShipsSunk()).toBe(false);
  const shipLocations = Object.keys(testBoard.getShipData());
  for (const el of shipLocations) {
    testBoard.receiveAttack(el);
  }
  expect(testBoard.allShipsSunk()).toBe(true);
});

test("Gameboard cannot place ships in a way where ships overlap or hang off the board", () => {
  const testBoard = createGameBoard();
  const noShip1 = 90;
  const noShip2 = 9;
  const noShip3 = 22;
  expect(testBoard.placeShip(createShip, 4, noShip1, "vertical")).toBe(false);
  expect(testBoard.placeShip(createShip, 2, noShip2, "horizontal")).toBe(false);
  expect(testBoard.placeShip(createShip, 4, 20, "horizontal")).toBe(true);
  expect(testBoard.placeShip(createShip, 3, noShip3, "vertical")).toBe(false);
  const shipInfo = testBoard.getShipData();
  expect(shipInfo[noShip1]).toBeUndefined();
  expect(shipInfo[noShip2]).toBeUndefined();
  expect(shipInfo[noShip3].indices).toEqual([20, 21, 22, 23]);
});

test("Gameboard can swap ship alignment as long as doing so would not result in an illegal placement", () => {
  const testBoard = createGameBoard();
  const shipIndex1 = 15;
  const shipIndex2 = 14;
  const shipIndex3 = 92;
  const shipInfo = testBoard.getShipData();
  testBoard.placeShip(createShip, 4, shipIndex1, "horizontal");
  testBoard.placeShip(createShip, 3, shipIndex2, "vertical");
  testBoard.placeShip(createShip, 2, shipIndex3, "horizontal");
  const swappedShip = shipInfo[shipIndex1];
  const didNotSwap = shipInfo[shipIndex2];
  const didNotSwap2 = shipInfo[shipIndex3];
  testBoard.swapShipAlign(swappedShip);
  expect(testBoard.swapShipAlign(didNotSwap)).toBe(false);
  expect(testBoard.swapShipAlign(didNotSwap2)).toBe(false);
  testBoard.swapShipAlign(didNotSwap);
  expect(swappedShip.alignment).toBe("vertical");
  expect(swappedShip.indices).toEqual([15, 25, 35, 45]);
  expect(didNotSwap.alignment).toBe("vertical");
  expect(didNotSwap.indices).toEqual([14, 24, 34]);
  expect(didNotSwap2.alignment).toBe("horizontal");
  expect(didNotSwap2.indices).toEqual([92, 93]);
});

test("Gameboard can move already placed ships to valid tiles", () => {
  const testBoard = createGameBoard();
  const shipIndex = 1;
  testBoard.placeShip(createShip, 4, shipIndex, "vertical");
  const shipInfo = testBoard.getShipData();
  const ship = shipInfo[1];
  testBoard.moveShip(ship, 10);
  expect(ship.indices).toEqual([10, 20, 30, 40]);
  expect(testBoard.moveShip(ship, 90)).toBe(false);
  expect(ship.indices).toEqual([10, 20, 30, 40]);
});

test("Gameboard can randomize its five ship placements.", () => {
  const testBoard = createGameBoard();
  const lengths = [5, 4, 3, 3, 2];
  testBoard.randomize(lengths, createShip);
  const shipInfo = testBoard.getShipData();
  const shipIndex = Object.keys(shipInfo)[0];
  const ship = shipInfo[shipIndex].ship;
  const shipSpy = jest.spyOn(ship, "hit");
  testBoard.receiveAttack(shipIndex);
  expect(shipSpy).toBeCalled();
});
