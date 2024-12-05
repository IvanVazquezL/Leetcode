function isPalindrome(s) {
    const cleanLine = s
    .toLowerCase()                   
    .replace(/[^a-z0-9]/g, ""); 

    let left = 0;
    let right = cleanLine.length - 1;

    while (left < right) {
        if (cleanLine[left] !== cleanLine[right]) return false;
        left++;
        right--;
    }

    return true;
}

console.log(isPalindrome("Was it a car or a cat I saw?"));
console.log(isPalindrome("tab a cat"));