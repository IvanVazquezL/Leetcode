function countSquares(matrix) {
    const rows = matrix.length;
    const columns = matrix[0].length;
    const memo = new Map();

    let totalSquares = 0;

    for (let row = 0; row < rows; row++) {
        for (let column = 0; column < columns; column++) {
            totalSquares += _countSquares(row, column);
        }
    }

    return totalSquares;

    function _countSquares(row, column) {
        if (row < 0 || column < 0) return 0;

        const key = `${row}-${column}`;
        if (memo.has(key)) return memo.get(key);

        if (matrix[row][column] === 0) {
            memo.set(key, 0);
            return 0;
        }

        const top = _countSquares(row - 1, column);
        const left = _countSquares(row, column - 1);
        const diagonal = _countSquares(row - 1, column - 1);

        const squareSize = Math.min(top, left, diagonal) + 1;
        memo.set(key, squareSize);
        return squareSize;
    }
}

console.log(countSquares([
    [0,1,1,1],
    [1,1,1,1],
    [0,1,1,1]
]));
console.log(countSquares([
    [1,0,1],
    [1,1,0],
    [1,1,0]
]));