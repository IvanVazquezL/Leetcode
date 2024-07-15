var frequencySort = function(s) {
    const characterToFrequency = new Map();
    const frequencyToCharacter = new Map();
    const frequencies = [];
    let answer = "";

    for (const character of s) {
        characterToFrequency.set(character, (characterToFrequency.get(character) || 0) + 1);
    }

    for (const [key, value] of characterToFrequency) {
        frequencyToCharacter.set(value, [...(frequencyToCharacter.get(value) || []), key]);
        frequencies.push(value);
    }

    frequencies.sort((a,b) => b - a);

    for (const frequency of frequencies) {
        let characterArray = frequencyToCharacter.get(frequency);
        answer += characterArray[0].repeat(frequency);
        frequencyToCharacter.set(frequency, frequencyToCharacter.get(frequency).filter(item => item !== characterArray[0]));
    }

    return answer;
};

console.log(frequencySort("tree"));
console.log(frequencySort("cccaaa"));
console.log(frequencySort("Aabb"));