var isSubsequence = function(s, t) {
    return _isSubsequence(0, 0, s, t);
}

function _isSubsequence(indexS, indexT, s, t) {
    if (indexS === s.length) return true;
    if (indexT === t.length) return false;

    if (s[indexS] !== t[indexT]) {
        return _isSubsequence(indexS, indexT + 1, s, t);
    }

    return _isSubsequence(indexS + 1, indexT + 1, s, t);
}

console.log(isSubsequence("ace", "abcde"));
console.log(isSubsequence("ace", "abcdeg"));
console.log(isSubsequence("aec", "abcde"));
console.log(isSubsequence("abc", "ahbgdc"));
console.log(isSubsequence("axc", "ahbgdc"));