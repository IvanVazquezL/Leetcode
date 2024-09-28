/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var partitionArray = function(nums, k) {
    nums.sort((a,b) => a - b);
    let answer = 1;
    let lastStart = 0;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] - nums[lastStart] > k) {
            lastStart = i;
            answer += 1;
        }
    }

    return answer;
};