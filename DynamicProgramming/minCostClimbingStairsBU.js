var minCostClimbingStairs = function(cost) {
    const n = cost.length;
    
    // dp[i] will represent the minimum cost to reach the i-th step
    const dp = new Array(n + 1).fill(0);
    
    // Fill the dp array
    for (let i = 2; i <= n; i++) {
        dp[i] = Math.min(dp[i - 1] + cost[i - 1], dp[i - 2] + cost[i - 2]);
    }
    
    // The minimum cost to reach the top is either from the last or second to last step
    return dp[n];
};
