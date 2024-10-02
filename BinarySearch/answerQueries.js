/**
 * @param {number[]} nums
 * @param {number[]} queries
 * @return {number[]}
 */
var answerQueries = function(nums, queries) {
    nums.sort((a,b) => a - b);
    const prefixSum = [];
    const answers = [];
    let sum = 0;

    for (const num of nums) {
        sum += num;
        prefixSum.push(sum);
    }

    for (const query of queries) {
        answers.push(binarySearch(prefixSum, query));
    }

    return answers;
};

function binarySearch(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        const mid = Math.floor((left + right)/2);

        if (nums[mid] === target) {
            return mid + 1;
        }

        if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return nums[left] > target ? left : left + 1;
}