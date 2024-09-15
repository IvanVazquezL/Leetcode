var findCircleNum = function(isConnected) {
    const graph = getGraph(isConnected);
    let provinces = 0;
    const seen = new Set();

    for (let i = 0; i < isConnected.length; i++) {
        if (!seen.has(i)) {
            provinces++;
            seen.add(i);
            dfs(i);
        }
    }

    return provinces;

    function dfs(node) {
        for (const neighbor of graph.get(node)) {
            if (!seen.has(neighbor)) {
                seen.add(neighbor);
                dfs(neighbor);
            }
        }
    }
};

function getGraph(isConnected) {
    const numRows = isConnected.length;
    const numColumns = isConnected[0].length;
    const graph = new Map();

    for (let i = 0; i < numRows; i++) {
        for (let j = 0; j < numColumns; j++) {
            if (isConnected[i][j] === 1 && i !== j) {
                if (!graph.has(i)) {
                    graph.set(i, []);
                }
                graph.get(i).push(j);
            }
        }
    }

    for (let i = 0; i < numRows; i++) {
        if (!graph.has(i)) {
            graph.set(i,[]);
        }
    }

    return graph;
}

function main() {
    console.log(findCircleNum([[1,1,0],[1,1,0],[0,0,1]]));
    console.log(findCircleNum([[1,0,0],[0,1,0],[0,0,1]]))
}

main();