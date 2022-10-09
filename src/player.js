function createPlayer(type) {
  if (type === "CPU") {
    const availableMoves = Array.from(Array(100).keys());

    const randomAttack = () => {
      const index = Math.floor(Math.random() * availableMoves.length);
      const move = availableMoves[index];
      availableMoves.splice(index, 1);
      return move;
    };

    return { randomAttack, type };
  }
  return { type };
}

export default createPlayer;
