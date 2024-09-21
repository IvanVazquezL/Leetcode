var updateMatrix = function(mat) {
    const directions = [[0,1],[1,0],[0,-1],[-1,0]];
    
    const numRows = mat.length;
    const numColumns = mat[0].length;
    const answer = [];
    const queue = [];
    const seen = [];
    let steps = 0;

    for (let i = 0; i < numRows; i++) {
        seen.push(new Array(numColumns).fill(false));
    }

    for (let row = 0; row < numRows; row++) {
        answer[row] = [];
        for (let column = 0; column < numColumns; column++) {
            answer[row][column] = 0;
        }
    }

    for (let row = 0; row < numRows; row++) {
        for (let column = 0; column < numColumns; column++) {
            if (mat[row][column] === 0) {
                queue.push([row, column]);
                seen[row][column] = true;
            }
        }
    }

    while (queue.length) {
        const levelSize = queue.length;
        steps++;

        for (let i = 0; i < levelSize; i++) {
            const [row, column] = queue.shift();
            for (const [deltaRow, deltaColumn] of directions) {
                const newRow = row + deltaRow;
                const newColumn = column + deltaColumn;

                if (isValidCell(newRow, newColumn) && !seen[newRow][newColumn]) {
                    seen[newRow][newColumn] = true;
                    answer[newRow][newColumn] = steps;
                    queue.push([newRow, newColumn]);
                }
            }
        }
    }

    return answer;

    function isValidCell(row, column) {
        return row >= 0 && row < numRows &&
            column >= 0 && column < numColumns &&
            mat[row][column] === 1;
    }
};

function main() {
    console.log(updateMatrix([[0,0,0],[0,1,0],[0,0,0]]));
    console.log(updateMatrix([[0,0,0],[0,1,0],[1,1,1]]));
}

main();