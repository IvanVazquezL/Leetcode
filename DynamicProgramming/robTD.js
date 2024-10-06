/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    const memo = new Map(); 
    
    function dp(index) {
        // Base case: if index is out of bounds, no money can be robbed
        if (index >= nums.length) {
            return 0;
        }
        
        // Check if this subproblem has been solved before
        if (memo.has(index)) {
            return memo.get(index);
        }
        
        // Choice 1: Rob the current house and move to the house after next
        const robCurrent = nums[index] + dp(index + 2);
        
        // Choice 2: Skip the current house and move to the next house
        const skipCurrent = dp(index + 1);
        
        // Store the result of the current subproblem in the memo map
        const result = Math.max(robCurrent, skipCurrent);
        memo.set(index, result);
        
        return memo.get(index);
    }
    
    // Start from the first house (index 0)
    return dp(0);
};
