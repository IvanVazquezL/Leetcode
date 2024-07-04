var isThereTwoSum = function(nums, target) {
    return _isThereTwoSum(0, nums.length - 1, nums, target);
}

function _isThereTwoSum(left, right, nums, target) {
    const sum = nums[left] + nums[right];

    if (left >= right) return sum === target;

    if (sum === target) {
        return true;
    } else if (sum > target) {
        return _isThereTwoSum(left, right - 1, nums, target);
    }
    
    return _isThereTwoSum(left + 1, right, nums, target);    
}

console.log(isThereTwoSum([1, 2, 4, 6, 8, 9, 14, 15], 13));
console.log(isThereTwoSum([1, 2, 6, 8, 9, 14, 15], 13));