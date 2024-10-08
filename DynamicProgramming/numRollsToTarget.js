function numRollsToTarget(n, k, target) {
    const mod = 1e9 + 7;
    const dp = [];

    for (let i = 0; i <= n; i++) {
        dp[i] = [];
        for (let j = 0; j <= target; j++) {
            dp[i][j] = 0;
        }
    }

    dp[0][0] = 1;

    for (let dice = 1; dice <= n; dice++) {
        for (let sum = 1; sum <= target; sum++) {
            dp[dice][sum] = 0;

            for (let face = 1; face <= k; face++) {
                if (sum - face >= 0) {
                    dp[dice][sum] = (dp[dice][sum] + dp[dice - 1][sum - face]) % mod;
                }
            }
        }
    }

    return dp[n][target];
}