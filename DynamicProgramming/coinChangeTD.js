var coinChange = function(coins, amount) {
    if (amount < 1) return 0;
    const dp = new Array(amount).fill(0)
    return coinChangeDP(coins, amount, dp);
};

function coinChangeDP(coins, remaining, dp) {
    if (remaining < 0) return -1;
    if (remaining === 0) return 0;
    if (dp[remaining - 1] !== 0) return dp[remaining - 1];
    
    let min = Infinity;
    for (let coin of coins) {
        const result = coinChangeDP(coins, remaining - coin, dp);
        if (result >= 0 && result < min) {
            min = 1 + result;
        }
    }
    
    dp[remaining - 1] = (min === Infinity) ? -1 : min;
    return dp[remaining - 1];
}