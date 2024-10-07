var uniquePaths = function (m, n) {
    let dp = [];
    for (let i = 0; i < m; i++) {
        dp[i] = [];
        for (let j = 0; j < n; j++) {
            dp[i][j] = 1;
        }
    }

    for (let col = 1; col < m; col++) {
        for (let row = 1; row < n; row++) {
            dp[col][row] = dp[col - 1][row] + dp[col][row - 1];
        }
    }
    
    return dp[m - 1][n - 1];
};