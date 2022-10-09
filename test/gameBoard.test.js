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
