var longestOnes = function(nums, k) {
    return _longestOnes(0, 0, 0, 0, nums, k);
};

function _longestOnes(left, right, zeroes, answer, nums, k) {
    if (right === nums.length) return answer;

    if (nums[right] === 0) zeroes += 1;

    while (zeroes > k) {
        if (nums[left] === 0) zeroes -= 1;
        left += 1;
    }

    answer = Math.max(answer, right - left + 1);

    return _longestOnes(left, right + 1, zeroes, answer, nums, k)
}

console.log(longestOnes([1,1,1,0,0,0,1,1,1,1,0], 2));
console.log(longestOnes([0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], 3));