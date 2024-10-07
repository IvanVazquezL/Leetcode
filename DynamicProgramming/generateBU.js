var generate = function(numRows) {
    const triangle = []; // Initialize an empty array to hold the rows of Pascal's triangle

    for (let row = 0; row < numRows; row++) {
        // Create a new row with the appropriate length, filled with zeros
        const newRow = new Array(row + 1).fill(0);
        // Set the first and last elements to 1
        newRow[0] = 1;
        newRow[row] = 1; 

        for (let j = 1; j < row; j++) {
            newRow[j] = triangle[row - 1][j - 1] + triangle[row - 1][j];
        }

        triangle.push(newRow);
    }

    return triangle;
};