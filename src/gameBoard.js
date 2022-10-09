function createGameBoard() {
  const shipData = {};
  const attackMap = {};
  const ships = [];

  const getShipData = () => {
    return shipData;
  };

  const addShipData = (arr, obj) => {
    for (const index of arr) {
      shipData[index] = obj;
    }
  };

  const placeShip = (shipFn, length, index, alignment) => {
    const ship = shipFn(length);
    const indices = [];
    if (alignment === "horizontal") {
      for (let i = 0; i < length; i++) {
        indices.push(index + i);
      }
    } else if (alignment === "vertical") {
      for (let i = 0; i < length; i++) {
        indices.push(index + i * 10);
      }
    }
    const shipInfo = { alignment, indices, ship };
    addShipData(indices, shipInfo);
    ships.push(ship);
    return true;
  };

  const receiveAttack = (index) => {
    const isThereAShip = shipData[index];
    if (!isThereAShip) {
      attackMap[index] = false;
      return false;
    }
    isThereAShip.ship.hit(index);
    attackMap[index] = true;
  };

  const allShipsSunk = () => ships.every((ship) => ship.isSunk());

  return { placeShip, getShipData, receiveAttack, attackMap, allShipsSunk };
}

export default createGameBoard;
