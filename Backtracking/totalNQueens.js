/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function(n) {
    return backtrack(0, new Set(), new Set(), new Set());

    function backtrack(row, diagonals, antiDiagonals, columns) {
        // base case -> N queens have been placed
        if (row === n) {
            return 1;
        }

        let answers = 0;

        for (let col = 0; col < n; col++) {
            let currentDiagonal = row - col;
            let currentAntiDiagonal = row + col;

            // If queen is not placeable
            if (
                columns.has(col) ||
                diagonals.has(currentDiagonal) ||
                antiDiagonals.has(currentAntiDiagonal)
                ) {
                    continue;
            }

            //  Add the queen to the board
            columns.add(col);
            diagonals.add(currentDiagonal);
            antiDiagonals.add(currentAntiDiagonal);

            //  Move on to the next row with the updated board state
            answers += backtrack(row + 1, diagonals, antiDiagonals, columns);

            // Remove the queen from the board since we have already
            // explored all the valid paths
            columns.delete(col);
            diagonals.delete(currentDiagonal);
            antiDiagonals.delete(currentAntiDiagonal);
        }
        return answers;
    }
};