var longestSubstringAtMostKDistinctCharacters = function (s, k) {
    let left = 0;
    const map = new Map();
    let answer = 0;

    for (let right = 0; right < s.length; right++) {
        map.set(s[right], 
            map.has(s[right]) ? 
            map.get(s[right]) + 1 : 
            1
        );

        while (map.size > k) {
            map.set(s[left], map.get(s[left]) - 1);

            if (map.get(s[left]) === 0) map.delete(s[left]);

            left++;
        }

        answer = Math.max(answer, right - left + 1);
    }

    return answer;
}

console.log(longestSubstringAtMostKDistinctCharacters("eceba", 2));