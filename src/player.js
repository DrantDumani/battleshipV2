function createPlayer(type) {
  if (type === "CPU") {
    let availableMoves = Array.from(Array(100).keys());

    let targetShip = null;
    let hitTile = null;
    let behavior = "random";

    const resetCPUAttacks = () => {
      availableMoves = Array.from(Array(100).keys());
    };

    const attack = (gameBoard) => {
      let move;
      switch (behavior) {
        case "random":
          move = randomAttack(gameBoard);
          break;
        case "findAlignment":
          move = adjacentAttack(hitTile, gameBoard);
          break;
        case "sinkShip":
          move = sinkShip(gameBoard);
          break;
      }
      console.log(move, targetShip);
      return move;
    };

    const noRepeats = (num) => availableMoves.includes(num);
    const addValidHorizontalRight = (arr, num) => {
      if (Math.floor(num / 10) === Math.floor((num + 1) / 10)) {
        arr.push(num + 1);
      }
    };

    const addValidHorizontalLeft = (arr, num) => {
      if (Math.floor(num / 10) === Math.floor((num - 1) / 10)) {
        arr.push(num - 1);
      }
    };

    const addValidVerticalUp = (arr, num) => {
      if (num - 10 >= 0) {
        arr.push(num - 10);
      }
    };

    const addValidVerticalDown = (arr, num) => {
      if (num + 10 <= 99) {
        arr.push(num + 10);
      }
    };

    const randomAttack = (gameBoard) => {
      const { attackMap } = gameBoard;
      const shipInfo = gameBoard.getShipData();

      for (const key of Object.keys(shipInfo)) {
        if (attackMap[key] && !shipInfo[key].ship.isSunk()) {
          hitTile = key;
          targetShip = shipInfo[key];
          behavior = "findAlignment";
          return adjacentAttack(hitTile, gameBoard);
        }
      }

      const index = Math.floor(Math.random() * availableMoves.length);
      const move = availableMoves[index];
      availableMoves.splice(index, 1);

      if (shipInfo[move] && !shipInfo[move].ship.isSunk()) {
        behavior = "findAlignment";
        hitTile = move;
        targetShip = shipInfo[move];
      }
      return move;
    };

    const adjacentAttack = (tile, gameBoard) => {
      const shipInfo = gameBoard.getShipData();
      const adjHorTiles = [];
      const adjVerTiles = [];
      addValidHorizontalLeft(adjHorTiles, tile);
      addValidHorizontalRight(adjHorTiles, tile);
      addValidVerticalUp(adjVerTiles, tile);
      addValidVerticalDown(adjVerTiles, tile);

      const validTiles = adjHorTiles
        .concat(adjVerTiles)
        .filter((num) => noRepeats(num));

      const adjAttack =
        validTiles[Math.floor(Math.random() * validTiles.length)];
      availableMoves.splice(availableMoves.indexOf(adjAttack), 1);

      if (shipInfo[adjAttack] === targetShip) {
        behavior = "sinkShip";
      }
      return adjAttack;
    };

    const sinkShip = (gameBoard) => {
      if (targetShip.ship.isSunk()) {
        return randomAttack(gameBoard);
      }

      const locations = [];
      const { indices, alignment } = targetShip;
      const addTileBeforeFn =
        alignment === "horizontal"
          ? addValidHorizontalLeft
          : addValidVerticalUp;
      const addTileAfterFn =
        alignment === "horizontal"
          ? addValidHorizontalRight
          : addValidVerticalDown;
      const { attackMap } = gameBoard;
      for (const index of indices) {
        if (attackMap[index]) {
          addTileBeforeFn(locations, index);
          addTileAfterFn(locations, index);
        }
      }

      const validAttacks = locations.filter((num) => noRepeats(num));
      const attack =
        validAttacks[Math.floor(Math.random() * validAttacks.length)];
      // availableMoves.splice(attack, 1);
      availableMoves.splice(availableMoves.indexOf(attack), 1);
      console.log(availableMoves);
      return attack;
    };

    return { attack, type, resetCPUAttacks };
  }
  return { type };
}

export default createPlayer;
