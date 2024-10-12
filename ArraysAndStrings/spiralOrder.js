/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    let m = matrix.length;     
    let n = matrix[0].length;  
    let direction = 1;         
    let i = 0;
    let j = -1;         
    const output = [];         

    while (m * n > 0) {
        // Move horizontally
        for (let step = 0; step < n; step++) {
            j += direction;
            output.push(matrix[i][j]);
        }
        m -= 1; // Decrease the number of steps for vertical movement

        // Move vertically
        for (let step = 0; step < m; step++) {
            i += direction;
            output.push(matrix[i][j]);
        }
        n -= 1; // Decrease the number of steps for horizontal movement

        // Change direction (flip)
        direction *= -1;
    }

    return output;
};
