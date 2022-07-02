function palindromePermutation(s) {
  let charObj = {};
  s = s.toLowerCase();
  for (let i = 0; i < s.length; i++) {
    if (s.charAt(i).match(/[a-z]/i)) {
      if (!charObj[s.charAt(i)]) {
        charObj[s.charAt(i)] = 1;
      } else {
        charObj[s.charAt(i)]++;
      }
    }
  }

  let isFound = false;
  for (char in charObj) {
    if (charObj[char] % 2 != 0) {
      if (isFound) {
        return false;
      } else {
        isFound = true;
      }
    }
  }
  return true;
}

console.log(palindromePermutation("Tact Coa"));
console.log(palindromePermutation("Tact Cod"));
