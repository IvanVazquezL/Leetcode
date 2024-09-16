var minReorder = function(n, connections) {
    const roads = new Set();
    const graph = getGraph();
    let minEdgesToChange = 0;
    const seen = new Set();
    seen.add(0);

    dfs(0);

    return minEdgesToChange;

    function dfs(source) {
        for (const destination of graph.get(source)) {
            if (!seen.has(destination)) {
                if (roads.has(convertToHash(source, destination))) {
                    minEdgesToChange++;
                }

                seen.add(destination);
                dfs(destination);
            }
        }
    }

    function getGraph() {
        const graph = new Map();

        for (let i = 0; i < n; i++) {
            graph.set(i, []);
        }

        for (const [source, destination] of connections) {
            graph.get(source).push(destination);
            graph.get(destination).push(source);
            roads.add(convertToHash(source, destination));
        }

        return graph;
    }

    function convertToHash(source, destionation) {
        return `${source},${destionation}`;
    }
};

function main() {
    //console.log(minReorder(6, [[0,1],[1,3],[2,3],[4,0],[4,5]]));
    //console.log(minReorder(5, [[1,0],[1,2],[3,2],[3,4]]));
    //console.log(minReorder(3, [[1,0],[2,0]]));
    console.log(minReorder(4, [[0,1],[2,0],[3,2]]));
}

main();