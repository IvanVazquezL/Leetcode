var longestCommonSubsequence = function(text1, text2) {
    let memo = [];
    for (let i = 0; i < text1.length; i++) {
        memo.push(new Array(text2.length).fill(-1));
    }
    
    return dp(0, 0);

    function dp(i, j) {
        if (i == text1.length || j == text2.length) {
            return 0;
        }
        
        if (memo[i][j] != -1) {
            return memo[i][j];
        }
        
        if (text1[i] == text2[j]) {
            return 1 + dp(i + 1, j + 1);
        }
        
        memo[i][j] = Math.max(dp(i + 1, j), dp(i, j + 1));
        return memo[i][j];
    }
};