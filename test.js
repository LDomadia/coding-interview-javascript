function rotLeft(a, d) {
  // Write your code here
  d = d % a.length;
  for (let r = 0; r < d; r++) {
      for (let i = 0; i < a.length - 1; i++) {
          let temp = a[i];
          a[i] = a[i + 1];
          a[i + 1] = temp; 
      }
      console.log(a);
  }
  return a;
}

console.log(rotLeft([1, 2, 3, 4, 5], 4));