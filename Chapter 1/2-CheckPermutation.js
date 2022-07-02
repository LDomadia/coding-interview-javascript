function checkPermutation(s1, s2) {
    if (s1.length != s2.length) {
        return false;
    }
    var charObj = {}
    for (let i = 0; i < s1.length; i++) {
        if (!charObj[s1.charAt(i)]) {
            charObj[s1.charAt(i)] = 1;
        }
        else {
            charObj[s1.charAt(i)]++;
        }
    }   

    for (let i = 0; i < s2.length; i++) {
        if (!charObj[s2.charAt(i)]) {
            return false;
        }
        else {
            charObj[s2.charAt(i)]--;
            if (charObj[s2.charAt(i)] < 0) {
                return false;
            }
        }
    }
    return true;
}

console.log(checkPermutation("abcd", "abcd"));
console.log(checkPermutation("abcd", "dcba"));
console.log(checkPermutation("abcd", "acbd"));
console.log(checkPermutation("abcd", "abcde"));
console.log(checkPermutation("abcd", "Abcd"));
console.log(checkPermutation("abcd", "abca"));
console.log(checkPermutation("abca", "abcd"));
