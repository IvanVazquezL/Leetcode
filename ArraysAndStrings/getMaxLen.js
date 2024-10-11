/**
 * @param {number[]} nums
 * @return {number}
 */
var getMaxLen = function(nums) {
    let posCount = 0;  // Length of subarray with positive product
    let negCount = 0;  // Length of subarray with negative product
    let maxLen = 0;    // Maximum length of subarray with positive product

    for (let num of nums) {
        if (num > 0) {
            posCount += 1;
            negCount = negCount > 0 ? negCount + 1 : 0;
        } else if (num < 0) {
            let temp = posCount;
            posCount = negCount > 0 ? negCount + 1 : 0;
            negCount = temp + 1;
        } else {
            posCount = 0;
            negCount = 0;
        }

        maxLen = Math.max(maxLen, posCount);
    }

    return maxLen;
};
