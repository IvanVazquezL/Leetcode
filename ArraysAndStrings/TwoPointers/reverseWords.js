var reverseWords = function(s) {
    let left = 0;
    let right = 0;
    let newString = "";

    for (let i = 0; i < s.length; i++) {
        if (s[i] === ' ' || i === s.length - 1) {
            right = s[i] === ' ' ? i - 1 : i;

            while (left <= right) {
                newString += s[right];
                right--;
            }

            left = i + 1;
            if (s[i] === ' ') newString += " ";
        }
    }
    return newString;
};

console.log(reverseWords("Let's take LeetCode contest"));
console.log(reverseWords("Mr Ding"));

