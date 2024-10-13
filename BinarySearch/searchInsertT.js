/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let left = 0;   
    let right = nums.length;  

    while (left < right) {
        let mid = left + Math.floor((right - left) / 2);

        if (condition(mid)) {
            right = mid; 
        } else {
            left = mid + 1;  
        }
    }
    return left;  

    function condition(value) {
        return nums[value] >= target;
    }
};