var numIslands = function(grid) {
    const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    const numRows = grid.length;
    const numColumns = grid[0].length;
    let islands = 0;
    const seen = [];

    for (let row = 0; row < numRows; row++) {
        seen.push(new Array(numColumns).fill(false));
    }

    for (let row = 0; row < numRows; row++) {
        for (let column = 0; column < numColumns; column++) {
            if (isLand(row,column) && !seen[row][column]) {
                islands++;
                seen[row][column] = 0;
                dfs(row,column);
            }
        }
    }

    return islands;

    function dfs(row, column) {
        for (const [deltaRow, deltaColumn] of directions) {
            const newRow = row + deltaRow;
            const newColumn = column + deltaColumn;

            if (isValid(newRow, newColumn) && !seen[newRow][newColumn]) {
                seen[newRow][newColumn] = true;
                dfs(newRow, newColumn);
            }
        }
    }

    function isLand(row, column) {
        return grid[row][column] === "1";
    }

    function isValid(row, column) {
        return row >= 0 && row < numRows &&
            column >= 0 && column < numColumns && 
            isLand(row, column);
    }
};

function main() {
    console.log(numIslands([
        ["1","1","1","1","0"],
        ["1","1","0","1","0"],
        ["1","1","0","0","0"],
        ["0","0","0","0","0"]
    ]));
    console.log(numIslands([
        ["1","1","0","0","0"],
        ["1","1","0","0","0"],
        ["0","0","1","0","0"],
        ["0","0","0","1","1"]
    ]));
}

main();