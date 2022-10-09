function createShip(length) {
  let numOfHits = 0;
  const hit = () => {
    numOfHits += 1;
  };

  const isSunk = () => numOfHits === length;
  return { hit, isSunk, length };
}

export default createShip;
