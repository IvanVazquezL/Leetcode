var maxValueOfCoins = function(piles, k) {
    let n = piles.length;
    let dp = [];

    for (let i = 0; i <= n; i++) {
        dp[i] = new Array(k + 1).fill(0);
    }
    
    for (let i = 1; i <= n; i++) {
        for (let coins = 0; coins <= k; coins++) {
            let currentSum = 0;
            const limit = Math.min(piles[i - 1].length, coins);
            for (let currentCoins = 0; currentCoins <= limit; currentCoins++) {
                if (currentCoins > 0) {
                    currentSum += piles[i - 1][currentCoins - 1];
                }
                dp[i][coins] = Math.max(
                    dp[i][coins],
                    dp[i - 1][coins - currentCoins] + currentSum
                );
            }
        }
    }
    
    return dp[n][k];
};
