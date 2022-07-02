function rotateMatrix(m) {
  for (let l = 0; l < m.length / 2; l++) {
    let subLength = m.length - 2 * l - 1;

    for (let i = 0; i < subLength; i++) {
      let min = l;
      let max = m.length - 1 - l;
      let first = m[min][min + i];
      m[min][min + i] = m[max - i][min];
      m[max - i][min] = m[max][max - i];
      m[max][max - i] = m[min + i][max];
      m[min + i][max] = first;
    }
  }
  return m;
}

console.log(
  rotateMatrix([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16],
  ])
);
console.log(
  rotateMatrix([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
console.log(
  rotateMatrix([
    [1, 2],
    [3, 4],
  ])
);
