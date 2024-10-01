var largestPalindromic = function(num) {
    const set = new Set();
    const zeroExceptionSet = new Set();
    const doubleCharacters = [];
    let answer = "";

    for (let i = 0; i < num.length; i++) {
        if (set.has(num[i])) {
            set.delete(num[i]);
            doubleCharacters.push(num[i]);
        } else {
            set.add(num[i]);
            zeroExceptionSet.add(num[i]);
        }
    }

    if (zeroExceptionSet.size === 1 && doubleCharacters[0] === "0") return "0";
    doubleCharacters.sort();

    for (const character of doubleCharacters) {
        answer = character + answer + character;
    }

    // if any character remains, we have at least one unmatched
    // character to make the center of an odd length palindrome.
    if (set.size) {
        const numbers = [...set].sort((a,b) => b - a);
        answer = 
            answer.slice(0,answer.length/2) + 
            numbers[0] + 
            answer.slice(answer.length/2);
    }

    let left = 0;
    let right = answer.length - 1;

    while (answer[left] === "0" && answer[right] === "0" && left !== right) {
        left++
        right--;
    }

    return answer.slice(left, right + 1);
};

console.log(largestPalindromic("444947137"));
console.log(largestPalindromic("00009"));
console.log(largestPalindromic("00001105"));
console.log(largestPalindromic("5736732"));