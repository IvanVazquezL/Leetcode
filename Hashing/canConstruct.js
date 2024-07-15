var canConstruct = function(ransomNote, magazine) {
    const words = new Map();

    for (const character of magazine) {
        words.set(character, (words.get(character) || 0) + 1);
    }

    for (const character of ransomNote) {
        let magazineCharacterFrequency = words.get(character);
        
        if (!magazineCharacterFrequency) return false;

        magazineCharacterFrequency -= 1;
        words.set(character, magazineCharacterFrequency);
    }

    return true;
};

console.log(canConstruct("a","b"));
console.log(canConstruct("aa", "ab"));
console.log(canConstruct("aa", "aab"));