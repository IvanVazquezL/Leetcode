var islandPerimeter = function(grid) {
    const numRows = grid.length;
    const numColumns = grid[0].length;
    let perimeter = 0;

    for (let row = 0; row < numRows; row++) {
        for (let column = 0; column < numColumns; column++) {
            if (grid[row][column] === 1) {
                // Check each of the four directions
                if (row === 0 || grid[row - 1][column] === 0) perimeter++; // Top
                if (row === numRows - 1 || grid[row + 1][column] === 0) perimeter++; // Bottom
                if (column === 0 || grid[row][column - 1] === 0) perimeter++; // Left
                if (column === numColumns - 1 || grid[row][column + 1] === 0) perimeter++; // Right
            }
        }
    }

    return perimeter;
};
