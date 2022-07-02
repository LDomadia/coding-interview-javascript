function isUnique(s) {
  var obj = {};
  for (let i = 0; i < s.length; i++) {
    if (!obj[s.charAt(i)]) {
      obj[s.charAt(i)] = 1;
    } else {
      return false;
    }
  }
  return true;
}

function isUniqueWODS(s) {
  s = s.split("").sort().join("");
  for (let i = 1; i < s.length; i++) {
    if (s.charAt(i - 1) === s.charAt(i)) {
      return false;
    }
  }
  return true;
}

console.log(isUnique("abcde"));
console.log(isUnique("abcda"));
console.log(isUnique("ababa"));
console.log(isUnique("12345"));
console.log(isUnique("aaaaa"));
console.log('---------------');
console.log(isUniqueWODS("abcde"));
console.log(isUniqueWODS("abcda"));
console.log(isUniqueWODS("ababa"));
console.log(isUniqueWODS("12345"));
console.log(isUniqueWODS("aaaaa"));
