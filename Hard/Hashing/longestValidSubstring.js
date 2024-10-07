var longestValidSubstring = function(word, forbidden) {
    const forbiddenSet = new Set(forbidden); 
    let maxLength = 0; 
    let left = 0; 

    for (let right = 0; right < word.length; right++) {
        for (let length = 1; length <= Math.min(right - left + 1, 10); length++) {
            const substring = word.slice(right - length + 1, right + 1);
            if (forbiddenSet.has(substring)) {
                left = right - length + 2;
                break; 
            }
        }
        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength; 
};