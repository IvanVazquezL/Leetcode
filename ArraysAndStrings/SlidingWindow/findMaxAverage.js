var findMaxAverage = function(nums, k) {
    return _findMaxAverage(0, 0, 0, -Infinity, nums, k);
};

function _findMaxAverage(left, right, curr, answer, nums, k) {
    if (right === nums.length) return answer;

    curr += nums[right];

    if (right - left + 1 === k) {
        answer = Math.max(answer, curr / k);
        curr -= nums[left];
        left += 1;
    }

    return _findMaxAverage(left, right + 1, curr, answer, nums, k);
}

console.log(findMaxAverage([1,12,-5,-6,50,3], 4));
console.log(findMaxAverage([5], 1));
console.log(findMaxAverage([-1], 1));