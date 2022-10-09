// players are objects that hold a type. Either "human" or "cpu"
// If the type is cpu, then the object also holds functions that tell it how to attack.
// Right now CPUs just make random attacks. They will gain the ability to make "smart attacks" later
// Smart attacks are just the CPU trying to finish off a ship once it hits one. I guess they'll need a memory

import createPlayer from "../src/player";

test("CPUs can make random attacks on the opponent's board.", () => {
  const cpuPlayer = createPlayer("CPU");
  const moves = [];
  for (let i = 0; i < 100; i++) {
    moves.push(cpuPlayer.randomAttack());
  }
  const noRepeats = new Set(moves);
  expect(moves.length).not.toBe(0);
  expect(moves.length).toBe(noRepeats.size);
});
