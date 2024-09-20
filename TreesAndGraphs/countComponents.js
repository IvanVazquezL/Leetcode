/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var countComponents = function(n, edges) {
    const graph = getGraph();

    let components = 0;
    const seen = new Set();

    for (let i = 0; i < n; i++) {
        if (!seen.has(i)) {
            components++;
            seen.add(i);
            dfs(i);
        }
    }

    return components;

    function dfs(node) {
        for (const neighbor of graph.get(node)) {
            if (!seen.has(neighbor)) {
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
    console.log(countComponents(5, [[0,1],[1,2],[3,4]]));
    console.log(countComponents(5, [[0,1],[1,2],[2,3],[3,4]]));
}

main();