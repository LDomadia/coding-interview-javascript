function urlify(s) {
  s = s.trim();
  s = s.replaceAll(" ", "%20");
  return s;
}

function urlify(s, len) {
  // too complicated, maybe another day
}

console.log(urlify("Mr John Smith    "));
