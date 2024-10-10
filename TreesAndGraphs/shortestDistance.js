var shortestDistance = function(maze, start, destination) {
    const m = maze.length, n = maze[0].length;
    // Right, Left, Down, Up
    const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]]; 
    // [row, col, distance]
    const queue = [[start[0], start[1], 0]]; 
    // Store minimum distance
    const visited = Array.from({ length: m }, () => Array(n).fill(Infinity)); 
    visited[start[0]][start[1]] = 0;
    
    while (queue.length > 0) {
        const [row, col, dist] = queue.shift();
        
        // Check all 4 possible directions
        for (const [dx, dy] of directions) {
            let newRow = row
            let newCol = col
            let newDist = dist;
            
            // Roll the ball until it hits a wall
            while (
                newRow + dx >= 0 && 
                newRow + dx < m && 
                newCol + dy >= 0 && 
                newCol + dy < n && 
                maze[newRow + dx][newCol + dy] === 0
            ) {
                newRow += dx;
                newCol += dy;
                newDist++;
            }
            
            // If we find a shorter path to (newRow, newCol), explore it
            if (newDist < visited[newRow][newCol]) {
                visited[newRow][newCol] = newDist;
                queue.push([newRow, newCol, newDist]);
            }
        }
    }

    // Check the distance to the destination
    const [destRow, destCol] = destination;
    return visited[destRow][destCol] === Infinity ? -1 : visited[destRow][destCol];
};