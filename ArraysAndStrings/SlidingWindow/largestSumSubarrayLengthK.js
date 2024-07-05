var largestSumSubarrayLengthK = function(nums, k) {
    return _largestSumSubarrayLengthK(0, 0, 0, 0, nums, k);
}

function _largestSumSubarrayLengthK(left, right, curr, answer, nums, k) {
    if (right === nums.length) return answer;

    curr += nums[right];

    if (right - left + 1 === k) {
        answer = Math.max(answer, curr);
        curr -= nums[left];
        left += 1;
    }

    return _largestSumSubarrayLengthK(left, right + 1, curr, answer, nums, k);
}

console.log(largestSumSubarrayLengthK([3, -1, 4, 12, -8, 5, 6], 4))