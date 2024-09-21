var nearestExit = function(maze, entrance) {
    const directions = [[0,1],[1,0],[0,-1],[-1,0]];
    const numRows = maze.length;
    const numColumns = maze[0].length;
    let steps = 0;

    const queue = [entrance];
    const seen = [];

    for (let row = 0; row < numRows; row++) {
        seen.push(new Array(numColumns).fill(false));
    }

    seen[queue[0][0]][queue[0][1]] = true;

    while (queue.length) {
        const levelSize = queue.length;

        for (let i = 0; i < levelSize; i++) {
            const [row, column] = queue.shift();

            if (isExitAndNotEntrance(row, column)) {
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
        steps++;
    }

    return -1;

    function isValid(row, column) {
        return row >= 0 && row < numRows &&
            column >= 0 && column < numColumns &&
            maze[row][column] === '.';
    }

    function isExitAndNotEntrance(row, column) {
        return !(row === entrance[0] && column === entrance[1]) &&
            (row === 0 || 
            row === numRows - 1 || 
            column === 0 || 
            column === numColumns - 1);
    }
};

function main() {
    console.log(nearestExit([
        ["+","+",".","+"],
        [".",".",".","+"],
        ["+","+","+","."]
    ], [1,2]));
    console.log(nearestExit([
        ["+","+","+"],
        [".",".","."],
        ["+","+","+"]
    ], [1,0]));
}

main();