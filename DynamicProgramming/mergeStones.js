var mergeStones = function(stones, k) {
    const n = stones.length;
    if ((n - 1) % (k - 1) !== 0) return -1;

    // Prefix sum for quick sum calculation
    const prefixSum = Array(n + 1).fill(0);
    for (let i = 0; i < n; i++) {
        prefixSum[i + 1] = prefixSum[i] + stones[i];
    }

    // DP array
    const dp = Array.from({ length: n }, () => Array(n).fill(Infinity));

    // Base case: Cost to merge a single pile is 0
    for (let i = 0; i < n; i++) {
        dp[i][i] = 0;
    }

    // Solve for longer subarrays
    for (let length = 2; length <= n; length++) {
        for (let i = 0; i <= n - length; i++) {
            let j = i + length - 1;
            for (let m = i; m < j; m += k - 1) {
                dp[i][j] = Math.min(dp[i][j], dp[i][m] + dp[m + 1][j]);
            }

            // If we can merge the entire range into one pile
            if ((j - i) % (k - 1) === 0) {
                dp[i][j] += prefixSum[j + 1] - prefixSum[i];
            }
        }
    }

    return dp[0][n - 1];
};