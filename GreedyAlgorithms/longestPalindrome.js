/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    const set = new Set();
    let answer = 0;

    for (let i = 0; i < s.length; i++) {
        if (set.has(s[i])) {
            set.delete(s[i]);
            answer += 2;
        } else {
            set.add(s[i]);
        }
    }

    // if any character remains, we have at least one unmatched
    // character to make the center of an odd length palindrome.
    if (set.size) answer++;

    return answer;
};