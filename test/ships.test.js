// Ships should NOT contain positions when not placed on the board
// Ships should just include their length, a "hit" function, and an "isSunk" function
// Ships check to see if they sunk if the number of times they got hit

import createShip from "../src/ships";

test("Ship with a length of 3 will only sink when its hit 3 times", () => {
  const testShip = createShip(3);
  expect(testShip.isSunk()).toBe(false);
  testShip.hit();
  expect(testShip.isSunk()).toBe(false);
  testShip.hit();
  expect(testShip.isSunk()).toBe(false);
  testShip.hit();
  expect(testShip.isSunk()).toBe(true);
});
