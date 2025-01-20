function makeBarFromNum(n) {
  let bar = "";
  while (n > 0) {
    bar += "#";
    n -= 10;
  }
  return bar;
}

export default makeBarFromNum;
