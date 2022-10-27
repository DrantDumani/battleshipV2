function renderGameBoard(container, gameBoardInfo) {
  container.replaceChildren();
  const { attackMap } = gameBoardInfo;
  const shipInfo = gameBoardInfo.getShipData();
  let ship = null;
  for (let i = 0; i < 100; i++) {
    const attackStatus = attackMap[i];
    const tile = document.createElement("div");
    tile.classList.add("game-tile");
    tile.dataset.index = i;
    switch (attackStatus) {
      case undefined:
        tile.classList.add("blank-tile");
        break;
      case false:
        tile.classList.add("missed-attack");
        break;
      case true:
        ship = shipInfo[i].ship;
        if (ship.isSunk()) {
          tile.classList.add("sunken-ship");
        } else {
          tile.classList.add("hit-ship");
        }
        break;
    }
    container.append(tile);
  }
}

function removeShips() {
  const ships = document.querySelectorAll(".ships");
  ships.forEach((ship) => {
    ship.remove();
  });
}

function renderShips(container, gameBoardInfo) {
  removeShips();
  const tileList = container.querySelectorAll(".game-tile");
  const shipData = gameBoardInfo.getShipData();
  let shipLocations = Object.keys(shipData);

  while (shipLocations.length > 0) {
    const shipObj = shipData[shipLocations[0]];
    const { indices, alignment } = shipObj;
    const { length } = shipObj.ship;
    const shipDiv = document.createElement("div");
    shipDiv.classList.add("ships");

    shipDiv.dataset.shipIndex = shipLocations[0];
    const attachedTile = tileList[shipLocations[0]];
    const rect = attachedTile.getBoundingClientRect();
    const { width, height } = rect;
    if (alignment === "vertical") {
      shipDiv.style.height = `${height * length}px`;
      shipDiv.style.width = `${width}px`;
    } else if (alignment === "horizontal") {
      shipDiv.style.height = `${height}px`;
      shipDiv.style.width = `${width * length}px`;
    }
    attachedTile.append(shipDiv);
    shipLocations = shipLocations.filter(
      (index) => !indices.includes(Number(index))
    );
  }
}

function draggableShips() {
  const ships = document.querySelectorAll(".ships");
  ships.forEach((ship) => {
    ship.draggable = true;
  });
}

export { renderGameBoard, renderShips, draggableShips };
