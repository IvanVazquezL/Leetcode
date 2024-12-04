
function isAnagram(s, t) {
    if (s.length !== t.length) return false;
    return [...s].sort().join() === [...t].sort().join();
};

console.log(isAnagram("anagram","nagaram"));
console.log(isAnagram("rat","car"));
console.log(isAnagram("ab","ba"));