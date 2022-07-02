function zeroMatrix(m) {
  let zeroRows = new Set();
  let zeroCols = new Set();
  for (let r = 0; r < m.length; r++) {
    for (let c = 0; c < m[0].length; c++) {
      if (m[r][c] === 0) {
        zeroRows.add(r);
        zeroCols.add(c);
      }
    }
  }

  for (r of zeroRows) {
    for (let c = 0; c < m[0].length; c++) {
      m[r][c] = 0;
    }
  }

  for (c of zeroCols) {
    for (let r = 0; r < m.length; r++) {
      m[r][c] = 0;
    }
  }
  return m;
}

console.log(
  zeroMatrix([
    [1, 2, 3, 4, 5, 0],
    [6, 0, 7, 8, 9, 10],
    [11, 12, 13, 21, 14, 15],
    [16, 0, 17, 18, 19, 20],
  ])
);
