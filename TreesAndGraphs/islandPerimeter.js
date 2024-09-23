var islandPerimeter = function(grid) {
    const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    const numRows = grid.length;
    const numColumns = grid[0].length;
    let perimeter = 0;
    const seen = [];

    for (let row = 0; row < numRows; row++) {
        seen.push(new Array(numColumns).fill(false));
    }

    for (let row = 0; row < numRows; row++) {
        for (let column = 0; column < numColumns; column++) {
            if (isLand(row, column) && !seen[row][column]) {
                seen[row][column] = true;
                perimeter += countPerimeter(row, column);
                dfs(row, column);
                return perimeter;
            }
        }
    }

    return perimeter;

    function dfs(row, column) {
        for (const [deltaRow, deltaColumn] of directions) {
            const newRow = row + deltaRow;
            const newColumn = column + deltaColumn;

            if (isLand(newRow, newColumn) && !seen[newRow][newColumn]) {
                seen[newRow][newColumn] = true;
                perimeter += countPerimeter(newRow, newColumn);
                dfs(newRow, newColumn);
            }
        }
    }

    function countPerimeter(row, column) {
        let squarePerimeter = 0;

        if (isWater(row, column + 1) || isOutOfBounds(row, column + 1)) {
            squarePerimeter += 1;
        }

        if (isWater(row + 1, column) || isOutOfBounds(row + 1, column)) {
            squarePerimeter += 1;
        }

        if (isWater(row, column - 1) || isOutOfBounds(row, column - 1)) {
            squarePerimeter += 1;
        }

        if (isWater(row - 1, column) || isOutOfBounds(row - 1, column)) {
            squarePerimeter += 1;
        }

        return squarePerimeter;
    }

    function isOutOfBounds(row, column) {
        return row < 0 || row >= numRows ||
            column < 0 || column >= numColumns;
    }

    function isWater(row, column) {
        return isWithinBounds(row, column) && grid[row][column] === 0;
    }

    function isWithinBounds(row, column) {
        return row >= 0 && row < numRows &&
        column >= 0 && column < numColumns;
    }

    function isLand(row, column) {
        return isWithinBounds(row, column) && grid[row][column] === 1;
    }
};

function main() {
    console.log(islandPerimeter([
        [0,1,0,0],
        [1,1,1,0],
        [0,1,0,0],
        [1,1,0,0]
    ]));
    console.log(islandPerimeter([[1]]));
    console.log(islandPerimeter([[1,0]]));
}

main();