import getStats from "./modules/getStats.js";
import makeBarFromNum from "./modules/makeBarFromNum.js";

function main(n) {
  const result = getStats(n);
  for (let [key, value] of result) {
    const bar = makeBarFromNum(value);
    console.log(`${key}: \t${bar}`);
  }
}

main(2000);
