var reversePrefix = function(word, ch) {
    let right = 0;
    let wordAlreadyReversed = false;
    let newWord = "";

    for (let i = 0; i < word.length; i++) {
        if (wordAlreadyReversed) {
            newWord += word[i];
        } else if (word[i] === ch && !wordAlreadyReversed) {
            right = i;

            while (right >= 0) {
                newWord += word[right];
                right -= 1;
            }

            wordAlreadyReversed = true;
        }
    }

    return wordAlreadyReversed ? newWord : word;
};

console.log(reversePrefix("abcdefd", "d"));
console.log(reversePrefix("xyxzxe", "z"));
console.log(reversePrefix("abcd", "z"));