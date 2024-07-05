var flipBit = function(s) {
    return _flipBit(0, 0, 0, 0, s);
}

function _flipBit(left, right, zeroes, answer, s) {
    if (right === s.length) return answer;

    if (s[right] === '0') zeroes += 1;

    while (zeroes > 1) {
        if (s[left] === '0') zeroes -= 1;
        left += 1;
    }

    answer = Math.max(answer, right - left + 1);

    return _flipBit(left, right + 1, zeroes, answer, s)
}

console.log(flipBit("1101100111"))
console.log(flipBit("11001011"))