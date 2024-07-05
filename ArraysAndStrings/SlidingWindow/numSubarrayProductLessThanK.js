var numSubarrayProductLessThanK = function(nums, k) {
    if (k <= 1) return 0;
    return _numSubarrayProductLessThanK(0, 0, 1, 0, nums, k);
};

function _numSubarrayProductLessThanK(left, right, curr, answer, nums, k) {
    if (right === nums.length) return answer;

    curr *= nums[right];

    while (curr >= k) {
        curr /= nums[left];
        left += 1;
    }

    answer += (right - left + 1);

    return _numSubarrayProductLessThanK(left, right + 1, curr, answer, nums, k);
}

console.log(numSubarrayProductLessThanK([10, 5, 2, 6], 100));
console.log(numSubarrayProductLessThanK([1, 2, 3], 0));