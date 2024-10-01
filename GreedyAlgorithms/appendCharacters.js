/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var appendCharacters = function(s, t) {
    let sPointer = 0;
    let tPointer = 0;

    while (sPointer < s.length && tPointer < t.length) {
        if (s[sPointer] === t[tPointer]) {
            tPointer++;
        }

        sPointer++;
    }

    return t.slice(tPointer).length;
};