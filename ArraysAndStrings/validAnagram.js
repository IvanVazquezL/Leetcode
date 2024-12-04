function isAnagram(s, t) {
    if (s.length !== t.length) return false;

    const mapS = new Map();
    const mapT = new Map();

    for (let i = 0; i < s.length; i++) {
        mapS.set(s[i], (mapS.get(s[i]) || 0) + 1);
    }

    for (let i = 0; i < t.length; i++) {
        mapT.set(t[i], (mapT.get(t[i]) || 0) + 1);
    }

    for (let i = 0; i < s.length; i++) {
        if (mapS.get(s[i]) !== mapT.get(s[i])) return false;
    }

    return true;
};

//console.log(isAnagram("anagram","nagaram"));
console.log(isAnagram("rat","car"));