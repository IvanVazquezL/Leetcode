/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
    const answer = new Array(n)
        .fill(0)
        .map(() => new Array(n).fill(0));
    const directions = [
        [0, 1],  // Right
        [1, 0],  // Down
        [0, -1], // Left
        [-1, 0], // Up
    ];
    let direction = 0;
    let row = 0;
    let column = 0;
    let currentNumber = 1;
    
    while (currentNumber <= n * n) {
        answer[row][column] = currentNumber++;
        
        let newRow = (row + (directions[direction][0] % n) + n) % n;
        let newColumn = (column + (directions[direction][1] % n) + n) % n;
        
        // Change direction if the next cell is non-zero
        if (answer[newRow][newColumn] != 0) {
            direction = (direction + 1) % 4;
        }
        row += directions[direction][0];
        column += directions[direction][1];
    }
    return answer;
};
