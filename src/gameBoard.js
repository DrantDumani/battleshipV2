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
  // Make sure that this test can be used for swapping ship Alignment
  // Make sure ships don't fail the test by detecting themselves
  // try comparing the ship to the potential ship object inside shipInfo

  // FOR THIS FUNCTION TO WORK, SHIP CAN NEVER BE UNDEFINED
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
      index + length * 10 < 99
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

  // const placeShip = (shipFn, length, index, alignment) => {
  //   const ship = shipFn(length);
  //   let indices = [];
  //   if (alignment === "horizontal") {
  //     indices = createHorizontalShipIndices(index, length);
  //     if (!checkHorizontal(indices, index, length, ship)) {
  //       return false;
  //     }
  //   } else if (alignment === "vertical") {
  //     indices = createVerticalShipIndices(index, length);
  //     if (!checkVertical(indices, index, length, ship)) {
  //       return false;
  //     }
  //   }
  //   const shipInfo = { alignment, indices, ship };
  //   addShipData(indices, shipInfo);
  //   ships.push(ship);
  //   return true;
  // };

  const placeShip = (shipFn, length, indices, alignment) => {
    const ship = shipFn(length);
    // let indices = [];
    // if (alignment === "horizontal") {
    //   indices = createHorizontalShipIndices(index, length);
    //   if (!checkHorizontal(indices, index, length, ship)) {
    //     return false;
    //   }
    // } else if (alignment === "vertical") {
    //   indices = createVerticalShipIndices(index, length);
    //   if (!checkVertical(indices, index, length, ship)) {
    //     return false;
    //   }
    // }
    const shipInfo = { alignment, indices, ship };
    addShipData(indices, shipInfo);
    ships.push(ship);
    return true;
  };

  const editShip = (shipObj, newIndices, newAlignment) => {
    // change ship indices and alignment
    // delete old properties in shipData
    // no need to remove the ships themselves since all you're doing is editing them
    // this function won't need to go through any checks. It's just a secondary function.

    // newAlignment = newAlignment || shipObj.alignment;
    const oldIndices = shipObj.indices;
    for (const key of oldIndices) {
      delete shipData[key];
    }
    shipObj.indices = newIndices;
    shipObj.alignment = newAlignment;
    addShipData(newIndices, shipObj);
  };

  // this one will work by placing a new ship and removing the old one
  // ...which will cause the test to fail. I guess I could just edit the ship
  // which I must do unless I want to change the validation functions
  const swapShipAlign = (shipObj) => {
    const newAlign =
      shipObj.alignment === "horizontal" ? "vertical" : "horizontal";
    const shipBow = shipObj.indices[0];
    const { ship } = shipObj;
    const { length } = ship;
    let indices;
    if (newAlign === "horizontal") {
      indices = createHorizontalShipIndices(shipBow, length);
      if (!checkHorizontal(indices, shipBow, length, ship)) {
        return false;
      }
    } else if (newAlign === "vertical") {
      indices = createVerticalShipIndices(shipBow, length);
      if (!checkVertical(indices, shipBow, length, ship)) {
        return false;
      }
    }

    editShip(shipObj, indices, newAlign);
    // const oldIndices = shipObj.indices;
    // for (const i of oldIndices) {
    //   // shipData[i] = undefined;
    //   delete shipData[i];
    // }
    // shipObj.alignment = newAlign;
    // shipObj.indices = indices;
    // addShipData(indices, shipObj);
    return true;
  };

  const moveShip = (shipObj, newIndex) => {
    const align = shipObj.alignment;
    const length = shipObj.ship.length;
    let indices = [];
    if (align === "horizontal") {
      indices = createHorizontalShipIndices(newIndex, length);
      if (!checkHorizontal(indices, newIndex, length, shipObj)) {
        return false;
      }
    } else if (align === "vertical") {
      indices = createVerticalShipIndices(newIndex, length);
      if (!checkVertical(indices, newIndex, length, shipObj)) {
        return false;
      }
    }
    editShip(shipObj, indices, align);
    return true;
  };

  // might want to edit this to simply return if the human player has already attacked that tile
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
    placeShip,
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
