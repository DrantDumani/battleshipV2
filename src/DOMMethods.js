// use information from the gameBoard object to render the gameboard
// no ship + panel hasn't been hit = blank panel
// the human / active player can see their ships. So active players only see their ship locations.
// Ships are rendered by different divs anyway. Trying to go the whole drag and drop route.

// DON'T RENDER SHIPS WITH THE FOLLOWING FUNCTION ALONE. Just use it to render the gameboard. SO...
// no ship + no attack = blank panel
// no ship + attack = missed attack
// ship + attack = HIT
// sunken ship = SUNK CLASS
// Every panel will be a div. Forget the buttons

function renderGameBoard(container, gameBoardInfo) {
  container.replaceChildren();
  const { attackMap } = gameBoardInfo;
  for (let i = 0; i < 100; i++) {
    const attackStatus = attackMap[i];
    const tile = document.createElement("div");
    tile.classList.add("game-tile");
    tile.dataset.index = i;
    switch (attackStatus) {
      case undefined:
        // area hasn't been attacked
        tile.classList.add("blank-tile");
        break;
      case false:
        // MISS IN MARIO PARTY
        tile.classList.add("missed-attack");
        break;
      case true:
        // I'M HIT!!!
        tile.classList.add("hit-ship");
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

    shipDiv.draggable = true;
    shipDiv.dataset.shipIndex = shipLocations[0];
    const attachedTile = tileList[shipLocations[0]];
    const rect = attachedTile.getBoundingClientRect();
    const { top, bottom, left, right, width, height } = rect;
    if (alignment === "vertical") {
      shipDiv.style.height = `${height * length}px`;
      shipDiv.style.width = `${width}px`;
    } else if (alignment === "horizontal") {
      shipDiv.style.height = `${height}px`;
      shipDiv.style.width = `${width * length}px`;
    }
    shipDiv.style.top = `${top}px`;
    shipDiv.style.left = `${left}px`;
    shipDiv.style.bottom = `${bottom}px`;
    shipDiv.style.right = `${right}px`;
    document.body.append(shipDiv);
    shipLocations = shipLocations.filter(
      (index) => !indices.includes(Number(index))
    );
  }
}

export { renderGameBoard, renderShips };
