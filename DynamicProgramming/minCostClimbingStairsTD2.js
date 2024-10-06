var minCostClimbingStairs = function(cost) {
    const memo = new Map();
    const n = cost.length;
    
    // We can either start from step 0 or step 1, so we need to take the minimum of both.
    return Math.min(dp(0), dp(1));

    function dp(index) {
        // Base case: If we go past the last step, there's no cost.
        if (index >= n) {
            return 0;
        }

        // If the result for this index is already computed, return it from memo.
        if (memo.has(index)) {
            return memo.get(index);
        }

        // Recursively calculate the minimum cost for the current step.
        const result = cost[index] + Math.min(dp(index + 1), dp(index + 2));

        // Store the result in the memo for future reference.
        memo.set(index, result);

        return result;
    }
};
