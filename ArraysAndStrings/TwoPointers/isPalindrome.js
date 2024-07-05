var isPalindrome = function(s) {
    return _isPalindrome(0, s.length - 1, s);
};

function _isPalindrome(left, right, s) {
    if (left >= right) {
        return true;
    }

    if (s[left] !== s[right]) return false;

    return _isPalindrome(left + 1, right - 1, s);
}

console.log(isPalindrome("aabaa"));
console.log(isPalindrome("tacocat"));
console.log(isPalindrome("racecar"));