/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    let numRows = grid.length;
    let numColumns = grid[0].length;
    
    // Create a 2D dp array and initialize with the grid values
    let dp = [];
    for (let i = 0; i < numRows; i++) {
        dp[i] = new Array(numColumns).fill(0);
    }

    dp[0][0] = grid[0][0]; // Start at the top-left corner
    
    // Fill in the first row (can only come from the left)
    for (let col = 1; col < numColumns; col++) {
        dp[0][col] = dp[0][col - 1] + grid[0][col];
    }
    
    // Fill in the first column (can only come from above)
    for (let row = 1; row < numRows; row++) {
        dp[row][0] = dp[row - 1][0] + grid[row][0];
    }

    for (let row = 1; row < numRows; row++) {
        for (let col = 1; col < numColumns; col++) {
            dp[row][col] = Math.min(
                dp[row - 1][col], 
                dp[row][col - 1]
            ) + grid[row][col];
        }
    }

    return dp[numRows - 1][numColumns - 1];
};
