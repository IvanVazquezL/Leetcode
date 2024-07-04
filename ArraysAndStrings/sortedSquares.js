var sortedSquares = function(nums) {
    return _sortedSquares(0, nums.length - 1, nums, nums.length - 1, []);
};

function _sortedSquares(left, right, nums, ansIndex, ans) {
    if (ansIndex < 0) return ans;

    if (Math.abs(nums[left]) < Math.abs(nums[right])) {
        ans[ansIndex] =  nums[right] * nums[right];
        return _sortedSquares(left, right - 1, nums, ansIndex - 1, ans)
    }
    
    ans[ansIndex] = nums[left] * nums[left];
    return _sortedSquares(left + 1, right, nums, ansIndex - 1, ans);
}

console.log(sortedSquares([-4,-1,0,3,10]));
console.log(sortedSquares([-7, -3, 2, 3, 11])); // Output: [4, 9, 9, 49, 121]
console.log(sortedSquares([-5, -3, -2, -1]));   // Output: [1, 4, 9, 25]
console.log(sortedSquares([1, 2, 3, 4]));       // Output: [1, 4, 9, 16]
