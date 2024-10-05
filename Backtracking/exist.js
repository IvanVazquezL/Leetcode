/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    let directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    let numRows = board.length;
    let numColumns = board[0].length;

    for (let row = 0; row < numRows; row++) {
        for (let col = 0; col < numColumns; col++) {
            let seen = [];
            for (let i = 0; i < numRows; i++) {
                seen.push(new Array(numColumns).fill(false));
            }

            seen[row][col] = true;

            if (board[row][col] === word[0] && backtrack(row, col, 1, seen)) {
                return true;
            }
        }
    }

    return false;

    function backtrack(row, col, i, seen) {
        if (i === word.length) {
            return true;
        }

        for (const [deltaRow, deltaColumn] of directions) {
            const nextRow = row + deltaRow;
            const nextColumn = col + deltaColumn;

            if (isValid(nextRow, nextColumn) && !seen[nextRow][nextColumn]) {
                if (board[nextRow][nextColumn] === word[i]) {
                    seen[nextRow][nextColumn] = true;
                    if (backtrack(nextRow, nextColumn, i + 1, seen)) {
                        return true;
                    }

                    seen[nextRow][nextColumn] = false;
                }
            }
        }
    }

    function isValid(row, col) {
        return row >= 0 && row < numRows &&
            col >= 0 && col < numColumns;
    }
};