var closeStrings = function(word1, word2) {
    if (word1.length !== word2.length) return false;

    const word1Sorted = word1.split("").sort().join("");
    const word2Sorted = word2.split("").sort().join("");

    if (word1Sorted === word2Sorted) return true;

    const mapWord1 = new Map();
    const mapWord2 = new Map();

    for (let i = 0; i < word1.length; i++) {
        mapWord1.set(word1[i], (mapWord1.get(word1[i]) || 0) + 1);
        mapWord2.set(word2[i], (mapWord2.get(word2[i]) || 0) + 1);
    }

    const word1Array = [];
    const word2Array = [];

    for (const [key, value] of mapWord1) {
        word1Array.push(value);
        word2Array.push(mapWord2.get(key));
    }

    return word1Array.sort().join(",") === word2Array.sort().join(",");
};

console.log(closeStrings("abbzccca","babzzczc"));
console.log(closeStrings("cabbba", "abbccc"));
console.log(closeStrings("aabbb", "bbaaa"));
console.log(closeStrings("aab","bba"));
console.log(closeStrings("abc", "bca"));
console.log(closeStrings("aabbcc", "ccbbaa"));
console.log(closeStrings("a", "aa"));
console.log(closeStrings("xxyyzz","yyxxzz"));
console.log(closeStrings("aaa","aaa"));
console.log(closeStrings("aabbcc","abcabc"));
console.log(closeStrings("abcdef","fedcba"));
console.log(closeStrings("abcde", "edcba"));





