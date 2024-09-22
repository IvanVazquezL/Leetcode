var maximumDetonation = function(bombs) {
    const numBombs = bombs.length;
    const graph = getGraph();

    let answer = 0;

    for (let bomb = 0; bomb < numBombs; bomb++) {
        const visited = new Set();
        const count = dfs(bomb, visited);
        answer = Math.max(answer, count);
    }

    return answer;

    function dfs(bomb, visited) {
        visited.add(bomb);
        let count = 1;
    
        for (const neighbor of graph.get(bomb) || []) {
            if (!visited.has(neighbor)) {
                count += dfs(neighbor, visited);
            }
        }

        return count;
    }

    function getGraph() {
        const graph = new Map();

        for (let bomb1 = 0; bomb1 < numBombs; bomb1++) {
            for (let bomb2 = 0; bomb2 < numBombs; bomb2++) {
                if (bomb1 === bomb2) continue;

                const x1 = bombs[bomb1][0];
                const y1 = bombs[bomb1][1];
                const radiusBomb1 = bombs[bomb1][2];

                const x2 = bombs[bomb2][0];
                const y2 = bombs[bomb2][1];

                const distanceFromBomb1ToBomb2 = Math.sqrt(Math.pow(x1 - x2, 2) +
                    Math.pow(y1 - y2, 2)); 

                //  Create a path from bomb1 
                //  to bomb2 if bomb1 can detonate bomb2
                if (radiusBomb1 >= distanceFromBomb1ToBomb2) {
                    if (!graph.has(bomb1)) {
                        graph.set(bomb1, []);
                    }

                    graph.get(bomb1).push(bomb2);
                }
            }
        }
        return graph;
    }
};

function main() {
    console.log(maximumDetonation([[2,1,3],[6,1,4]]));
}

main();