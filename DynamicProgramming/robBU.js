var rob = function(nums) {
    const n = nums.length;
    
    // If there are no houses
    // there's nothing to rob
    if (n === 0) return 0;

    // If there is only one house rob it
    if (n === 1) return nums[0];
    
    // Create a dp array where dp[i] 
    // represents the maximum amount of money
    // that can be robbed up to the i-th house.
    const dp = new Array(n).fill(0);
    
    // Base cases: First house's max amount is 
    // the money in that house
    dp[0] = nums[0];     
    // Max amount for first two houses is the 
    // max of robbing either house 0 or house 1          
    dp[1] = Math.max(nums[0], nums[1]); 
    
    for (let i = 2; i < n; i++) {
        dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i]);
    }
    
    // The result is the maximum money we can rob up 
    // to the last house
    return dp[n - 1];
};