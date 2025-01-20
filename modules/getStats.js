import throwDie from "./throwDice.js";

function getStats(n) {
  const statsObj = new Map();

  for (let i = 0; i < n; i++) {
    const die1 = throwDie();
    const die2 = throwDie();
    const total = die1 + die2;

    if (statsObj.has(total)) {
      const count = statsObj.get(total);
      statsObj.set(total, count + 1);
    } else {
      statsObj.set(total, 1);
    }
  }
  return statsObj;
}

export default getStats;
