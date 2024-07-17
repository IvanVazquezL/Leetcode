var wordPattern = function(pattern, s) {
    const words = s.split(" ");

    if (pattern.length !== words.length) return false;

    const mapPatternWord = new Map();
    const mapWordPattern = new Map();

    for (let i = 0; i < words.length; i++) {
        const charPattern = pattern[i];
        const word = words[i];

        if ((mapPatternWord.has(charPattern) && mapPatternWord.get(charPattern) !== word) ||
            (mapWordPattern.has(word) && mapWordPattern.get(word) !== charPattern)) {
            return false;
        }

        mapPatternWord.set(charPattern, word);
        mapWordPattern.set(word, charPattern);
    }

    return true;
};

console.log(wordPattern("abba", "dog cat cat dog"));
console.log(wordPattern("abba", "dog cat cat fish"));
console.log(wordPattern("aaaa", "dog cat cat dog"));
