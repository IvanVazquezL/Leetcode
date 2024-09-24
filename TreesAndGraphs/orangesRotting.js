function orangesRotting(grid) {
    const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    const ROTTEN = 2;
    const FRESH = 1;
    const numRows = grid.length;
    const numColumns = grid[0].length;
    let freshOranges = 0;
    const queue = [];

    for (let row = 0; row < numRows; row++) {
        for (let column = 0; column < numColumns; column++) {
            if (grid[row][column] === ROTTEN) {
                queue.push([row, column]);
            } else if (grid[row][column] === FRESH) {
                freshOranges++;
            }
        }
    }

    // Mark the round/level with a sentinel value
    queue.push([-1, -1]);
    let minutesElapsed = -1;
    console.log(queue);

    while (queue.length) {
        const [row, column] = queue.shift();

        if (row === -1) {
            minutesElapsed++;

            // To avoid an endless loop
            // check if the queue is not empty
            if (queue.length) {
                queue.push([-1, -1]);
            }
        } else {
            for (const [deltaRow, deltaColumn] of directions) {
                const newRow = row + deltaRow;
                const newColumn = column + deltaColumn;
            
                if (isWithinBoundsAndFreshOrange(newRow, newColumn)) {
                    // This orange would be contaminated
                    grid[newRow][newColumn] = ROTTEN;
                    freshOranges--;
                    //  This orange would then contaminate other oranges
                    queue.push([newRow, newColumn]);
                }
            }
        }
    }

    return freshOranges === 0 ? minutesElapsed : -1;

    function isWithinBoundsAndFreshOrange(row, column) {
        return row >= 0 && row < numRows &&
            column >= 0 && column < numColumns && 
            grid[row][column] === FRESH;
    }
}

function main() {
    console.log(orangesRotting([[2,1,1],[1,1,0],[0,1,1]]));
}

main();