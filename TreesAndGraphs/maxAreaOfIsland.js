/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    const directions = [[0,1],[1,0],[0,-1],[-1,0]];
    const numRows = grid.length;
    const numColumns = grid[0].length;
    const seen = [];
    let maxIsland = 0;

    for (let row = 0; row < numRows; row++) {
        seen.push(new Array(numColumns).fill(false));
    }

    let islandSize = 0;

    for (let row = 0; row < numRows; row++) {
        for (let column = 0; column < numColumns; column++) {
            if (isLand(row, column) && !seen[row][column]) {
                islandSize++;
                seen[row][column] = true;
                dfs(row, column);
                maxIsland = Math.max(maxIsland, islandSize);
                islandSize = 0;
            }
        }
    }

    return maxIsland;

    function dfs(row, column) {
        for (const [deltaRow, deltaColumn] of directions) {
            const newRow = row + deltaRow;
            const newColumn = column + deltaColumn;

            if (isValid(newRow, newColumn) && !seen[newRow][newColumn]) {
                islandSize++;
                seen[newRow][newColumn] = true;
                dfs(newRow, newColumn);
            }
        }
    }

    function isValid(row, column) {
        return row >= 0 && row < numRows &&
            column >= 0 && column < numColumns &&
            isLand(row, column);
    }

    function isLand(row, column) {
        return grid[row][column] === 1;
    }
};
