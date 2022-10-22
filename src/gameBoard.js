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

  const createHorizontalShipIndices = (index, length) => {
    const arr = [];
    for (let i = 0; i < length; i++) {
      arr.push(index + i);
    }
    return arr;
  };

  const createVerticalShipIndices = (index, length) => {
    const arr = [];
    for (let i = 0; i < length; i++) {
      arr.push(index + i * 10);
    }
    return arr;
  };

  // helper function that checks to see if a ship can legally be placed at a spot
  // Rules are a ship can't hang off the board or overlap other ships.
  const checkEmptyOrSameShip = (ship, index) => {
    const shipObj = shipData[index]?.ship;
    return shipData[index] === undefined || ship === shipObj;
  };

  const checkHorizontal = (testArr, index, length, ship = null) => {
    return (
      testArr.every((tile) => checkEmptyOrSameShip(ship, tile)) &&
      Math.floor(index / 10) === Math.floor((index + length - 1) / 10)
    );
  };

  const checkVertical = (testArr, index, length, ship = null) => {
    return (
      testArr.every((tile) => checkEmptyOrSameShip(ship, tile)) &&
      index + (length - 1) * 10 <= 99
    );
  };

  const createShipIndices = (index, length, alignment) => {
    if (alignment === "horizontal") {
      return createHorizontalShipIndices(index, length);
    } else if (alignment === "vertical") {
      return createVerticalShipIndices(index, length);
    }
  };

  const validateShipTile = (testArr, index, length, alignment, ship = null) => {
    if (alignment === "horizontal") {
      return checkHorizontal(testArr, index, length, ship);
    } else if (alignment === "vertical") {
      return checkVertical(testArr, index, length, ship);
    }
  };

  const placeShip = (shipFn, length, indices, alignment) => {
    const ship = shipFn(length);
    const shipInfo = { alignment, indices, ship };
    addShipData(indices, shipInfo);
    ships.push(ship);
    return true;
  };

  const editShip = (shipObj, newIndices, newAlignment) => {
    const oldIndices = shipObj.indices;
    for (const key of oldIndices) {
      delete shipData[key];
    }
    shipObj.indices = newIndices;
    shipObj.alignment = newAlignment;
    addShipData(newIndices, shipObj);
  };

  const swapShipAlign = (shipObj) => {
    const newAlign =
      shipObj.alignment === "horizontal" ? "vertical" : "horizontal";
    const shipBow = shipObj.indices[0];
    const { ship } = shipObj;
    const { length } = ship;
    const indices = createShipIndices(shipBow, length, newAlign);
    if (!validateShipTile(indices, shipBow, length, newAlign, ship)) {
      return false;
    }
    editShip(shipObj, indices, newAlign);
    return true;
  };

  const moveShip = (shipObj, newIndex) => {
    const align = shipObj.alignment;
    const length = shipObj.ship.length;
    const indices = createShipIndices(newIndex, length, align);
    if (!validateShipTile(indices, newIndex, length, align, shipObj.ship)) {
      return false;
    }
    editShip(shipObj, indices, align);
    return true;
  };

  const receiveAttack = (index) => {
    const attackedLocations = Object.keys(attackMap);
    if (attackedLocations.includes(index)) {
      return;
    }
    const isThereAShip = shipData[index];
    if (!isThereAShip) {
      attackMap[index] = false;
      return false;
    }
    isThereAShip.ship.hit(index);
    attackMap[index] = true;
  };

  const allShipsSunk = () => ships.every((ship) => ship.isSunk());

  const removeAllShips = () => {
    ships.splice(0);
    const shipKeys = Object.keys(shipData);
    for (const key of shipKeys) {
      delete shipData[key];
    }
  };

  const randomize = (arr, shipFn) => {
    removeAllShips();
    const tiles = Array.from(Array(100).keys());
    const possibleAlign = ["horizontal", "vertical"];

    for (const shipLength of arr) {
      const chosenAlign =
        possibleAlign[Math.floor(Math.random() * possibleAlign.length)];
      const validationFn =
        chosenAlign === "horizontal" ? checkHorizontal : checkVertical;
      const availableTiles = tiles.filter((space) => {
        const shipPanels =
          chosenAlign === "horizontal"
            ? createHorizontalShipIndices(space, shipLength)
            : createVerticalShipIndices(space, shipLength);
        return validationFn(shipPanels, space, shipLength);
      });
      const randomTile =
        availableTiles[Math.floor(Math.random() * availableTiles.length)];
      const shipIndices = createShipIndices(
        randomTile,
        shipLength,
        chosenAlign
      );
      placeShip(shipFn, shipLength, shipIndices, chosenAlign);
    }
  };

  return {
    getShipData,
    receiveAttack,
    attackMap,
    swapShipAlign,
    moveShip,
    allShipsSunk,
    randomize
  };
}

export default createGameBoard;
