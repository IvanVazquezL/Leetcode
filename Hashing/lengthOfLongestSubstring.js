var lengthOfLongestSubstring = function(s) {
    let counts = new Map();
    let left = 0, ans = 0;
    for (let right = 0; right < s.length; right++) {
        counts.set(s[right], (counts.get(s[right]) || 0) + 1);
        while (counts.get(s[right]) >= 2) {
            counts.set(s[left], counts.get(s[left]) - 1);
            if (counts.get(s[left]) == 0) {
                counts.delete(s[left]);
            }
            left++;
        }

        ans = Math.max(ans, right - left + 1);
    }

    return ans;
};

console.log(lengthOfLongestSubstring("abcabcbb"));
console.log(lengthOfLongestSubstring("bbbbb"));
console.log(lengthOfLongestSubstring("pwwkew"));
console.log(lengthOfLongestSubstring(" "));
console.log(lengthOfLongestSubstring(""));
console.log(lengthOfLongestSubstring("au"));
console.log(lengthOfLongestSubstring("aa"));
console.log(lengthOfLongestSubstring("aab"));