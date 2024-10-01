/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    const numRows = matrix.length;
    const numColumns = matrix[0].length;
    let left = 0;
    let right = numRows * numColumns - 1;

    while (left <= right) {
        let mid = Math.floor((left + right)/2);
        const row = Math.floor(mid/numColumns);
        const column = mid % numColumns;
        const num = matrix[row][column];

        if (num === target) {
            return true;
        }

        if (num > target) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    return false;
};