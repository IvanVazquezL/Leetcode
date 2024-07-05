var subarraySum = function(nums, k) {
    return _subarraySum(0, 0, 0, 0, nums, k);
};

function _subarraySum(left, right, curr, answer, nums, k) {
    if (right === nums.length) return answer;

    curr += nums[right];

    while (curr > k) {
        curr -= nums[left];
        left += 1;
    }

    answer = Math.max(answer, right - left + 1);

    return _subarraySum(left, right + 1, curr, answer, nums, k);
}

console.log(subarraySum([3, 1, 2, 7, 4, 2, 1, 1, 5], 8))
console.log(subarraySum([3, 2, 1, 3, 1, 1], 5))