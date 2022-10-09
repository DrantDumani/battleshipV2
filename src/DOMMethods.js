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

export { renderGameBoard };
