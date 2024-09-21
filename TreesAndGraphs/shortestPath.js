var shortestPath = function(grid, k) {
    const directions = [[0,1],[1,0],[0,-1],[-1,0]];
    const numRows = grid.length;
    const numColumns = grid[0].length;
    let steps = 0;
    const queue = [[0,0,k]];
    const seen = [];

    for (let row = 0; row < numRows; row++) {
        seen.push(new Array(numColumns).fill(-1));
    }

    while (queue.length) {
        const levelSize = queue.length;

        for (let i = 0; i < levelSize; i++) {
            let [row, column, remain] = queue.shift();

            if (row === numRows - 1 && column === numColumns - 1) {
                console.log(seen)
                return steps;
            }

            if (isObstacle(row, column)) {
                if (remain === 0) continue;
                remain--;
            }

            if (hasAMoreOptimalPathAlreadyBeenExplored(row, column, remain)) {
                continue;
            }

            seen[row][column] = remain;

            for (const [deltaRow, deltaColumn] of directions) {
                const newRow = row + deltaRow;
                const newColumn  = column + deltaColumn;

                if (isWithinBounds(newRow, newColumn)) {
                    queue.push([newRow, newColumn, remain]);
                }
            }
        }
        steps++;
    }

    return -1;

    function isWithinBounds(row, column) {
        return row >= 0 && row < numRows &&
            column >= 0 && column < numColumns;
    }

    function isObstacle(row, column) {
        return grid[row][column] === 1;
    }

    function hasAMoreOptimalPathAlreadyBeenExplored(row, column, remain) {
        return seen[row][column] >= remain;
    }
}

function main() {
    console.log(shortestPath([
        [0,0,0],
        [1,1,0],
        [0,0,0],
        [0,1,1],
        [0,0,0]
    ], 1));
    console.log(shortestPath([
        [0,1,1],
        [1,1,1],
        [1,0,0]
    ], 1));
}

main();