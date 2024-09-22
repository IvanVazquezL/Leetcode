var snakesAndLadders = function(board) {
    const boardLength = board.length;
    const columns = [];
    const cells = [];
    let label = 1;

    for (let i = 0; i < boardLength; i++) {
        columns.push(i);
    }

    // Fill the cells array with row-column positions
    for (let row = boardLength - 1; row >= 0; row--) {
        for (const column of columns) {
            cells[label++] = [row, column];
        }
        columns.reverse(); // Reverse columns for alternating row traversal
    }

    const minMoves = [];
    for (let i = 0; i <= boardLength * boardLength; i++) {
        minMoves[i] = -1;
    }

    const queue = [1];
    minMoves[1] = 0;

    while (queue.length) {
        const currentPosition = queue.shift();
        const furthestReachableCell = Math.min(
            currentPosition + 6,
            boardLength * boardLength
        );
        for (let nextPosition = currentPosition + 1; nextPosition <= furthestReachableCell; nextPosition++) {
            const [row, column] = cells[nextPosition];
            const destination = board[row][column] === -1 ?
                nextPosition : 
                board[row][column];

            if (minMoves[destination] === -1) {
                minMoves[destination] = minMoves[currentPosition] + 1;
                queue.push(destination);
            }
        }
    }

    console.log(minMoves)
    return minMoves[boardLength * boardLength];
};

function main() {
    console.log(snakesAndLadders([
        [-1,-1,-1,-1,-1,-1],
        [-1,-1,-1,-1,-1,-1],
        [-1,-1,-1,-1,-1,-1],
        [-1,35,-1,-1,13,-1],
        [-1,-1,-1,-1,-1,-1],
        [-1,15,-1,-1,-1,-1]
    ]));
    /*console.log(snakesAndLadders([
        [-1,-1],
        [-1,3]
    ]));*/
}

main();