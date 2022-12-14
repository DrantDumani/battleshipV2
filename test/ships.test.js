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
