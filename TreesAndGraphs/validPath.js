var validPath = function(n, edges, source, destination) {
    if (source === destination) return true;

    const graph = getGraph();
    let pathFound = false;

    const seen = new Set();
    seen.add(source);
    
    dfs(source);

    return pathFound;

    function dfs(start) {
        if (pathFound) return;
        
        for (const neighbor of graph.get(start)) {
            if (!seen.has(neighbor)) {
                if (neighbor === destination) {
                    pathFound = true;
                    return;
                }

                seen.add(neighbor);
                dfs(neighbor);
            }
        }
    }

    function getGraph() {
        const graph = new Map();

        for (let i = 0; i < n; i++) {
            graph.set(i, []);
        }

        for (const [start, end] of edges) {
            graph.get(start).push(end);
            graph.get(end).push(start);
        }

        return graph;
    }
};

function main() {
    console.log(validPath(3, [[0,1],[1,2],[2,0]], 0, 2));
    console.log(validPath(6, [[0,1],[0,2],[3,5],[5,4],[4,3]], 0, 5));
    console.log(validPath(1, [], 0, 0));
    console.log(validPath(10, [[4,3],[1,4],[4,8],[1,7],[6,4],[4,2],[7,4],[4,0],[0,9],[5,4]], 5, 9));
}

main();