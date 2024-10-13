function minPathSum(grid, memo = new Map()) {
    const m = grid.length;
    const n = grid[0].length;
    // Start the recursion from the top-left corner
    return _minPathSum(0, 0);

    function _minPathSum(row, col) {
        const key = `${row}-${col}`;
        if (memo.has(key)) return memo.get(key);
        if (row === m - 1 && col === n - 1) return grid[row][col];
        // Base case: if we go out of bounds
        if (row >= m || col >= n) return Infinity;

        // Move down or right and get the minimum path sum
        const down = _minPathSum(row + 1, col);
        const right = _minPathSum(row, col + 1);
        const minPath = grid[row][col] + Math.min(down, right);
        
        memo.set(key, minPath);
        return memo.get(key);
    }
}