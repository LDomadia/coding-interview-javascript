function isOneAway(s1, s2) {
  if (Math.abs(s1.length - s2.length) > 1) {
    return false;
  }
  if (s1.length < s2.length) {
    let temp = s1;
    s1 = s2;
    s2 = temp;
  }
  let edit = false;
  let i = 0;
  let j = 0;
  while (i < s1.length && j < s2.length) {
    if (s1.charAt(i) !== s2.charAt(j)) {
      if (edit) {
        return false;
      } else {
        edit = true;
        if (s1.length != s2.length) i++;
      }
    }
    i++;
    j++;
  }
  return true;
}

console.log(isOneAway("pale", "ple"));
console.log(isOneAway("pale", "lap"));
console.log(isOneAway("pale", "palse"));
console.log(isOneAway("pale", "pales"));
console.log(isOneAway("hello", "hello"));
console.log(isOneAway("pale", "bale"));
console.log(isOneAway("pale", "aple"));
console.log(isOneAway("pale", "bake"));
