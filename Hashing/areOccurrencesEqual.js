var areOccurrencesEqual = function(s) {
    const map = new Map();

    for (let i = 0; i < s.length; i++) {
        map.set(s[i], (map.get(s[i]) || 0) + 1);

    }

    const firstFrequency = map.get(s[0]);

    for (const value of map.values()) {
        if (firstFrequency !== value) return false;
    }

    return true;
};

console.log(areOccurrencesEqual("abacbc"));
console.log(areOccurrencesEqual("aaabb"));