var equalPairs = function(grid) {
    const rows = new Map();
    let answer = 0;

    for (const row of grid) {
        const concatenatedRow = row.join('-');
        rows.set(concatenatedRow, (rows.get(concatenatedRow) || 0) + 1);
    }

    for (let i = 0; i < grid.length; i++) {
        let concatenatedColumn = "";
        for (let j = 0; j < grid.length; j++) {
            concatenatedColumn += grid[j][i] + 
                (j === grid.length - 1 ? "" : "-");
        }
        
        if (rows.has(concatenatedColumn)) answer += rows.get(concatenatedColumn);
    }



    return answer;
};



console.log(equalPairs([[3,2,1],[1,7,6],[2,7,7]]));
console.log(equalPairs([[3,1,2,2],[1,4,4,5],[2,4,2,2],[2,4,2,2]]));
console.log(equalPairs([[11,1],[1,11]]));