var checkInclusion = function(s1, s2) {
    if (s1.length > s2.length) return false;

    const mapS1 = new Map();

    for (const s of s1) {
        mapS1.set(s, (mapS1.get(s) || 0) + 1);
    }

    for (let i = 0; i <= s2.length - s1.length; i++) {
        const mapS2 = new Map();

        for (let j = 0; j < s1.length; j++) {
            mapS2.set(s2[i + j], (mapS2.get(s2[i + j]) || 0) + 1);
        }

        if (matches(mapS1, mapS2)) return true;
    }

    return false;
};

function matches(mapS1, mapS2) {
    for (const key of mapS1.keys()) {
        if (mapS1.get(key) - (mapS2.get(key) || -1) !== 0) {
            return false;
        }
    }
    return true;
}

console.log(checkInclusion("ab", "eidbaooo"));
console.log(checkInclusion("ab", "eidboaoo"));
console.log(checkInclusion("adc", "dcda"));
console.log(checkInclusion("hello", "ooolleoooleh"));
console.log(checkInclusion("abc","ccccbbbbaaaa"));