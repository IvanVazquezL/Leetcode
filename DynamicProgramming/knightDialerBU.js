var knightDialer = function(n) {
    // The jump map for the knight moves
    // indexed by the number on the dial pad
    const jumps = [
        [4, 6],     // 0 can move to 4 or 6
        [6, 8],     // 1 can move to 6 or 8
        [7, 9],     // 2 can move to 7 or 9
        [4, 8],     // 3 can move to 4 or 8
        [3, 9, 0],  // 4 can move to 3, 9, or 0
        [],         // 5 does not move anywhere
        [1, 7, 0],  // 6 can move to 1, 7, or 0
        [2, 6],     // 7 can move to 2 or 6
        [1, 3],     // 8 can move to 1 or 3
        [2, 4]      // 9 can move to 2 or 4
    ];

    const MOD = 1e9 + 7;

    // Initialize dp array where dp[remain][square] tracks the 
    // number of ways to reach a square with remaining moves
    let dp = Array.from({ length: n }, () => new Array(10).fill(0));

    // Base case: When n = 1, we start at any square and it's 
    // the first move, so all positions are 1
    for (let square = 0; square < 10; square++) {
        dp[0][square] = 1;
    }

    // DP to calculate the number of ways for each remaining step
    for (let remain = 1; remain < n; remain++) {
        for (let square = 0; square < 10; square++) {
            let ans = 0;

            // Sum up the number of ways to reach this square 
            // from its possible jump origins
            for (let nextSquare of jumps[square]) {
                ans = (ans + dp[remain - 1][nextSquare]) % MOD;
            }

            dp[remain][square] = ans;
        }
    }

    // Sum up all the possible numbers we can end on after `n` moves
    let result = 0;
    for (let square = 0; square < 10; square++) {
        result = (result + dp[n - 1][square]) % MOD;
    }

    return result;
};