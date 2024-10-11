/**
 * @param {string[]} words
 * @param {string} s
 * @return {string}
 */
var boldWords = function(words, s) {
    const bold = Array(s.length).fill(false);

    // Mark the bold positions based on occurrences of words
    for (let word of words) {
        let start = s.indexOf(word);
        while (start !== -1) {
            for (let i = start; i < start + word.length; i++) {
                bold[i] = true;
            }
            start = s.indexOf(word, start + 1);
        }
    }

    // Now construct the string with <b> tags
    let result = '';
    let i = 0;
    
    while (i < s.length) {
        if (bold[i]) {
            result += '<b>';
            while (i < s.length && bold[i]) {
                result += s[i];
                i++;
            }
            result += '</b>';
        } else {
            result += s[i];
            i++;
        }
    }

    return result;
};