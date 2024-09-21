var reachableNodes = function(n, edges, restricted) {
    const graph = getGraph();
    const seen = new Set(restricted);
    seen.add(0);
    let reachable = 1;

    dfs(0);

    return reachable;

    function dfs(node) {
        for (const neighbor of graph.get(node)) {
            if (!seen.has(neighbor)) {
                reachable++;
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

        for (const [source, destination] of edges) {
            graph.get(source).push(destination);
            graph.get(destination).push(source);
        }

        return graph;
    }
};

function main() {
    console.log(reachableNodes(7, [[0,1],[1,2],[3,1],[4,0],[0,5],[5,6]], [4,5]));
    console.log(reachableNodes(7, [[0,1],[0,2],[0,5],[0,4],[3,2],[6,5]], [4,2,1]));
}

main();