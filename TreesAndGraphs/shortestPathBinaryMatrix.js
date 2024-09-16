var shortestPathBinaryMatrix = function(grid) {
    if (grid[0][0] === 1) return -1;

    const directions = [[0, 1], [1, 0], [1, 1], [-1, -1], [-1, 1], [1, -1], [0, -1], [-1, 0]];
    const numRows = grid.length;
    const numColumns = grid[0].length;

    const seen = getSeen();
    const queue = [[0,0]];
    seen[0][0] = true;
    let steps = 0;
 
    while (queue.length) {
        const levelSize = queue.length;
        steps++;

        for (let i = 0; i < levelSize; i++) {
            const [row, column] = queue.shift();

            if (row === numRows - 1 && column === numColumns - 1) {
                return steps;
            }

            for (const [deltaRow, deltaColumn] of directions) {
                const newRow = row + deltaRow;
                const newColumn = column + deltaColumn;

                if (isValid(newRow, newColumn) && !seen[newRow][newColumn]) {
                    seen[newRow][newColumn] = true;
                    queue.push([newRow, newColumn]);
                }
            }
        }
    }

    return -1;

    function getSeen() {
        const seen = [];

        for (let row = 0; row < numRows; row++) {
            seen.push(new Array(numRows).fill(false));
        }

        return seen;
    }

    function isValidCell(row, column) {
        return grid[row][column] === 0;
    }

    function isValid(row, column) {
        return row >= 0 && row < numRows &&
            column >= 0 && column < numColumns && 
            isValidCell(row, column);
    }
};

function main() {
    console.log(shortestPathBinaryMatrix([[0,0,0],[1,1,0],[1,1,0]]));
    console.log(shortestPathBinaryMatrix([[1,0,0],[1,1,0],[1,1,0]]));
}

main();