/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    if (n === 1) return [[1]];
    let counter = 1;
    let direction = 1;
    const matrix = [];
    let currentRow = 0;
    let currentColumn = 0;
    
    for (let row = 0; row < n; row++) {
        matrix[row] = [];
        for(let column = 0; column < n; column++) {
            matrix[row][column] = 0;
        }
    }
            
    while (counter <= Math.pow(n,2)) {
        if (direction === 1) {
            while (currentColumn < n && matrix[currentRow][currentColumn] === 0) {
                matrix[currentRow][currentColumn] = counter;
                currentColumn++;
                counter++;
            }
            direction = 2;
            currentColumn -= 1;
            currentRow += 1
        }
                
        if (direction === 2) {
            while (currentRow < n && matrix[currentRow][currentColumn] === 0) {
                matrix[currentRow][currentColumn] = counter;
                currentRow++;
                counter++;
            }
            direction = 3;
            currentColumn -= 1;
            currentRow -= 1;
        }
        
        if (direction === 3) {
            while (currentColumn >= 0 && matrix[currentRow][currentColumn] === 0) {
                matrix[currentRow][currentColumn] = counter;
                currentColumn--;
                counter++;
            }
            direction = 4;
            currentColumn += 1;
            currentRow -= 1;
        }
        
        if (direction === 4) {
            while (matrix[currentRow][currentColumn] === 0) {
                matrix[currentRow][currentColumn] = counter;
                currentRow--;
                counter++;
            }
            direction = 1;
            currentRow++;
            currentColumn++;
        }
    }
    
    return matrix;
};