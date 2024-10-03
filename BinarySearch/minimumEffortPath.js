var minimumEffortPath = function(heights) {
    const numRows = heights.length;
    const numColumns = heights[0].length;

    let left = 0;
    let right = 0;

    for (const arr of heights) {
        right = Math.max(right, Math.max(...arr));
    }

    while (left <= right) {
        const mid = Math.floor((left + right)/2);

        if (check(mid)) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    return left;

    function check(effort) {
        const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
        let seen = [];

        for (let i = 0; i < numRows; i++) {
            seen.push(new Array(numColumns).fill(false))
        }

        seen[0][0] = true;
        let stack = [[0,0]];

        while (stack.length) {
            const [row, column] = stack.pop();
            if (row === numRows - 1 && column === numColumns - 1) {
                return true;
            }

            for (const [deltaRow, deltaColumn] of directions) {
                const nextRow = row + deltaRow;
                const nextColumn = column + deltaColumn;

                if (valid(nextRow, nextColumn) && !seen[nextRow][nextColumn]) {
                    if (Math.abs(heights[nextRow][nextColumn] - heights[row][column]) <= effort) {
                        seen[nextRow][nextColumn] = true;
                        stack.push([nextRow, nextColumn]);
                    }
                }
            }

        }

        return false;
    }

    function valid(row, column) {
        return row >= 0 && row < numRows &&
            column >= 0 && column < numColumns;
    }
}
