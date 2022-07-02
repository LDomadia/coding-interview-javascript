function stringCompression(s) {
  let newS = "";
  let current = s.charAt(0);
  let count = 1;
  for (let i = 1; i < s.length; i++) {
    if (s.charAt(i) === current) {
      count++;
    } else {
      newS += current + count.toString();
      current = s.charAt(i);
      count = 1;
    }
    if (newS.length >= s.length) {
        return s;
    }
  }
  newS += current + count.toString();
  if (newS.length >= s.length) {
    return s;
  }
  return newS;
}

console.log(stringCompression("aabcccccaaa"));
console.log(stringCompression("abcdefg"));
