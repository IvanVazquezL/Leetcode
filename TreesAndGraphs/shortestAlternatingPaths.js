var shortestAlternatingPaths = function(n, redEdges, blueEdges) {
    const RED = 0;
    const BLUE = 1;

    const graph = new Map();
    graph.set(RED, new Map());
    graph.set(BLUE, new Map());
    addToGraph(RED, redEdges);
    addToGraph(BLUE, blueEdges);

    const answer = new Array(n).fill(Infinity);
    const queue = [[0, RED],[0, BLUE]];
    const seen = [];

    for (let i = 0; i < n; i++) {
        seen.push(new Array(2).fill(false));
    }

    console.log(graph);
    console.log(seen);

    seen[0][RED] = true;
    seen[0][BLUE] = true;

    let steps = 0;

    while (queue.length) {
        const levelSize = queue.length;

        for (let i = 0; i < levelSize; i++) {
            const [node, color] = queue.shift();
            answer[node] = Math.min(answer[node], steps);

            for (const neighbor of graph.get(color).get(node)) {
                if (!seen[neighbor][1 - color]) {
                    seen[neighbor][1 - color] = true;
                    queue.push([neighbor, 1 - color]);
                }
            }
        }
        steps++;
    }

    for (let i = 0; i < n; i++) {
        if (answer[i] === Infinity) {
            answer[i] = -1;
        }
    }

    return answer;

    function addToGraph(color, edges) {
        for (let i = 0; i < n; i++) {
            graph.get(color).set(i, []);
        }

        for (const [start, destination] of edges) {
            graph.get(color).get(start).push(destination);
        }
    }
}

function main() {
    console.log(shortestAlternatingPaths(3, [[0,1],[1,2]], []));
    //console.log(shortestAlternatingPaths(3, [[0,1]], [[2,1]]));
}

main();