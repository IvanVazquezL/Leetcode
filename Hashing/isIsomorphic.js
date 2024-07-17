var isIsomorphic = function(s, t) {
    if (s.length !== t.length) return false;
    const sArray = s.split("");
    const sSet = new Set(sArray);
    const tArray = t.split("");
    const tSet = new Set(tArray);

    if (sSet.size !== tSet.size) return false;

    const map = new Map();
    const sArray2 = Array.from(sSet);
    const tArray2 = Array.from(tSet);

    for (let i = 0; i < sArray2.length; i++) {
        map.set(sArray2[i], tArray2[i]);
    }

    let newString = "";

    for (const character of s) {
        newString += map.get(character);
    }

    return newString === t;
};

var isIsomorphicII = function(s, t) {
    if (s.length !== t.length) return false;

    const mapST = new Map();
    const mapTS = new Map();

    for (let i = 0; i < s.length; i++) {
        const charS = s[i];
        const charT = t[i];

        if ((mapST.has(charS) && mapST.get(charS) !== charT) ||
            (mapTS.has(charT) && mapTS.get(charT) !== charS)) {
            return false;
        }

        mapST.set(charS, charT);
        mapTS.set(charT, charS);
    }

    return true;
};


console.log(isIsomorphic("egg", "add"));
console.log(isIsomorphic("foo", "bar"));
console.log(isIsomorphic("paper", "title"));
console.log(isIsomorphic("bbbaaaba", "aaabbbba"));