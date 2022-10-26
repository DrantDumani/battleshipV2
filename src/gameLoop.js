function initGameLoop(gameBoardFn, shipFn, playerFn) {
  let gameState = "setup";

  const getGameState = () => gameState;
  const startGame = () => {
    gameState = "playing";
  };

  const p1Board = gameBoardFn();
  const p2Board = gameBoardFn();
  const player1 = playerFn("Player 1");
  const player2 = playerFn("CPU");
  let winner = null;

  const getWinner = () => winner;

  const shipLengths = [5, 4, 3, 3, 2];
  const setupBoards = () => {
    p1Board.randomize(shipLengths, shipFn);
    p2Board.randomize(shipLengths, shipFn);
    gameState = "setup";
  };

  const resetBoards = () => {
    p1Board.resetAttackMap();
    p2Board.resetAttackMap();
  };

  const resetCPUAttacks = () => {
    player2.resetCPUAttacks();
  };

  const resetGame = () => {
    resetBoards();
    setupBoards();
    resetCPUAttacks();
  };

  const takeTurn = (plyr, board, index) => {
    board.receiveAttack(index);
    if (board.allShipsSunk()) {
      winner = plyr.type;
      gameState = "game over";
    }
  };

  const takeP1Turn = (index) => {
    takeTurn(player1, p2Board, index);
  };

  const takeCPUTurn = () => {
    const index = player2.attack(p1Board);
    takeTurn(player2, p1Board, index);
  };
  return {
    p1Board,
    p2Board,
    resetGame,
    getGameState,
    startGame,
    getWinner,
    setupBoards,
    takeP1Turn,
    takeCPUTurn
  };
}

export default initGameLoop;
