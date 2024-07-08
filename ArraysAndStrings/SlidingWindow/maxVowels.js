var maxVowels = function(string, substringLength) {
    let left = 0;
    let answer = -Infinity;
    let vowelCount = 0;

    for (let right = 0; right < string.length; right++) {
        if (isVowel(string[right])) vowelCount++;

        while (right - left + 1 === substringLength) {
            answer = Math.max(answer, vowelCount);
            if (isVowel(string[left])) vowelCount -= 1;
            left++;
        }
    }

    return answer;
};

function isVowel(char) {
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    return vowels.includes(char);
}

console.log(maxVowels("abciiidef", 3));
console.log(maxVowels("aeiou", 2));
console.log(maxVowels("leetcode", 3));
console.log(maxVowels("weallloveyou", 7)); //4