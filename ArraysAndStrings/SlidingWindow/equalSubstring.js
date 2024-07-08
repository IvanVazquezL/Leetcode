function asciiAbsDifference(sCharacter, tCharacter) {
    return Math.abs(sCharacter.charCodeAt(0) - tCharacter.charCodeAt(0));
}

var equalSubstring = function(s, t, maxCost) {
    let left = 0;
    let curr = 0;
    let answer = -Infinity;

    for (let right = 0; right < s.length; right++) {
        curr += asciiAbsDifference(s[right], t[right]);

        if (curr > maxCost) {
            curr -= asciiAbsDifference(s[left], t[left]);
            left++;
        }

        answer = Math.max(answer, right - left + 1);
    }

    return answer;
};

console.log(equalSubstring("abcd", "bcdf", 3));
console.log(equalSubstring("abcd", "cdef", 3));
console.log(equalSubstring("abcd", "acde", 0));

