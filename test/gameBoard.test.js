import createShip from "../src/ships";
import createGameBoard from "../src/gameBoard";

test("Gameboard can randomize its ship placements.", () => {
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

test("Gameboard can receive attacks and determine whether or not the attack hits a ship", () => {
  const testBoard = createGameBoard();
  const length = 4;
  testBoard.randomize([length], createShip);
  const shipInfo = testBoard.getShipData();
  const shipIndex = Object.keys(shipInfo)[0];
  const shipObj = testBoard.getShipData()[shipIndex];
  const testShip = shipObj.ship;
  const index = shipObj.indices[0];
  const noShipHere = index + 5;
  const shipSpy = jest.spyOn(testShip, "hit");
  testBoard.receiveAttack(index);
  expect(shipSpy).toBeCalledWith(index);
  testBoard.receiveAttack(noShipHere);
  expect(shipSpy).not.toBeCalledWith(noShipHere);
  expect(testBoard.attackMap).toEqual({ [index]: true, [noShipHere]: false });
});

test("Gameboard can report whether or not all of its ships have been sunk", () => {
  const testBoard = createGameBoard();
  testBoard.randomize([5, 4, 3, 3, 2], createShip);
  expect(testBoard.allShipsSunk()).toBe(false);
  const shipLocations = Object.keys(testBoard.getShipData());
  for (const el of shipLocations) {
    testBoard.receiveAttack(el);
  }
  expect(testBoard.allShipsSunk()).toBe(true);
});

test("Gameboard cannot place ships in a way where ships overlap or hang off the board", () => {
  const testBoard = createGameBoard();
  testBoard.randomize([5, 4, 3, 2, 2], createShip);
  const shipInfo = testBoard.getShipData();
  const shipLocations = Object.keys(shipInfo);
  const noOverLap = [...new Set(shipLocations)];
  const noOffBoard = shipLocations.filter((el) => el < 99 && el > 0);
  expect(shipLocations.length).toBe(noOverLap.length);
  expect(shipLocations.length).toBe(noOffBoard.length);
});

test("Gameboard can swap ship alignment", () => {
  const testBoard = createGameBoard();
  testBoard.randomize([2], createShip);
  const shipInfo = testBoard.getShipData();
  const shipIndex = Object.keys(shipInfo)[0];
  const testShip = shipInfo[shipIndex];
  const shipBow = testShip.indices[0];
  const oldIndices = testShip.indices;
  const oldAlign = testShip.alignment;
  const expectedAlign = oldAlign === "horizontal" ? "vertical" : "horizontal";
  const expectedIndices =
    expectedAlign === "horizontal"
      ? [shipBow, shipBow + 1]
      : [shipBow, shipBow + 10];
  testBoard.swapShipAlign(testShip);
  const noSwapHor = [9, 19, 29, 39, 49, 59, 69, 79, 89, 99];
  if (
    (expectedAlign === "horizontal" && noSwapHor.includes(shipBow)) ||
    (expectedAlign === "vertical" && shipBow > 89)
  ) {
    expect(testShip.alignment).toBe(oldAlign);
    expect(testShip.indices).toEqual(oldIndices);
  } else {
    expect(testShip.alignment).toBe(expectedAlign);
    expect(testShip.indices).toEqual(expectedIndices);
  }
});

test("Gameboard can move already placed ships to valid tiles", () => {
  const testBoard = createGameBoard();
  testBoard.randomize([2], createShip);
  const shipInfo = testBoard.getShipData();
  const shipIndex = Object.keys(shipInfo)[0];
  const ship = shipInfo[shipIndex];
  const shipBow = ship.indices[0];
  const oldIndices = ship.indices;
  const expectedIndices =
    ship.alignment === "horizontal"
      ? [shipBow + 1, shipBow + 2]
      : [shipBow + 1, shipBow + 11];
  const cannotMoveHor = [8, 18, 28, 38, 48, 58, 68, 78, 88, 98];
  const cannotMoveVer = [99];
  testBoard.moveShip(ship, shipBow + 1);
  if (
    (ship.alignment === "horizontal" && cannotMoveHor.includes(shipBow)) ||
    (ship.alignment === "vertical" && cannotMoveVer.includes(shipBow))
  ) {
    expect(ship.indices).toEqual(oldIndices);
  } else {
    expect(ship.indices).toEqual(expectedIndices);
  }
});
