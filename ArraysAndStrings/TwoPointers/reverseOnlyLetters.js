var reverseOnlyLetters = function(s) {
    let left = 0;
    let right = s.length - 1;
    const reverse = [];

    while (left <= right) {
        if (isAnAlphabeticCharacter(s[left]) && isAnAlphabeticCharacter(s[right])) {
            reverse[right] = s[left];
            reverse[left] = s[right];
            right--;
            left++;
        } else {
            if (!isAnAlphabeticCharacter(s[left])) {
                reverse[left] = s[left];
                left++;
            }
    
            if (!isAnAlphabeticCharacter(s[right])) {
                reverse[right] = s[right];
                right--;
            }
        }
    }

    return reverse.join('');
};

function isAnAlphabeticCharacter(char) {
    const regex = /^[a-zA-Z]$/;
    return regex.test(char);
}

console.log(reverseOnlyLetters("ab-cd"));
console.log(reverseOnlyLetters("a-bC-dEf-ghIj"));
console.log(reverseOnlyLetters("Test1ng-Leet=code-Q!"));
//"Qedo1ct-eeLg=ntse-T!"