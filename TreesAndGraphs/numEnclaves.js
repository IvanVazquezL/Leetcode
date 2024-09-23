var numEnclaves = function(grid) {
    const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    const numRows = grid.length;
    const numColumns = grid[0].length;
    let steps = 0;
    let setAnswerToZero = false;
    const seen = [];

    for (let row = 0; row < numRows; row++) {
        seen.push(new Array(numColumns).fill(false));
    }

    for (let row = 0; row < numRows; row++) {
        for (let column = 0; column < numColumns; column++) {
            let tentativeSteps = 0;
            setAnswerToZero = false;

            if (isLand(row,column) && !seen[row][column]) {
                tentativeSteps = dfs(row,column);
            }

            steps += tentativeSteps;
        }
    }

    return steps;

    function dfs(row, column) {
        seen[row][column] = true;
    
        let steps = 1; 
    
        for (const [deltaRow, deltaColumn] of directions) {
            const newRow = row + deltaRow;
            const newColumn = column + deltaColumn;

            if (isOutOfBounds(newRow, newColumn)) {
                setAnswerToZero = true;
            }
    
            if (isValid(newRow, newColumn) && !seen[newRow][newColumn]) {
                const result = dfs(newRow, newColumn); 
                
                steps += result;
            }
        }
    
        return setAnswerToZero ? 0: steps; 
    }
    
    function isLand(row, column) {
        return grid[row][column] === 1;
    }

    function isOutOfBounds(row, column) {
        return row < 0 || row >= numRows ||
            column < 0 || column >= numColumns;
    }

    function isValid(row, column) {
        return row >= 0 && row < numRows &&
            column >= 0 && column < numColumns && 
            isLand(row, column);
    }
};

function main() {
   console.log(numEnclaves([
        [0,0,0,0],
        [1,0,1,0],
        [0,1,1,0],
        [0,0,0,0]]
    ));
    console.log(numEnclaves([
        [0,1,1,0],
        [0,0,1,0],
        [0,0,1,0],
        [0,0,0,0]
    ]));
    console.log(numEnclaves([
        [0,0,0,1,1,1,0,1,0,0],
        [1,1,0,0,0,1,0,1,1,1],
        [0,0,0,1,1,1,0,1,0,0],
        [0,1,1,0,0,0,1,0,1,0],
        [0,1,1,1,1,1,0,0,1,0],
        [0,0,1,0,1,1,1,1,0,1],
        [0,1,1,0,0,0,1,1,1,1],
        [0,0,1,0,0,1,0,1,0,1],
        [1,0,1,0,1,1,0,0,0,0],
        [0,0,0,0,1,1,0,0,0,1]
    ]))

}

main();