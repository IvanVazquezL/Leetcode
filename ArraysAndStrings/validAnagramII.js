function isAnagram(s, t) {
    if (s.length !== t.length) return false;
    const mapS = new Map();

    for (let i = 0; i < s.length; i++) {
        mapS.set(s[i], (mapS.get(s[i]) || 0) + 1);
    }

    for (let i = 0; i < t.length; i++) {
        if (mapS.has(t[i])) {
            if (mapS.get(t[i]) - 1 === 0) {
                mapS.delete(t[i]);
            } else {
                mapS.set(t[i], mapS.get(t[i]) - 1);
            }
        }
    }

    return mapS.size === 0;
};

//console.log(isAnagram("anagram","nagaram"));
//console.log(isAnagram("rat","car"));
console.log(isAnagram("ab","ba"));